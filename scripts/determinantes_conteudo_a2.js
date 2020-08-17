/*
	Padronização do ID:
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/

var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];
var Partes = ['1'];
var nomeSoft = 'determinantes';

/*
	Questoes

	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item

	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Questoes =
[
	{//Parte 2
		parte1_q1: //Questão 1
		{
			enunciadoGeral: 'Considerando a matriz acima',
			itens:
			[
				{//A
					tipo: 'matriz',
					corrigir: corrige_a2_p1_q_1_a,
					esperando: false,
					associado: false,
					enunciado: 'Multiplique apenas a primeira linha da matriz por 2 e preencha abaixo.',
					dados:	[
							 [{tipo: 'input'},{tipo: 'input'}],
							 [{tipo: 'texto', value: 0},{tipo: 'texto', value: 0}]
							],
					msgErro: 'A multiplicação está incorreta.',
					msgAjuda: 'Multiplique a11 e a12 por 2.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_a2_p1_q_1_b,
					esperando: false,
					associado: false,
					enunciado: 'Observando o quadro ao lado, responda: quantas vezes a área do paralelogramo obtido é maior do que a do original?',
					msgAjuda: 'Responda usando apenas números',
					msgErro: 'Observe no gráfico ao lado a alteração ocorrida pela multiplicação por 2.'
				}
			]
		},
		parte1_q2: //Questão 2
		{
			enunciadoGeral: 'Com base na matriz da questão anterior',
			itens:
			[
				{//A
					tipo: 'matriz',
					corrigir: corrige_a2_p1_q_2_a,
					esperando: false,
					associado: false,
					enunciado: 'Multiplique também a segunda linha da matriz por 2 e preencha abaixo.',
					msgAjuda: 'Multiplique a21 e a22 por 2.',
					msgErro: 'A multiplicação das linhas está incorreta.',
					dados:	[
							 [{tipo: 'input'},{tipo: 'input'}],
							 [{tipo: 'input'},{tipo: 'input'}]
							]
				},
				{//B
					tipo: 'input',
					corrigir: corrige_a2_p1_q_2_b,
					esperando: false,
					associado: false,
					msgErro: 'A resposta está incorreta.',
					msgAjuda: 'Responda usando apenas números',
					enunciado: 'Observando o quadro ao lado, responda: quantas vezes a área do paralelogramo obtido é maior do que a do original?'
				}
			]
		},
		parte1_q3: //Questão 2
		{
			itens:
			[
				{//A

					tipo: 'multipla_escolha',
					corrigir: corrige_a2_p3_q_1,
					enunciado: 'Se multiplicássemos as duas linhas da matriz por 3, quantas vezes a área do paralelogramo obtido seria maior do que a do original?',
					dados:	[
						{value: '0', label: 'As áreas seriam iguais.'},
						{value: '0', label: '3 vezes.'},
						{value: '0', label: '6 vezes.'},
						{value: '1', label: '9 vezes.'},
						{value: '0', label: '33 vezes.'}
					],
					msgErro: 'A resposta está incorreta.',
					esperando: false,
					associado: false
				}
			]
		}
	}
]

var MeuBloco = new Array(
);

Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();

});
