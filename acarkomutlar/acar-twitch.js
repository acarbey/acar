const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const acar = new require('../acarregister/botayarlari.json');
exports.run = (client, message, args) => {
  let isim = args[0]
      if(!isim) return message.channel.send(new Discord.RichEmbed().addField(`🌟 Bilgi` , `Twitch onayı almak için lütfen twitch kullanıcı adını giriniz!`).setColor("RANDOM")).then(msg => msg.delete(7000))
message.member.addRole(acar.twitchonayrolid) 
message.reply('✅ Başarıyla twitch onayını aldınız.').then(msg => msg.delete(5000));
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["twitch"],
  permLevel: 0
};

exports.help = {
  name: 'twich',
  description: 'Hazır komut teması',
  usage: '!twitch <kullanıcı adı>'
};
exports.acar = {
    acardizini: 'acar-twitch.js',
    acarprefix: acar.prefix,
};