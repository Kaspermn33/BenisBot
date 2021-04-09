const commando = require("discord.js-commando");

class OneHPCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: '1hp',
            group: 'music',
            memberName: '1hp',
            description: '1hp or something'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel)
            message.member.voiceChannel.join()
                .then(connection =>{
                    connection.playFile("C:/Users/kaspe/Desktop/Bot/1hp.mp3");                   
                })
    }
}

module.exports = OneHPCommand;