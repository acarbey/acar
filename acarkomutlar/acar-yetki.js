const Discord = require('discord.js');
const client = new Discord.Client();
const acar = new require('../acarregister/botayarlari.json');
exports.run = (client, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsiniz!`).then(msg => msg.delete(5000));
  let yetkisimleri = new Discord.RichEmbed()
    .setColor("BLACK")
    .setThumbnail(acar.sunucuresmi)
    .addField(`🎇 ${acar.sunucuadi}`, `🔸 Yönetici yetkisi vermek için: **yönetici**\n🔸 Discord Görevlisi işlemi yapmak için: **görevli**\n🔸 Twitch Moderatör işlemi yapmak için: **mod**\n🔸 Vip işlemi yapmak için: **vip**\n🔸 Twitch Yayıncı rol işlemi yapmak için: **yayıncı**\n🔸 Grafik Tasarımcısı işlemi yapmak için: **grafiker**\n🔸 Müzisyen ve Vokal işlemi yapmak için: **müzisyen**\n🔸 Hesap onaylama işlemi yapmak için: **onayla**\n\n Yukarda gördüğünüzü etiket attıktan sonra vericeğiniz yetkilere giriceğiniz isimlerdir.`)
  let kişi = message.mentions.users.first()
  if (!kişi) return message.channel.send(`Yetki veya Rol verip alacağın kişiyi etiketlemelisin!`).then(message => message.delete(2000));
  let member = message.guild.member(kişi)
  let yetkiadi = args[1]
  if (!yetkiadi) return message.channel.send(yetkisimleri)
  //message.reply('Lütfen verip veya alacağınız yetki adını girin ( `yönetici` , `görevli` , `mod` , `vip` , `yayıncı` , `grafiker` , `müzisyen` ve `onayla` ) olarak giriniz!');
  
  if(yetkiadi == "mod") {
  if(!member.roles.has(acar.moderatorrolid)) {
    member.addRole(acar.moderatorrolid)
    member.addRole(acar.yetkilirolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeye** <@&${acar.moderatorrolid}> **yetkisini verdi!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  } else {
    member.removeRole(acar.moderatorrolid)
    member.removeRole(acar.yetkilirolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeden** <@&${acar.moderatorrolid}> **yetkisini aldı!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  }
  }
  if(yetkiadi == "görevli") {
  if(!member.roles.has(acar.discordgorevlirolid)) {
    member.addRole(acar.discordgorevlirolid)
    member.addRole(acar.yetkilirolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeye** <@&${acar.discordgorevlirolid}> **yetkisini verdi!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  } else {
    member.removeRole(acar.discordgorevlirolid)
    member.removeRole(acar.yetkilirolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeden** <@&${acar.discordgorevlirolid}> **yetkisini aldı!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  }
  }
  
  if(yetkiadi == "yönetici") {
  if(!member.roles.has(acar.yoneticirolid)) {
    member.addRole(acar.yoneticirolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeye** <@&${acar.yoneticirolid}> **yetkisini verdi!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  } else {
    member.removeRole(acar.yoneticirolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeden** <@&${acar.yoneticirolid}> **yetkisini aldı!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  }
  }
  
    if(yetkiadi == "vip") {
  if(!member.roles.has(acar.viprolid)) {
    member.addRole(acar.viprolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeye** <@&${acar.viprolid}> ** rolü verdi!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  } else {
    member.removeRole(acar.viprolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeden** <@&${acar.viprolid}> **rolünü aldı!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  }
  }
  
      if(yetkiadi == "yayıncı") {
  if(!member.roles.has(acar.yayıncırolid)) {
    member.addRole(acar.yayıncırolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeye** <@&${acar.yayıncırolid}> ** rolü verdi!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  } else {
    member.removeRole(acar.yayıncırolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeden** <@&${acar.yayıncırolid}> **rolünü aldı!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  }
  }
  
      if(yetkiadi == "grafiker") {
  if(!member.roles.has(acar.grafikerrolid)) {
    member.addRole(acar.grafikerrolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeye** <@&${acar.grafikerrolid}> ** rolü verdi!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  } else {
    member.removeRole(acar.grafikerrolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeden** <@&${acar.grafikerrolid}> **rolünü aldı!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  }
  }
  
      if(yetkiadi == "müzisyen") {
  if(!member.roles.has(acar.müzisyenrolid)) {
    member.addRole(acar.müzisyenrolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeye** <@&${acar.müzisyenrolid}> ** rolü verdi!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  } else {
    member.removeRole(acar.müzisyenrolid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `${kişi} **adlı üyeden** <@&${acar.müzisyenrolid}> **rolünü aldı!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000));
  }
  }
  
  if(yetkiadi == "onayla") {
    const kanal = message.guild.channels.find(c => c.id == acar.privid)
    const embed2 = new Discord.RichEmbed() 
    .addField(`Privden çıkartıldı sövün şu puşsta`, `${member.user}, İçinden geçin bunun amk yanlış yaptı bana pezeveng.`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setColor("BLUE")
    .setThumbnail(acar.hosgeldinresmi) 
     const embed1 = new Discord.RichEmbed() 
    .addField(`Heyy! Prive Bir Tekmeci Hulk Geldi`, `${member.user}, Eğlendirin şu puştu qwlekjqwlejqwkemqe.`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setColor("BLUE")
    .setThumbnail(acar.hosgeldinresmi) 
  if(!member.roles.has(acar.onayid) && !member.roles.has(acar.kilitid)) {
    member.addRole(acar.onayid)
     member.addRole(acar.kilitid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `\n${kişi} **adlı üyeyi onaylayarrak Priv'ine soktu!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000)).then(kanal.send(embed1));
  } else {
       member.removeRole(acar.onayid)
     member.removeRole(acar.kilitid)
    let kayıt = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`🎇 ${acar.sunucuadi}`, `\n${kişi} **adlı üyeyi onayını çıkartarak Priv'inden uzaklaştırdı!**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
    return message.channel.send(kayıt).then(msg => msg.delete(10000)).then(kanal.send(embed2));
  }
    }
};
  
  


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yetki"],
  permLevel: 0
};

exports.help = {
  name: 'yetki',
  description: 'Hazır komut teması',
  usage: 'komut <komut bilgisi>'
};
exports.acar = {
    acardizini: 'acar-yetki.js',
    acarprefix: acar.prefix,
};