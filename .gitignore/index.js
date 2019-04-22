const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Nessa Bot, !help");
    console.log("Le bot a bien été connecté");
});

bot.login("NTcwMDA2MzE0NjAwNjI4MjU0.XL5Mfg.AT10sCuSzTJWc3pC5SJkkh-oDik");
