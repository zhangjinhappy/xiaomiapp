const _ = require("..")
const redis = require("../cache/index")
/* GET home page. */
_.router.get('/info',_.interce.Verification , async(req, res, next)=> {
  var id = JSON.parse(req.unparams).id
  var list = (await _.mysql.query(_.config.sql.shop.homeinfo,[id])).data
  var data = _.utils.public_encrypt(list)
  redis.Set(req.url,list)
  res.json({
    status:_.config.dev.api.success,
    data: data
  })
});

/* GET home detail page. */
_.router.get('/shopinfo',_.interce.Verification , async(req, res, next)=> {
  var id = JSON.parse(req.unparams).id
  var list = (await _.mysql.query(_.config.sql.shop.homeinfo,[id])).data
  var shoplist =(await _.mysql.query(_.config.sql.shop.shopsider,[id])).data
     list = list.concat(shoplist)
  var data = _.utils.public_encrypt(list)
  res.json({
    status:_.config.dev.api.success,
    data: data
  })
});
/* GET home page list. */
_.router.get('/homelist',_.interce.Verification, async(req, res, next)=> {
  var parmas = JSON.parse(req.unparams)
  let pages = 0,totalPage = 15,startPage=0;
  parmas.hasOwnProperty("page")? pages = parmas.page : pages;
     startPage = parseInt(pages*totalPage)
  var data = (await _.mysql.query(_.config.sql.shop.list,[startPage,totalPage])).data
  redis.Set(req.url,data)
  res.json({
    status:_.config.dev.api.success,
    data: _.utils.public_encrypt(data)
  })
});


/****
 * 分页功能
 */
_.router.get('/index',_.interce.Verification, async(req, res, next)=> {
    var parmas = JSON.parse(req.unparams)
    let pages = 0,totalPage = 15,startPage=0;
    parmas.hasOwnProperty("page")? pages = parmas.page : pages;
       startPage = parseInt(pages*totalPage)
    var data = await _.mysql.query(_.config.sql.shop.index,[startPage,totalPage])
    redis.Set(req.url,data.data)
    res.json({
      status:_.config.dev.api.success,
      data: _.utils.public_encrypt(data)
    })
  });

module.exports = _.router;