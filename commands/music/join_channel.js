const commando = require("discord.js-commando");
const YTDL = require("ytdl-core");

function Play(connection, message){
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0]){
            Play(connection, message);
        }
        else{
            connection.disconnect();
        }
    })
}

class JoinChannelCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: 'spil',
            group: 'music',
            memberName: 'join',
            description: 'Joins the channel the user is in'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel)
            message.member.voiceChannel.join()
                .then(connection =>{
                    if(!servers[message.guild.id]){
                        servers[message.guild.id] = {queue: []}
                    }
                    var server = servers[message.guild.id]
                    server.queue.push(args);
                    Play(connection, message);
                })
    }
}


module.exports = JoinChannelCommand;