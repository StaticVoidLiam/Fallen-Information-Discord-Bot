'use strict';
const fs = require("fs");



const express = require('express');
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
  var commands = ["`f!help`", "`f!ping`", "`f!developer`", "`Wanna have Fallen information at you fingertips? Use f!invite!`","`For Character info, type f! and then the name of the character. its case sensitive so careful`"];
  var prefix = "f!";

  if (message.content.startsWith(prefix)) {
    var args = message.content.split(' ').slice(1);
    var allArgs = args.join(' ');
    var cmd = (message.content.split(' ')[0]).substring(prefix.length).toLowerCase();

    if (cmd === "help") {
      message.channel.send("**The Current List Of Commands:**\n " + commands.join("\n "));
  
    }

    else if (cmd === "ping") {
      message.channel.send("Pong! I am online");
   }
   else if(cmd === "developer") {
     message.channel.send("https://repl.it/@FallenDevTeam\nhttps://github.com/liamdonohue\nhttps://repl.it/@liamdonohue");

   }
   else if(cmd === "invite"){
     message.channel.send("https://discord.com/api/oauth2/authorize?client_id=753319047151484958&permissions=0&scope=bot");
   }
  else if(cmd === "barry"){
    
    var data = fs.readFileSync('Info/Characters/Barry.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/barry.png"]});
  }
    else if(cmd === "ryan"){
    
    var data = fs.readFileSync('Info/Characters/Ryan.txt', 'utf8');
    // message.channel.send(data);
    message.channel.send(data, {files: ["Info/Characters/Images/ryan.png"]});

  }
  else if(cmd === "nix"){
    
    var data = fs.readFileSync('Info/Characters/Nix.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/nix.png"]});
  }
  else if (cmd === "bond"){
      var data = fs.readFileSync('Info/Characters/Bond.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/bond.png"]});
  }
  else if (cmd === "shiitake"){
    var data = fs.readFileSync('Info/Characters/Shiitake.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/shiitake.png"]});
  }
  else if (cmd === "saddy"){
      var data = fs.readFileSync('Info/Characters/Saddy.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/saddy.png"]});
  }
   else if (cmd === "scorch"){
      var data = fs.readFileSync('Info/Characters/Scorch.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/scorch.png"]});
  }
  else if(cmd === "aaron"){
      var data = fs.readFileSync('Info/Characters/Aaron.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/na.png"]});
  }
   else if(cmd === "spark"){
      var data = fs.readFileSync('Info/Characters/Spark.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/na.png"]});
  }
     else if(cmd === "bumble"){
      var data = fs.readFileSync('Info/Characters/Bumble.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/na.png"]});
  }
      else if(cmd === "amber"){
      var data = fs.readFileSync('Info/Characters/Amber.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/na.png"]});
  }
      else if(cmd === "ralf"){
      var data = fs.readFileSync('Info/Characters/Ralf.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/na.png"]});
  }
     else if(cmd === "autumn"){
      var data = fs.readFileSync('Info/Characters/Autumn.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/autumn.png"]});
  }
     else if(cmd === "cassandra"){
      var data = fs.readFileSync('Info/Characters/Cassandra.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/na.png"]});
  }
   else if(cmd === "lena"){
      var data = fs.readFileSync('Info/Characters/Lena.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/na.png"]});
  }
   else if(cmd === "alex"){
      var data = fs.readFileSync('Info/Characters/Alex.txt', 'utf8');
     //message.channel.send(data);
     message.channel.send(data, {files: ["Info/Characters/Images/na.png"]});
  }

  else{
    message.channel.send("This Command does not exist. Please use f!help");
  }
  }
});

client.login(process.env.token);
