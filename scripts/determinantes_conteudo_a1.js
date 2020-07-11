var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];
var Partes = ['1', '2', '3', '4', '5'];
var nomeSoft = 'determinantes';
var Questoes =
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			itens:
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_1_a,
					enunciado: 'Mova os triângulos e os encaixe de modo a obter um retângulo.',
					msgErro: 'Clique no botão Recomeçar e tente novamente.',
					msgAjuda: 'Mova os triângulos, pressionando o mouse sobre eles, e os encaixe.'
				}
			]
		},
		parte1_q2: //Questão 2
		{
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_2_a,
					depois: 'cm²',
					enunciado: 'Considerando que os triangulos são triângulos retângulos e cada lado tem 2 cm, qual é a área do polígono original?',
					msgErro: 'A área de um retângulo é: base * altura.',
					msgAjuda: 'Não é necessário digitar a unidade de medida. Observe bem o número de triângulos.'
				}
			]
		}
	},
	{ //Parte 2
		parte2_q3: //Questão 3
		{
			itens:
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_3_a,
					enunciado: 'Mova os triângulos que formam o paralelogramo ao lado pressionando o mouse em cima das figuras. Depois, mova os de modo a obter um retângulo.',
					msgErro: 'Clique o botão Recomeçar e tente novamente.',
					msgAjuda: 'Mova os triângulos, pressionando o mouse sobre eles, e os encaixe.'
				}
			]
		},
		parte2_q4: //Questão 4
		{
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_4_a,
					depois: 'cm²',
					enunciado: 'Observando o retângulo obtido na questão anterior, responda: Qual a área do paralelogramo?',
					msgErro: 'A área de um retângulo é: base * altura.',
					msgAjuda: 'Não é necessário digitar a unidade de medida. Observe bem o número de triângulos.'
				}
			]
		}
	},
	{ //Parte 3
	},
	{ //Parte 4
		parte4_q5: //Questão 6
		{
			enunciadoGeral: 'Construa no quadro ao lado um paralelogramo com as propriedades exigidas em cada um dos itens A, B, e C.',
			itens:
			[
				{//C
					tipo: 'input',
					corrigir: corrige_q_6_c,
					//selecionada: selecionou_q_6_c,
					depois: 'cm²',
					antes: 'Área = ',
					associado: true,
					enunciado: 'Um quadrado (qualquer quadrado é um retângulo).',
					depois_enunciado: '<div style="display:block; margin-left: 30px;  margin-top:10px" id="p1_q6_cspammatriz"></div><div class="limpador"></div>',
					msgErro: 'A área de um retângulo é: base * altura',
					msgAjuda: 'Não é necessário por unidade de medida.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_6_b,
					//selecionada: selecionou_q_6_b,
					depois: 'cm²',
					antes: 'Área = ',
					associado: true,
					enunciado: 'Um retângulo (qualquer retângulo é um paralelogramo).',
					depois_enunciado: '<div id="p1_q6_bspammatriz" style="margin-left: 30px; margin-top:10px"></div><div class="limpador"></div>',
					msgErro: 'A área de um retângulo é: base * altura',
					msgAjuda: 'Não é necessário por unidade de medida.'
				},
				{//A
					tipo: 'input',
					corrigir: corrige_q_6_a,
					selecionada: selecionou_q_6_a,
					depois: 'cm²',
					antes: 'Área = ',
					associado: true,
					enunciado: 'Um paralelogramo qualquer.',
					depois_enunciado: '<div id="p1_q6_aspammatriz" style="margin-left: 30px;  margin-top:10px"></div><div class="limpador"></div>',
					msgErro: 'A área de um retângulo é: base * altura',
					msgAjuda: 'Não é necessário por unidade de medida.'
				}
			]
		},
		parte4_q6: //Questão 7
		{
			enunciadoGeral: 'Seguindo o mesmo raciocínio da questão anterior, construa paralelogramos seguindo as restrições abaixo.',
			itens:
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_7_a,
					selecionada: selecionou_q_7_a,
					enunciado: 'Construa um retângulo de área igual a 24 cm².',
					depois_enunciado: '<div id="p1_q7_aspammatriz" style="margin-left: 30px;  margin-top:10px"></div><div class="limpador"></div>',
					associado: true,
					msgErro: 'O retângulo está incorreto',
					msgAjuda: 'Determine as coordenadas do paralelogramo e clique o botão Responder.'
				},
				{//B
					tipo: 'instrucao',
					corrigir: corrige_q_7_b,
					selecionada: selecionou_q_7_b,
					enunciado: 'Construa um paralelogramo que não seja um retângulo, mas cuja área também seja de 24 cm².',
					depois_enunciado: '<div id="p1_q7_bspammatriz" style="margin-left: 30px;  margin-top:10px"></div><div class="limpador"></div>',
					associado: true,
					msgErro: 'O paralelogramo está incorreto.',
					msgAjuda: 'Determine as coordenadas do paralelogramo e clique o botão Responder.'
				}
			]
		}
	},
	{ //Parte 5
		parte5_q7: //Questão 8
		{
			enunciadoGeral: 'Associe a cada matriz a área do paralelogramo que ela representa.',
			itens:
			[
				{//A
					tipo: 'drag',
					tamanho: 'grande',
					corrigir: corrige_q_8_a,
					html: 'drag',
					associado: false,
					msgErro: 'A área do paralelogramo é igual à determinante da matriz.',
					msgAjuda: 'Arraste a resposta e solte na alternativa correta.'
				}
			]
		},
		parte5_q8: //Questão 9
		{
			enunciadoGeral: 'Calcule o determinante de cada uma das matrizes da questão anterior.',
			itens:
			[
				{//A
					tipo: 'multiplo_input',
					corrigir: corrige_q_9_a,
					dependente: false,
					associado: false,
					enunciado: '',
					depois_enunciado: '<div class="matriz matriz_menor margem_questao"><div class="supe_esq"></div><div class="supe_dir"></div><span>1</span><span>0</span><br class="limpador" /><span>2</span><span>1</span><br class="limpador" /><div class="esquerda inferior infe_esq"></div><div class="direita inferior infe_dir"></div></div><br class="limpador" />',
					dados:	[
							 [{tipo: 'normal', label:'Det(A) = '}]
							],
					msgErro: 'A Determinante de uma matriz 2x2: é a*d – c*b'
				},
				{//B
					tipo: 'multiplo_input',
					corrigir: corrige_q_9_b,
					dependente: false,
					associado: false,
					enunciado: '',
					depois_enunciado: '<div class="matriz matriz_menor margem_questao"><div class="supe_esq"></div><div class="supe_dir"></div><span>2</span><span>0</span><br class="limpador" /><span>2</span><span>3</span><br class="limpador" /><div class="esquerda inferior infe_esq"></div><div class="direita inferior infe_dir"></div></div><br class="limpador" />',
					dados:	[
							 [{tipo: 'normal', label:'Det(B) = '}]
							],
					msgErro: 'A Determinante de uma matriz 2x2: é a*d – c*b'
				},
				{//C
					tipo: 'multiplo_input',
					corrigir: corrige_q_9_c,
					dependente: false,
					associado: false,
					enunciado: '',
					depois_enunciado: '<div class="matriz matriz_menor margem_questao"><div class="supe_esq"></div><div class="supe_dir"></div><span>2</span><span>0</span><br class="limpador" /><span>38</span><span>3</span><br class="limpador" /><div class="esquerda inferior infe_esq"></div><div class="direita inferior infe_dir"></div></div><br class="limpador" />',
					dados:	[
							 [{tipo: 'normal', label:'Det(C) = '}]
							],
					msgErro: 'A Determinante de uma matriz 2x2: é a*d – c*b'
				},
				{//D
					tipo: 'multiplo_input',
					corrigir: corrige_q_9_d,
					dependente: false,
					associado: false,
					enunciado: '',
					depois_enunciado: '<div class="matriz matriz_menor margem_questao"><div class="supe_esq"></div><div class="supe_dir"></div><span>3</span><span>0</span><br class="limpador" /><span>2</span><span>5</span><br class="limpador" /><div class="esquerda inferior infe_esq"></div><div class="direita inferior infe_dir"></div></div><br class="limpador" />',
					dados:	[
							 [{tipo: 'normal', label:'Det(D) = '}]
							],
					msgErro: 'A Determinante de uma matriz 2x2: é a*d – c*b'
				},
				{//E
					tipo: 'multiplo_input',
					corrigir: corrige_q_9_e,
					dependente: false,
					associado: false,
					enunciado: '',
					depois_enunciado: '<div class="matriz matriz_menor margem_questao"><div class="supe_esq"></div><div class="supe_dir"></div><span>7</span><span>0</span><br class="limpador" /><span>2</span><span>2</span><br class="limpador" /><div class="esquerda inferior infe_esq"></div><div class="direita inferior infe_dir"></div></div><br class="limpador" />',
					dados:	[
							 [{tipo: 'normal', label:'Det(E) = '}]
							],
					msgErro: 'A Determinante de uma matriz 2x2: é a*d – c*b'
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
