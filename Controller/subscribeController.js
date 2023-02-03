const { db } = require("../db");

const subscribeUser = (req, res)=>{
 try {
    const {user_id_follow, user_id_following}= req.body;
    const sql = `INSERT INTO Subscribe (user_id_follow, user_id_following, status) VALUES ('${user_id_follow}','${user_id_following}', 1)`
    db.query(sql, (err, result)=>{
        if(err){
            return res.status(500).json({
                status:"fail",
                message:"server error",
                err
            })
        }
        return res.status(200).json({
            status:"success",
            message:"Sucessfully subscribed"
        })
    })
 } catch (error) {
    console.log(error);
    return res.status(500).json({
        status:"fail",
        message:"server error",
        error
    })
 }
}
module.exports={subscribeUser}