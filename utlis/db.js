const mysql=require("mysql2");

const pool=mysql.createPool({
    port:process.env.db_port,
    host:process.env.host,
    user:process.env.user,
    database:process.env.database,
    password:""
})

module.exports=pool.promise()