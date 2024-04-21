var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Get biboo taxed',
    user: 'Pebble',
    added: new Date(),
  },
  {
    text: 'Any aloupeeps in chat?',
    user: 'Millie',
    added: new Date(),
  },

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = router;