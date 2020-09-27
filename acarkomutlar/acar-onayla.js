const Discord = require('discord.js');
const db = require('quick.db');
const acarayarlar = require('../acarregister/botayarlari.json');
let acar = require('../acarregister/botayarlari.json');

exports.run = (client, message, args, member) => {
   if (!message.member.roles.has(acarayarlar.twitchonayrolid))
     return message.channel.send("Lütfen öncelikle `!twitch <kullanıcı adı>` işlemi ile <@&" + acarayarlar.twitchrolid + "> Rolünü alarak Komutu kullanabilirsin.").then(msg => msg.delete(10000));
let kod = db.fetch(`kod_${message.author.id}`)
  if(args[0] !== kod) return message.reply("Hata! kayıt kodunuzu kontrol ediniz.").then(msg => msg.delete(10000))
  else {
  message.delete()
  message.member.removeRole(acar.kayıtsızrolid);  
  message.member.removeRole(acar.twitchonayrolid);  
  message.member.addRole(acar.kayitlirolid);  
  message.member.addRole(acar.twitchrolid);  
    
    const kanal = message.guild.channels.find(c => c.id == acarayarlar.chatid) 
    const embed1 = new Discord.RichEmbed() 
    .addField(`Heyy! ${acarayarlar.sunucuadi} Twitch Ailesi Yeni biri daha`, `${message.author.tag}, Ailemize hoşgeldin seni ailemiz de görmekten büyük mutluluk duyarız.`)
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setColor("BLUE")
    .setThumbnail(acarayarlar.hosgeldinresmi) 
    return kanal.send(embed1)
  db.delete(`kod_${message.author.id}`)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'onayla',
  description: '',
  usage: 'ACAR Tarafından Üretilmiştir.'
};

exports.acar = {
    acardizini: 'acar-onayla.js',
    acarprefix: acar.prefix,
};