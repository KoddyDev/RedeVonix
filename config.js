const canalFacConfirmada = '831282178770862150'

module.exports = {
  serverIP: 'jogar.redevonix.com',
  linkLoja: 'https://loja.redevonix.com',
  prefix: '/',
  canalComandos: '735294428536897629',
  canalOnline: '738456311158800444',
  changeLogs: '735294426905313351',
  cargoCaptcha: '705471567307735058',
  canalBemvindo: '735294422341779649',
  canalHistorico: '744664025367052328',
  canalFacConfirmada: '831282178770862150',
  cargoMutado: '737124336363634731',
  rolesToReact: ['641447059387580447','641447285838053376','625811645859495956','625811644488089600'],
  permissionstoReact: ['ADMINISTRATOR'],
  mensagemCaptcha: {
    id: '793363862313369639',
    emoji: '🔐',
  },
  cargos: [
    {
      name: 'ajudante',
      id: '625811656383135764',
    },
    {
      name: 'moderador',
      id: '639890723637952514',
    },
    {
      name: 'admin',
      id: '641447059387580447',
    },
    {
      name: 'gerente',
      id: '641447285838053376',
    },
    {
      name: 'diretor',
      id: '625811645859495956',
    },
  ],
  emojis: [
    {
      channel: '865692278588440596',
      description: 'Formulário',
      avaliacao: [
        {
            // Aceitar
            trigger: '642177169769889793',
            exec: ({ member }) => member.send('Seu formulário foi aprovado, fique atento em breve você será convidado à nossa equipe.')
        },
        {
            // Negar
            type: 'reject',
            trigger: '642177170353160212',
            exec: ({ member }) => member.send('Seu formulário foi negado, você poderá tentar novamente em três dias.')
        }
      ],
      perguntas: [
        {
          text: 'Qual seu nick dentro do servidor?',
        },
        {
          text: 'Qual o seu nome?',
        },
        {
          text: 'Qual a sua idade?',
        },
        {
          text: 'Qual servidor deseja aplicar-se?',
        },
		{
          text: 'Qual a sua ocupação atualmente fora do servidor?',
        },
        {
          text: 'A quanto tempo joga no servidor?',
        },
        {
          text: 'Qual seu tempo de experiência com servidores de Minecraft?',
        },
        {
          text:
            'Já fez parte de alguma equipe de outros servidores? Descreva como foi.',
        },
        {
          text:
            'Porque quer ingressar em nossa equipe? Justifique sua resposta.',
        },
        {
          text: 'Descreva o que é trabalho em equipe.',
        },
      ],
    },
    {
      channel: '865692278588440596',
      description: 'Denunciar',
      avaliacao: [
        {
            // Aceitar
            trigger: '642177169769889793',
            exec: ({ member }) => member.send('Sua denúncia foi aceita, obrigado por reportar.')
        },
        {
            // Negar
            type: 'reject',
            trigger: '642177170353160212',
            exec: ({ member }) => member.send('Sua denúncia foi negada, o jogador não infringiu/burlou nenhuma regra ou as provas foram insuficientes.')
        }
      ],
      perguntas: [
	   {
          text: 'Qual modo de jogo?',
        },
	  
        {
          text: 'Qual o nick do suspeito?',
        },
        {
          text: 'Tem alguma prova contra o suspeito? Se sim coloque-a aqui.',
        },
        {
          text: 'Porque está denunciando esse jogador?',
        },
      ],
    },
    
    {
      channel: '865692278588440596',
      description: 'Revisão',
      avaliacao: [
        {
            // Aceitar
            trigger: '642177169769889793',
            exec: ({ member }) => member.send('Sua revisão foi aceita e sua punição será revogada.')
        },
        {
            // Negar
            type: 'reject',
            trigger: '642177170353160212',
            exec: ({ member }) => member.send('Sua revisão foi negada e sua punição continuará.')
        }
      ],
      perguntas: [
        {
          text: 'Foi punido em qual servidor?',
        },
		{
          text: 'Qual o seu nick?',
        },
        {
          text: 'Quem foi o autor da punição?',
        },
        {
          text: 'Porque devemos perdoa-lo?',
        },
        {
          text:
            'Seja sincero e conte tudo o que aconteceu, caso tenha mentiras você continuará banido/mutado.',
        },
        {
          text: 'Tem alguma prova que é inocente?',
        },
        {
          text: 'Quais as provas colocadas em sua punição?',
        },
      ],
    },

    {
      channel: '865692278588440596',
      description: 'Sugestões',
      avaliacao: [
        {
            // Aceitar
            trigger: '642177169769889793',
            exec: () => true
        },
        {
            // Negar
            type: 'reject',
            trigger: '642177170353160212',
            exec: () => true
        }
      ],
      perguntas: [
        {
          text: 'Qual o seu nick?',
        },
        {
          text: 'Qual é a sua sugestão?',
        },
        {
          text: 'Em qual servidor devemos acrescenta-lá?',
        },
      ],
    },
  {
      channel: '865692278588440596',
      description: 'Confirmar-fac',
      avaliacao: [
        {
          // Aceitar
          trigger: '642177169769889793',
          exec: async ({ message, guild, member }) => {
            const facChannel = guild.channels.cache.get(canalFacConfirmada)
            const lastMessage = (await facChannel.messages.fetch()).first()
            
            const nowCount = lastMessage && Number(lastMessage.content.split('ª').shift())
            const nextCount = isNaN(nowCount) ? 1 : nowCount + 1

            const facName = message.embeds[0].description.split('\n').filter(String).slice(3, -4)
            facChannel.send(`${nextCount}ª - A facção **${facName}** confirmou sua presença em nosso \`FACTIONS RAGNAROK\``)
            
            member.send(`Sua facção foi confirmada e já aparece em nosso <#${canalFacConfirmada}>, em breve você receberá a(s) key(s) de um de nossos administradores.`)
        }
      },
        {
            // Negar
            type: 'reject',
            trigger: '642177170353160212',
            exec: ({ member }) => member.send('Sua facção não foi confirmada, por um dos seguintes motivos: \n➜ Discord Falso;\n➜ Tag ou Facção com nome impróprio;\n➜ Facção não possui membros o suficiente;\n➜ Link do Discord inválido;\n➜ Você não possui permissão para confirmar;\n➜ Discord a muito tempo inativo; \n➜ A facção já foi confirmada.')
        }
      ],
      perguntas: [
        {
          text: 'Qual o nick do lider?',
        },
        {
          text: 'Qual o nome e a tag da facção? Exemplo: VNX - Vonix',
        },
        {
          text: 'Quantos membros irão jogar?',
        },
        {
          text: 'Qual o discord da facção?',
        },
      ],
    },
 {
      channel: '865692278588440596',
      description: 'Solicitar-tag',
      avaliacao: [
        {
            // Aceitar
            trigger: '642177169769889793',
            exec: ({ member }) => member.send('Sua solicitação de tag foi aceita.')
        },
        {
            // Negar
            type: 'reject',
            trigger: '642177170353160212',
            exec: ({ member }) => member.send('Sua solicitação de tag foi negada, verifique se não esqueceu de colocar o IP do servidor, o seu nick e o convite para o Discord, na descrição do vídeo, ou então se o vídeo ainda é válido, só aceitaremos vídeos postados com menos de 3 dias após sua postagem.')
        },
        {
            // Aceito, mas o usuário estava offline
            trigger: '642177169761763351',
            exec: ({ member }) => member.send('Algo de errado aconteceu em sua solicitação de tag, tente solicitar novamente!')
        }
      ],
      perguntas: [
        {
          text: 'Qual é o link do vídeo gravado no servidor?',
        },
        {
          text: 'Já colocou o IP, Discord do servidor e o seu nick na descrição do vídeo?',
        },
		{
          text: 'Em qual servidor deseja a tag?',
        },
      ],
    },
  
    {
      channel: '865692278588440596',
      description: 'Solicitar-cash',
      avaliacao: [
        {
            // Aceitar
            trigger: '642177169769889793',
            exec: ({ member }) => member.send('Sua solicitação de cash foi aceita e o cash já foi entregue.')
        },
        {
            // Negar
            type: 'reject',
            trigger: '642177170353160212',
            exec: ({ member }) => member.send('Sua solicitação de cash foi negada, o vídeo não segue os padrões exigidos pela rede, ou a descrição está incorreta')
        }
      ],
      perguntas: [
        {
          text: 'Qual é o link do vídeo gravado no servidor?',
        },
        {
          text: 'Qual é o episódio do vídeo?',
        },
		{
          text: 'Qual é o seu nick?',
        },
      ],
    },
],
  reacoes: [
    {
      messageID: '842484149407580171',
      emojis: [
        '642352065947107329',
        '642352067511451678',
        '642352065976336424',
        '642177169967022090',
        '642177171288358932',
        '642177171078512685',
        '642177170298372096',
      ],
    },
  ],
};