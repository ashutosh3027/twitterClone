const router = require('express').Router(); 
const { login, signup, getAllUsers, getUserByRole,getSubscribers} = require("./../Controller/userController");
/**
 * For login if it is required to implement.
 * 
 */
router.route('/login').post(login);
/****************************************
for creating user wheather it is producer 
or subscriber
*****************************************/
router.route('/signup').post(signup) 
router.route('/').get(getAllUsers)
router.route('/subscribers').get(getSubscribers);
router.route('/role').get(getUserByRole);
module.exports = router  