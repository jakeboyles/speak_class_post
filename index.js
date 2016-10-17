const say = require('say');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const client = require('twilio')('AC645a219ee3e2fb800e62b262ecdaada4', '#');
const Slack = require('node-slack');
const slack = new Slack("https://hooks.slack.com/services/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");

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/doSomething',(req, res) => {
	var string = `${req.body.name} is going to drink some ${req.body.restaurant} for ${req.body.meal}`;
    
    say.speak(string);

    client.sendMessage({
        to:'+15135932378', 
        from: '+15132808426', 
        body: string,
      });
    
    slack.send({
        text: string,
      });

    res.json({msg: 'Thanks for talking to me!'});
});

app.listen(3005,function() {
  console.log('Example app listening on port 3005!');
});