const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let conferir = await bot.Database.Guilda.findOne({
        "_guild_id": message.guild.id
  })
  if (message.author.id == "384799694569734145" || message.member.permissions.has(["MANAGE_ROLES"])) {
    let member = message.mentions.members.first();
    if(!member) {
      return message.channel.send({embed: {color: '#f17a19', description: "<:erro:746742674933022731> | Forneça um usuário existente."}})
    }

    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
      if(!role) {
        return message.channel.send({embed: {color: '#f17a19', description: "<:erro:746742674933022731> | Eu não tenho permissão o suficiente contra esse usuário."}})
      }  
      if(!message.guild.me.permissions.has(["MANAGE_ROLES"])) {
        return message.channel.send({embed: {color: '#f17a19', description: "<:erro:746742674933022731> | Você não tem permissão o suficiente para ceder esse cargo ao usuário."}})
      }

      let staff = new Discord.MessageEmbed()
        .setColor('#f17a19')
        .setTitle(":pencil: | Addrole")
        .setDescription("O cargo: "+role.name+" Foi dado a "+member.displayName)
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({Size: 32}))
        .setTimestamp()
        .setFooter("ID do usuário: "+message.author.id)

      if(member.roles.cache.has(role.id)) {
        return message.channel.send("Já tem este cargo!")
      } else {
        await member.roles.add(role.id).catch(e => message.channel.send(e.message))
      let successfullyembed = new Discord.MessageEmbed()
        .setColor("#f17a19")
        .setDescription("<:sucesso:746815629310427236> | <@"+message.author.id+"> concedeu o cargo "+role.name+" ao usuário <@"+member.id+">")
          message.channel.send(successfullyembed)

        if(conferir.admlogs != "-/-") {  
          bot.channels.cache.get(conferir.admlogs).send(staff)
        } 
      }

    } else {
      return message.channel.send({embed: {color: '#f17a19', description: "<:erro:746742674933022731> | Você não tem permissão o suficiente."}})
    }
}    
