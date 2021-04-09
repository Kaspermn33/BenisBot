const commando = require("discord.js-commando");

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


module.exports = IlluminatiCommand