const say = require('say');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/talkToMe',(req, res) => {
    say.speak(`${req.body.name} says ${req.body.text}`);
    res.json({msg: 'Thanks for talking to me!'});
});

app.listen(3005,function() {
  console.log('Example app listening on port 3005!');
});