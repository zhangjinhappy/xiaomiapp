const config ={
    dev:{
        port:3000,
        ipAddress:"127.0.0.1",
        api:{
            success:200, //网络请求成功
            error:404,   //网络请求失败
            CodeError:500  // 服务器内部错误及异常          
         }
    },
    Rsa:{
        privateKey:"../config/rsa_private_key.pem",
        publicKey: "../config/rsa_public_key.pem"
    },
    mysql:{
        host:'localhost',
        user:'root',
        password:"",
        database:"shop"   
    },
    redis:{
        host:"127.0.0.1",
        port:"6379",
        timeout: 60
    },
    sql:{
        shop:{
              info:'select * from shoptext where id =?',
              index:'select * from shoptext ORDER BY id DESC limit ?,?'
        },
        cart:{

        },
        order:{

        },
        user:{

        }
    }
}
module.exports = config