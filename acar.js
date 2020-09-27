const Discord = require('discord.js');
const client = new Discord.Client();
const acar = new require('./acarregister/botayarlari.json');
const acaryetkililer = new require("./acarguard/yetkililer.json");
const chalk = require('chalk');
const fs = require('fs');
const ms = require('ms');
const moment = require('moment');
const Jimp = require('jimp');
const db = require('quick.db');
require('./acarutil/etkinlikler')(client);
const express = require('express');
const app = express();
var prefix = acar.prefix;
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
  
};
client.on('ready', () => {
   console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] Register botu sunucuda aktif hale getirilidi. www.acardev.net`);
   console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] RPC düzenlemesini ../acarregister/rpc.json'dan düzenleyebilirsin.`);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./acarkomutlar/', (err, files) => {
  if (err) console.error(err);
  log(`( ${files.length} ) adet dizin ve komut algılandı ve yüklendi.`);
  files.forEach(f => {
    let props = require(`./acarkomutlar/${f}`);
    log(`Yüklenen komut ve dizin: ${props.acar.acarprefix}${props.help.name} & ${props.acar.acardizini}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./acarkomutlar/${command}`)];
      let cmd = require(`./acarkomutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./acarkomutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./acarkomutlar/${command}`)];
      let cmd = require(`./acarkomutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === acar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
});

client.login(acar.token);

client.on("message", msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("Aleyküm Selam Dostum Hoşgeldin !");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "Sa") {
    msg.reply("Aleyküm Selam Dostum Hoşgeldin !");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "Sea") {
    msg.reply("Aleyküm Selam Dostum Hoşgeldin !");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "sea") {
    msg.reply("Aleyküm Selam Dostum Hoşgeldin !");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "Selamın Aleyküm") {
    msg.reply("Aleyküm Selam Dostum Hoşgeldin !");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "selamın aleyküm") {
    msg.reply("Aleyküm Selam Dostum Hoşgeldin !");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply("Aleyküm Selam Dostum Hoşgeldin !");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "selamun aleyküm") {
    msg.reply("Aleyküm Selam Dostum Hoşgeldin !");
  }
});

// ACAR Bot Koruma Sistemi v1.2
client.on("guildMemberAdd", member => {
  const guild = member.guild;
  let sChannel = client.channels.get(acar.güvenlikkanalid);
  if (member.user.bot !== true) {
  } else {
    if (!sChannel) {
      member.guild.owner
        .send(
          `**${member.user.tag}** adlı bot sunucuya geldi ve devreye **${acar.sunucuadi}** girdi ve sunucuya sokulan botu banladı! `
        )
        .then(() => console.log(`yasaklandı ${member.displayName}`))
        .catch(console.error);
      member.ban(member);
    } else {
      sChannel
        .send(
          `**${member.user.tag}** adlı bot sunucuya eklendi ve güvenlik için sunucudan uzaklaştırdım.`
        )
        .then(() => console.log(`yasaklandı ${member.displayName}`))
        .catch(console.error);
      member.ban(member);
    }
  }
});


// Otomatik rol verme sistemi v1.0
client.on("guildMemberAdd", async (member, message) => {
member.addRole(acar.kayıtsızrolid);
var kanal = member.guild.channels.get(acar.bilgipanelikanalid);
let user = client.users.get(member.id); 
let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**✨ ${acar.sunucuadi}**\n\n👑 Hoşgeldin, ${member} senin ile \`${member.guild.memberCount}\` üyeye ulaştık.\n\n🔥 Kayıt olabilmek için lütfen !kayıtol komutu ile işleme devam edin.`)
    .setImage(acar.hosgeldinresmi)
kanal.send(embed);
});

// ACAR Sunucu Ayarları Değişimi Koruması v2.0
client.on("guildUpdate", async(oldGuild, newGuild) => { 
    let guild = client.guilds.get(acar.sunucuid);
    const audit = (await newGuild.fetchAuditLogs({ type: "GUILD_UPDATE" })).entries.first();
  const üye = newGuild.member(audit.executor.id);
  const yetkili = audit.executor;
  if (yetkili.id === acar.botid) return;
  if (yetkili.id === acaryetkililer.yetkili1) return;
  if (yetkili.id === acaryetkililer.yetkili2) return;
  if (yetkili.id === acaryetkililer.yetkili3) return;
  üye.ban()
  guild.setName(acar.sunucuadikoruma);
  guild.setIcon(acar.sunucuiconurl);
  guild.setSplash(acar.sunucusplash);
  guild.setBanner(acar.sunucubanner);
  const logChannel = client.channels.get(acar.guvenlikkanalid);
  if (!logChannel)
    return guild.owner.send(
      `**${üye}** adlı üye sunucumuzun ayarlarıyla oynadı, sunucumuzdan uzaklaştırıldı!`
    );
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .addField(
      acar.sunucuadi,
      `**${üye}** adlı üye sunucumuzun ayarlarıyla oynadı, sunucumuzdan uzaklaştırıldı!`
    );
  logChannel.send(embed);

  
})

