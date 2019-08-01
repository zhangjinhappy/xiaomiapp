const _ = require("..")
const redis = require("../cache/index")
/* GET home page. */
_.router.get('/shopindex',_.interce.Verification , async(req, res, next)=> {
    var parmas = JSON.parse(req.unparams)
    let car = 0,totalPage = 15,startPage=0;
     parmas.hasOwnProperty("page")? car = parmas.page : car;
       startPage = parseInt(car*totalPage)
  var list = (await _.mysql.query(_.config.sql.cart.index,[startPage,totalPage])).data
  if(list ==="数据不存在"){
    var data = _.utils.public_encrypt({list})
    res.json({
      status:_.config.dev.api.success,
      data: data
    })
  }else{
      var data = _.utils.public_encrypt(list)
      // redis.Set(req.url,list)
      res.json({
        status:_.config.dev.api.success,
        data: data
      })
  }
});

/* GET car page list. */
_.router.get('/addcar',_.interce.Verification, async(req, res, next)=> {
  var id = JSON.parse(req.unparams).id
  var data = (await _.mysql.query(_.config.sql.shop.homeinfo,[id])).data
  var shop_title = data[0].shop_title;
  var shop_newprice = data[0].shop_newprice;
  var shop_number = 1;
  var shop_img = data[0].shop_img
  var list = await _.mysql.query(_.config.sql.cart.addcar,[shop_title,shop_newprice,shop_number,shop_img])
  if(list.status==200){
    res.json({
      status:_.config.dev.api.success,
      data: _.utils.public_encrypt({msg:'OK',data})
    })
  }else{
    res.json({
      status:_.config.dev.api.success,
      data: _.utils.public_encrypt({msg:'jia ru shi bai'})
    })
  }

});

module.exports = _.router;