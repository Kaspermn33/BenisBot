const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;
    if (msg.content === '-ping') {
        msg.reply('Pong!');
    } else if(msg.content === '-ninja') {
        playMp3("ninja", msg);
    } else if(msg.content === '-illum' | msg.content === '-illuminati') {
        playMp3("illuminati", msg)
    }else if(msg.content === '-1hp') {
        playMp3("1hp", msg)
    }
});

async function playMp3(name, msg){
    if (msg.member.voice.channel) {
        const connection = await msg.member.voice.channel.join();
        const dispatcher = connection.play('./sounds/' + name + '.mp3');

        dispatcher.on('start', () => {
            console.log(name + ' is now playing!');
        });
        
        dispatcher.on('finish', () => {
            console.log(name + ' has finished playing!');
        });
        
        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
    }
}


client.login(config.token)