// ACAR Rol Silince açınca banlama koruması v1.0
client.on("roleDelete", async role => { 
    let guild = client.guilds.get(acar.sunucuid);
    const audit = (await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" })).entries.first();
  const üye = role.guild.member(audit.executor.id);
  const yetkili = audit.executor;
  if (yetkili.id === acar.botid) return;
  if (yetkili.id === acaryetkililer.yetkili1) return;
  if (yetkili.id === acaryetkililer.yetkili2) return;
  if (yetkili.id === acaryetkililer.yetkili3) return;
  await üye.ban()
   const logChannel = client.channels.get(acar.guvenlikkanalid);
  if (!logChannel)
    return guild.owner.send(
      `**${üye}** **${role.name}** adlı rolü sildi ve sunucudan uzaklaştırıldı!**`
    );
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .addField(
      acar.sunucuadi,
      `**${üye}** **${role.name}** adlı rolü sildi ve sunucudan uzaklaştırıldı!**`
    );
  logChannel.send(embed);
  
})
client.on("roleCreate", async role => { 
    let guild = client.guilds.get(acar.sunucuid);
    const audit = (await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" })).entries.first();
  const üye = role.guild.member(audit.executor.id);
  const yetkili = audit.executor;
  if (yetkili.id === acar.botid) return;
  if (yetkili.id === acaryetkililer.yetkili1) return;
  if (yetkili.id === acaryetkililer.yetkili2) return;
  if (yetkili.id === acaryetkililer.yetkili3) return;
  await üye.ban()
   const logChannel = client.channels.get(acar.guvenlikkanalid);
  if (!logChannel)
    return guild.owner.send(
      `**${üye}** **${role.name}** adlı rolü açtı ve sunucudan uzaklaştırıldı!**`
    );
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .addField(
      acar.sunucuadi,
      `**${üye}** **${role.name}** adlı rolü açtı ve sunucudan uzaklaştırıldı!**`
    );
  logChannel.send(embed);
  
})

// ACAR Yönetici Rol Verme Koruması v2.0
client.on("roleUpdate", async function(oldRole, newRole, role) {
  const bilgilendir = await newRole.guild
    .fetchAuditLogs({ type: "ROLE_UPLATE" })
    .then(hatırla => hatırla.entries.first());
  let yapanad = bilgilendir.executor;
  let idler = bilgilendir.executor.id;

  if (idler === acar.botid) return;
  if (idler === acaryetkililer.yetkili1) return;
  if (idler === acaryetkililer.yetkili2) return;
  if (idler === acaryetkililer.yetkili3) return;
  if (oldRole.hasPermission("ADMINISTRATOR")) return;

  setTimeout(() => {
    if (newRole.hasPermission("ADMINISTRATOR")) {
      newRole.setPermissions(newRole.permissions - 8);
    }

    if (newRole.hasPermission("ADMINISTRATOR")) {
      if (
        !client.guilds.get(newRole.guild.id).channels.has(acar.guvenlikkanalid)
      )
        return
      client.channels
        .get(acar.guvenlikkanalid)
        .send(
          `Rol Koruma Nedeniyle ${yapanad} Kullanıcısı Bir Role Yönetici Verdiği İçin Rolün **Yöneticisi Alındı**. \Rol: **${newRole.name}**`
        );
    }
  }, 1000);
});
client.on("guildMemberUpdate", async (oldUser, newUser) => {
  const audit = await oldUser.guild
    .fetchAuditLogs({ type: "MEMBER_ROLE_UPDATE" })
    .then(audit => audit.entries.first());
  const yapanad = audit.executor;
  const id = audit.executor.id;
  if (id === client.user.id || id === oldUser.guild.ownerID) return;
  if (audit.executor.bot) return;
  if (id === acar.botid) return;
  if (id === acaryetkililer.yetkili1) return;
  if (id === acaryetkililer.yetkili2) return;
  if (id === acaryetkililer.yetkili3) return;
  let role_name = "";
  let pasif = "";
  if (oldUser.roles.size < newUser.roles.size) {
    oldUser.roles.forEach(r => {
      db.set(`${r.id}`, "X");
    });
    newUser.roles.forEach(async r => {
      let check = await db.fetch(`${r.id}`);
      if (!check) {
        if (
          r.hasPermission("ADMINISTRATOR")
        ) {
          newUser.removeRole(r.id);
          role_name = r.name;
          const kanal = client.channels.get(acar.guvenlikkanalid);

          const embed = new Discord.RichEmbed()
            .setColor("RED")
            .setDescription(
              ` ${audit.executor} adlı yetkili , ${newUser} adlı kişiye \` Yönetici \` izinlerinin sahip olduğu bir yetki vermeye çalıştı!\nVermeye çalıştığı rol : ${r.name} `
            );
          kanal.send(embed);
        } else {
          pasif = "x";
        }
      }
    });
    newUser.roles.forEach(r => {
      db.delete(`${r.id}`);
    });
  }
});

//ACAR Kanal Oluşturma / Silme / Düzenleme Koruması v1.0
client.on("channelDelete", async channel => { 
    let guild = client.guilds.get(acar.sunucuid);
    const audit = (await channel.guild.fetchAuditLogs({ type: "CHANNEL_DELETE" })).entries.first();
  const üye = channel.guild.member(audit.executor.id);
  const yetkili = audit.executor;
  if (yetkili.id === acar.botid) return;
  if (yetkili.id === acaryetkililer.yetkili1) return;
  if (yetkili.id === acaryetkililer.yetkili2) return;
  if (yetkili.id === acaryetkililer.yetkili3) return;
  await üye.ban()
   const logChannel = client.channels.get(acar.guvenlikkanalid);
  if (!logChannel)
    return guild.owner.send(
      `**${üye}** **${channel.name}** adlı odayı sildi ve sunucudan uzaklaştırıldı!**`
    );
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .addField(
      acar.sunucuadi,
      `**${üye}** **${channel.name}** adlı odayı sildi ve sunucudan uzaklaştırıldı!**`
    );
  logChannel.send(embed);
  
})

client.on("channelCreate", async channel => { 
    let guild = client.guilds.get(acar.sunucuid);
    const audit = (await channel.guild.fetchAuditLogs({ type: "CHANNEL_CREATE" })).entries.first();
  const üye = channel.guild.member(audit.executor.id);
  const yetkili = audit.executor;
  if (yetkili.id === acar.botid) return;
  if (yetkili.id === acaryetkililer.yetkili1) return;
  if (yetkili.id === acaryetkililer.yetkili2) return;
  if (yetkili.id === acaryetkililer.yetkili3) return;
  await üye.ban()
   const logChannel = client.channels.get(acar.guvenlikkanalid);
  if (!logChannel)
    return guild.owner.send(
      `**${üye}** **${channel.name}** adlı odayı oluşturdu ve sunucudan uzaklaştırıldı!**`
    );
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .addField(
      acar.sunucuadi,
      `**${üye}** **${channel.name}** adlı odayı oluşturdu ve sunucudan uzaklaştırıldı!**`
    );
  logChannel.send(embed);
  
})

client.on("channelUpdate", async channel => { 
    let guild = client.guilds.get(acar.sunucuid);
    const audit = (await channel.guild.fetchAuditLogs({ type: "CHANNEL_UPDATE" })).entries.first();
  const üye = channel.guild.member(audit.executor.id);
  const yetkili = audit.executor;
  if (yetkili.id === acar.botid) return;
  if (yetkili.id === acaryetkililer.yetkili1) return;
  if (yetkili.id === acaryetkililer.yetkili2) return;
  if (yetkili.id === acaryetkililer.yetkili3) return;
  await üye.ban()
   const logChannel = client.channels.get(acar.guvenlikkanalid);
  if (!logChannel)
    return guild.owner.send(
      `**${üye}** **${channel.name}** adlı kanalı düzenledi ve sunucudan uzaklaştırıldı !**`
    );
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .addField(
      acar.sunucuadi,
      `**${üye}** **${channel.name}** adlı kanalı düzenledi ve sunucudan uzaklaştırıldı !**`
    );
  logChannel.send(embed);
  
})