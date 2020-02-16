/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
 
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/
var Partes = ['1'];
var nomeSoft = 'determinantes';
var Questoes = 
[
	{//Parte 2
		a2_parte3_q1: //Questão 1
		{
			itens: 
			[
				{// A
					tipo: 'multipla_escolha',
					esperando: false,
					associado: false,
					corrigir: corrige_a2_p3_q_1,
					enunciado: 'Movimente o ponto azul de modo a fazer com que o determinante da matriz que representa o paralelogramo seja igual a 0. Quando isso ocorre?',
					msgErro: 'Enquanto movimenta o ponto azul, fique atento ao valor do determinantes da matriz indicada no canto superior esquerdo.',
					dados:	[
						{value: '0', label: 'Quando o ponto azul está sobre o eixo X.'},
						{value: '0', label: 'Quando o ponto azul está sobre o eixo Y.'},
						{value: '0', label: 'Quando o ponto azul está no quarto quadrante.'},
						{value: '1', label: 'Quando o ponto azul está sobre a reta cinza.'}
					]
				}
			]
		},
		a2_parte3_q2: //Questão 2
		{
			itens: 
			[
				{// A
					tipo: 'multipla_escolha',
					esperando: false,
					associado: false,
					msgErro: 'Enquanto movimenta o ponto azul, fique atento ao valor do determinantes da matriz indicada no canto superior esquerdo.',
					corrigir: corrige_a2_p3_q_2,
					enunciado: 'Agora, movimente o ponto azul prestando atenção no sinal do determinante. Em que regiões ele tem valor negativo?',
					dados:	[
						{value: '0', label: 'Quando o ponto azul está sobre a reta cinza.'},
						{value: '0', label: 'Quando o ponto azul está à direita (abaixo) da reta cinza.'},
						{value: '1', label: 'Quando o ponto azul está à esquerda (acima) da reta cinza.'},
						{value: '0', label: 'Quando o ponto azul está muito distante da origem.'}
					]
				}
			]
		},
		a2_parte3_q3: //Questão 3
		{
			itens: 
			[
				{// A
					tipo: 'multipla_escolha',
					esperando: false,
					associado: false,
					msgErro: 'Enquanto movimenta o ponto azul, fique atento ao valor do determinantes da matriz indicada no canto superior esquerdo.',
					corrigir: corrige_a2_p3_q_3,
					enunciado: 'Movimente o ponto azul ao longo do plano. Comparando o determinante das duas matrizes, pode-se dizer que:',
					dados:	[
						{value: '0', label: 'São sempre iguais.'},
						{value: '1', label: 'Têm sinais opostos mas valores absolutos iguais.'},
						{value: '0', label: 'Têm valores absolutos diferentes.'},
						{value: '0', label: 'Parecem não ter relação alguma.'}
					]
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
