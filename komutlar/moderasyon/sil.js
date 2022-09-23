const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
  const uyarı = new EmbedBuilder()
  .setDescription(`Bu komutu kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısın.`)
  .setColor("Red");
  if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply({embeds: [uyarı]})

  const uyarıSayı1 = new EmbedBuilder()
  .setDescription('Lütfen Bir Sayı Giriniz!')
  .setColor("Red")
  if(isNaN(args)) return message.reply({embeds: [uyarıSayı1]});

  const uyarıSayı2 = new EmbedBuilder()
  .setDescription('Lütfen 2-100 Arası Bir Sayı Giriniz!')
  .setColor("Red")
  if (args <2 || args > 100) return message.reply({embeds: [uyarıSayı2]});

  message.channel.bulkDelete(Number(args))
        
  const embed = new EmbedBuilder()
  .setTitle('Fatih Adın')
  .setDescription(`**Silinen Mesaj Sayısı: ** ${args} \n**Mesajları Silen Yetkili: ** <@${message.author.id}>`)
  .setThumbnail('https://cdn.discordapp.com/avatars/1014842707287482428/5f6eb08b231d53685a906603404765cd.png?size=1024')
  .setColor('Random')
  .setTimestamp();
  message.channel.send({ embeds: [embed] })
};
exports.conf = {
  aliases: ["clear"]
};

exports.help = {
  name: "sil"
};
