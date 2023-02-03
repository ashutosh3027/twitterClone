const express = require('express');
const usersRoute = require('./Routes/usersRoute');
const messagesRoute = require('./Routes/messagesRoute')
const subscribeRoute = require('./Routes/subscribeRoute')
const uploadDummyData = require('./utils/uploadDummyData')
const {db}= require('./db.js')
/**********************************************************
 * To Upload Dummy data call below function otherwise 
 * comment it as it is of no use.
 * 
************************************************************/
uploadDummyData();
const app = express();
app.use(express.json());
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/messages',messagesRoute);
app.use('/api/v1/subscribe',subscribeRoute);

const PORT = 8000;

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`)
})

