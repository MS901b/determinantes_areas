
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];
var Partes = ['1'];
var nomeSoft = 'determinantes';
var Questoes =
[
	{//Parte 2
		parte1_q1: //Questão 2
		{
			itens:
			[
				{//A
					//C
					tipo: 'matriz',
					corrigir: corrige_a2_p2_q_1,
					esperando: false,
					dependente: true,
					associado: false,
					msgAjuda: 'Some a11 com a<sub>21</sub> e a<sub>12</sub> com a<sub>22</sub>',
					msgErro: 'As somas não estão corretas',
					enunciado: 'Tomando como referência a matriz anterior, some a segunda linha à primeira e preencha os resultados na matriz abaixo.',
					dados:	[
							 [{tipo: 'input'},{tipo: 'input'}],
							 [{tipo: 'texto', value: 0},{tipo: 'texto', value: 0}]
							]
				}
			]
		},
		parte1_q2: //Questão 2
		{
			itens:
			[
				{//A
					//C
					tipo: 'matriz',
					corrigir: corrige_a2_p2_q_2,
					esperando: false,
					dependente: true,
					associado: false,
					msgAjuda: 'Some a<sub>11</sub> com a<sub>21</sub> e a<sub>12</sub> com a<sub>22</sub>',
					msgErro: 'As somas não estão corretas',
					enunciado: 'Tomando como referência a matriz original, some a primeira linha à segunda e preencha os resultados na matriz abaixo.',
					dados:	[
							[{tipo: 'texto', value: 0},{tipo: 'texto', value: 0}],
							[{tipo: 'input'},{tipo: 'input'}]
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
