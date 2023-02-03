const router = require("express").Router();
const {subscribeUser} = require("./../Controller/subscribeController")
router.route('/').post(subscribeUser);
module.exports = router