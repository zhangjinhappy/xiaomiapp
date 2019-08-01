const _ = require("..")
const redis = require("../cache/index")
/* GET login page. */
_.router.post('/login',_.interce.Verification , async(req, res, next)=> {
  var user_name = JSON.parse(req.unparams).name
  var user_pwd = JSON.parse(req.unparams).pwd
  var list = (await _.mysql.query(_.config.sql.user.user1,[user_name,user_pwd])).data
  if(list==="数据不存在"){
    var data = _.utils.public_encrypt({data:list})
    res.json({
      status:_.config.dev.api.success,
      data: data
    })
  }else{
    var data = _.utils.public_encrypt(list)
    res.json({
      status:_.config.dev.api.success,
      data: data
    })
  }
});

/* GET regisrer page. */
_.router.post('/regisrer',_.interce.Verification , async(req, res, next)=> {
  var user_name = JSON.parse(req.unparams).name
  var user_pwd = JSON.parse(req.unparams).pwd 
  var user_nike = JSON.parse(req.unparams).user_nike 
  var list = await _.mysql.query(_.config.sql.user.user,[user_name])
  if(list.status == 404){
        var usersql = await _.mysql.query(_.config.sql.user.adduser,[user_name,user_nike,user_pwd])
        if(usersql.status==200){
        var usernameId = (await _.mysql.query(_.config.sql.user.user,[user_name])).data
        console.log(usernameId)
        var data = _.utils.public_encrypt(usernameId)
        res.json({
                status:_.config.dev.api.success,
                data: data
                })
        }else{
            var data = _.utils.public_encrypt({msg:'注册失败'})
            res.json({
                status:_.config.dev.api.success,
                data: data
                })  
        }
  }
  else{
    var data = _.utils.public_encrypt({msg:'ni yi zhu ce guo le'})
    res.json({
        status:_.config.dev.api.success,
        data: data
        })  
  }
  
});


module.exports = _.router;