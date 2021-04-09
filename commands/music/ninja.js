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


module.exports = NinjaCommand