const Discord = require("discord.js");
const db = require("quick.db");
const acarayarlar = require('../acarregister/botayarlari.json');
let acar = require('../acarregister/botayarlari.json');
exports.run = async (client, message, args) => {
  let sunucu = client.guilds.get(acarayarlar.sunucuid);
  let prefix = (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||  acarayarlar.prefix;
  if (!message.member.roles.has(acarayarlar.yetkilirolid) && !message.member.hasPermission("ADMINISTRATOR")) 
    return message.channel.send("Bu komutu kullanmaya yetkin yok.").then(message => message.delete(2000));
  
  let guild = message.guild;
  let user = message.mentions.users.first();
  let member = message.guild.member(user);
  let sebep = args.slice(1).join(" ") || `Kural İhlali.`;
  let yasaklayankisi = `Yasaklayan : ${message.author.tag} - ${message.author.id}`;
  if (!user) return message.channel.send(`Yasaklayacağın kişiyi etiket olarak eklemelisin!`).then(message => message.delete(2000));
  if (user == message.author)
    return message.channel.send(`Yasaklayacağın kişiyi etiket olarak eklemelisin!`);
  if (user.bot) return message.reply("Bot'u banlamaya izin veremem kardeşim çok birini banlamak istiyorsan senin için seni banlayım.")
  if (member.highestRole.position >= message.member.highestRole.position || !member.bannable) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${acarayarlar.tag} ${acarayarlar.sunucuadi} Moderasyon`, `${acarayarlar.ünlem}  Bu kullanıcıyı banlamak için yetkiniz bulunmamaktadır!`).setColor("RANDOM"));
  let userembed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor(`${acarayarlar.sunucuadi} Sunucumuzdan Yasaklandınız!`, user.avatarURL)
    .setDescription(`**${guild.name}** sunucusundan **${sebep}** sebebiyle yasaklandınız.`)
    .setImage("https://media.discordapp.net/attachments/680092218777927778/683607360115310630/image0.gif");
  user.send(userembed);
  message.guild.member(user).ban(`${sebep} | ${yasaklayankisi}`).catch(error => message.reply("Üyeyi yasaklamak için yetkim yetmiyor."));
  let embed4 = new Discord.RichEmbed()
    .setColor("#000000")
    .setDescription("`" + user.tag + "`" + ` Kullanıcısı ${message.author} Tarafından **${sebep}** Nedeniyle banlandı.`)
    .setFooter(`${client.user.tag}`, `${client.user.displayAvatarURL}`)
    .setTimestamp();
  let kanal1 = message.guild.channels.get(acarayarlar.modlogkanalid);
  if (!kanal1) return;
  kanal1.send(embed4);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban","yasakla"],
  permLevel: 0
};
exports.help = {
  name: "uzaklastir",
  description: "Belirttiğiniz kullanıcıyı sunucudan yasaklar.",
  usage: "yasakla <@kullanıcı>"
};

exports.acar = {
    acardizini: 'acar-ban.js',
    acarprefix: acar.prefix,
};