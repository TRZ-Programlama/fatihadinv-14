const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
    var guild = message.guild
    const uyarı = new EmbedBuilder()
    .setDescription(`Bu komutu kullanabilmek için \`Bot Sahibi\` olmalısın.`)
    .setColor("#fc0606");
    if ((message.author.id !== "657963699000049694" && "478270527082070019"))  return message.reply({embeds: [uyarı]})
    message.delete()
    const embed = new EmbedBuilder()
    .setTitle("Meqan Sunucusu Kuralları")
    .setDescription(`
    <a:yildiz:1022832635703205918> Din, dil, irk veya cinsiyet ayrım, içeren söylemlerde bulunmak
    <a:yildiz:1022832635703205918> Siyasi ya da dini sohbetler başlatmak ve içinde bulunmak
    <a:yildiz:1022832635703205918> Herhangi bir kimseyi hedef alan hakaretlerde bulunmak
    <a:yildiz:1022832635703205918> Her türlü satış ve özelden reklam, chatte reklam içeren paylaşımlar yapmak
    <a:yildiz:1022832635703205918> Flood, Spam, vb. yapmak
    <a:yildiz:1022832635703205918> Kişisel kavgaları Discord sohbet kanallarına taşımak
    <a:yildiz:1022832635703205918> +18 içerikli paylaşımlar yapmak
    <a:yildiz:1022832635703205918> Yazışma kanallarını amacı dışında kullanmak
    <a:yildiz:1022832635703205918> Özel karakter iceren isimler kullanmak
    <a:yildiz:1022832635703205918> Oyun, abonelik, vb. dilenmek
    <a:yildiz:1022832635703205918> Olası dolandırıcı unsur barındıran ve satış içerikli Discord durum mesajlarını kullanmak
    <a:yildiz:1022832635703205918> Herhangi bir sebepten dolayı herhangi bir kişiyi ya da topluluğu hedefleyen linç girişimi
    <a:yildiz:1022832635703205918> Kural ihlali yapan kişi ya da kişiler ile tartışmaya girmek
    <a:yildiz:1022832635703205918> +18 pp/nick ve bio yapmak `)
    .setColor("Green")
    .setThumbnail(guild.iconURL({dynamic: true}))
    .setImage("https://cdn.discordapp.com/attachments/1014851995246538762/1022831911736967198/kurallar.gif")
    .setFooter({ text: `NOT: BU KURALLARA UYMAYANLAR YETKİLER TARAFINDAN UYARILIR EĞER HALA DEVAM EDERSE SUNUCUDAN ATILIR.` });
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["k"]
};

exports.help = {
  name: "kurallar"
};

/*
#region RENK
Kırmızı
.setColor("#fc0606")
Yeşil  
.setColor("#3bdc3d")
Mavi
.setColor("#007fff")
*/