const express = require('express');
const { randomRegisterController,randomLoginController } = require('../controllers/randomAuthController');

const router = express.Router();

router.post('/register',randomRegisterController);
router.post('/login',randomLoginController);


module.exports=router;