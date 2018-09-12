var express = require('express');
var router = express.Router();
const redis = require('redis')

// const client = redis.createClient(6379, 'localhost')
const client = redis.createClient(6379, 'service-string-redis')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post', function(req, res, next) {
  var data = req.param('data');
  if(data) {
    client.set('data', data);
    res.send('{"S":"'+data+'"}');
  } else {
    res.send('{"errcode":"100"}');
  }
  
});

router.post('/getredis', function(req, res, next) {
  client.get('data', function(err, value){
    if(value) {
      res.send('{"RS":"'+value+'"}');
    } else {
      res.send('{"errcode":"200"}');
    }
  });
  
  
});

module.exports = router;
