const { EmbedBuilder, version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const Uptime = moment
  .duration(client.uptime)
  .format(" D [gün], H [saat], m [dakika], s [saniye]");

  const embed = new EmbedBuilder()
  .setAuthor({
    name: "Fatih Adın İstatistik",
    iconURL: client.user.avatarURL(),
  })
  .setDescription(
    `**<a:ownergif:1022577947024044072> Botun Sahibi ve Geliştiricisi**
    <:owner:1022576802599796736> Bot Sahibi : <@478270527082070019>
    <:devops:1022576236666564638> Geliştiricisi : <@657963699000049694>
  
    <a:yukleniyor:1022825577624899614> Toplam Kullanıcı: **${client.users.cache.size}**
    <a:yukleniyor:1022825577624899614> Toplam Sunucu: **${client.guilds.cache.size}**
    <a:yukleniyor:1022825577624899614> Toplam Kanal: **${client.channels.cache.size}**
  
    <a:yukleniyor:1022825577624899614> Hafıza Kullanımı: **${(
      process.memoryUsage().heapUsed /
      1024 /
      512
    ).toFixed(2)}Mb**
    <a:yukleniyor:1022825577624899614> Uptime: **${Uptime}**
  
    <a:yukleniyor:1022825577624899614> NodeJS Sürümü: **${process.version}**
    <a:yukleniyor:1022825577624899614> DiscordJS Sürümü: **${version}**`
  )
  .setColor("Blue");

  message.channel.send({ embeds: [embed] });
};

exports.help = {
  name: "istatistik"
};

exports.conf = {
  aliases: ["i"]
};

/*
.addFields(
    {
      name : `<a:ownergif:1022577947024044072> Botun Sahibi ve Geliştiricisi`,
      value : `<:owner:1022576802599796736> Bot Sahibi : <@478270527082070019>
      <:devops:1022576236666564638> Geliştiricisi : <@657963699000049694>`
    },
    {
      name: `<a:yukleniyor:1022825577624899614> Toplam Kullanıcı`,
      value: `**${client.users.cache.size}**`,
      inline: true
    },
    {
      name: `<a:yukleniyor:1022825577624899614> Toplam Sunucu`,
      value: `**${client.guilds.cache.size}**`,
      inline: true
    },
    {
      name: `<a:yukleniyor:1022825577624899614> Toplam Kanal`,
      value: `**${client.channels.cache.size}**`,
      inline: true
    },
    {
      name: '\u200B', 
      value: '\u200B'
    },
    {
      name: `<a:yukleniyor:1022825577624899614> Hafıza Kullanımı`,
      value: `**${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2)}Mb**`,
      inline: true
    },
    {
      name: `<a:yukleniyor:1022825577624899614> Uptime`,
      value: `**${Uptime}**`,
      inline: true
    },
    {
      name: '\u200B', 
      value: '\u200B'
    },
    {
      name: `<a:yukleniyor:1022825577624899614> NodeJS Sürümü`,
      value: `**${process.version}**` ,
      inline: true
    },
    {
      name: `<a:yukleniyor:1022825577624899614> Discord.JS Sürümü`,
      value: `**${version}**` ,
      inline: true
    }
  )
*/