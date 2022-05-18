const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;
var room = ayarlar.commandroom;
exports.run = function(client, message) {

if (message.channel.id != room) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Uả lệnh j lạ dzi')
	message.channel.send(embed1);
	return;
  }
  var gifler = ["https://c.tenor.com/4HRZBZapfssAAAAC/solo-leveling-sung-jin-woo.gif", "https://c.tenor.com/QVP_ZaioFPMAAAAC/solo-leveling-smile.gif", "https://c.tenor.com/0N_Otx22J7UAAAAd/sung-jin-woo-jin-woo.gif" , "https://c.tenor.com/9DKiAQSTDucAAAAd/jin-woo-sung-jin-woo.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Sử dụng lệnh HỖ TRỢ ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('🔥 **FlexBot V1.2** 🔥')
.setTimestamp()
.setDescription("**TRỢ GIÚP** \n  \n `FlameCord ⊳ ;flamecord ip port (Basic) \nAegis ⊳ ;aegis ip port (Basic) \nBotNet ⊳ ;botnet ip port protocol (Basic) \nBotter ⊳ ;botjoiner ip port protocol (Basic) \nNullPing (1.8) ⊳ ;nullping ip port protocol (Basic) \nMultikiller ⊳ ;multikiller ip port protocol (Basic) \nLocalHost ⊳ ;localhost ip port protocol (Basic) \nUltimateSmasher ⊳ ;ultimatesmasher ip port protocol (Basic) \nServerFuck ⊳ ;serverfuck ip port protocol (Basic) \nNettyDowner ⊳ ;nettydowner ip port protocol (Premium) \nRam ⊳ ;ram ip port protocol (Premium) \nJoin ⊳ ;join ip port protocol (Premium) \nLegitJoin ⊳ ;legitjoin ip port protocol (Premium) \nColorCrasher ⊳ ;colorcrasher ip port protocol (Premium) \nQueue ⊳ ;queue ip port protocol (Premium) \nYooniksCry ⊳ ;yoonikscry ip port protocol (Premium) \nSpoof ⊳ ;spoof ip port protocol (Premium) \nRandomBytes ⊳ ;randombytes ip port protocol (Premium) \nInvalidNames ⊳ ;invalidnames ip port protocol (Premium) \nBigPacket ⊳ ;bigpacket ip port protocol (Premium) \nNabCry ⊳ ;nabcry ip port protocol (Premium) \nNetWork ⊳ ;network ip port protocol (Premium) \nSpamJoin ⊳ ;spamjoin ip port protocol (Premium) \nPlayerPacket ⊳ ;playerpacket ip port protocol (Premium) \nGaySpam ⊳ ;gayspam ip port protocol (Premium) \nTcpShit ⊳ ;tcphit ip port protocol (Premium) \nTcpBypass ⊳ ;tcpbypass ip port protocol (Premium) \nExtremeJoin ⊳ ;extremejoin ip port protocol (Premium) \nHandshake ⊳ ;handshake ip port protocol (Premium) \nLongNames ⊳ ;longnames ip port protocol (Premium) \nDoubleJoin ⊳ ;doublejoin ip port protocol (Premium) \nLegitNameJoin ⊳ ;legitnamejoin ip port protocol (Premium) \nLegacyPing ⊳ ;legacyping ip port protocol (Premium) \nCập Nhật Proxy ⊳ ;proxy \nDừng cuộc tấn công ⊳ ;stop`")
.setFooter('© Nhà phát triển MiniFlex#6903.', client.user.avatarURL)
.setTimestamp()
.setThumbnail("")
message.channel.send(embed)
};



exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'],
  permLevel: 0 
};

exports.help = {
  name: 'help',
  description: 'Tüm attack komutları gösterir.',
  usage: 'help'
};