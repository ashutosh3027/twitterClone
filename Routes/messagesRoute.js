
const router=  require("express").Router();
const protect = require('./../utils/protect')
const {getAllMessages, getMessageProduceByUserId, getMessagesReceivedByUserId, createMessage} = require("./../Controller/MessageController");

/*********************************************************************
 * Protect is used to protect from creating messages by subscriber.
 * As this route is only allowed for Producers
 *********************************************************************/
router.route('/').get(getAllMessages).post(protect, createMessage)
router.route('/:user_id').get(getMessagesReceivedByUserId);
router.route('/my/:user_id').get(getMessageProduceByUserId);
module.exports = router;