const Discord = require('discord.js');
const db = require('quick.db');
const acarayarlar = require('../acarregister/botayarlari.json');
let acar = require('../acarregister/botayarlari.json');

const hrfler = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler2 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler3 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler4 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler5 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler6 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler7 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler8 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler9 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler10 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
exports.run = (client, message, params, args) => {
   if (!message.member.roles.has(acarayarlar.twitchonayrolid))
     return message.channel.send("✨ Lütfen öncelikle `!twitch <kullanıcı adı>` işlemi ile <@&" + acarayarlar.twitchrolid + "> Rolünü alarak Komutu kullanabilirsin.").then(msg => msg.delete(10000));
  var random = Math.floor(Math.random()*(hrfler.length-0+1)+0);
  var random2 = Math.floor(Math.random()*(hrfler2.length-0+1)+0);
  var random3 = Math.floor(Math.random()*(hrfler3.length-0+1)+0);
  var random4 = Math.floor(Math.random()*(hrfler4.length-0+1)+0);
  var random5 = Math.floor(Math.random()*(hrfler5.length-0+1)+0);
  var random6 = Math.floor(Math.random()*(hrfler5.length-0+1)+0);
  var random7 = Math.floor(Math.random()*(hrfler5.length-0+1)+0);
  var random8 = Math.floor(Math.random()*(hrfler5.length-0+1)+0);
  var random9 = Math.floor(Math.random()*(hrfler5.length-0+1)+0);
  var random10 = Math.floor(Math.random()*(hrfler5.length-0+1)+0);
  const sunucu16xicon = client.emojis.find(emoji => emoji.name === acarayarlar.sunucuiconu); // Sunucu iconunu girerek işlem tamamlanır!
  var h1 = hrfler[random]
  var h2 = hrfler2[random2]
  var h3 = hrfler3[random3]
  var h4 = hrfler4[random4]
  var h5 = hrfler[random5]
  var h6 = hrfler[random6]
  var h7 = hrfler[random7]
  var h8 = hrfler[random8]
  var h9 = hrfler[random9]
  var h10 = hrfler[random10]
  
  var acarin_koduke = h1 + h2 + h3 + h4 + h5 + '-' + h6 + h7 + h8 + h9 + h10
  db.set(`kod_${message.author.id}`,acarin_koduke)
  message.delete()
  const acarembed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `${sunucu16xicon} ${acar.sunucuadi}     
   
    Merhaba, kayıt olmak istediniz kodunuz budur ! 
     **${acarin_koduke}** 
    kullanmak istermisin? 
    ozaman **${exports.acar.acarprefix}${exports.help.connjs} ${acarin_koduke}**
    kodu ile sunucumuza kayıt olabilirsiniz.`   
    )
    .setThumbnail(acarayarlar.saygif)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.avatarURL);

  message.author.send(acarembed)
  message.reply("✉ DM'den sana bir kayıt kodu gönderdim `" + acar.prefix + exports.help.connjs + "`" + " kodu ile kodunuzu kullanabilirsiniz.").then(msg => msg.delete(10000))

}
                                
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt-ol", "kayit", "kayitol", "kayıt"],
  permLevel: 0
};

exports.help = {
  name: 'kayıtol',
  description: '',
  usage: 'ACAR Tarafından Üretilmiştir.',
  connjs: 'onayla'
};

exports.acar = {
    acardizini: 'acar-kayitol.js',
    acarprefix: acar.prefix,
};