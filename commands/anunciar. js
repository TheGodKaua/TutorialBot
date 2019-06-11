const Discord = require('discord.js')

module.exports = {
    run: (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não pode usar esse comando.")
        message.delete().catch()

        let splitarg = args.join(" ").split(" / ")
        let titulo = splitarg[0]
        let anuncio = splitarg[1]

        if(!titulo){
            message.reply("Use o formato ``-anunciar <titulo> / <anuncio>``")
            return
        }

        if(!anuncio){
            message.reply("Use o formato ``-anunciar <titulo> / <anuncio>``")
            return
        }

        let anuncioembed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .addField(`${titulo}`, `**${anuncio}**`)
        .setFooter(`Anuncio feito por ${message.author.tag}`)
        .setTimestamp();

        message.channel.send(anuncioembed)
    }
}
