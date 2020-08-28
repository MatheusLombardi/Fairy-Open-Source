      const Discord = require('discord.js')
      exports.run = async (bot, message, args) => {

      let bins = new Discord.MessageEmbed()
        .setTitle('Informações de Hospedagem | Fairy')
        .setDescription("<:id:746531574614327339> Nome/ID: **699360039147798568**\n<:memo:746531094341353534>Memória: **200MB/500MB\n<:js:746533885545807943>** Linguagem: **JavaScript**\n<:blacklist:746531108384145428> Blacklist: **N/A**")
        .setColor('#f17a19')
        .setThumbnail('https://cdn.discordapp.com/attachments/746517181893967872/746527558983614564/1598056424044.png')
        .setFooter("Fairy Team • ©️ Todos os direitos reservados.",bot.user.displayAvatarURL({format: "png", size: 32}));
        message.channel.send(bins)
        }

        
