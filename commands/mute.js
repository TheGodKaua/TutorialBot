const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  let reason = args.slice(2).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida";
  message.delete().catch(O_o=>{})

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Mencione um usuário valido desse servidor.");
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Você não tem **permissão** para silenciar.")
  let muterole = message.guild.roles.find(`name`, "Mutado");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mutado",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Coloque um tempo válido.");

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    let embed = new Discord.RichEmbed()
       .setTitle("🔊UnMute Automático")
       .addField("Membro Desmutado", `<@${tomute.id}>`)
    message.channel.send(embed);
  }, ms(mutetime));
  
    
    let pEmbed = new Discord.RichEmbed()
        .setTitle("🔇TempMute")
        .addField('Membro Mutado: ', `${member.user.tag}` )
        .addField('Mutado por: ', `${message.author.tag}` )
        .addField('Motivo: ', `${reason}` )
        .addField('Duração: ', `${mutetime}` )
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM").setTimestamp()

        message.channel.send(pEmbed);

}

module.exports.help = {
  name: "mute"
}
