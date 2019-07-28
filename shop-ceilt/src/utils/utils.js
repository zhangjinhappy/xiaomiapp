import config from'../config';
import NodeRSA from 'node-rsa';
export default {
   //前端：使用私钥进行加密
   encrypt (text) {
    return (new NodeRSA(config.rsa_private_key)).encryptPrivate(text,'base64')
   },
   //前端：使用私钥解密后端发来的json数据
   private_decrypted (text) {
    return (new NodeRSA(config.rsa_private_key)).decrypt(text,'utf-8')
   }
}
