const commando = require("discord.js-commando");

class NinjaCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: 'ninja',
            group: 'music',
            memberName: 'ninja',
            description: 'The fuck you say to me you little shit'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel)
            message.member.voiceChannel.join()
                .then(connection =>{
                    connection.playFile("C:/Users/kaspe/Desktop/Bot/ninja.mp3");                    
                })
    }
}

class IlluminatiCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: 'illum',
            group: 'music',
            memberName: 'illuminati',
            description: 'illuminati'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel)
            message.member.voiceChannel.join()
                .then(connection =>{
                    connection.playFile("C:/Users/kaspe/Desktop/Bot/illuminati.mp3");                   
                })
    }
}

class ThreeHPCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: '3hp',
            group: 'music',
            memberName: '3hp',
            description: '3hp or something'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel)
            message.member.voiceChannel.join()
                .then(connection =>{
                    connection.playFile("C:/Users/kaspe/Desktop/Bot/3hp.mp3");                   
                })
    }
}

module.exports = {
    NinjaCommand,
    IlluminatiCommand,
    ThreeHPCommand
}