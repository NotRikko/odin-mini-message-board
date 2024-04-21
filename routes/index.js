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

router.post('/new', function(req, res, next) {
  const messageText = req.body.message;
  const messageUser = req.body.user;
  messages.push( {text: messageText, user: messageUser, added: new Date()});
  res.redirect('/')
})

router.post('/redirect', function(req, res, next) {
  res.redirect('/new')
})

module.exports = router;
