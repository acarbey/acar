const Discord = require('discord.js');
const client = new Discord.Client();
const acar = new require('../acarregister/botayarlari.json');
exports.run = (client, message, args) => {
if (!message.member.roles.has(acar.yetkilirolid) && !message.member.hasPermission("ADMINISTRATOR"))  return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("Lütfen Silinicek Mesaj Miktarını Yazın!");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`✅ ${args[0]} Adet Mesajı Sildim.`).then(msg => msg.delete(2000));
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Hazır komut teması',
  usage: 'temizle <silincek mesaj sayısı>'
};
exports.acar = {
    acardizini: 'acar-yazitemizle.js',
    acarprefix: acar.prefix,
};