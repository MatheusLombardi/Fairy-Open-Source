const Discord = require('discord.js');
const cep = require('cep-promise');

module.exports.run = async (bot, message, args) => {

  if (!args[0]) {
    return message.channel.send({embed: {color: '#f17a19', description: "<:erro:746742674933022731> | Você precisa colocar 1 CEP, após o comando."}})
  }

  if (args[0].length > 8) {
    return message.channel.send({embed: {color: '#f17a19', description: "<:erro:746742674933022731> | O CEP deve conter apenas 8 digitos."}})
  }

  let json;
  cep(args[0])
    .then(a => {

      let embed = new Discord.MessageEmbed()
        .setTitle("Informações sobre o CEP desejado obtida!")
        .setColor('#f17a19')
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a0872cf0-524f-495c-b7be-a5dc0e07bde3/ddez7en-ddb359e2-004a-4cd1-b4a1-39e996ba96ec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTA4NzJjZjAtNTI0Zi00OTVjLWI3YmUtYTVkYzBlMDdiZGUzXC9kZGV6N2VuLWRkYjM1OWUyLTAwNGEtNGNkMS1iNGExLTM5ZTk5NmJhOTZlYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2XA1cS6qG1sgfHAovo-RGowA0qRh5kBCabaudCJ7mTc")
        .setDescription(`Deseja mais informações sobre esse CEP? Clique [aqui!](http://www.consultaenderecos.com.br/busca-cep/${args[0]})`)
        .addField("CEP:", `\`${a.cep}\``, true)
        .addField("Estado:", `\`${a.state}\``, true)
        .addField("Cidade:", `\`${a.city}\``, true)
        .addField("Bairro:", `\`${a.neighborhood}\``, true)
        .addField("Rua:", `\`${a.street}\``, true)
        .setTimestamp()
      message.channel.send(embed)
    }).catch(err => {
      return message.channel.send({embed: {color: '#f17a19', description: "<:erro:746742674933022731> | Não consegui achar esse CEP, talvez esteja errado."}})
    })
}

module.exports.help = {
  name: "cep",
  aliases: ['buscarcep', 'buscar-cep']
}
