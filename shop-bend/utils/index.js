const fs =require('fs');
const path=require('path');
const config=require('../config');
const NodeRSA=require("node-rsa");
class Utils{
    constructor(){
        //  私钥
    this.rsa_private_key=this.ReadFile(this.GetRsaPath(config.Rsa.privateKey))
        //  公钥 
    this.rsa_public_key=this.ReadFile(this.GetRsaPath(config.Rsa.publicKey)) 
     
    this.key= new NodeRSA(this.rsa_private_key)
     }
     //前端：使用私钥进行加密
     encrypt(text){
      return (new NodeRSA(this.rsa_private_key)).encryptPrivate(text,'base64')
     }
    //后端：使用公钥进行解密
     decrypted(text){
         return (new NodeRSA(this.rsa_public_key)).decryptPublic(text,'utf-8')
     }
    //后端：使用公钥加密json数据给前端
     public_encrypt(text){
         return (new NodeRSA(this.rsa_public_key)).encrypt(text,'base64')
     }
   //前端：使用私钥解密后端发来的json数据
     private_decrypted(text){
        return (new NodeRSA(this.rsa_private_key)).decrypt(text,'utf-8')
    }

    // 同步读取文件
    ReadFile(path){
        return fs.readFileSync(path).toString('utf-8')
    }
    //获取RSA文件地址
    GetRsaPath(url){
        return path.join(__dirname,url)
    }
}

module.exports=new Utils()