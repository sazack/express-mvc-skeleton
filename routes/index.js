/**
 * Created by sazack on 8/10/17.
 */

//contains API routes for your project

const express  = require('express')
let router = express.Router();
let user = require('../controllers/user.controller');
const mw = require('../middlewares/response.middleware');

router.post('/sample',user.collectForUsers,mw.respond,mw.error);

module.exports = router

