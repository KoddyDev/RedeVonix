const config = require('../../config')

module.exports.mensagemYt = (client) => {
    return '<:yt:642177171078512685> **VonixBot** • ``REQUISITOS YOUTUBERS``\n\n``[MiniYT]``\n\n> • Possuir no mínimo 100 inscritos em seu canal.\n> • A tag tem duração de 7 dias, logo, para sua renovação será necessário outro vídeo no servidor.\n> • Caso ainda não tenha vídeos gravado no servidor, reposte o trailer.\n> • O vídeo deve possuir no mínimo 3 minutos.\n\n``[YT]`` \n\n> • Possuir no mínimo 500 inscritos em seu canal.\n> • Caso ainda não tenha vídeos gravado no servidor, reposte o trailer.\n> • A tag tem duração de 15 dias, logo, para sua renovação será necessário outro vídeo no servidor.\n> • O vídeo deve possuir no mínimo 3 minutos.\n\n``[YT+]``\n\n> • Possuir no mínimo 1000 inscritos em seu canal.\n> • Possuir, no mínimo, um vídeo explicativo gravado no servidor.\n> • A tag tem duração de 15 dias, logo, para sua renovação será necessário outro vídeo no servidor.\n> • O vídeo deve possuir no mínimo 3 minutos!'
}

module.exports.mensagemLoja = (client) => {
    return `${config.linkLoja}`
}

module.exports.mensagemBemvindo = (client, member) => {
    return {
        "content":`${member}`,
        "embed":{
           "color": 'GREEN',
           "title":`**🚪 | Seja bem-vindo(a) ${member.user.username}**!`,
           "thumbnail": {
              "url" : `${member.user.displayAvatarURL({ dynamic: true })}`
           },
           "description":`• Você é o  ${member.guild.memberCount} membro do nosso discord, esperamos que goste do nosso servidor, leia as regras e bom jogo.`,
           "fields": [
             {
                 "name": "**🎮 | IP**",
                 "value": "``jogar.redevonix.com``",
                 "inline": false
             },
             {
                 "name": "**🛒| Loja**",
                 "value": "<https://loja.redevonix.com>",
                 "inline": false
             },
             {
                 "name": "📛 Precisando de ajuda?",
                 "value": "Caso você tenha alguma dúvida ou problema, chame a nossa equipe!",
                 "inline": true
             },
             {
                 "name": "👮 Evite punições!",
                 "value": "Leia as nossas #regras para evitar ser punido no servidor!",
                 "inline": true
             }
           ],
         "footer": {
           "text": "Rede Vonix • © Todos os direitos reservados."
         }
        }
     }
}

module.exports.mensagemSuporte = () => {
    return '🤖 **VonixBot** - \`\`SUPORTE\`\`\n\n> Selecione o que você deseja suporte para iniciar o Ticket\n\n ||@everyone @here||'
}