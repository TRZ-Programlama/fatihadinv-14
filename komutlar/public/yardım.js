const {EmbedBuilder, Discord, SelectMenuBuilder, ActionRowBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
    const m = await message.reply({embeds: [ 
        new EmbedBuilder()
        .setColor('01FFFF')
		.setTitle('Fatih Adın Yardım Menüsü')
        .setThumbnail('https://cdn.discordapp.com/avatars/1014842707287482428/5f6eb08b231d53685a906603404765cd.png?size=1024')
		.addFields(
            {
                name: "・Bilgilendirme ↷",
                value: "> Komutları kullanmak için **f!** yazmanız gerekir aksi takdirde çalışmaz."
            },
            {
                name: "・Public ↷",
                value: "> Butonuna tıklarsanız. **Public** Komutları hakkında bilgi alabilirsiniz."
            },
            {
                name: "・Moderasyon ↷",
                value: "> Butonuna tıklarsanız. **Moderasyon** Komutları hakkında bilgi alabilirsiniz."
            },
            {
                name: "・Eğlence ↷",
                value: "> Butonuna tıklarsanız. **Eğlence** Komutları hakkında bilgi alabilirsiniz."
            }
        )
    ], components: [ 
        new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
            .setCustomId("help")
            .setPlaceholder("Yardım menüsü seçin")
            .addOptions([
				{
                    label: "Yardım",
                    value: "yardim",
                    description: "Yardım Menüsünü gösterir!"
                },
                {
                    label: "Public",
                    value: "public",
                    description: "Public yardım sayfasını gösterir!",
                },
                {
                    label: "Moderasyon",
                    value: "moderasyon",
                    description: "Moderasyon yardım sayfasını gösterir!",
                },
                {
                    label: "Eğlence",
                    value: "eglence",
                    description: "Eğlence yardım sayfasını gösterir!",
                }
            ])
        )
    ]})
        
    const sf = i => i.user.id === message.author.id
    const collector = m.createMessageComponentCollector({ filter: sf })
    collector.on("collect", async i => {

        if(i.values[0] == "yardim"){
            await i.deferUpdate()
            i.editReply({ embeds: [ 
                new EmbedBuilder()
                .setColor('01FFFF')
		        .setTitle('Fatih Adın Yardım Menüsü')
                .setThumbnail('https://cdn.discordapp.com/avatars/1014842707287482428/5f6eb08b231d53685a906603404765cd.png?size=1024')
		        .addFields(
                    {
                        name: "・Bilgilendirme ↷",
                        value: "> Komutları kullanmak için **f!** yazmanız gerekir aksi takdirde çalışmaz."
                    },
                    {
                        name: "・Public ↷",
                        value: "> Butonuna tıklarsanız. **Public** Komutları hakkında bilgi alabilirsiniz."
                    },
                    {
                        name: "・Moderasyon ↷",
                        value: "> Butonuna tıklarsanız. **Moderasyon** Komutları hakkında bilgi alabilirsiniz."
                    },
                    {
                        name: "・Eğlence ↷",
                        value: "> Butonuna tıklarsanız. **Eğlence** Komutları hakkında bilgi alabilirsiniz."
                    }
                )
            ]})
        }

		if(i.values[0] == "public"){
            await i.deferUpdate()
            i.editReply({ embeds: [ 
                new EmbedBuilder()
                .setTitle("Fatih Adın Public Yardım")
                .addFields(
                {
                    name: "f!oylama",
                    value: "Sunucu içinde oylama yapar.",
                    inline: true
                },
                {
                    name: "f!ping",
                    value: "Botun pingini gösterir.",
                    inline: true
                },
                {
                    name: "f!twitch",
                    value: "FatihAdin twitch kanalının linkini atar.",
                    inline: true
                },
                {
                    name: "f!youtube",
                    value: "FatihAdin youtube kanalının linkini atar.",
                    inline: true
                },
                {
                    name: "f!avatar",
                    value: "Avatarınızı gösterir.",
                    inline: true
                },
                {
                    name: "f!yetkilerim",
                    value: "Sunucudaki yetkilerin hakkında bilgi verir.",
                    inline: true
                },
                {
                    name: "f!user",
                    value: "Kullanıcı hakkında bilgi verir.",
                    inline: true
                },
                {
                    name: "f!istatistik",
                    value: "Bot hakkında bilgi verir.",
                    inline: true
                }
            )
            .setThumbnail('https://cdn.discordapp.com/avatars/1014842707287482428/5f6eb08b231d53685a906603404765cd.png?size=1024')
            .setTimestamp()
            .setColor("Blue")
            ]})
        }
        if(i.values[0] == "moderasyon"){
            await i.deferUpdate()
            i.editReply({ embeds: [ 
                new EmbedBuilder()
                .setThumbnail('https://cdn.discordapp.com/avatars/1014842707287482428/5f6eb08b231d53685a906603404765cd.png?size=1024')
                .setTimestamp()
                .setColor("Blue")
                .setTitle("Fatih Adın Moderasyon Yardım")
                .addFields(
                    {
                        name: "f!ban",
                        value: "Sunucudan üyeyi yasaklar.",
                        inline: true
                    },
                    {
                        name: "f!unban",
                        value: "Sunucudan yasaklanan üyenin yasağını kaldırır.",
                        inline: true
                    },
                    {
                        name: "f!kick",
                        value: "Sunucudan üyeyi atar.",
                        inline: true
                    },
                    {
                        name: "f!rol-al",
                        value: "@Rol @Üye yaparak etiketlediğin rolü etiketlediğin üyeden alır.",
                        inline: true
                    },
                    {
                        name: "f!rol-ver",
                        value: "@Rol @Üye yaparak etiketlediğin rolü etiketlediğin üyeye verirsin.",
                        inline: true
                    },
                    {
                        name: "f!sil",
                        value: "Toplu mesaj siler.",
                        inline: true
                    }
                )
            ]})
        }

        if(i.values[0] == "eglence"){
            await i.deferUpdate()
            i.editReply({ embeds: [ 
                new EmbedBuilder()
				.setColor("Blue")
                .setThumbnail('https://cdn.discordapp.com/avatars/1014842707287482428/5f6eb08b231d53685a906603404765cd.png?size=1024')
                .setTimestamp()
                .setTitle("Fatih Adın Eğlence")
                .addFields(
                    {
                        name: "f!adam-asmaca",
                        value: "Adam asmaca oynarsınız.",
                        inline: true
                    },
                    {
                        name: "f!balık-tut",
                        value: "Balık tutmaya çalışırsın",
                        inline: true
                    },
                    {
                        name: "f!token",
                        value: "Bot tokenini atar.",
                        inline: true
                    },
                    {
                        name: "f!zar-at",
                        value: "Zar atar.",
                        inline: true
                    }
                )
            ] })
        }
    })
};
exports.conf = {
  aliases: ["help"]
};

exports.help = {
  name: "yardım"
}