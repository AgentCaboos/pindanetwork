const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on("ready", async () => {
  console.log('Bot Is Succesvol Opgestart!')
  client.user.setActivity("PindaNetwork", {
    type: "WATCHING"
  });
});

client.on('message', message => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (command.toLowerCase() === `${prefix}ping`) {
    message.channel.send('pong!')
  }

  if (command.toLowerCase() === `${prefix}membercount`) {
    let members = `Er zijn momenteel ${message.guild.memberCount}bezoekers in deze discord server!`;
    message.channel.send(members)
  }
});
client.on("guildMemberAdd", member => {
  //als je een role wilt toevoegen als iemand joint  member.addRole(member.guild.roles.find("name","Human"));

  var embed = new Discord.RichEmbed()
    .setColor(0x13ce26)
    .setDescription(` ** ${member.user.username} ** Joined!: wave: \nUsercount: ** ${member.guild.members.size}! ** `)
    .setThumbnail(member.user.avatarURL)
    .setFooter(member.user.username);

  member.guild.channels.find("id", "421174663071137813").send({
    embed
  })
});


client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.find("id", "421174663071137813")

  var embed = new Discord.RichEmbed()
    .setColor(0xf48428)
    .setThumbnail(member.user.avatarURL)
    .setDescription(` ** ${member.user.username} ** leaved! :wave: \nUsercount: ** ${member.guild.members.size}! ** `)
    .setFooter(member.user.username);
  channel.send({
    embed
  });
});
client.login("NDU5MDMyODI1MDY1MzczNjk2.DgwTTg.nxGeBZm8OE_zeD8Bvi0JGhkPMsc");