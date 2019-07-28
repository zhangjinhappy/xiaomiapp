const redis = require("redis")
const config=require("../config");
class Redis {
    constructor(){
        this.client=redis.createClient(config.redis.port,config.redis.host);
        this.client.on('error',function(err){
            console.log("redis连接失败："+err)
        })
       
    }
    Set(key,value){
        this.client.set(key,JSON.stringify(value),redis.print)
    }
    Get(key){
        return new Promise((resolve,reject)=>{
           this.client.expire(key,config.redis.timeout);
           this.client.get(key,function(error,result){
                if(error) reject(error)
                resolve (JSON.parse(result))
             })
        })
      
    }
}
module.exports = new Redis()