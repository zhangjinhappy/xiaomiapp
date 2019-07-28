const config=require('../config');
const cache = require('../cache/index')
const utils=require("./index");
module.exports ={
     // 自定义拦截器拦截作用
    async Verification(req, res, next){
        if(req.headers.hasOwnProperty('token')) {
            if(await cache.Get(req.url)==null){
                req.unparams = utils.decrypted(req.headers.token)
                next();
            }
            else{
                let data = await cache.Get(req.url)
                console.log(data)
                res.json({
                    status: config.dev.api.success, 
                    msg:"缓存读取",
                    data: data
                })
            } 
        } 
        else{
            console.log(await cache.Get(req.url))
                res.json({
                    status: config.dev.api.CodeError,
                    data:"缺少参数，请求头token"
                })
        }
    }

}
