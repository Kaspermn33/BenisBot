const commando = require("discord.js-commando");
const ytdl = require("ytdl-core");

var servers = {}

class PlayCommand extends commando.Command
{

    

    constructor(client){
        super(client,{
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Plays music'
        });
    }

    async run(message, args){
        if (!args[1]){
            message.channel.sendMessage("Link pls");
            return;
        }

        if(!servers[message.member.voiceChannel]) {
            servers[message.guild.id] = {
                queue: []
            }
        }
        var server = servers[message.guild.id];

        server.queue.push(args[1]);

        if(message.member.voiceChannel)
            message.member.voiceChannel.join()
                .then(connection =>{
                    play(connection, message)                
                })
    }



    play(connection, message) {
        var server = servers[message.guild.id];

        server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

        server.queue.shift();

        server.dispatcher.on("end", function() {
            if(server.queue[0]) {
                play(connection, message);
            }
            else connection.disconnect();
        });
    }
}


module.exports = PlayCommand;