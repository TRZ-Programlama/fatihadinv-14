const { EmbedBuilder } = require("discord.js");
var config = require("../config.js");
const client = require("../bot");
const prefix = config.prefix;

client.on("messageCreate", message =>{
    const prefixEmbed = new EmbedBuilder()
    .setDescription(`Prefixim : **${prefix}**`)
    .setColor("Blue")
    if(message.content==`<@${client.user.id}>`) return message.reply({embeds: [prefixEmbed]});
})

client.on("messageCreate", message => {
    var sa = ["Sa","SA","sa","Sea","sea","SEA", "SLM", "slm", "selamın aleyküm","Selamın Aleyküm","SELAMIN ALEYKÜm","selamun aleyküm","Selamun Aleyküm","SELAMUN ALEYKÜM"]
    if(sa.includes(message.content.toLowerCase())){
      const SAembed = new EmbedBuilder()
      .setDescription(`${message.author} **Aleyküm Selam, Hoş geldin.**`)
      .setColor("Random")
      message.reply({embeds: [SAembed]})
    }
})