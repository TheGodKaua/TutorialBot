const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Você não tem **permissão** suficiente !")
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido !")
    if(!member.kickable)
      return message.reply("Eu não posso kickar esse usuário, ele pode ter um cargo maior que o meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui kickar o membro devido o: ${error}`))

      message.channel.send(`${message.author}`)

      let pEmbed = new Discord.RichEmbed()
          .setTitle(":hammer: Kick")
          .addField("Membro Kickado:", `${member.user.tag}`)
          .addField("Kickado por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("DARK_RED").setTimestamp()

          message.channel.send(pEmbed)
          
}

module.exports.help = {
    name: "kick"
}
