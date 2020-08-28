const Discord = require("discord.js"); 
const c = require('../../config.json'); 

exports.run = (bot, message, args) => {
 // Fala seus merdas, tio Itsuki aqui nessa merda, vamos lá começar? Alguns textos explicativos NÃO são meus, alguns comandos foram usados de base e foram beem explicados
  let erro = new Discord.MessageEmbed()

  .setTitle('Como usar o comando?')
  .setDescription("<:info:746814705418502144> | Para utilizar o comando é bem simples. Basta dar o nome do emoji + o link dele, que ele será adicionado no mesmo instante ao servidor.")
  .setColor('#f17a19')  
  
  if (!args[0]) return message.channel.send(erro); // Caso o usuário não escreva o nome do emoji, daremos a embed de explicação
  if (!args[1]) return message.channel.send(erro); // Mesma coisa com o URL
    // Caso o usuário não possua a permissão necessária, vamos aviar!
    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send({embed: {color: '#f17a19', description: "<:erro:746742674933022731> | Você não tem permissão o suficiente."}})
try { // Utilizando a função 'try', literalmente traduzindo: Tentar
    message.guild.emojis.create(args[1], args[0]).then(emoji => { // Criar um emoji com as informações
      return message.channel.send({embed: {color: '#f17a19', description: "<:sucesso:746815629310427236> | Emoji adicionado ao servidor com sucesso."}})// Caso não haja erro, iremos criar
    });
  } catch (err) { // Agora, iremos procurar um erro
    message.channel.send(`\`\`\`js\n${err}\`\`\``) // Se acharmos, iremos avisar o que deu
  }
};

exports.help = { 
  name: 'addemoji',
}
