      const Discord = require('discord.js')
      exports.run = async (bot, message, args) => {

      let bins = new Discord.MessageEmbed()
        .setTitle('Informações do Diretório | Fairy')
        .setDescription("<:folder:746771380095418368> Diretório:`\`\`index.js                                       backup_746500684404228186.zip\ncomandos\npackage.json\nresourceRegistry.log \nconfig.json\n\`\`\`")
        .setColor('#f17a19')
        .setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c6f1009-9bed-42c1-90b2-5672c47100ef/d6bnr2p-287dfdfd-e613-41b7-b262-6d883e1bd099.png/v1/fill/w_365,h_352,strp/fairy_tail_natsu_dragneel_png_by_bloomsama_d6bnr2p-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNTIiLCJwYXRoIjoiXC9mXC83YzZmMTAwOS05YmVkLTQyYzEtOTBiMi01NjcyYzQ3MTAwZWZcL2Q2Ym5yMnAtMjg3ZGZkZmQtZTYxMy00MWI3LWIyNjItNmQ4ODNlMWJkMDk5LnBuZyIsIndpZHRoIjoiPD0zNjUifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yHFLuZ7dmsACwbhsq46s-XSk7UhU-bPgpoTOc4ZsEog')
        .setFooter("Fairy Team • ©️ Todos os direitos reservados.",bot.user.displayAvatarURL({format: "png", size: 32}));
        message.channel.send(bins)
        }

        
