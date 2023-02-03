const { hashPassword } = require("./../utils/hashPassword");
const { db } = require("./../db");
const login = () => {};
const signup = async (req, res) => {
  try {
    const { user_name, email, password, role } = req.body;
    const hashedPassword = await hashPassword(password);
    db.query(
      `INSERT INTO USER (user_name, email, password, role) VALUES ('${user_name}', '${email}', '${hashedPassword}', '${role}')`,
      (err, result) => {
        if (err) {
          return res.status(404).json({
            status: "error",
            message: "Server error!",
            err
          });
        }
        return res.status(200).json({
          status: "success",
          result,
         
        });
      }
    );
  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: "Server error!",
      error,
    });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const sql = `SELECT * FROM USER`;
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
const getUserByRole = (req, res) => {
  try {
    const { role } = req.body;
    const sql = `SELECT * from USER WHERE role='${role}'`;
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
const getSubscribers = (req, res) => {
  try {
    const id = req.body.id;
    const sql = `SELECT user_id, user_name, email, role FROM USER WHERE user_id in (SELECT user_id_follow FROM SUBSCRIBE WHERE user_id_following='${id}' and status=1)`;
   //  console.log(sql)
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
module.exports = { login, signup, getAllUsers, getUserByRole, getSubscribers};
