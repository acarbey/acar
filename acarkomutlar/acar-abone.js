const Discord = require('discord.js');
const client = new Discord.Client();
const acar = new require('../acarregister/botayarlari.json');
exports.run = (client, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsiniz!`).then(msg => msg.delete(5000));
   let yetkisimleri = new Discord.RichEmbed()
    .setColor("BLACK")
    .setThumbnail(acar.sunucuresmi)
    .addField(`🎇 ${acar.sunucuadi}`, `🔹 1. Kademe Abonelik Vermek için: **bir**\n🔷 2.Kademe Abonelik Vermek için: **iki**\n💠 3.Kademe Abonelik Vermek için: **üç**\n\n Örneğin: !abone <etiket> iki yazarak 2.Kademelik Abonelik verebilirsin.`)
  let kişi = message.mentions.users.first()
  if (!kişi) return message.channel.send(`Abonelik alan kişiye abonelik vermek için etiketleyiniz!`).then(message => message.delete(2000));
  let member = message.guild.member(kişi)
  let kademe = args[1]
  if (!kademe) return message.channel.send(yetkisimleri)
  
  if(kademe == "bir") {
if(!member.roles.has(acar.kademebir)) {
    member.addRole(acar.kademebir)
    member.removeRole(acar.kademeiki)
    member.removeRole(acar.kademeuc)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} adlı üye abone olarak bize destek olmuştur ve <@&${acar.kademebir}> rolü verilmiştir!`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt)
  } else {
  member.removeRole(acar.kademebir)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} adlı üye aboneliğini yenilemediğinden dolayı <@&${acar.kademebir}> rolü tekrardan alınmıştır!`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
   } 
  }
   if(kademe == "iki") {
if(!member.roles.has(acar.kademeiki)) {
    member.addRole(acar.kademeiki)
    member.removeRole(acar.kademeuc)
    member.removeRole(acar.kademebir)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} adlı üye abone olarak bize destek olmuştur ve <@&${acar.kademeiki}> rolü verilmiştir!`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt)
  } else {
  member.removeRole(acar.kademeiki)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} adlı üye aboneliğini yenilemediğinden dolayı <@&${acar.kademeiki}> rolü tekrardan alınmıştır!`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
   } 
  } 
   if(kademe == "üç") {
if(!member.roles.has(acar.kademeuc)) {
    member.addRole(acar.kademeuc)
  member.removeRole(acar.kademebir)
  member.removeRole(acar.kademeiki)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} adlı üye abone olarak bize destek olmuştur ve <@&${acar.kademeuc}> rolü verilmiştir!`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt)
  } else {
  member.removeRole(acar.kademeuc)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} adlı üye aboneliğini yenilemediğinden dolayı <@&${acar.kademeuc}> rolü tekrardan alınmıştır!`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
   } 
  }  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abone"],
  permLevel: 0
};

exports.help = {
  name: 'abone',
  description: 'Hazır komut teması',
  usage: 'komut <komut bilgisi>'
};
exports.acar = {
    acardizini: 'acar-abone.js',
    acarprefix: acar.prefix,
};
