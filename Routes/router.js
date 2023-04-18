const express = require('express');

const controller = require('../Controller/loginController');

const router = express();

router.post('/loginPage', controller.registrationController);

router.post('/dashBoard', controller.loginController);

module.exports = router;