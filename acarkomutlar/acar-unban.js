const Discord = require('discord.js');
const client = new Discord.Client();
const acarayarlar = require('../acarregister/botayarlari.json');
let acar = require('../acarregister/botayarlari.json');
exports.run = (client, message, args) => {
if (!message.member.roles.has(acarayarlar.yetkilirolid) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yeterli Yetkiye Sahip Değilsin.");
  let guild = message.guild
  let reason = args.slice(1).join(" ") || `Af verildi.`;
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  if (reason.length < 1) return message.reply('Ban kaldırma sebebini yazmalısın.');
  if (!user) return message.reply('Banı kaldırılacak kişinin ID numarasını yazmalısın.').catch(console.error);
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
  message.channel.send(` __<@${user}>__ adlı kişinin yasağı **${message.author}** yetkili tarafından "${reason}" sebebiyle Kaldırılmıştır.`).then(message => message.delete(10000))

const sChannel = message.guild.channels.find(c=> c.id === acarayarlar.modlogkanalid)
  let modlog = new Discord.RichEmbed() 
  .setColor('RANDOM')
  .setDescription(`<@${user}> adlı Kullanıcının Yasağı kaldırıldı \n Kaldıran Yetkili: **${message.author}** \n Sebebi : **"${reason}"**`)
   sChannel.send(modlog)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yasak-kaldir", "yasakkaldir"],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};
exports.acar = {
    acardizini: 'acar-unban.js',
    acarprefix: acar.prefix,
};