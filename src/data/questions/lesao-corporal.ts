import type { Question } from '../../types/quiz';

export const lesaoCorporalQuestions: Question[] = [
  {
    id: 'lesao-01',
    topicId: 'lesao-corporal',
    statement:
      'Um faxineiro de um hospital público, ao manusear o lixo da unidade cirúrgica, sofreu uma lesão que foi descrita no prontuário médico como incisa. Com base nessas informações, é correto afirmar que, na situação hipotética apresentada, a lesão foi causada por instrumento',
    alternatives: [
      { id: 'a', text: 'cortocontundente.' },
      { id: 'b', text: 'perfurante.' },
      { id: 'c', text: 'perfurocontundente.' },
      { id: 'd', text: 'contundente.' },
      { id: 'e', text: 'cortante.' },
    ],
    correctAlternativeId: 'e',
    explanation:
      'Lesões cortantes são causadas por objetos com gumes afiados, que cortam/seccionam deslizando sobre o tecido (ex.: navalha, lâmina de barbear, bisturi). A lesão formada — a ferida cortante ou incisa — caracteriza-se por: forma fusiforme/linear; bordas regulares e sem vestígios de trauma associado; afastamento das bordas da ferida; comprimento maior que a profundidade (como a incisão de um bisturi); sangramento abundante; centro mais profundo que as extremidades; e presença de cauda de escoriação, voltada para o lado onde terminou o movimento do instrumento.',
    source: 'Defensoria Pública do Estado de Tocantins (DPE-TO) - Defensor Público Substituto (2022)',
  },
  {
    id: 'lesao-02',
    topicId: 'lesao-corporal',
    statement: 'A tonalidade da equimose é um aspecto de grande interesse médico-pericial. Sobre isso, é CORRETO afirmar que é sempre',
    alternatives: [
      {
        id: 'a',
        text: 'avermelhada. Depois, com o correr do tempo, ela se apresenta vermelho-escura, violácea, azulada, esverdeada e, finalmente, amarelada, desaparecendo, em média, entre 15 e 20 dias.',
      },
      {
        id: 'b',
        text: 'avermelhada. Depois, com o correr do tempo, ela se apresenta vermelho-escura, violácea, azulada, esverdeada e, finalmente, amarelada, desaparecendo, em média, entre 8 e 14 dias.',
      },
      {
        id: 'c',
        text: 'vermelho-escura. Depois, com o correr do tempo, ela se apresenta avermelhada, violácea, azulada, esverdeada e, finalmente, amarelada, não desaparecendo antes de 40 dias.',
      },
      {
        id: 'd',
        text: 'vermelho-escura. Depois, com o correr do tempo, ela se apresenta avermelhada, violácea, azulada, esverdeada e, finalmente, amarelada, desaparecendo, em média, entre 8 e 14 dias.',
      },
    ],
    correctAlternativeId: 'a',
    explanation:
      'A equimose é uma infiltração hemorrágica difusa nas malhas teciduais (lesão plana e difusa), geralmente presente em feridas contusas. Como decorre de hemorragia, sua tonalidade se relaciona com o tempo de degradação das hemácias pelos macrófagos — a hemoglobina sofre diversas reações químicas responsáveis por essa mudança de cor: começa avermelhada, evolui para vermelho-escura, violácea, azulada, esverdeada e, por fim, amarelada, desaparecendo em média entre 15 e 20 dias (esse é o chamado espectro equimótico de Legrand du Salle).',
    source: 'Polícia Civil do Estado de Minas Gerais (PC-MG) - Escrivão de Polícia Civil (2018)',
  },
  {
    id: 'lesao-03',
    topicId: 'lesao-corporal',
    statement:
      'Quando um agressor desfere golpes com pedaço de madeira em um indivíduo deitado no chão, provocando equimoses e edema local, é correto afirmar que o instrumento',
    alternatives: [
      { id: 'a', text: 'atuou de forma ativa e produziu lesão contusa.' },
      { id: 'b', text: 'atuou de forma passiva e produziu lesão incisa.' },
      { id: 'c', text: 'atuou de forma passiva e produziu lesão contusa.' },
      { id: 'd', text: 'atuou de forma ativa e produziu lesão incisa.' },
      { id: 'e', text: 'atuou de forma mista e produziu lesão contusa.' },
    ],
    correctAlternativeId: 'a',
    explanation:
      'Feridas contusas são causadas por um corpo de superfície, ou seja, objetos sólidos com superfície plana (lisa, áspera ou irregular), podendo agir de forma ativa, passiva ou mista em relação ao deslocamento do instrumento. No caso descrito, houve atuação ativa, pois foi o instrumento (o pedaço de madeira) que se movimentou contra a vítima, que permanecia estática no chão — produzindo equimose e edema, achados típicos de lesão contusa.',
    source: 'ITEP-RN - Perito Criminal - Ciências da Computação (2021)',
  },
  {
    id: 'lesao-04',
    topicId: 'lesao-corporal',
    statement: 'As feridas incisas se caracterizam por',
    alternatives: [
      { id: 'a', text: 'bordas regulares, presença de pontes de tecido no fundo da lesão e hemorragia abundante.' },
      { id: 'b', text: 'bordas irregulares, ausência de pontes de tecido no fundo da lesão e hemorragia abundante.' },
      { id: 'c', text: 'bordas regulares, ausência de pontes de tecido no fundo da lesão e hemorragia abundante.' },
      { id: 'd', text: 'bordas regulares, presença de pontes de tecido no fundo da lesão e hemorragia pequena.' },
      { id: 'e', text: 'bordas irregulares, presença de pontes de tecido no fundo da lesão e hemorragia pequena.' },
    ],
    correctAlternativeId: 'c',
    explanation:
      'As feridas incisas (cortantes) têm bordas regulares e nítidas, sem pontes de tecido íntegro unindo-as no fundo da lesão (diferente das feridas contusas, que podem apresentar essas pontes), e cursam com hemorragia abundante, pois o gume afiado secciona os vasos de forma limpa.',
    source: 'ITEP-RN - Perito Criminal - Ciências da Computação (2021)',
  },
  {
    id: 'lesao-05',
    topicId: 'lesao-corporal',
    statement:
      'Periciando dá entrada na emergência do IJF com ferimento único na região torácica anterior, apresentando instabilidade hemodinâmica por hemotórax volumoso e necessitando de intervenção cirúrgica. Ao exame, observa-se um ferimento em fenda, de bordas regulares, com um dos ângulos mais agudo que o outro e sem sinais de contusão associada nas bordas. Marque o item correto que descreve o instrumento causador da lesão observada.',
    alternatives: [
      { id: 'a', text: 'Cortante' },
      { id: 'b', text: 'Cortocontundente' },
      { id: 'c', text: 'Perfurante' },
      { id: 'd', text: 'Perfurocortante' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'O instrumento perfurocortante possui ponta e gume, atuando em mecanismo misto: penetra perfurando com a ponta e corta com a borda afiada (gume) os planos superficiais e profundos. As feridas são tipicamente em forma de botoeira, com fenda regular, um ângulo mais agudo que o outro, e profundidade variável — exatamente o padrão descrito, compatível com um ferimento por faca ou similar (um gume) que atingiu o tórax e causou hemotórax.',
    source: 'TC de LMF',
  },
  {
    id: 'lesao-06',
    topicId: 'lesao-corporal',
    statement:
      'Periciando comparece à Pefoce para submeter-se a exame de lesão corporal. Relata ter sido agredido com um disparo de arma de fogo no pescoço. Porta relatório do IJF, que diz "lesão do plexo braquial esquerdo e déficit funcional definitivo em 95%. Tratamento conservador". Ele trabalha como baterista em uma banda de forró. De acordo com o artigo 129 do Código Penal Brasileiro, marque o item correto.',
    alternatives: [
      { id: 'a', text: 'Resultou em deformidade permanente, lesão grave.' },
      { id: 'b', text: 'Resultou em perigo de vida, lesão grave.' },
      { id: 'c', text: 'Resultou em incapacidade permanente para o trabalho.' },
      { id: 'd', text: 'Resultou em inutilidade do membro e lesão gravíssima.' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'Segundo o art. 129 do Código Penal, lesão corporal é "ofender a integridade corporal ou a saúde de outrem" (pena base: detenção de 3 meses a 1 ano). A pena aumenta quando a lesão é grave — incapacidade para ocupações habituais por mais de 30 dias, perigo de vida, debilidade permanente de membro/sentido/função, ou aceleração de parto (reclusão de 1 a 5 anos) — ou gravíssima — incapacidade permanente para o trabalho, enfermidade incurável, perda ou inutilização de membro/sentido/função, deformidade permanente ou aborto (reclusão de 2 a 8 anos). No caso do baterista, o déficit funcional definitivo de 95% no plexo braquial caracteriza inutilização do membro (função comprometida de forma definitiva), o que configura lesão corporal gravíssima.',
    source: 'TC de LMF',
  },
  {
    id: 'lesao-07',
    topicId: 'lesao-corporal',
    statement:
      'No primeiro exame de corpo de delito nem sempre é possível responder a todos os quesitos. Nessa situação, é necessário fazer um exame complementar. Com relação ao exame complementar, assinale o item correto.',
    alternatives: [
      { id: 'a', text: 'Para avaliar afastamento das ocupações, o exame é feito com 30 dias da ocorrência.' },
      { id: 'b', text: 'O exame complementar deve ser realizado 20 dias depois do primeiro exame.' },
      { id: 'c', text: 'Para avaliar a debilidade permanente dos membros o exame deve ser feito com 45 dias.' },
      { id: 'd', text: 'Nas lesões com perigo de vida, o exame deve ser feito com sessenta dias.' },
    ],
    correctAlternativeId: 'a',
    explanation:
      'Segundo o art. 168 do Código de Processo Penal, quando o exame de corpo de delito tiver por fim precisar a classificação do delito no art. 129, § 1º, I, do Código Penal (incapacidade para ocupações habituais por mais de 30 dias), deverá ser feito logo que decorra o prazo de 30 dias, contado da data do crime. Ou seja, para avaliar se a incapacidade ultrapassou os 30 dias, o exame complementar deve ser realizado logo após esse prazo.',
    source: 'TC de LMF',
  },
  {
    id: 'lesao-08',
    topicId: 'lesao-corporal',
    statement:
      'Periciando conduzido por policiais para submeter-se a exame de lesão corporal relata ter sido agredido por populares após cometer um assalto. Ao exame, observam-se múltiplas equimoses e escoriações lineares, de trajeto retilíneo, sobre estruturas ósseas, sem qualquer solução de continuidade cortante — compatíveis com golpes de um objeto alongado usado pela multidão. Marque o item correto quanto à característica do objeto causador das lesões.',
    alternatives: [
      { id: 'a', text: 'O objeto é plano e tem ponta.' },
      { id: 'b', text: 'O objeto tem duas bordas com gume.' },
      { id: 'c', text: 'O objeto é largo e tem gume.' },
      { id: 'd', text: 'O objeto é cilíndrico e rígido.' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'As lesões descritas (equimoses e escoriações lineares, sem corte) são típicas de ação contundente por objeto de superfície — nesse caso um objeto alongado, cilíndrico e rígido (como um cabo, cano ou pedaço de madeira/ferro), comum em agressões de grupo ("linchamento"), que age por contato de superfície e não por ponta ou gume.',
    source: 'TC de LMF',
  },
  {
    id: 'lesao-09',
    topicId: 'lesao-corporal',
    statement:
      'Assinale o item correto que contém as lesões produzidas pelos seguintes objetos, nessa sequência: lâmina de barbear, projétil de arma de fogo, uma barra de ferro e uma foice.',
    alternatives: [
      { id: 'a', text: 'pérfuro-cortante, puntiforme, contusa e cortocontusa.' },
      { id: 'b', text: 'punctória, pérfuro-contusa, cortante e cortocontusa.' },
      { id: 'c', text: 'cortante, perfurocontusa, contusa e cortocontusa.' },
      { id: 'd', text: 'cortante, puntiforme, cortocontusa e contundente.' },
    ],
    correctAlternativeId: 'c',
    explanation:
      'Lâmina de barbear: gume afiado → ferida cortante. Projétil de arma de fogo: discreta superfície plana com propriedade perfurante e bordas irregulares (caráter penetrante/transfixante) → ferida perfurocontusa. Barra de ferro: objeto de superfície, sem gume ou ponta → ferida contusa. Foice: tem gume, mas age por peso/força (deslizamento, percussão, pressão), produzindo lesões graves e fundas, podendo causar espostejamento → ferida cortocontusa (assim como facão, enxada, serra elétrica, rodas de trem, tesoura, unhas e dentes).',
    source: 'TC de LMF',
  },
  {
    id: 'lesao-10',
    topicId: 'lesao-corporal',
    statement:
      'Pai e filho, feirantes, comparecem à PEFOCE para realizar exame de lesão corporal. Relatam que foram agredidos com socos, chutes e com uma faca. Observa-se no pai edema na hemiface esquerda, escoriação e equimose avermelhada zigomática. No filho, há uma lesão fusiforme com 3,0 cm de extensão e 1,0 cm de profundidade, com bordas lineares e regulares. Marque o item correto que contempla os instrumentos das ações no pai e no filho, respectivamente.',
    alternatives: [
      { id: 'a', text: 'cortante e pérfuro-cortante.' },
      { id: 'b', text: 'uma superfície e um gume.' },
      { id: 'c', text: 'contundente e cortante.' },
      { id: 'd', text: 'o solo (na face) e ponta e gume no antebraço.' },
    ],
    correctAlternativeId: 'c',
    explanation:
      'Socos e chutes agem por superfície de contato, produzindo edema, escoriação e equimose — achados típicos de ação contundente, presentes no pai. Já a lesão fusiforme, de bordas lineares e regulares no filho, com extensão maior que a profundidade, é característica de ferida cortante, causada pela faca.',
    source: 'TC de LMF',
  },
  {
    id: 'lesao-11',
    topicId: 'lesao-corporal',
    statement:
      'A Traumatologia Forense descreve as diversas modalidades de energia causadoras de danos. Relacione o tipo de energia listado na coluna 1 com seu respectivo exemplo de lesão na coluna 2 e assinale a alternativa que indica a sequência correta, de cima para baixo.\n\n' +
      'Coluna 1 – Tipo de energia\n1. Energia de ordem mecânica\n2. Energia de ordem física\n3. Energia de ordem química\n4. Energia de ordem biodinâmica\n\n' +
      'Coluna 2 – Exemplos de lesões\n( ) Lesão por eletricidade e radioatividade\n( ) Lesão por punhais e revólveres\n( ) Lesão por ácido sulfúrico ou nítrico\n( ) Lesão no choque e na coagulação intravascular disseminada',
    alternatives: [
      { id: 'a', text: '1 – 2 – 3 – 4' },
      { id: 'b', text: '2 – 1 – 3 – 4' },
      { id: 'c', text: '2 – 1 – 4 – 3' },
      { id: 'd', text: '3 – 1 – 2 – 4' },
      { id: 'e', text: '3 – 1 – 4 – 2' },
    ],
    correctAlternativeId: 'b',
    explanation:
      'As lesões corporais são produzidas por energias externas de diversas ordens: (2) ordem física — mecânica (a mais comum, ex.: punhais e revólveres), barométrica, térmica, radiante (ex.: eletricidade e radioatividade) e elétrica; (1) energia mecânica também responde por punhais e revólveres, por isso vem em segundo na sequência de exemplos; (3) ordem química — cáustica (ácido sulfúrico/nítrico) e por envenenamento; (4) ordem biodinâmica — relacionada a fenômenos como choque e coagulação intravascular disseminada. A sequência correta é: eletricidade/radioatividade → física (2); punhais/revólveres → mecânica (1); ácido → química (3); choque/CIVD → biodinâmica (4), ou seja, 2 – 1 – 3 – 4.',
    source: 'Instituto Geral de Perícia de Santa Catarina (IGP-SC) - Auxiliar Médico Legal (2022)',
  },
  {
    id: 'lesao-12',
    topicId: 'lesao-corporal',
    statement: 'A respeito de rubefação, assinale a alternativa correta.',
    alternatives: [
      {
        id: 'a',
        text: 'É a destruição da epiderme pela ação tangencial do instrumento contundente sobre a pele, deixando exposta parte da derme.',
      },
      {
        id: 'b',
        text: 'Trata-se do aumento de volume cutâneo no local lesionado, normalmente sobre uma estrutura sólida subjacente, e deve-se ao aumento do líquido extracelular nessa área, provocado pelo trauma.',
      },
      {
        id: 'c',
        text: 'É o acúmulo de sangue entre as malhas do tecido lesionado, resultante de micro-hemorragia secundária à lesão de vasos da área.',
      },
      { id: 'd', text: 'É a vermelhidão produzida por ação contundente e desaparece poucas horas após a sua ocorrência.' },
      {
        id: 'e',
        text: 'Legrand du Salle descreveu a alteração gradativa de sua cor em muitas – mas não em todas – as situações.',
      },
    ],
    correctAlternativeId: 'd',
    explanation:
      'a) Descreve a escoriação, não a rubefação. b) É a definição de edema traumático. c) É a definição de equimose. d) Correto: rubefação é a vermelhidão produzida por ação contundente (geralmente leve), que desaparece poucas horas após sua ocorrência, sem deixar marca duradoura. e) Legrand du Salle é o estudioso associado às tonalidades da equimose (espectro equimótico), não da rubefação — com exceção das equimoses na conjuntiva, que não seguem esse padrão de cores.',
    source: 'Prefeitura Municipal de Foz do Iguaçu - Médico Legista (2019)',
  },
  {
    id: 'lesao-13',
    topicId: 'lesao-corporal',
    statement: 'Sobre lesões e morte por armas brancas, assinale a alternativa INCORRETA.',
    alternatives: [
      {
        id: 'a',
        text: 'Na prática pericial médico-legal, via de regra, é simples a diferenciação entre feridas produzidas por instrumentos perfurocortantes de um ou dois gumes.',
      },
      {
        id: 'b',
        text: 'As feridas produzidas por instrumentos cortantes revelam nítido predomínio da extensão sobre a profundidade quando esses instrumentos agem através do gume afiado.',
      },
      {
        id: 'c',
        text: 'Os instrumentos perfurantes de pequeno calibre produzem feridas punctórias quando atingem a vítima pela ponta diminuta.',
      },
      {
        id: 'd',
        text: 'O conhecimento da morfologia das lesões e das leis de Filhos e Langer é importante para o diagnóstico de ferimentos produzidos por instrumentos perfurantes de médio calibre.',
      },
      {
        id: 'e',
        text: 'Os instrumentos cortocontundentes agem principalmente por pressão, têm grande massa e podem produzir, entre outros, fraturas e decapitações.',
      },
    ],
    correctAlternativeId: 'a',
    explanation:
      'A alternativa incorreta é a "a": na prática pericial médico-legal, via de regra, é DIFÍCIL (não simples) diferenciar feridas produzidas por instrumentos perfurocortantes de um ou de dois gumes. As demais estão corretas: b) a profundidade costuma ser maior que a extensão nos perfurocortantes, mas quando o instrumento cortante age pelo gume, predomina a extensão sobre a profundidade; c) é o caso típico de seringas e agulhas finas; d) as leis de Filhos e Langer detalham o aspecto dos planos e o trajeto da ferida, auxiliando o diagnóstico em instrumentos perfurantes de médio calibre; e) instrumentos cortocontundentes (foice, enxada, rodas de trem etc.) agem por pressão/peso e podem causar fraturas e até decapitações.',
    source: 'Prefeitura Municipal de Foz do Iguaçu - Médico Legista (2019)',
  },
  {
    id: 'lesao-14',
    topicId: 'lesao-corporal',
    statement:
      'Indivíduo do sexo masculino, 35 anos, foi agredido na cabeça com uma cadeira enferrujada, sendo levado para atendimento no hospital mais próximo. O médico plantonista descreveu em prontuário que o indivíduo apresentava lesão de forma sinuosa na região parietal direita do couro cabeludo, medindo 7 cm no maior eixo, com bordas irregulares, escoriadas e equimosadas, de fundo e vertentes irregulares, com presença de pontes de tecido íntegro ligando as bordas e vaso íntegro no fundo da lesão. Desse modo, o médico plantonista descreveu uma ferida',
    alternatives: [
      { id: 'a', text: 'contusa.' },
      { id: 'b', text: 'cortante.' },
      { id: 'c', text: 'perfurocortante.' },
      { id: 'd', text: 'punctória.' },
      { id: 'e', text: 'perfurocontusa.' },
    ],
    correctAlternativeId: 'a',
    explanation:
      'A descrição corresponde a uma ferida contusa aberta, caracterizada por: forma estrelada, sinuosa ou retilínea (a depender do objeto); bordas irregulares, escoriadas e equimosadas; fundo irregular; possível presença de pontes de tecido íntegro (fibras elásticas distendidas, mas não rompidas); bordas com retração; sangramento menos intenso que nas feridas cortantes; e fundo da lesão mostrando vasos, nervos ou tendões íntegros — exatamente o padrão descrito no caso da agressão com a cadeira.',
    source: 'Ministério Público do Estado da Paraíba (MPE-PB) - Promotor de Justiça (2018)',
  },
  {
    id: 'lesao-15',
    topicId: 'lesao-corporal',
    statement: 'As lesões produzidas por bolsas de ar (air bag) são consideradas lesões',
    alternatives: [
      { id: 'a', text: 'cortantes.' },
      { id: 'b', text: 'incisas.' },
      { id: 'c', text: 'punctórias.' },
      { id: 'd', text: 'contusas.' },
      { id: 'e', text: 'perfurantes.' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'O air bag é um objeto sólido, de superfície plana e lisa, que age por contato de superfície contra o corpo — característica típica de um instrumento contundente, não cortante ou perfurante.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
  {
    id: 'lesao-16',
    topicId: 'lesao-corporal',
    statement:
      'De acordo com a transferência de energia de um objeto mecânico para o corpo, relacione as colunas e assinale a alternativa com a sequência correta.\n\n' +
      '1. Contato por meio de uma superfície.\n2. Contato por uma ponta.\n3. Contato por uma borda aguçada.\n\n' +
      '( ) Instrumento perfurante.\n( ) Instrumento contundente.\n( ) Instrumento cortante.',
    alternatives: [
      { id: 'a', text: '3 – 2 – 1.' },
      { id: 'b', text: '2 – 3 – 1.' },
      { id: 'c', text: '3 – 1 – 2.' },
      { id: 'd', text: '2 – 1 – 3.' },
      { id: 'e', text: '1 – 3 – 2.' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'A ponta caracteriza o instrumento perfurante (2); a superfície caracteriza o instrumento contundente (1); e a borda aguçada (gume) caracteriza o instrumento cortante (3). Logo, a sequência correta é 2 – 1 – 3.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
  {
    id: 'lesao-17',
    topicId: 'lesao-corporal',
    statement: 'Como é denominado o arrancamento traumático da epiderme por deslizamento?',
    alternatives: [
      { id: 'a', text: 'Entorse.' },
      { id: 'b', text: 'Tumefação.' },
      { id: 'c', text: 'Ferida contundente.' },
      { id: 'd', text: 'Víbice.' },
      { id: 'e', text: 'Escoriação.' },
    ],
    correctAlternativeId: 'e',
    explanation:
      'a) Entorse não tem relação com a epiderme. b) Tumefação é um pouco semelhante à rubefação, mas desaparece mais lentamente. c) A escoriação é, de fato, um tipo de ferida contusa aberta, mas o termo específico pedido é outro. d) Víbice é a equimose em forma de estrias. e) Correto: a escoriação é originada por ação tangencial de instrumento contundente, causando o arrancamento da epiderme com desnudamento da derme, com saída de serosidade e sangue.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
  {
    id: 'lesao-18',
    topicId: 'lesao-corporal',
    statement:
      'Lesão em forma de botoeira, com um dos ângulos mais agudo que o outro, predomínio da profundidade sobre a extensão e cauda de escoriação são características de lesão produzida por instrumento',
    alternatives: [
      { id: 'a', text: 'contundente.' },
      { id: 'b', text: 'perfurante.' },
      { id: 'c', text: 'cortante.' },
      { id: 'd', text: 'perfurocortante.' },
      { id: 'e', text: 'perfurocontundente.' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'A forma em botoeira, com um ângulo mais agudo que o outro (marcando o lado do gume) e a profundidade maior que a extensão são a forma clássica de descrever uma ferida perfurocortante, causada por instrumento com ponta e gume (faca, punhal etc.).',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
];
