const Discord = require('discord.js');
const client = new Discord.Client();
const acar = new require('../acarregister/botayarlari.json');
exports.run = (client, message, args) => {

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["komutyok"],
  permLevel: 0
};

exports.help = {
  name: 'Komut ismi',
  description: 'Hazır komut teması',
  usage: 'komut <komut bilgisi>'
};
exports.acar = {
    acardizini: 'acar-<komutismi>.js',
    acarprefix: acar.prefix,
};
