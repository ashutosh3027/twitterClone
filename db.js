
const mysql = require('mysql');
/*********************************************
*use child module to execute initial script to
* create databse and tables if they not exist
* in mysql server.
**********************************************/
const execSync = require('child_process').execSync;
var cmdLine = "mysql --user=root --password=your-password < ScriptTOCreateDataModel.sql";
const runData = execSync(cmdLine);
console.log(String(runData));


// Create connection
const db = mysql.createConnection({
  host: "localhost", // host of mysql
  user: "root", // username
  password: "your-password", // Keep your password at this place.
  database: "twitterClone",  // database  name 
});


// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
});
module.exports = {db};