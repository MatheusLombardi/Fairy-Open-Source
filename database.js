const mongoose = require('mongoose')
const Discord = require('discord.js')
const bot = new Discord.Client();

mongoose.connect("", { useNewUrlParser: true, useUnifiedTopology: true
}, (err) => { //Não se esqueça de por o link em ""
    if (err) return console.log(`Erro ao conectar no database!\n${err}`)
    console.log(`O bot foi conectado ao banco de dados com sucesso.`)
})

var Schema = mongoose.Schema
var guilda = new Schema({
    _guild_id: {
        type: String,
        default: "-/-",
        required: true
    },
    prefixo: {
        type: String,
        default: "f!" 
    },
})

var usuarios = new Schema({
    id: {
        type: String,
        default: "-/-"
    },
    _guild_id: {
        type: String,
        default: "-/-",
        required: true
    },
    nome: {
        type: String,
        default: "-/-",
    },
    nome_guilda: {
        type: String,
        default: "-/-",
    },
})

var Guilda = mongoose.model("Guildas", guilda)
var Usuarios = mongoose.model("Usuarios", usuarios)
module.exports = {
Usuario: Usuarios,
Guilda: Guilda
}
