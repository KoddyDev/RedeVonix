const config = require("../../config")
let { MessageEmbed } = require("discord.js")
const cooldownn = new Set()
module.exports = async (client, button) => {
    for(let sla = 0; sla < config.ticket.tipos.length; sla++) {
        if(button.values[0] === config.ticket.tipos[sla].id) {
await button.reply.defer()
let message = button.message
		let form = config.ticket.tipos[sla]
const member = button.clicker.member
const canal = button.message.channel
        const answers = []

        if(cooldownn.has(member.id)) {
            canal.send(`${member}, você deve esperar 3 minutos entre um comando e outro!`).then(msg => msg.delete({ timeout: 7000 }).catch(() => { }))
            return
        }

        cooldownn.add(member.id)
        setTimeout(() => cooldownn.delete(member.id), 180000)

        const dmChannel = await member.user.createDM()
        async function createForm({ channel, time, user }) {
            const { once } = require("events")
            for (const question of form.perguntas) {
                console.log(question)
                const embed = new MessageEmbed()
                    .setColor("GREEN")
                    .addField(`Pergunta: ${form.name}`, `${question.text} \n\n\`Você têm ${time / 1000} segundos para responder!\``)
                    .setTimestamp()
                    .setFooter(`Leia com atenção!`)

                await member.send(embed).catch(() => { throw new Error('block') })

                let filter = m => m.author.id === user.id && m.channel.id === channel.id && (m.content.length >= 1 || m.attachments.first())
                if (question.filter === 'number') filter = m => m.author.id === user.id && m.channel.id === channel.id && (m.content.length >= 1 || m.attachments.first()) && !isNaN(m.content)

                const options = { time: time, max: 1 }

                const collector = channel.createMessageCollector(filter, options)

                const [collected, reason] = await once(collector, 'end')

                if (reason == 'limit') answers.push({ question: question.text, answer: collected.first().content + ((collected.first().attachments.first() && '\n(' + collected.first().attachments.map(a => a.proxyURL).join(',') + ')') || '') })

                else if (reason == 'channelDelete') throw new Error('channelDelete')

                else if (reason == 'time') throw new Error('time')

            }

            return answers

        }
    
    
        
                createForm({channel: dmChannel, time: 120000, user: button.clicker.user })
                .then(async respostas => {

                   
                    const canalLog = message.guild.channels.cache.get(client.channels2.get(button.values[0]))
                    if (!canalLog) return member.send('Formulário incompleto, o canal para enviar as respostas deste formulário não foi definido neste servidor, fale com algum staff para resolver isso.')                
    
                    const about = `**\`${form.name}\`** \`(${member.id})\``
    
                    const embed = new MessageEmbed()
                        .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                        .setDescription(answers.map(a => `**${a.question}**\n${a.answer}`).join('\n\n'))
                        .setColor('GREEN')
    
                    canalLog.send({ embed, content: about }).then(async msg => {
                        console.log(msg.content)
                        const emojisAvaliacao = form.avaliacao ? form.avaliacao.map(i => i.trigger) : []
                        for await (const e of emojisAvaliacao) msg.react(e)
                    })
                
                    member.send('Formulário completo, suas respostas serão enviadas para nossa equipe!') 
                               
                })
                .catch(err => {            
                    if (err.message === 'block') return canal.send(`${member}, desbloqueie seu privado para que possa fazer o formulário!`).then(msg => msg.delete({ timeout: 7000 }).catch(() => { }))
                    if(err.message !== 'time') console.log(err)
                    member.send('Formulário finalizado, o tempo para responder se esgotou.')
    
                    if (!answers[0]) return
                    const canalLog = message.guild.channels.cache.get(client.channels2.get(button.values[0]))
                    if (!canalLog) return 
    
                    const embed = new MessageEmbed()
                        .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                        .setDescription(answers.map(a => `**${a.question}**\n${a.answer}`).join('\n\n'))
                        .setColor('RED')
    
                    canalLog.send(embed)
                        
                    
                
                })
            }
        
            
    }	
}
