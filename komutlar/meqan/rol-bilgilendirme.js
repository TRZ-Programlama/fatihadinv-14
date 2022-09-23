const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    var guild = message.guild
    const uyarı = new EmbedBuilder()
    .setDescription(`Bu komutu kullanabilmek için \`Bot Sahibi\` olmalısın.`)
    .setColor("#fc0606");
    if ((message.author.id !== "657963699000049694" && "478270527082070019"))  return message.reply({embeds: [uyarı]})
    message.delete()

    const embed = new EmbedBuilder()
    .setTitle("Meqan Rol Bilgilendirme")
    .setThumbnail(guild.iconURL({dynamic: true}))
    .setDescription(`
    <@&863195503826042901>
    Sunucu sahibine verilen roldür.
    
    <@&989954943551168542>
    Sunucunun en yetkili rolüdür.

    <@&980208553350561816>
    Discord moderator'e verilen roldür. Bir sıkıntınız olursa onlara yazabilirsiniz.

    <@&980208465941241856>
    Twitch moderator'u olanlara verilir.

    <@&980208713384218684>
    Moderatorler'e verilir.

    <@&1009398417841201173>
    Discord Chatinden sorumludur.

    <@&1009879783326367844>
    Yetkili olabilmek için chatte aktif ve yayınlara düzenli gelmeniz gerekmektedir. Bi kusur bulunamazsa 1 hafta sonra <@&1009398417841201173> olurlar.

    <@&990628566490296350>
    Yayınlarda aktif olanlara ve Fatih Adının arkadaşlarına verdiği roldür.

    <@&997194538152112308>
    Twitchten abone olanlara otomatik olarak verilen roldür.

    <@&997223349992296529>
    Yayıncılara ve Youtuberlara verilen roldür.

    <@&982207451015282738>
    Kuralları uymayanlara verilen roldür.

    <@&980206697522008124>
    Sunucuya katılan herkese verilen roldür.

    <@&980206822189310032>
    Sunucu Botlarına verilen roldür.

    <@&997194538152112309>
    Twitchten aldığınız 10 tl lik aboneliğin rolüdür.

    <@&997194538152112310>
    Twitchten aldığınız 20 tl lik aboneliğin rolüdür.

    <@&997194538152112311>
    Twitchten aldığınız 50 tl lik aboneliğin rolüdür.
    `)
    .setImage("https://cdn.discordapp.com/attachments/990629318650654770/990631284504133744/standard.gif")
    .setColor("Blue");
    message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["rolbilgilendirme", "r"]
};

exports.help = {
  name: "rol-bilgilendirme"
};