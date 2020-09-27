const Discord = require("discord.js");
const acarayarlar = require('../acarregister/botayarlari.json');
let acar = require('../acarregister/botayarlari.json');

module.exports.run = async (client, message, args) => {  
  if (!message.member.roles.has(acarayarlar.yetkilirolid) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("İstatislikleri Görmek İçin Yeterli Yetkiye Sahip Değilsin.").then(message => message.delete(7500)) 
  let boostcuk = acarayarlar.destekcibooster;
  let kademebir = acarayarlar.kademebir
  let kademeiki = acarayarlar.kademeiki
  let kademeuc = acarayarlar.kademeuc
  let twitchmod = acarayarlar.moderatorrolid
  
  let boost = message.guild.members.filter(r => r.roles.has(boostcuk)).size;
  let abonebir = message.guild.members.filter(r => r.roles.has(kademebir)).size;
  let aboneiki = message.guild.members.filter(r => r.roles.has(kademeiki)).size;
  let aboneuc = message.guild.members.filter(r => r.roles.has(kademeuc)).size;
  let twitchmode = message.guild.members.filter(r => r.roles.has(twitchmod)).size;
  const acarembed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`🎇 **${acar.sunucuadi} - Sunucu İstatistikler**
     Sunucumuza destek çıkan **${boost}** kişi bulunmaktadır.\n
    🔹 1. Kademe Aboneliğe sahip olan **${abonebir}** kişi bulunmaktadır.
    🔷 2. Kademe Aboneliğe sahip olan **${aboneiki}** kişi bulunmaktadır.
    💠 3. Kademe Aboneliğe sahip olan **${aboneuc}** kişi bulunmaktadır.
    🎩 Twitch Moderatörüne sahip olan **${twitchmode}** kişi bulunmaktadır.`
    )
    .setThumbnail(acarayarlar.sunucuresmi)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.avatarURL);
  
  message.delete(); return message.channel.send(acarembed).then(msg => msg.delete(30000));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istatistik", "istatistikler"],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "istatistikleri gösterir",
  usage: "say"
};

exports.acar = {
    acardizini: 'acar-istatistik.js',
    acarprefix: acar.prefix,
};