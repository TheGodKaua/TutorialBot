const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;

    message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle(":ping_pong:Pong")
        .addField(":robot:BOT: ", Math.floor(clientping) + "ms")
        .addField(":desktop:API: ", Math.floor(client.ping) + "ms")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RED")

        message.channel.send(pEmbed)
}

module.exports.help = {
    name: "ping"
}
