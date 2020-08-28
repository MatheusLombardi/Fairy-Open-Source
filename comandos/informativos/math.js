const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calculate",
    description: "Get the answer to a math problem",


    async run (client, message, args){

        if(!args[0]) return message.channel.send('Olá, sou o matemático Fairy (O brabo). Irei te ensinar a usar o comando. Coloque dois números na frente pra calcular exemplo: 8 + 2, 8 * 2.');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Coloque uma **questão** válida.')
        }

        const embed = new Discord.MessageEmbed()
        .setColor('#f17a19')
        .setTitle('Calculadora do Fairy')
        .setThumbnail('https://media3.giphy.com/media/xkF2FArOY0tZcyUu10/source.gif')
        .addField('Questão:', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Resposta:', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}
