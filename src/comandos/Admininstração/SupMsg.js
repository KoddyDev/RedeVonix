var disbut = require("discord-buttons")
const Ticket = require("../../Database/Models/Tickets")
const config = require("../../config")
const { MessageEmbed } = require("discord.js")
const { mensagemSuporte } = require("../../utils/functions/Messages")
module.exports = {
    name: "suportemsg",
    run: async (client, message) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você precisa da permissão ``Admininstrador`` para utilizar este comando :(")
    
const select = new disbut.MessageMenu()
    .setID('ticket')
    .setPlaceholder('Clique para visualizar as opções')
    .setMaxValues(1)
    .setMinValues(1)
    for(let i = 0; i < config.ticket.tipos.length; i++) {
        let novo = new disbut.MessageMenuOption()
        .setValue(config.ticket.tipos[i].id)
        .setLabel(config.ticket.tipos[i].name)
        if(config.ticket.tipos[i].emoji.personalizado) {
            novo.setEmoji(config.ticket.tipos[i].emoji.emojiId)
        } else if(!config.ticket.tipos[i].emoji.personalizado) {
            novo.setEmoji(config.ticket.tipos[i].emoji.emoji)
        }
        if(config.ticket.tipos[i].description.length > 2) { novo.setDescription(config.ticket.tipos[i].description) }
        
        select.addOption(novo)
    }
 
    const embed = new MessageEmbed()
    .setDescription(mensagemSuporte())
    .setColor('ORANGE')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))

        message.channel.send(embed, select)
        
    }
}