const Discord = require('discord.js');
var approx = require('approximate-number');

module.exports.run = async (client, message, args) => {                
     // Em baixo não se esqueça de configurar o seu ID.
    if (message.author.id == '361618620041789442' || message.author.id == '68844375476351799' || message.author.id == '' || message.author.id == '' || message.author.id == '') { 

message.delete();
        
            var servers = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount)
            var num = 0;
            var pagina = 1;
            var totalPages = parseInt(servers.size/10+1);
            
            var embed = new Discord.MessageEmbed()
            .setTitle(`(${client.guilds.cache.size}) Servidores |  (${client.users.cache.size}) Usuarios`)
            .setDescription(`${servers.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\` - Usuários: \`${approx(se.memberCount)}\``).slice(0,10).join('\n')}`)
            .setFooter(`Página ${pagina} de ${totalPages}`, message.author.displayAvatarURL())
            .setAuthor('Todos os servidores de Fairy:', client.user.displayAvatarURL())
            .setColor('#f17a19')
            .setThumbnail(client.user.displayAvatarURL())
            message.channel.send(embed).then(async ser => {

                if(servers.size > 10) {

                    await ser.react("⬅");
                    await ser.react("➡");
                    
                    const voltar = ser.createReactionCollector((r, u) => r.emoji.name === "⬅" && u.id === message.author.id, { time: 100000 });
                    const proximo = ser.createReactionCollector((r, u) => r.emoji.name === "➡" && u.id === message.author.id, { time: 100000 });
                
                                voltar.on("collect", async r => {
                                    if(pagina !== 1) {
                                        num = num-10
                                        num = num.toString().length > 1 ? num-parseInt(num.toString().slice(num.toString().length-1)) : 0
                                        pagina -= 1

                                     var embed = new Discord.MessageEmbed()
                                     .setTitle(`(${client.guilds.cache.size}) Servidores |  (${client.users.cache.size}) Usuarios`)
                                    .addField(`Servidores:`, `${servers.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\` - Usuários: \`${approx(se.memberCount)}\``).slice(pagina*10-10,pagina*10).join('\n')}`)
                                    .setFooter(`Página ${pagina} de ${totalPages}`, message.author.displayAvatarURL())
                                    .setColor('#e4e100')
                                    .setAuthor('Servidores em que Estou', client.user.displayAvatarURL())
                                    .setThumbnail(client.user.displayAvatarURL())
                                    ser.edit(embed)
                                    } else {
                                        pagina = totalPages
                                        num = totalPages*10-20

                                        var embedb = new Discord.MessageEmbed()
                                        .setTitle(`(${client.guilds.cache.size}) Servidores |  (${client.users.cache.size}) Usuarios`)
                                        .setDescription(`${servers.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\` - Usuários: \`${approx(se.memberCount)}\``).slice(totalPages*10-10,pagina*10).join('\n')}`)
                                        .setFooter(`Página ${pagina} de ${totalPages}`, message.author.displayAvatarURL())
                                        .setThumbnail(client.user.displayAvatarURL())
                                        .setAuthor('Servidores em que Estou', client.user.displayAvatarURL())
                                        .setColor('#e4e100')
                                    ser.edit(embedb)
                                    }
                                })
                
                                proximo.on("collect", async r => {
                                    if(pagina !== totalPages) {
                                        num = num.toString().length > 1 ? num-parseInt(num.toString().slice(num.toString().length-1)) : 0
                                        num = num+10
                                        pagina += 1

                                        var embedc = new Discord.MessageEmbed()
                                        .setTitle(`(${client.guilds.cache.size}) Servidores |  (${client.users.cache.size}) Usuarios`)
                                        .setDescription(`${servers.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\` - Usuários: \`${approx(se.memberCount)}\``).slice(pagina*10-10,pagina*10).join('\n')}`)
                                        .setFooter(`Página ${pagina} de ${totalPages}`, message.author.displayAvatarURL())
                                        .setThumbnail(client.user.displayAvatarURL())
                                        .setAuthor('Servidores em que Estou', client.user.displayAvatarURL())
                                        .setColor('#e4e100')
                                    ser.edit(embedc)

                                    } else {
                                        pagina = 1
                                        num = 0

                                        var embedd = new Discord.MessageEmbed()
                                        .setTitle(`(${client.guilds.cache.size}) Servidores |  (${client.users.cache.size}) Usuarios`)
                                        .setDescription(`${servers.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\` - Usuários: \`${approx(se.memberCount)}\``).slice(0,pagina*10).join('\n')}`)
                                        .setFooter(`Página ${pagina} de ${totalPages}`, message.author.displayAvatarURL())
                                        .setThumbnail(client.user.displayAvatarURL())
                                        .setAuthor('Servidores em que Estou', client.user.displayAvatarURL())
                                        .setColor('#e4e100')
                                        ser.edit(embedd)
                        }
                    })
                }
            })
    } else {
      return message.channel.send({embed: {color: '#f17a19', description: "<:erro:746742674933022731> | Você não tem permissão o suficiente, esse comando é apenas para os desenvolvedores."}})
    }
}
module.exports.info = {
  name: "servidores",
}
