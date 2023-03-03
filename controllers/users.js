const bcryptjs= require('bcryptjs')

const db= require('../utlis/db')






function createuser(user){

    var salt = bcryptjs.genSaltSync(10);
    var hash = bcryptjs.hashSync(user.password, salt);
    
  
    
 return db.execute(" insert into users (username,email,password) values(?,?,?) ",[user.username,user.email,hash] );
   
   



}

function login(user){
    var salt = bcryptjs.genSaltSync(10);
    var hash = bcryptjs.hashSync(user.password, salt);
   var d= bcryptjs.compare(user.password,hash)
if(!d){
    console.log(d)
}


return db.execute(" Select * From users where email=?,password",[user.email,hash] );
}







function getallusers(user){
    return db.execute(" Select * From users" );


}



module.exports={createuser,getallusers}