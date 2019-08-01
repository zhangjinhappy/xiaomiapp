// mysql数据库基本操作基础类
const mysql=require("mysql")
const config=require("../config")
class DB {
     constructor(){
         this.db=mysql.createConnection(config.mysql);
         this.db.connect();
     }
    //  query(sql='',par = []){
    //     this.db.query(sql,par,function(error,results,fields){
    //         if(error) throw error;
    //         console.log('The solution is:',results);
    //     })
    //  }
//   执行数据库操作
    query(sql='',par=[]){
        return new Promise((resolve,reject) =>{
        this.db.query(sql,par,function(error,results,fields){
            // console.log(results)
            if(error) reject (error);
            results.length==0?resolve({
             status:config.dev.api.error,
             data:"数据不存在"
            }):resolve({
              status:config.dev.api.success,
              data: results 
            })
            // resolve(results)
            // console.log('The solution is:',results);
        })})
        }

}

module.exports=new DB();