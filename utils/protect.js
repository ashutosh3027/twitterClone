const { db } = require("../db");

module.exports = (req, res, next)=>{
    const {user_id} = req.body;
    const sql = `SELECT * FROM USER WHERE user_id='${user_id}'`;
    db.query(sql, (err, result)=>{
          if(err){
            return res.status(500).json({
                status:"fail",
                message:"server error",
                err
            })
          }
          if(result[0].role==='Producer'){
             next();
          }
          else{
            return res.status(401).json({
                status:"fail",
                message:"Unathourise"
            })
          }

    })
}