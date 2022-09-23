const client = require("../bot");
const { Collection, ActivityType } = require("discord.js")
const fs = require("fs");
const { type } = require("os");

client.on("ready", () => {
console.log(`${client.user.tag} Bot Aktif!`)
client.user.setActivity(`twitch.tv/fatihadin`, {type: ActivityType.Streaming, url: "https://www.twitch.tv/fatihadin"});

console.log(`🤜 Komut Yüklenecek : 21`)
client.commands = new Collection();
client.aliases = new Collection();

//Public Yükleme
fs.readdir("./komutlar/public/", (err, files) => {
    if (err) console.error(err);
    console.log(`---------------------------------------------`)
    files.forEach(f => {
        let props = require(`../komutlar/public/${f}`);
        
        console.log(`🤙 Yüklenen Public komut: ${props.help.name}`);
        
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});
//Moderasyon Yükleme
fs.readdir("./komutlar/moderasyon/", (err, files) => {
    if (err) console.error(err);
    console.log(`---------------------------------------------`)
    files.forEach(f => {
        let props = require(`../komutlar/moderasyon/${f}`);

        console.log(`👌 Yüklenen Mod komut: ${props.help.name}`);
            
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
            });
        });
    });
//Eğlence Yükleme
fs.readdir("./komutlar/eglence/", (err, files) => {
    if (err) console.error(err);
    console.log(`---------------------------------------------`)
    files.forEach(f => {
        let props = require(`../komutlar/eglence/${f}`);
                
        console.log(`🤟 Yüklenen Eğlence komut: ${props.help.name}`);
                
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
            });
        });
    });
    //Sunucu Komut Yükleme
fs.readdir("./komutlar/meqan/", (err, files) => {
    if (err) console.error(err);
    console.log(`---------------------------------------------`)
    files.forEach(f => {
        let props = require(`../komutlar/meqan/${f}`);
                    
        console.log(`🤖 Yüklenen Sunucu komut: ${props.help.name}`);
                    
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
            });
        });
    });
    /*
    //Müzik Komut Yükleme
fs.readdir("./komutlar/muzik/", (err, files) => {
    if (err) console.error(err);
    console.log(`---------------------------------------------`)
    files.forEach(f => {
        let props = require(`../komutlar/muzik/${f}`);
                        
        console.log(`🤖 Yüklenen Müzik komut: ${props.help.name}`);
                        
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
            });
        });
    });*/
});