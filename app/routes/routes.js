const express = require('express')
const router = express.Router()
// var bodyParser = require('body-parser');
// var expressValidator = require('express-validator')

// Middleware
// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(expressValidator());


// Route index page & latest version
router.get('/', function (req, res) {
  res.render('index', { 
  })
})


// Add versions
require('./demos/version-one')(router);
require('./demos/version-two')(router);
require('./demos/version-three')(router);
require('./demos/version-four')(router);
require('./demos/version-five')(router);
require('./demos/version-six')(router);
module.exports = router
