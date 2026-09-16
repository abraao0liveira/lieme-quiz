import type { Question } from '../../types/quiz';

export const introducaoQuestions: Question[] = [
  {
    id: 'intro-01',
    topicId: 'introducao',
    statement:
      'Sobre perícias médico-legais e documentos médicos de interesse para a justiça, analise as assertivas abaixo:\n\n' +
      'I. Segundo o Código de Processo Penal, o médico legista deverá iniciar a autopsia somente após, pelo menos, 6 horas do óbito. Trata-se de vedação absoluta e não há exceção admitida pela norma legal.\n\n' +
      'II. O médico-legista, ao realizar autopsia de vítima de acidente de trânsito, deverá obrigatoriamente realizar a abertura das cavidades craniana, torácica e abdominal.\n\n' +
      'III. O médico-legista pode declarar-se suspeito para realização de uma perícia médico-legal.\n\n' +
      'IV. O histórico de um laudo pericial médico-legal pode conter o relato da pessoa examinada.\n\n' +
      'V. Cabe ao Juiz de Direito a faculdade de convocar o médico-legista para esclarecer oralmente pontos do laudo pericial médico-legal elaborado.\n\n' +
      'Quais estão corretas?',
    alternatives: [
      { id: 'a', text: 'Apenas II.' },
      { id: 'b', text: 'Apenas I e III.' },
      { id: 'c', text: 'Apenas II e IV.' },
      { id: 'd', text: 'Apenas III, IV e V.' },
      { id: 'e', text: 'I, II, III, IV e V.' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'I - Falso: segundo o Art. 162 do CPP, "a autópsia será feita pelo menos seis horas depois do óbito, salvo se os peritos, pela evidência dos sinais de morte, julgarem que possa ser feita antes daquele prazo, o que declararão no auto" — ou seja, há exceção. ' +
      'II - "Obrigatório" é forte demais: a abertura das três cavidades depende dos achados do corpo e da história clínica da instituição que prestou atendimento. ' +
      'III - Verdadeiro: considera-se perito "suspeito" aquele que é amigo, inimigo, credor, devedor, herdeiro de uma das partes, tem interesse no resultado do julgamento, ou possui parentesco até 3º grau ou é cônjuge de uma das partes. ' +
      'IV - Verdadeiro: o laudo pericial segue uma estrutura lógica — preâmbulo (identificação do periciando), quesitos (indagações da autoridade), histórico (relato dos fatos, inclusive do próprio periciando), descrição (o exame em si), discussão (embasamento científico), conclusão (impressão do perito) e respostas aos quesitos. ' +
      'V - Verdadeiro: o juiz pode convocar o perito (ad hoc ou oficial) para prestar depoimento oral em juízo sobre o laudo elaborado.',
    source: 'Prefeitura Municipal de Foz do Iguaçu - Médico Legista (2019)',
  },
  {
    id: 'intro-02',
    topicId: 'introducao',
    statement:
      'O corpo de um homem é encontrado sem vida, às 19:30h, em uma cidade do interior. Há sinais externos de violência. Observa-se ferimentos profundos no pescoço e na região precordial. No local, foi encontrada uma arma branca suja de sangue. O perito oficial não está acessível. Há convocação de perito ad hoc. De acordo com o relato acima, marque o item correto.',
    alternatives: [
      { id: 'a', text: 'O exame pericial será feito por duas pessoas de nível superior.' },
      { id: 'b', text: 'O exame pericial será externo e interno.' },
      { id: 'c', text: 'O exame pericial será feito na delegacia.' },
      { id: 'd', text: 'O exame pericial deve ser feito por médicos.' },
    ],
    correctAlternativeId: 'a',
    explanation:
      'Existem dois tipos de peritos: o oficial (concursado) e o ad hoc (do latim "para essa finalidade"). Na falta de um perito oficial ou na impossibilidade de contactá-lo, o perito ad hoc entra em ação por convocação, sendo exigido apenas curso superior — não necessariamente em Medicina — e por isso são convocadas duas pessoas de nível superior. Nesses casos, o exame é apenas EXTERNO (uma inspeção estática), nunca interno. E jamais deve ser feito exame pericial em delegacia, penitenciária ou qualquer outro local fora do IML.',
    source: 'TC de LMF',
  },
  {
    id: 'intro-03',
    topicId: 'introducao',
    statement:
      '"Um carro envolve-se em um acidente e em seguida incendeia-se. Os dois ocupantes morreram carbonizados. No exame pericial, observa-se carbonização completa, postura de lutador de boxe, destruição das genitálias, fissuras abdominais e fuligem em árvore respiratória. Os dentes estão preservados."\n\n' +
      'Com base na descrição do caso acima, marque a alternativa correta.',
    alternatives: [
      { id: 'a', text: 'Os achados indicam que eles morreram antes do incêndio acontecer.' },
      { id: 'b', text: 'O objetivo principal no exame médico-legal é identificar os corpos.' },
      { id: 'c', text: 'A posição de boxer resulta da destruição óssea.' },
      { id: 'd', text: 'A causa da morte foi trauma abdominal aberto.' },
    ],
    correctAlternativeId: 'b',
    explanation:
      'Apenas com a descrição não se pode afirmar ou negar a causa da morte, tampouco se ela ocorreu antes ou depois do incêndio. Há um detalhe central: a carbonização dos corpos. Nesses casos, a prioridade do exame médico-legal é a identificação dos corpos — feita principalmente pela arcada dentária, já que os dentes resistem bem ao calor — pois a partir da identidade é possível localizar a família e fornecer detalhes à investigação. A postura de lutador de boxe é causada pela retração térmica dos músculos, não pela destruição óssea.',
    source: 'TC integrado',
  },
  {
    id: 'intro-04',
    topicId: 'introducao',
    statement:
      'Com relação ao conceito do que é perícia e o que normatiza a atuação do perito nos exames realizados por estes nos Institutos Médico Legais, marque o item correto.',
    alternatives: [
      { id: 'a', text: 'O exame de corpo de delito pode ser feito em hospitais e em instituições prisionais.' },
      { id: 'b', text: 'A detecção de vestígios do ato criminoso é realizada através do exame de corpo de delito.' },
      { id: 'c', text: 'No exame de corpo de delito direto analisa-se documentos médicos e ouve-se testemunhas.' },
      { id: 'd', text: 'A confissão do acusado dispensa a realização do exame de corpo de delito.' },
    ],
    correctAlternativeId: 'b',
    explanation:
      'a) O exame pericial jamais deve ser feito fora da unidade forense (no Brasil, o IML). ' +
      'b) Correto: essa é uma das principais funções do exame de corpo de delito. ' +
      'c) É o inverso: no exame de corpo de delito DIRETO ainda existem vestígios, que são objeto do exame pericial; no INDIRETO, quando os vestígios não existem mais ou foram alterados, é que se recorre a documentos médicos, fotos, vídeos e testemunhas como prova. ' +
      'd) A confissão do acusado não substitui o exame de corpo de delito, pois não responde a todas as indagações que ele pode esclarecer, nem prova por si só a autoria ou a existência do crime.',
    source: 'TC de LMF',
  },
  {
    id: 'intro-05',
    topicId: 'introducao',
    statement: 'De acordo com o Código de Ética Médica, no capítulo sobre Auditoria e Perícia Médica, é permitido ao médico:',
    alternatives: [
      { id: 'a', text: 'Atuar como perito do seu paciente e parentes até 3º grau.' },
      { id: 'b', text: 'Intervir, quando em função de perito, na atividade profissional de outro médico.' },
      { id: 'c', text: 'Assinar o laudo pericial mesmo que não tenha participado do exame.' },
      { id: 'd', text: 'Atestar atos executados no exercício profissional quando solicitado pelo paciente.' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'a) Atuar como perito do próprio paciente ou de parentes até 3º grau viola a ética e a lei, pois são motivos de suspeição do perito. ' +
      'b) Intervir, na função de perito, na atividade profissional de outro médico é antiético e contrário à lei. ' +
      'c) Assinar o laudo sem ter participado do exame equivale a uma falsificação, também vedada por lei. ' +
      'd) Correto: atestar atos executados no exercício profissional quando solicitado pelo paciente é exatamente a confecção do atestado médico — um documento legal, dever do médico e direito do paciente.',
    source: 'TC de LMF',
  },
  {
    id: 'intro-06',
    topicId: 'introducao',
    statement:
      'Analise o seguinte trecho e assinale o item correto.\n\n' +
      '"[...] periciando diz ter sofrido agressão com soco e chutes ontem. Ao exame: edema e equimose avermelhada periorbitária esquerda e equimose avermelhada na coxa esquerda."',
    alternatives: [
      { id: 'a', text: 'No trecho, identifica-se histórico e discussão.' },
      { id: 'b', text: 'No trecho, identifica-se descrição e conclusão.' },
      { id: 'c', text: 'No trecho, identifica-se o preâmbulo e o histórico.' },
      { id: 'd', text: 'No trecho, identifica-se histórico e descrição.' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'No trecho evidencia-se o histórico do caso, narrado do ponto de vista do periciando ("periciando diz ter sofrido..."), e a descrição do exame pericial ("ao exame..."). Um laudo pericial médico-legal segue a estrutura: preâmbulo (identificação do periciando), quesitos (perguntas da autoridade), histórico (relato dos fatos), descrição (o exame em si), discussão (embasamento científico), conclusão (impressão do perito) e respostas aos quesitos.',
    source: 'TC de LMF',
  },
  {
    id: 'intro-07',
    topicId: 'introducao',
    statement:
      'Na atividade médica, há documentos chamados de médico-legais, pois há uma exigência legal para sua emissão pelos profissionais médicos. Com relação a esses documentos, marque o item correto.',
    alternatives: [
      { id: 'a', text: 'O atestado médico é uma simples declaração de um fato médico.' },
      { id: 'b', text: 'O relatório médico legal é a materialização de uma perícia médica.' },
      { id: 'c', text: 'A declaração médico legal é fornecida pelo perito após o exame.' },
      { id: 'd', text: 'Acidente de trânsito com vítima fatal é de notificação compulsória.' },
    ],
    correctAlternativeId: 'b',
    explanation:
      'a) O atestado médico não é uma simples declaração: ele tem implicações legais. ' +
      'b) Correto: o relatório médico-legal é justamente a materialização de uma perícia médica. ' +
      'c) O perito não emite declaração, emite relatório. ' +
      'd) A notificação também é um documento médico importante, com implicações epidemiológicas e de saúde pública — exemplos de notificação compulsória são doenças infectocontagiosas e acidentes de trabalho, mas não o acidente de trânsito com vítima fatal isoladamente.',
    source: 'TC de LMF',
  },
  {
    id: 'intro-08',
    topicId: 'introducao',
    statement: 'Morte violenta é aquela que',
    alternatives: [
      { id: 'a', text: 'se produz apenas instantaneamente, decorrente de uma ação exógena e lesiva.' },
      { id: 'b', text: 'se produz mesmo que tardiamente, decorrente de uma ação exógena e lesiva.' },
      { id: 'c', text: 'se produz apenas instantaneamente, decorrente de uma ação endógena e lesiva.' },
      { id: 'd', text: 'se produz mesmo que tardiamente, decorrente de uma ação endógena e lesiva.' },
      { id: 'e', text: 'se produz apenas instantaneamente, decorrente de uma ação exógena e não lesiva.' },
    ],
    correctAlternativeId: 'b',
    explanation:
      'Causas externas (energias exógenas) englobam os agravos à saúde de causas acidentais (trânsito, trabalho, quedas, envenenamentos, afogamentos) e intencionais (agressões, homicídios, suicídios, lesões autoprovocadas). A morte violenta é sempre decorrente de ação exógena e lesiva, mas pode se manifestar mesmo tardiamente em relação ao evento que a causou — por exemplo, uma complicação que só leva a óbito dias ou semanas depois.',
    source: 'ITEP-RN - Assistente Técnico - Administração e Serviços (2021)',
  },
  {
    id: 'intro-09',
    topicId: 'introducao',
    statement:
      'A necropsia é um procedimento médico que visa analisar a anatomia, o motivo da morte e as sucessivas alterações orgânicas que acontecem após a morte do corpo. Os dispositivos legais que regulamentam a obrigatoriedade da necropsia são elencados no Código de Processo Penal Brasileiro. A necropsia deverá ser indispensável na ocorrência dos seguintes casos, EXCETO',
    alternatives: [
      { id: 'a', text: 'morte violenta.' },
      { id: 'b', text: 'morte natural assistida.' },
      { id: 'c', text: 'morte suspeita.' },
      { id: 'd', text: 'morte natural não assistida.' },
      { id: 'e', text: 'internação hospitalar e morte em menos de 24 horas, sem que tenha sido estabelecido um diagnóstico.' },
    ],
    correctAlternativeId: 'b',
    explanation:
      'A necropsia médico-legal é indispensável em casos de morte violenta, morte suspeita, morte natural não assistida e óbito em menos de 24h de internação sem diagnóstico estabelecido. Já a morte natural assistida — com acompanhamento médico e causa da morte esclarecida — não exige necropsia médico-legal, sendo essa a exceção pedida na questão.',
    source: 'TC de LMF - UFPB - Técnico - Necrópsia e Anatomia (2019)',
  },
  {
    id: 'intro-10',
    topicId: 'introducao',
    statement: 'Em relação aos procedimentos que antecedem o início de uma necropsia médica, é correto afirmar que:',
    alternatives: [
      { id: 'a', text: 'não é necessário autorização para realização da necropsia.' },
      { id: 'b', text: 'é fundamental conferir a identificação do cadáver com a autorização da necropsia.' },
      { id: 'c', text: 'o exame externo do corpo é de responsabilidade exclusiva do médico patologista.' },
      { id: 'd', text: 'curativos não devem ser removidos.' },
      { id: 'e', text: 'a coleta de líquidos corporais só é necessária na necropsia médico-legal.' },
    ],
    correctAlternativeId: 'b',
    explanation:
      'a) Há sim necessidade de autorização, vinda das autoridades policiais e de direito — sem pedido/autorização não há necrópsia. ' +
      'b) Correto: é fundamental conferir a identificação do cadáver com a autorização, para não se abrir o corpo errado ou sem a devida autorização (o que seria crime). ' +
      'c) O exame externo é responsabilidade do médico perito, de qualquer especialidade; o patologista geralmente faz a análise macro e microscópica dos órgãos. ' +
      'd) Curativos e outros objetos que acompanham o cadáver devem ser retirados e enviados para análise, por serem também vestígio e prova. ' +
      'e) A coleta de líquidos corporais também é necessária no exame de corpo de delito em pessoa viva.',
    source: 'Universidade Federal Fluminense - Técnico - Anatomia e Necropsia (2019)',
  },
  {
    id: 'intro-11',
    topicId: 'introducao',
    statement: 'São indicações de encaminhamento do corpo para necropsia médico-legal:',
    alternatives: [
      { id: 'a', text: 'homicídio, envenenamento e pneumonia.' },
      { id: 'b', text: 'suicídio, infarto agudo do miocárdio e morte na sala de cirurgia.' },
      { id: 'c', text: 'morte súbita de recém-nascido, homicídio e morte de paciente em hospital psiquiátrico.' },
      { id: 'd', text: 'suicídio, tromboembolismo e infarto agudo do miocárdio.' },
      { id: 'e', text: 'homicídio, morte de prisioneiro, trombose.' },
    ],
    correctAlternativeId: 'c',
    explanation:
      'São causas externas, que exigem necropsia médico-legal: homicídio, envenenamento, suicídio, morte na sala de cirurgia por imperícia/erro, morte súbita de recém-nascido (suspeita até prova em contrário), morte de paciente em hospital psiquiátrico e morte de prisioneiro. Já pneumonia, infarto agudo do miocárdio, morte na sala de cirurgia por complicação natural, tromboembolismo e trombose são causas naturais — não exigem necropsia médico-legal. Apenas a alternativa C reúne exclusivamente causas externas.',
    source: 'Universidade Federal Fluminense - Técnico - Anatomia e Necropsia (2019)',
  },
  {
    id: 'intro-12',
    topicId: 'introducao',
    statement:
      'Uma mulher comete tentativa de autoextermínio por ingestão de pesticidas. Por isso, ficou internada durante um mês antes do óbito, o qual se deu no próprio hospital onde fora atendida desde o início. O óbito se deu por infecção generalizada, decorrente de complicações da internação prolongada. Nesse caso, o corpo',
    alternatives: [
      { id: 'a', text: 'deverá ser encaminhado ao Serviço de Verificação de Óbitos, pois a morte foi natural, ou seja, "infecção generalizada".' },
      { id: 'b', text: 'está sob a posse do Poder Público, o qual tem esse direito em qualquer tempo, devendo ser necropsiado por peritos oficiais ou "ad hoc".' },
      { id: 'c', text: 'pertence à família, a qual decidirá se irá inumar ou cremar.' },
      { id: 'd', text: 'se impõe à análise de autoridade do judiciário, para autorizar ou cancelar a necessidade de necrópsia tipo clínica.' },
    ],
    correctAlternativeId: 'b',
    explanation:
      'A infecção generalizada é uma complicação decorrente da causa externa original (o envenenamento/tentativa de suicídio), e não uma morte natural isolada. Por isso o corpo permanece sob a posse do Poder Público, podendo ser necropsiado por peritos oficiais ou ad hoc — diferente do que ocorre nos casos de morte natural, em que o corpo pertence à família.',
    source: 'Polícia Civil do Estado de Minas Gerais (PC-MG) - Escrivão de Polícia Civil (2018)',
  },
  {
    id: 'intro-13',
    topicId: 'introducao',
    statement: 'Assinale a alternativa correta.',
    alternatives: [
      { id: 'a', text: 'A falsificação de Atestado Médico está tipificada no Art. 302 do Código Penal Brasileiro.' },
      { id: 'b', text: 'A pena para o profissional que emitir Atestado falso é de 1 (um) a 2 (dois) anos de prisão e multa.' },
      {
        id: 'c',
        text: 'No Atestado Médico, deve ser descrito o período em que o paciente esteve sob consulta e/ou tratamento (exemplo: manhã, tarde ou noite).',
      },
      { id: 'd', text: 'O Atestado Médico deve ser cobrado pelo profissional que o está emitindo.' },
      {
        id: 'e',
        text: 'Tanto o Atestado Médico como a Declaração de Comparecimento podem ser assinados pela secretária ou recepcionista do médico, desde que ela possua o carimbo dele.',
      },
    ],
    correctAlternativeId: 'c',
    explanation:
      'O Art. 302 do Código Penal tipifica dar, no exercício da profissão, atestado falso — pena de detenção de um mês a um ano (não de um a dois anos, como afirma a alternativa B), com multa apenas se o crime for cometido com fim de lucro. Cobrar pelo atestado médico é crime e atitude antiética, pois é direito do paciente (alternativa D incorreta). O atestado médico deve descrever, quando cabível, o período em que o paciente esteve em consulta/tratamento, inclusive o turno — manhã, tarde ou noite — quando não há registro de horário exato, por isso a alternativa C está correta. Por fim, apenas o médico pode assinar atestado ou declaração de comparecimento, nunca a secretária ou recepcionista, mesmo de posse do carimbo (alternativa E incorreta).',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
  {
    id: 'intro-14',
    topicId: 'introducao',
    statement:
      'Analise as assertivas e assinale a alternativa que aponta a(s) correta(s).\n\n' +
      'I. Morte natural é aquela oriunda de um estado mórbido adquirido ou de uma perturbação congênita.\n\n' +
      'II. A morte violenta tem origem por ação externa e, mais raramente, interna, incluindo-se o homicídio, o suicídio e o acidente.\n\n' +
      'III. A morte de causa suspeita é aquela que ocorre de forma duvidosa e sobre a qual não se tem evidência de ter sido de causa natural ou de causa violenta.',
    alternatives: [
      { id: 'a', text: 'Apenas I.' },
      { id: 'b', text: 'Apenas I e II.' },
      { id: 'c', text: 'Apenas II e III.' },
      { id: 'd', text: 'Apenas III.' },
      { id: 'e', text: 'Todos corretos (I, II e III).' },
    ],
    correctAlternativeId: 'e',
    explanation:
      'As três assertivas trazem definições corretas e consagradas em Medicina Legal: morte natural decorre de doença adquirida ou condição congênita; morte violenta decorre de ação externa (raramente interna), abrangendo homicídio, suicídio e acidente; e morte de causa suspeita é aquela cuja natureza — natural ou violenta — ainda não pôde ser estabelecida, exigindo investigação médico-legal para seu esclarecimento.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
];
