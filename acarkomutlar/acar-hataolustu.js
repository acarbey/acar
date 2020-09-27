const Discord = require('discord.js');
const client = new Discord.Client();
const acar = new require('../acarregister/botayarlari.json');
exports.run = (client, message, args, member) => {
      const hataembed = new Discord.RichEmbed()
      .setDescription(`Hatan düzeltildi ve sana tekrardan hata oluşturan rol düzeltip verildi!`)
      .setFooter(message.author.tag , message.author.avatarURL)
        message.channel.send(hataembed).then(message => message.delete(10000));
  message.member.addRole(acar.kayıtsızrolid);
  message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["hata-düzelt"],
  permLevel: 0
};

exports.help = {
  name: 'hatadüzelt',
  description: 'Hazır komut teması',
  usage: 'komut <komut bilgisi>'
};
exports.acar = {
    acardizini: 'acar-hataolustu.js',
    acarprefix: acar.prefix,
};