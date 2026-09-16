import type { Question } from '../../types/quiz';

export const sexologiaForenseQuestions: Question[] = [
  {
    id: 'sexo-01',
    topicId: 'sexologia-forense',
    statement: 'Assinale a alternativa INCORRETA a respeito de perícia médico-legal nos crimes de natureza sexual.',
    alternatives: [
      {
        id: 'a',
        text: 'Ao observar, no exame externo da genitália de uma mulher periciada, a presença de carúnculas mirtiformes, o médico legista pode afirmar que a mulher não é mais virgem.',
      },
      {
        id: 'b',
        text: 'As roupas da vítima em um caso de suposto estupro ocorrido "há poucas horas" não têm relevância para o médico legista que atende a vítima desse estupro.',
      },
      { id: 'c', text: 'Conjunção carnal em uma vítima de 3 anos de idade geralmente causa lesões perineais de grande vulto.' },
      {
        id: 'd',
        text: 'A observação de ruptura himenal no quadrante inferior externo, estendendo-se por toda a orla do hímen, apresentando bordas edemaciadas, equimosadas e recobertas por crosta hemática, permite ao médico legista afirmar que a conjunção carnal é recente.',
      },
      {
        id: 'e',
        text: 'Ao observar um hímen complacente em uma mulher não grávida, com pesquisa de espermatozoides e PSA negativas em secreções da vagina e do ânus, uma resposta adequada ao quesito "Se a vítima é virgem" poderia ser: "Diante das características do hímen e dos demais resultados de exames solicitados, o Perito não pode afirmar ou negar a ocorrência de conjunção carnal".',
      },
    ],
    correctAlternativeId: 'b',
    explanation:
      'A alternativa incorreta é a "b": as roupas da vítima de um suposto estupro ocorrido há poucas horas TÊM, sim, grande relevância para o médico legista, pois entre 48-72 horas ainda é possível coletar DNA e outros vestígios corporais que ajudem a identificar o agressor. As demais estão corretas: a) carúnculas mirtiformes são "sobras" do hímen após parto vaginal, indicando que a mulher não é mais virgem; c) a grande diferença de tamanho entre a genitália infantil e a adulta explica lesões perineais extensas em vítimas muito jovens; d) bordas edemaciadas, equimosadas e com crosta hemática indicam uma ruptura himenal recente (ocorrida há pelo menos 48 horas); e) um hímen complacente pode não se romper mesmo após meses de penetração — combinado a exames negativos, o perito não pode afirmar nem negar a conjunção carnal.',
    source: 'Prefeitura Municipal de Foz do Iguaçu - Médico Legista (2019)',
  },
  {
    id: 'sexo-02',
    topicId: 'sexologia-forense',
    statement:
      'Em uma vítima de conjunção carnal, com ejaculação do agressor em sua cavidade vaginal, deve-se esperar encontrar quais marcadores na secreção vaginal?',
    alternatives: [
      { id: 'a', text: 'Fosfatase ácida ou glicoproteína P30.' },
      { id: 'b', text: 'Fosfatase alcalina ou glicoproteína P10.' },
      { id: 'c', text: 'Fosfatase alcalina ou glicoproteína P30.' },
      { id: 'd', text: 'Fosfatase ácida ou glicoproteína P10.' },
      { id: 'e', text: 'O encontro de marcadores depende do agressor ser vasectomizado ou não.' },
    ],
    correctAlternativeId: 'a',
    explanation:
      'Após a suspeita de crime sexual com agressor do sexo masculino, pesquisa-se na secreção vaginal material genético (células epiteliais e espermatozoides) e substâncias químicas do sêmen. Os espermatozoides permanecem íntegros por cerca de 72 horas fora do corpo; a fosfatase ácida prostática pode ser detectada até cerca de 48h; já a glicoproteína P30 (PSA) pode ser encontrada mesmo em homens vasectomizados, pois é produzida na próstata e não depende dos espermatozoides.',
    source: 'ITEP-RN - Perito Criminal - Ciências da Computação (2021)',
  },
  {
    id: 'sexo-03',
    topicId: 'sexologia-forense',
    statement:
      'No Rio de Janeiro, há alguns anos, as autoridades criaram vagões nos trens, na cor rosa, exclusivos para mulheres. Essa medida visa evitar que os homens, aproveitando-se da superlotação, assediassem as passageiras. O distúrbio sexual no qual indivíduos se aproveitam de aglomerações para se satisfazerem sexualmente denomina-se:',
    alternatives: [
      { id: 'a', text: 'uranismo' },
      { id: 'b', text: 'satiríase' },
      { id: 'c', text: 'onanismo' },
      { id: 'd', text: 'frotteurismo' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'a) Uranismo é o termo antigo para o que hoje se chama homossexualidade (indivíduo do sexo masculino que mantém relações sexuais/afetivas com outros homens). b) Satiríase descreve o vício sexual/hipersexualidade masculina, também chamada de ninfomania masculina. c) Onanismo é a obtenção de prazer sexual apenas pela masturbação. d) Correto: o distúrbio no qual o indivíduo se aproveita de aglomerações (como no transporte público) para se satisfazer sexualmente, tocando outras pessoas sem consentimento, chama-se frotteurismo.',
    source: 'TC de LMF',
  },
  {
    id: 'sexo-04',
    topicId: 'sexologia-forense',
    statement:
      'A mídia brasileira noticiou, inclusive mostrando um vídeo, que um anestesista no Rio de Janeiro sedou uma paciente que estava tendo um parto cesariano e praticou sexo oral com ela. O profissional acabou sendo preso em flagrante. De acordo com a lei que tipifica os Crimes contra a Dignidade Sexual, o médico foi acusado de ter cometido qual crime?',
    alternatives: [
      { id: 'a', text: 'posse sexual mediante fraude' },
      { id: 'b', text: 'atentado violento ao pudor' },
      { id: 'c', text: 'estupro' },
      { id: 'd', text: 'abuso sexual' },
    ],
    correctAlternativeId: 'c',
    explanation:
      'O caso relatado configura o crime de estupro, tipificado no Art. 213 do Código Penal, no capítulo dos Crimes contra a Dignidade Sexual: "Constranger alguém, mediante violência ou grave ameaça, a ter conjunção carnal ou a praticar ou permitir que com ele se pratique outro ato libidinoso." A sedação da vítima (que a impossibilitou de consentir ou resistir) e a prática de ato libidinoso (sexo oral) caracterizam o crime, mesmo sem violência física direta.',
    source: 'TC de LMF',
  },
  {
    id: 'sexo-05',
    topicId: 'sexologia-forense',
    statement: 'Com relação à perícia quanto aos crimes contra a dignidade sexual, marque o item correto.',
    alternatives: [
      { id: 'a', text: 'O exame pericial no crime sexual deve ser realizado durante o dia devido à iluminação.' },
      { id: 'b', text: 'A integridade himenal descarta a ocorrência de conjunção carnal no crime sexual.' },
      { id: 'c', text: 'Encontra-se espermatozoides no fundo de saco vaginal até 96h após a ejaculação.' },
      { id: 'd', text: 'No vasectomizado, há vestígios na secreção vaginal que podem confirmar a conjunção carnal.' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'a) O exame pericial no crime sexual deve ser realizado o quanto antes após o crime, independentemente de haver iluminação natural. b) A integridade himenal NÃO descarta conjunção carnal, pois a vítima pode ter hímen complacente. c) Espermatozoides são encontrados no fundo de saco vaginal até cerca de 72h após a ejaculação, não 96h. d) Correto: mesmo em homens vasectomizados, há vestígios na secreção vaginal (como a glicoproteína P30/PSA) que podem confirmar a conjunção carnal, pois não dependem da presença de espermatozoides.',
    source: 'TC de LMF',
  },
  {
    id: 'sexo-06',
    topicId: 'sexologia-forense',
    statement:
      'Durante um exame de conjunção carnal, o legista observou retalhos de hímen roto pelo coito, os quais se retraem formando verdadeiros trabéculos. Assinale a alternativa que corresponde ao achado descrito pelo perito.',
    alternatives: [
      { id: 'a', text: 'Víbices himenais' },
      { id: 'b', text: 'Entalhes himenais' },
      { id: 'c', text: 'Vestíbulo da vagina' },
      { id: 'd', text: 'Carúnculas mirtiformes' },
      { id: 'e', text: 'Chanfraduras himenais' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'O hímen é a estrutura mucosa que separa a vulva da vagina, com duas faces (vaginal e vestibular) e duas bordas (aderente e livre, que delimita o óstio). Entre suas alterações: entalhes e chanfraduras são alterações congênitas, não cicatrizam e são geralmente simétricas; rupturas são lesões traumáticas, recentes ou antigas, geralmente assimétricas e atingindo toda a orla. Já as carúnculas mirtiformes são justamente os retalhos residuais do hímen rompido pelo coito (principalmente após parto vaginal), que se retraem formando pequenos trabéculos — achado descrito na questão.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
  {
    id: 'sexo-07',
    topicId: 'sexologia-forense',
    statement: 'Sobre a perícia dos crimes sexuais, assinale a alternativa correta.',
    alternatives: [
      { id: 'a', text: 'Poderá ser realizada por qualquer Perito Oficial.' },
      { id: 'b', text: 'Na maioria das vezes, a ruptura himenal é o elemento essencial no diagnóstico da conjunção carnal.' },
      { id: 'c', text: 'Não há como determinar a conjunção carnal nos casos de mulheres com vida sexual pregressa.' },
      {
        id: 'd',
        text: 'Na virgem, exames como pesquisa de PSA e pesquisa de espermatozoides são obrigatórios para fundamentar a conjunção carnal.',
      },
      {
        id: 'e',
        text: 'O exame de DNA em nada auxilia a perícia dos crimes sexuais, pois sua aplicação prática se limita à antropologia forense.',
      },
    ],
    correctAlternativeId: 'b',
    explanation:
      'a) Deve ser especificamente o perito médico-legista a realizar o exame de crime sexual, não qualquer perito oficial. b) Correto: na maioria dos casos, a ruptura himenal é o elemento essencial no diagnóstico da conjunção carnal, já que costuma ser causada pela penetração. c) É possível, sim, determinar a conjunção carnal mesmo em mulheres com vida sexual pregressa, sobretudo se houve violência ou agressor diferente do parceiro habitual. d) Exames de PSA e espermatozoides são obrigatórios em geral (virgens ou não), não exclusivamente na virgem. e) O exame de DNA auxilia bastante a perícia dos crimes sexuais, pois pode identificar o agressor.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
  {
    id: 'sexo-08',
    topicId: 'sexologia-forense',
    statement:
      'Uma adolescente de 15 anos, acompanhada pela mãe, chega ao IML com histórico de escoriação em cotovelo, hiperemia vaginal e hímen íntegro. Sobre a perícia dos crimes sexuais, assinale a alternativa correta.',
    alternatives: [
      { id: 'a', text: 'A hiperemia vaginal determina o crime de estupro, pois foi causada pelo atrito do pênis com a mucosa vaginal.' },
      { id: 'b', text: 'A hiperemia vaginal determina o crime de estupro, pois foi causada por doença sexualmente transmissível.' },
      { id: 'c', text: 'A escoriação do cotovelo determina tentativa de luta ou fuga.' },
      {
        id: 'd',
        text: 'A simples afirmação da hiperemia vaginal e da escoriação no cotovelo não permite afirmar com segurança que a pessoa sofreu violência sexual.',
      },
      {
        id: 'e',
        text: 'A perícia deve orientar suas conclusões no sentido de valorizar as lesões encontradas, não de estabelecer o nexo causal com o alegado fato.',
      },
    ],
    correctAlternativeId: 'd',
    explanation:
      'a) A hiperemia vaginal não determina, por si só, o crime de estupro, pois pode ter outras causas (infecção, outro objeto penetrante, etc.), não necessariamente o atrito do pênis. b) A hiperemia pode ter várias causas, inclusive IST, mas isso precisaria ser confirmado por exames específicos, não apenas presumido. c) A escoriação no cotovelo pode sugerir tentativa de luta ou fuga, mas isoladamente não é conclusiva — depende de outros fatores, como a tonalidade da lesão, para estabelecer nexo temporal. d) Correto: a simples presença desses dois achados, isoladamente, não permite afirmar com segurança a ocorrência de violência sexual. e) A perícia deve valorizar as lesões encontradas E buscar estabelecer o nexo causal com o fato alegado — não apenas uma coisa ou outra.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
  {
    id: 'sexo-09',
    topicId: 'sexologia-forense',
    statement: 'Assinale a alternativa que corresponde à descrição de um hímen complacente.',
    alternatives: [
      { id: 'a', text: 'Hímen com membrana crivada por várias aberturas' },
      { id: 'b', text: 'Hímen com septos delimitando dois orifícios' },
      { id: 'c', text: 'Hímen com propriedade elástica' },
      { id: 'd', text: 'Hímen fibroso e inelástico' },
      { id: 'e', text: 'Hímen sem abertura' },
    ],
    correctAlternativeId: 'c',
    explanation:
      'Hímen complacente é aquele com propriedade elástica, óstio amplo e orla estreita ou baixa, que permite a penetração sem rompimento — podendo permanecer íntegro mesmo após relações sexuais repetidas. É um dos tipos mais comumente encontrados no exame pericial.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
  {
    id: 'sexo-10',
    topicId: 'sexologia-forense',
    statement:
      'A admiração pelo próprio corpo ou o culto exagerado da própria personalidade pode se apresentar como uma perversão da sexualidade denominada:',
    alternatives: [
      { id: 'a', text: 'autoerotismo' },
      { id: 'b', text: 'erotismo' },
      { id: 'c', text: 'erotomania' },
      { id: 'd', text: 'exibicionismo' },
      { id: 'e', text: 'narcisismo' },
    ],
    correctAlternativeId: 'e',
    explanation:
      'a) Autoerotismo é o prazer sexual obtido sem parceiro, como por imagens ou pensamentos. b) Erotismo, no sentido usado aqui, remete ao amor platônico. c) Erotomania equivale à satiríase/ninfomania. d) Exibicionismo é a obsessão por exibir os genitais, mesmo sem qualquer convite para relação sexual. e) Correto: narcisismo é a admiração pelo próprio corpo ou o culto exagerado da própria personalidade, cuja excitação sexual tem como referência o próprio corpo.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
  {
    id: 'sexo-11',
    topicId: 'sexologia-forense',
    statement:
      'A atração por mulheres desasseadas, sujas, de baixa condição social e higiênica pode se apresentar como uma perversão da sexualidade denominada:',
    alternatives: [
      { id: 'a', text: 'dolismo' },
      { id: 'b', text: 'donjuanismo' },
      { id: 'c', text: 'edipismo' },
      { id: 'd', text: 'fetichismo' },
      { id: 'e', text: 'riparofilia' },
    ],
    correctAlternativeId: 'e',
    explanation:
      'a) Dolismo é a excitação e obtenção de prazer sexual com bonecas/manequins. b) Donjuanismo (Síndrome de Don Juan) é a necessidade compulsiva de seduzir e viver relacionamentos curtos, com interesse maior na conquista do que no sexo em si. c) Edipismo é a tendência ao incesto, o impulso do ato sexual por parentes próximos. d) Fetichismo é a fixação sexual por uma parte do corpo ou objeto pertencente à pessoa amada. e) Correto: riparofilia é a atração por mulheres desasseadas, sujas, de baixa condição social e higiênica.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
  {
    id: 'sexo-12',
    topicId: 'sexologia-forense',
    statement:
      'Como se denominam o desejo e a satisfação sexual realizados com o sofrimento da pessoa amada, exercidos pela crueldade do pervertido, muitas vezes levando à morte?',
    alternatives: [
      { id: 'a', text: 'bestialismo' },
      { id: 'b', text: 'necrofilia' },
      { id: 'c', text: 'pigmalionismo' },
      { id: 'd', text: 'sadismo' },
      { id: 'e', text: 'zoofilia' },
    ],
    correctAlternativeId: 'd',
    explanation:
      'a) e e) Bestialismo (ou zoofilia) é a satisfação sexual com animais, mais comum em homens do campo. b) Necrofilia é a obsessão e o impulso de atos sexuais com cadáveres. c) Pigmalionismo, de forma parecida com o dolismo, é o amor por estátuas. d) Correto: sadismo é a satisfação sexual obtida a partir do sofrimento da pessoa amada, exercida pela crueldade do pervertido, podendo levar até à morte da vítima.',
    source: 'ITEP-RN - Médico Legista (2018)',
  },
];
