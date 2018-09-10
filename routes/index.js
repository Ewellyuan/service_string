var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post', function(req, res, next) {
  var data = req.param('data');
  if(data) {
    res.send('{"S":"'+data+'"}');
  } else {
    res.send('{"errcode":"100"}');
  }
  
});

module.exports = router;
