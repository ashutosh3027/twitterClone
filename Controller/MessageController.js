const { db } = require("./../db");
const getAllMessages = async (req, res) => {
  try {
    const sql = "SELECT * FROM MESSAGE";
    // console.log(sql);
    db.query(sql, (err, result) => {
      console.log("test", err, result);
      if (err) {
        return res.status(404).json({
          status: "error",
          message: "Server error!",
          err,
        });
      }
      return res.status(200).json({
        status: "success",
        result,
      });
    });
  } catch (error) {
    // console.log(error);
    return res.status(404).json({
      status: "error",
      message: "Server error!",
      error,
    });
  }
};
const createMessage = (req, res) => {
  try {
    const {subject, content, user_id} = req.body
    const sql = `INSERT INTO MESSAGE (subject, content, user_id) VALUES ('${subject}', '${content}', '${user_id}')`;
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(404).json({
          status: "error",
          message: "Server error!",
          err,
        });
      }
      return res.status(200).json({
        status: "success",
        result,
      });
    });
  } catch (error) {
    // console.log(error);
    return res.status(404).json({
      status: "error",
      message: "Server error!",
      error,
    });
  }
};

const getMessageProduceByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const sql = `SELECT * FROM MESSAGE WHERE user_id='${user_id}'`;
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(404).json({
          status: "error",
          message: "Server error!",
          err,
        });
      }
      return res.status(200).json({
        status: "success",
        result,
      });
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: "Server error!",
      error,
    });
  }
};
const getMessagesReceivedByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const sql = `SELECT * FROM MESSAGE WHERE user_id in (SELECT user_id_following FROM SUBSCRIBE WHERE user_id_follow='${user_id}' and status=1)`;
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(404).json({
          status: "error",
          message: "Server error!",
          err,
        });
      }
      return res.status(200).json({
        status: "success",
        result,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      status: "error",
      message: "Server error!",
      error,
    });
  }
};
module.exports = {
  getAllMessages,
  getMessageProduceByUserId,
  getMessagesReceivedByUserId,
  createMessage,
};
