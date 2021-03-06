const https = require('https');
const fs = require('fs');
const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    var url = "https://api.openproxylist.xyz/socks4.txt"
    const file = fs.createWriteStream("proxies.txt")
    fs.writeFileSync('proxies.txt', ' ');
    const request = https.get(url, function(response) {
        response.pipe(file)
        console.log(`[${moment.utc(Date.now())}] [*] Cập thành công từ cơ sở dữ liệu proxy.`)
    });
    const embed = new Discord.MessageEmbed()
    .setTitle("Cập nhật thành công")
    .setDescription(`Proxy được cài đặt trong tập tin **${file.path}**`)
    message.channel.send(embed)
}


module.exports.help = {
    name: "proxy",
    aliases: ["proxy"]
}