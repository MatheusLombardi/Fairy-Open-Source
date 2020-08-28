const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
const embedperm = new Discord.MessageEmbed()
        .setDescription('<a:load:746510943911018547> | Aguarde enquanto a latência está sendo calculada.')
        .setColor('#f17a19')
const sentEmbed = await message.channel.send(embedperm)
setTimeout(function(){
  sentEmbed.delete();
  const pingEmbed = new Discord.MessageEmbed()
        .setTitle("Informações obtidas através do serviço da VPS:")
        .setFooter("As informações de latência variam de acordo com nosso provedor.")
        .setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c6f1009-9bed-42c1-90b2-5672c47100ef/d6bnr2p-287dfdfd-e613-41b7-b262-6d883e1bd099.png/v1/fill/w_365,h_352,strp/fairy_tail_natsu_dragneel_png_by_bloomsama_d6bnr2p-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNTIiLCJwYXRoIjoiXC9mXC83YzZmMTAwOS05YmVkLTQyYzEtOTBiMi01NjcyYzQ3MTAwZWZcL2Q2Ym5yMnAtMjg3ZGZkZmQtZTYxMy00MWI3LWIyNjItNmQ4ODNlMWJkMDk5LnBuZyIsIndpZHRoIjoiPD0zNjUifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yHFLuZ7dmsACwbhsq46s-XSk7UhU-bPgpoTOc4ZsEog')
        .setDescription(`📡 Informações calculadas! Olhe abaixo minhas informações de latência:\n 
        <:net:746549358337458227> Minha latência é: ${sentEmbed.createdTimestamp - message.createdTimestamp}ms\n<:config:746549376977076244> A latência da API é: ${Math.round(bot.ws.ping)}ms`)
        .setColor("#f17a19");
    message.channel.send(pingEmbed);
}, 4000); 
}
