const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
 const clc = require('cli-color'); // coolest package for colors in console

// global variables
var FunStuffToWork = true // put this to false to disable cool console spam





// using post request but u can replace to get 
// best api requester - https://reqbin.com/ ❤️
app.post('/make-code/:code', function (req, res) {  
  
    
  code = req.params.code
    var codes = JSON.parse(fs.readFileSync(`${__dirname}/codes.json`));
    var codes = JSON.parse(fs.readFileSync(`${__dirname}/codes.json`));
  const d = new Date();

    codes[code]= 
    // users json
    { 

    CoolGuy: true,
    MadeByReksely: true,
      // lets add some info when code was made
     FullDate: d,
    CurrentYear: d.getFullYear(),
      CurrentMonth: d.getMonth() + 1, // it starts from 0 so have to add 1:)
      CurrentDayOfMonth: d.getDate()
   

    }
    fs.writeFileSync(`${__dirname}/codes.json`, JSON.stringify(codes, null, 4) );
		res.send(code)


  

});

function RandomizeCode() {


          var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var LengthOfCode = 35 // put length of code lmao
  
   for ( var i = 0; i < LengthOfCode; i++ ) {
  text += possible.charAt(Math.floor(Math.random() * possible.length));

   }

  return text;
  
}

// get random code
app.get('/get-code', function (req, res) {  





  
  code = RandomizeCode()
    var codes = JSON.parse(fs.readFileSync(`${__dirname}/codes.json`));
    var codes = JSON.parse(fs.readFileSync(`${__dirname}/codes.json`));
  const d = new Date();

// get random for cool guy thing 
  var variants = [true, false]; // things to random
var boolean = variants[Math.floor(Math.random()*variants.length)];  // randomize them

     // make user json
    codes[code]= 
 
    { 

    CoolGuy: boolean,
    MadeByReksely: true,
      // lets add some info when code was made
     FullDate: d,
    CurrentYear: d.getFullYear(),
      CurrentMonth: d.getMonth() + 1, // it starts from 0 so have to add 1:)
      CurrentDayOfMonth: d.getDate()
   

    }
  // save this to json
    fs.writeFileSync(`${__dirname}/codes.json`, JSON.stringify(codes, null, 4) );
		res.send(code)


  

});


// load user info
app.post('/code-info/:code', function (req, res) {  
var code = req.params.code
 
// Im not sure if that even needed lol

  /*
How to use it?(for stupid ppl) 
  
1. Go here - https://reqbin.com/
2. Paste your link with adding /code-info/CODEOFUSER
3. Add Auth Header(  ex. https://media.discordapp.net/attachments/714099221674065970/969006808159105094/unknown.png?width=646&height=471 )
4. Send Request!

How to make request in c# for getting user info?

var code = Lol
    RestClient client = new RestClient($"https://YOURDOMAIN/code-info/{code}");
            RestRequest request = new RestRequest(Method.POST);
            request.AddHeader("authorization", "RekselyIsCoolAndSmart");
        

            var response = client.Execute(request).Content;

MessageBox.Show(response);


For other langs use google😊

*/
  var AuthorizationCode = "RekselyIsCoolAndSmart"
if(req.headers.authorization == AuthorizationCode) {
     const info = require(`${__dirname}/codes.json`);

  // check if key exists
if(!info.hasOwnProperty(code)){
    res.send("There is no user with that code")
  }
  else {
    res.json(info[code])
  }

  
}
  // if no auth code or auth code is wrong
  else {
    res.send("Please write valid Authorization header!")
  }


  
 

  
  

});


app.get('/', function (req, res) {  
  
  res.send("You need to add /get-code to your link for this to generate code😘")

});

// addin sleep cuz js is too stupid to add themselves



async function SlavaUkraine() {

 Array.from({ length: 20222 }, (x, i) => {

     console.log(clc.blue("Slava ") + clc.yellowBright("Ukraini") )
   
   

  
});

  console.clear()

    console.log(clc.blue("I love ") + clc.yellowBright("you<3") )


  
}

 


app.listen(process.env.port, () => {
console.log(clc.bgBlue("Reksely is very cool") + clc.bgYellowBright("\n#StandWithUkraine") );

  if(FunStuffToWork == true) {
    // wait for spam
setTimeout(function() {
     SlavaUkraine()
}, 10000);
  
  }


});

module.exports = app;
