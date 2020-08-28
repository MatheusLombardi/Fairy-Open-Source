// ===== Credenciais para o bot ficar online. =====
var express = require('express');
var app = express();
const http = require('http');

app.get("/", (request, response) => {
  response.sendStatus(200); //Ele recepta a resposta e responde
  //console.log("Ping receptado");
});
app.listen(process.env.PORT);


// ===== O bot se inicializa aqui! ======
const moment = require('moment');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.Discord = Discord;
bot.Database = require('./database.js');


//const Enmap = require("enmap");
const fs = require("fs");
bot.fs = fs;
//bot.mathjs = require("mathjs");

// ===== Inicializa os sistemas de módulos. =====
bot.pastas = {}; //Aqui é associa um comando a uma pasta
bot.listas_comandos = {};
var logcrr = "Módulos carregados: ";
var diretórios = ["comandos"];/// Checa a relevância dos sistemas
var pasta, subpasta;
while(diretórios.length){
  pasta = diretórios.shift();//Seleciona uma pasta para carregar os arquivos dela
  try{
    let nomes_arquivos = bot.fs.readdirSync("./"+pasta+"/");
    for(let nomea of nomes_arquivos){
      if(!nomea.endsWith(".js")){//Quando for pasta (nunca colocar .txt nas pastas de sistemas e comandos)
        diretórios.unshift(pasta+'/'+nomea);//Função para enfileirar os diretórios
        continue;
      }
      try{
        let código = require("./"+pasta+"/"+nomea);
        nomea = nomea.split(".")[0]; //Remove o .js
        if(bot[nomea])
          console.log("Tem 2 .js de mesmo nome: "+nomea);
        
        bot[nomea] = código.run;//Atribui a função run do arquivo como atributo de bot nomeado pelo nome do arquivo
        bot.pastas[nomea] = pasta;//Assinala a pasta de cada comando e sistema
        logcrr += nomea+", "; 
        
        if(pasta.includes("comandos/")){
          subpasta = pasta.slice(9);
          if(!bot.listas_comandos[subpasta])//Se não tem a lista pra essa subpasta
            bot.listas_comandos[subpasta] = [];
            
          bot.listas_comandos[subpasta].push(bot.prefixo+nomea+"\n");
        }
          
      }catch(erro){
        console.log(">>Erro ao carregar "+nomea+": "+erro.message+" - "+erro.name);
      }
    }
  }catch(erro){ 
    console.log(">>Erro ao ler "+pasta+": "+erro.message," - ",erro.name);
  }
}
console.log(logcrr +"carregados.");

// ===== Carrega os eventos da API. =====
bot.nome_eventos = [];
var logcrr = "Carreguei eventos: ";
try{//Faz a leitura dos eventos relativos a API discord.js
  let arquivos_eventos = bot.fs.readdirSync("./eventos/");
  for(let nomee of arquivos_eventos){
    if(!nomee.endsWith(".js"))
      continue;
    try{
      let código = require("./eventos/"+nomee);
      nomee = nomee.split(".")[0];//Remove .js
      bot.on(nomee, código.bind(null, bot));
      logcrr += nomee+", "; bot.nome_eventos.push(nomee);
    }catch(erro){
      console.log(">>Erro ao carregar o evento "+nomee+": "+erro.message+" - "+erro.name);
    }
  }
}catch(erro){
  console.log(">>Erro ao ler eventos! "+erro.message+" - "+erro.name);
}
console.log(logcrr +"carregados.");


try{
  console.log("Adentrando a api do discord, aguarde...");
  bot.login(process.env.TOKEN);//Faz login na API do discord com a credencial do bot
}catch(e){
  console.log("Ocorreu 1 erro inesperado ao tentar logar na api do discord, tente novamente.", e); ///Notifica o bot disso
  //console.log(e);
}
