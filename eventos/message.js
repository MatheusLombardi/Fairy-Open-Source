
const Discord = require('discord.js')
const bot = new Discord.Client();
const fs = require('fs')

module.exports = async (bot, message) => { 
  if(message.author.bot)
    return; 
  
  
  
  let serv = await bot.Database.Guilda.findOne({
        "_guild_id": message.guild.id
    })
    if(!serv) {
           await new bot.Database.Guilda({
                _guild_id: message.guild.id,
                nome: message.guild.name,
                prefixo: "f!",
            }).save();
      }
      
  
  let membros = await bot.Database.Usuario.findOne({
        "_guild_id": message.guild.id,
        "id": message.author.id
    })
    if(membros) {
    
       }
      if(!membros) {
       await new bot.Database.Usuario({
              id: message.author.id,
              _guild_id: message.guild.id,
              nome: message.author.username,
              nome_guilda: message.guild.name,
          }).save();
      }
  
  if(!message.content.startsWith(serv.prefixo)) {//se a msg não inicia com o prefixo 
    var mencionados = message.mentions.members;
    if(mencionados.size && mencionados.has("699360039147798568")){
      return message.channel.send(`Meu prefixo neste servidor é: \``+serv.prefixo+`\``)
    }else 
      return;//-> cai fora
  }
  
  //if(message.content.startsWith("=="))//se for comando de outro bo com o prefixo ==
  //  return;
  
  var arg_texto = message.content.slice(serv.prefixo.length); //remove o prefixo da msg
  var argumentos = arg_texto.trim().split(/ +/g); //divide a msg do comando
  var comando = argumentos.shift().toLowerCase(); //pega o comando, taca pra minúsculo
  
  var chat = message.channel;
  let remover = comando.length+1;
  arg_texto = arg_texto.slice(remover);
  
  switch(comando){
   case "help":
   case "comandos":
    comando = "ajuda"; break; 
  }
  
  
  if(bot.pastas[comando] && bot.pastas[comando].includes("comandos")){//aqui ta verificando se o comando existe
    
    /*if(!message.guild && !["ping", "litten", "eevee", "comandos", "ajuda", "raça", "r", "magia", "classes", "D&D"].includes(comando)){//se é mensagem privada, bloqueia se não for esses comandos
      return chat.send("Este comando não pode ser executado no privado!"); 
    }*/
    
    console.log(message.author.tag + '  ' + serv.prefixo + comando + ' ' + arg_texto);
    bot[comando](bot, message, argumentos, arg_texto, chat); //// client, mensagem, comando, argumentos, msg_str, chat, mlog, acesso
    
  }else{//Se não existe o comando, cai fora
    
    if(!message.guild){//se é mensagem privada
      return; //cai fora 
    }
  }
}
