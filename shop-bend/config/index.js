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
              homeinfo:'select * from shoptext where Sid =?',
              shopsider:'select * from shopslider where id =?',
              index:'select * from shoptext ORDER BY Sid DESC limit ?,?',
              list:'select * from shop ORDER BY id DESC limit ?,?'
        },
        cart:{
             index:"select * from shopcar ORDER BY id ASC limit ?,?",
             addcar:'insert into shopcar'+'(shop_title,shop_newprice,shop_number,shop_img) values (?,?,?,?)'
        },
        order:{

        },
        user:{
            // shiyisi***********************
            user1:"select * from users where user_name =? and user_pwd =?",
            //shiyishi***********************
            user:"select * from users where user_name =?",
            adduser:'insert into users'+'(user_name,user_nike,user_pwd) values (?,?,?)'
        }
    }
}
module.exports = config