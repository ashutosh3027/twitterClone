const execSync = require('child_process').execSync;
module.exports = ()=>{
    let cmdLine = "mysql --user=root --password=your-password < scriptToPopulateWithSomeDummyData.sql";
    const data =execSync(cmdLine);
    console.log(data)
}
