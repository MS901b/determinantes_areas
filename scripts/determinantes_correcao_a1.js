//Matias
var xmlQ5resp = [ '','','' ];
document.observe("dom:loaded", function()
{
	/* exemplo de como habilitar as partes
	   tem que lembrar de comentar este trecho pro software oficial */

});
Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
});


var flag = 1;
Event.observe(document, 'flash:SalvaLocal', function(ev){
	flag = 1;
});

document.observe('dom:afterPermiteContinuar', function(event) {
	if (PosicaoAtual.Parte == 2){
		if ((getResp('ja_fiz_atividade1_parte_2')) != 1){
			permiteContinuar(false);
			setResp(('automacao_atividade_1_parte_3'), 0)
			gerencia_partes();
		}
	}
});

Event.observe(window, 'load', function(){
	if (PosicaoAtual.Parte == 0){
		if (flag){
			if (getResp('atividade_1') != 3){
				setResp('atividade_1',2);
			}

			if(getResp('parte1_q2_a') != 'undefined'){
				$('parte1_q2_a').value = getResp('parte1_q2_a');
			}
			Event.observe('parte1_q2_a', 'change', function(evento){
				validar_numeros('parte1_q2_a');
				if ($('parte1_q2_a').value != ""){
					setResp('parte1_q2_a',$('parte1_q2_a').value);
				}
			});
		}
	}

	if (PosicaoAtual.Parte == 1){
		if (flag){
			if(getResp('parte2_q4_a') != 'undefined'){
				$('parte2_q4_a').value = getResp('parte2_q4_a');
			}
			Event.observe('parte2_q4_a', 'change', function(evento){
				validar_numeros('parte2_q4_a');
				if ($('parte2_q4_a').value != ""){
					setResp('parte2_q4_a',$('parte2_q4_a').value);
				}
			});
		}
	}


	if (PosicaoAtual.Parte == 2) {
		$('valor_inicial').removeClassName('desabilitada');
		$('valor_inicial_dentro').removeClassName('desabilitada');
		$('link_valor_inicial').update('Definir coordenadas');
		Event.stopObserving($('link_valor_inicial'), 'click');
		A = "A";

		$('eixo1').removeAttribute('disabled');
		$('eixo2').removeAttribute('disabled');
		$('eixo3').removeAttribute('disabled');
		$('eixo4').removeAttribute('disabled');

		$('link_continuar').removeClassName('ativado');

		if (flag){


			setResp('eixo1',$('eixo1').value);
			setResp('eixo2',$('eixo2').value);
			setResp('eixo3',$('eixo3').value);
			setResp('eixo4',$('eixo4').value);
			$('eixo1').value = getResp('eixo1');
			$('eixo2').value = getResp('eixo2');
			$('eixo3').value = getResp('eixo3');
			$('eixo4').value = getResp('eixo4');

			Event.observe('eixo1', 'change', function(evento){
				validar_numeros_limites('eixo1',0,10);
				if ($('eixo1').value != ""){
					setResp('eixo1',$('eixo1').value);
				}
			});

			Event.observe('eixo2', 'change', function(evento){
				validar_numeros_limites('eixo2',0,10);
				if ($('eixo2').value != ""){
					setResp('eixo2',$('eixo2').value);
				}
			});

			Event.observe('eixo3', 'change', function(evento){
				validar_numeros_limites('eixo3',0,10);
				if ($('eixo3').value != ""){
					setResp('eixo3',$('eixo3').value);
				}
			});

			Event.observe('eixo4', 'change', function(evento){
				validar_numeros_limites('eixo4',0,10);
				if ($('eixo4').value != ""){
					setResp('eixo4',$('eixo4').value);
				}
			});
		}
	}

	if (PosicaoAtual.Parte == 3){
		var posicao = {Parte: 3, Questao: 'parte4_q5', Item:0};
		PegaQuestao(posicao).seleciona();

		if ($('parte4_q5_a_11')){$('parte4_q5_a_11').value = "";
		setResp('parte4_q5_a_11',$('parte4_q5_a_11').value);
		Event.observe('parte4_q5_a_11', 'change', function(evento){
			validar_numeros('parte4_q5_a_11');
			if ($('parte4_q5_a_11').value != ""){
				setResp('parte4_q5_a_11',$('parte4_q5_a_11').value);
			}
		});
		}
		if ($('parte4_q5_b_11')){$('parte4_q5_b_11').value = "";
		setResp('parte4_q5_b_11',$('parte4_q5_b_11').value);
		Event.observe('parte4_q5_b_11', 'change', function(evento){
			validar_numeros('parte4_q5_b_11');
			if ($('parte4_q5_b_11').value != ""){
				setResp('parte4_q5_b_11',$('parte4_q5_b_11').value);
			}
		});
		}
		if ($('parte4_q5_c_11')){
			$('parte4_q5_c_11').value = "";
			setResp('parte4_q5_c_11',$('parte4_q5_c_11').value);
			Event.observe('parte4_q5_c_11', 'change', function(evento){
				validar_numeros('parte4_q5_c_11');
				if ($('parte4_q5_c_11').value != ""){
					setResp('parte4_q5_c_11',$('parte4_q5_c_11').value);
				}
			});
		}

		Event.observe('eixo1a', 'input:change', function(evento){
			var applet = document.ggbApplet;
			applet.setFixed("B", false);
			applet.setCoords("B", $('eixo1a').getValue(), 0);
			applet.setFixed("B", true);
			var aa = ($('eixo1a').value);
			var bb = ($('eixo1c').value);
			var cc = ($('eixo1d').value);
			if ((aa != 0)||(bb != 0)||(cc != 0)){
			Responder_applet_p4();
			}
		});

		Event.observe('eixo1c', 'input:change', function(evento){
			var applet = document.ggbApplet;
			applet.setFixed("C", false);
			applet.setCoords("C", $('eixo1c').getValue(), $('eixo1d').getValue());
			applet.setFixed("C", true);
			var aa = ($('eixo1a').value);
			var bb = ($('eixo1c').value);
			var cc = ($('eixo1d').value);
			if ((aa != 0)||(bb != 0)||(cc != 0)){
			Responder_applet_p4();
			}
		});

		Event.observe('eixo1d', 'input:change', function(evento){
			var applet = document.ggbApplet;
			applet.setFixed("C", false);
			applet.setCoords("C", $('eixo1c').getValue(), $('eixo1d').getValue());
			applet.setFixed("C", true);
			var aa = ($('eixo1a').value);
			var bb = ($('eixo1c').value);
			var cc = ($('eixo1d').value);
			if ((aa != 0)||(bb != 0)||(cc != 0)){
			Responder_applet_p4();
			}

		});

		Event.observe('eixo1a', 'change', function(evento){
			var applet = document.ggbApplet;
			applet.setFixed("B", false);
			applet.setCoords("B", $('eixo1a').getValue(), 0);
			applet.setFixed("B", true);
			var aa = ($('eixo1a').value);
			var bb = ($('eixo1c').value);
			var cc = ($('eixo1d').value);
			if ((aa != 0)||(bb != 0)||(cc != 0)){
			Responder_applet_p4();
			}
		});

		Event.observe('eixo1c', 'change', function(evento){
			var applet = document.ggbApplet;
			applet.setFixed("C", false);
			applet.setCoords("C", $('eixo1c').getValue(), $('eixo1d').getValue());
			applet.setFixed("C", true);
			var aa = ($('eixo1a').value);
			var bb = ($('eixo1c').value);
			var cc = ($('eixo1d').value);
			if ((aa != 0)||(bb != 0)||(cc != 0)){
			Responder_applet_p4();
			}
		});

		Event.observe('eixo1d', 'change', function(evento){
			var applet = document.ggbApplet;
			applet.setFixed("C", false);
			applet.setCoords("C", $('eixo1c').getValue(), $('eixo1d').getValue());
			applet.setFixed("C", true);
			var aa = ($('eixo1a').value);
			var bb = ($('eixo1c').value);
			var cc = ($('eixo1d').value);
			if ((aa != 0)||(bb != 0)||(cc != 0)){
			Responder_applet_p4();
			}
		});


	}

	if (PosicaoAtual.Parte == 4){
		if(getResp('parte5_q8_a_11') != 'undefined'){
			$('parte5_q8_a_11').value = getResp('parte5_q8_a_11');
		}
		if(getResp('parte5_q8_b_11') != 'undefined'){
			$('parte5_q8_b_11').value = getResp('parte5_q8_b_11');
		}
		if(getResp('parte5_q8_c_11') != 'undefined'){
			$('parte5_q8_c_11').value = getResp('parte5_q8_c_11');
		}
		if(getResp('parte5_q8_d_11') != 'undefined'){
			$('parte5_q8_d_11').value = getResp('parte5_q8_d_11');
		}
		if(getResp('parte5_q8_e_11') != 'undefined'){
			$('parte5_q8_e_11').value = getResp('parte5_q8_e_11');
		}

		Event.observe('parte5_q8_a_11', 'change', function(evento){
			validar_numeros('parte5_q8_a_11');
			if ($('parte5_q8_a_11').value != ""){
				setResp('parte5_q8_a_11',$('parte5_q8_a_11').value);
			}
		});

		Event.observe('parte5_q8_b_11', 'change', function(evento){
			validar_numeros('parte5_q8_b_11');
			if ($('parte5_q8_b_11').value != ""){
				setResp('parte5_q8_b_11',$('parte5_q8_b_11').value);
			}
		});

		Event.observe('parte5_q8_c_11', 'change', function(evento){
			validar_numeros('parte5_q8_c_11');
			if ($('parte5_q8_c_11').value != ""){
				setResp('parte5_q8_c_11',$('parte5_q8_c_11').value);
			}
		});

		Event.observe('parte5_q8_d_11', 'change', function(evento){
			validar_numeros('parte5_q8_d_11');
			if ($('parte5_q8_d_11').value != ""){
				setResp('parte5_q8_d_11',$('parte5_q8_d_11').value);
			}
		});

		Event.observe('parte5_q8_e_11', 'change', function(evento){
			validar_numeros('parte5_q8_e_11');
			if ($('parte5_q8_e_11').value != ""){
				setResp('parte5_q8_e_11',$('parte5_q8_e_11').value);
			}
		});

		Event.observe('link_continuar', 'focus', function(evento){
		if(($('link_continuar').className) == 'ativado'){
			setResp('atividade_1',3);
		}
	});
	}
})

function corrige_q_1_a(valor)
{
	var isRectangle = checkRectangle();
	return [isRectangle];
}

function corrige_q_2_a(valor)
{
	return [valor[0] == 12];
}

function corrige_q_3_a(valor)
{
	return[$('Paralelo').Corrige()];
}

function corrige_q_4_a(valor)
{
	return[(valor[0]==6)];
}

function corrige_q_5_a(valor)
{
	return [(true), (false),(true), (false)];
}

function corrige_a2_p3_q_1(valor){
return [valor[0]?false:null, valor[1]?true:null, valor[2]?false:null, valor[3]?false:null, valor[4]?false:null,];
}

function corrige_q_8_a()
{
	return corrige_q8a();
}

function corrige_q_9_a(valor)
{
	return [(valor[0] == 1)]
}

function corrige_q_9_b(valor)
{
	return [(valor[0] == 6)]
}

function corrige_q_9_c(valor)
{
	return [(valor[0] == 6)]
}

function corrige_q_9_d(valor)
{
	return [(valor[0] == 15)]
}

function corrige_q_9_e(valor)
{
	return [(valor[0] == 14)]
}


function corrige_a2_p1_valorinicial()
{
var valor = new Array()
valor[0] =  	($('eixo1').value);
valor[1] =	($('eixo2').value);
valor[2] =	($('eixo3').value);
valor[3] =	($('eixo4').value);

	if(((valor[0] >= 1)&&(valor[0]<=3)),((valor[1] >= 1)&&(valor[1]<=3)),((valor[2] >= 1)&&(valor[2]<=3)),((valor[3] >= 1)&&(valor[3]<=3))){
	funcao_geogebra_a2_p1_q_valorinicial();
	}

}

function corrige_a2_p1_q_1_a(valor)
{
	if( (valor[0] == (2*($('eixo1').value)))&&(valor[1] == (2*($('eixo2').value))) ){
	funcao_geogebra_a2_p1_q_1();
	}
	return [(valor[0] == (2*($('eixo1').value))),(valor[1] == (2*($('eixo2').value)))];
}

function corrige_a2_p1_q_1_b(valor)
{
	return [(valor[0] == 2)];
}

function corrige_a2_p1_q_2_a(valor)
{
	if( (valor[0] == ($('eixo1').value))&&(valor[1] == ($('eixo2').value))&&(valor[2] == (2*($('eixo3').value)))&&(valor[3] == (2*($('eixo4').value))) ){
	funcao_geogebra_a2_p1_q_2();
	}
	return [(valor[0] == ($('eixo1').value))&&(valor[1] == ($('eixo2').value))&&(valor[2] == (2*($('eixo3').value)))&&(valor[3] == (2*($('eixo4').value)))];
}

function corrige_a2_p1_q_2_b(valor)
{
	return [(valor[0] == 4)];
}

function corrige_a2_p3_q_1(valor)
{
	return [(valor[0]?false:null),(valor[1]?false:null),(valor[2]?false:null),(valor[3]?true:null)];

}

function corrige_a2_p3_q_2(valor)
{
	return [(valor[0]?false:null),(valor[1]?false:null),(valor[2]?true:null),(valor[3]?false:null)];

}

function corrige_a2_p3_q_3(valor)
{
	return [(valor[0]?false:null),(valor[1]?true:null),(valor[2]?false:null),(valor[3]?false:null)];

}

function corrige_a2_p2_q_1(valor)
{

	if(	(valor[0]>=1)&&(valor[1]>=1)&&(valor[2]>=1)&&(valor[3]>=1)&&(valor[0]<=3)&&(valor[1]<=3)&&(valor[2]<=3)&&(valor[3]<=3)	){
	funcao_geogebra_a2_p2_q_1();
	}
	return [((valor[0] >= 1)&&(valor[0]<=3)),((valor[1] >= 1)&&(valor[1]<=3)),((valor[2] >= 1)&&(valor[2]<=3)),((valor[3] >= 1)&&(valor[3]<=3))];

}

function corrige_a2_p2_q_2(valor)
{
	var x_esperado = Number($('parte1_q1_a_11').value) + Number($('parte1_q1_a_21').value);
	var y_esperado = Number($('parte1_q1_a_12').value) + Number($('parte1_q1_a_22').value);
	funcao_geogebra_a2_p2_q_2();
	return [(valor[0] == x_esperado),(valor[1] == y_esperado)];

}

function corrige_a2_p2_q_3(valor)
{
	var x_esperado = Number($('parte1_q1_a_11').value) + Number($('parte1_q1_a_21').value);
	var y_esperado = Number($('parte1_q1_a_12').value) + Number($('parte1_q1_a_22').value);
	funcao_geogebra_a2_p2_q_3();

	return [(valor[0] == x_esperado),(valor[1] == y_esperado)];

}

function corrige_q_6_a(valor)
{
	return [funcao_corrige_q_6_a(valor)];
}

function corrige_q_6_b(valor)
{
	return [funcao_corrige_q_6_b(valor)];
}

function corrige_q_6_c(valor)
{
	return [funcao_corrige_q_6_c(valor)];
}

function corrige_q_7_a()
{
	return [funcao_corrige_q_7_a()];
}

function corrige_q_7_b()
{
	return [funcao_corrige_q_7_b()];
}



function set_inicial(){
	if (($('eixo1').value == "")||($('eixo2').value == "")||($('eixo3').value == "")||($('eixo4').value == "")){

	var Perg =
		{
			conteudo: 'Foi preenchida alguma coordenada inválida.',
			layout: ['seta_baixo','direita'],
			largura: 10,
			callback: function (){},
			respostas: [{sim: 'Ok'}]
		};

		var tmp = new PopupCallback($('link_valor_inicial'), Perg.conteudo,Perg.layout, Perg.largura, Perg.callback, Perg.respostas);
		tmp.abre();
		Event.stopObserving($('link_valor_inicial'),'click');
		//$('link_valor_inicial').writeAttribute({onclick: 'javascript:set_inicial();'});
		Event.observe($('link_valor_inicial'), 'click', set_inicial);


	}else{
		$('valor_inicial').addClassName('desabilitada');
		$('valor_inicial_dentro').addClassName('desabilitada');
		$('eixo1').writeAttribute({disabled: 'disabled'});
		$('eixo2').writeAttribute({disabled: 'disabled'});
		$('eixo3').writeAttribute({disabled: 'disabled'});
		$('eixo4').writeAttribute({disabled: 'disabled'});
		criaVertices();
		animaVertices();
		$('link_valor_inicial').hide();
		$('unset_inicial').show();
		permiteContinuar(true);
		setResp('ja_fiz_atividade1_parte_2', 1);
	}
}

function unset_inicial()
{
	if (this.resultado == 'sim')
	{
		$('valor_inicial').removeClassName('desabilitada');
		$('valor_inicial_dentro').removeClassName('desabilitada');
		A = "A";
		$('eixo1').removeAttribute('disabled');
		$('eixo2').removeAttribute('disabled');
		$('eixo3').removeAttribute('disabled');
		$('eixo4').removeAttribute('disabled');
		$('unset_inicial').hide();
		$('link_valor_inicial').show();
		limpar_applet();
	}
}

function set1()
{
	corrige_a2_p1_valorinicial();

	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0}, 'Este item está baseado no valor acima');
	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 1}, 'Este item está baseado no valor acima');

}

function unset1()
{
	adicionaEsperando({Parte: 0, Questao:'parte1_q1', Item: 0});
	adicionaEsperando({Parte: 0, Questao:'parte1_q1', Item: 1});
}

function funcao_pede()
{
	switch(this.resultado)
	{
		case 'sim':	alert('Vc clicou em sim!');	break;
		case 'nao':	alert('Nossa, mas pq não?');break;
		case 'sabe_que_num_sei':alert('Não interessa, também.'); break;
	}
}



// Atividade 1 Parte 3
function criaVertices() {
	if( document.getElementById("eixo1").value < document.getElementById("eixo3").value){
		var x = document.getElementById("eixo1").value;
		var y = document.getElementById("eixo2").value;
		x = x.replace(/,/i,".");
		y = y.replace(/,/i,".");
		document.getElementById("eixo1").value = x;
		document.getElementById("eixo2").value = y;
		var applet = document.ggbApplet;
		applet.evalCommand("B = (" + x + "," + y + ")");
		x = document.getElementById("eixo3").value;
		y = document.getElementById("eixo4").value;
		x = x.replace(/,/i,".");
		y = y.replace(/,/i,".");
		document.getElementById("eixo3").value = x;
		document.getElementById("eixo4").value = y;
		applet.evalCommand("C = (" + x + "," + y + ")");
		applet.evalCommand("C = (" + x + "," + y + ")");

		applet.setFixed('A', true);
		applet.setFixed('B', true);
		applet.setFixed('C', true);
		applet.setFixed('D', true);
	}else{
		var x = document.getElementById("eixo3").value;
		var y = document.getElementById("eixo4").value;
		x = x.replace(/,/i,".");
		y = y.replace(/,/i,".");
		document.getElementById("eixo3").value = x;
		document.getElementById("eixo4").value = y;
		var applet = document.ggbApplet;
		applet.evalCommand("B = (" + x + "," + y + ")");
		x = document.getElementById("eixo1").value;
		y = document.getElementById("eixo2").value;
		x = x.replace(/,/i,".");
		y = y.replace(/,/i,".");
		document.getElementById("eixo1").value = x;
		document.getElementById("eixo2").value = y;
		applet.evalCommand("C = (" + x + "," + y + ")");
		applet.setFixed('A', true);
		applet.setFixed('B', true);
		applet.setFixed('C', true);
		applet.setFixed('D', true);
	}
}

function animaVertices() {
	var applet = document.ggbApplet;
	if (!applet.isAnimationRunning()) {
		applet.setVisible('a_1', true);
		applet.setVisible('b_1', true);
		applet.stopAnimation();
		applet.setValue('t_1',0);
		applet.setAnimating('t_1',true)
		applet.setAnimationSpeed('t_1', 8.0)
		applet.startAnimation();
	}
}

// Quando terminarmos de animar, definimos o valor exato dos dois pontos
function func2() {
	var applet = document.ggbApplet;
	if (applet.isAnimationRunning()) {
		applet.stopAnimation();
		applet.setAnimating('t_1',false)
		applet.setValue('t_2',0);
		applet.setAnimating('t_2',true)
		applet.setAnimationSpeed('t_2', 8.0)
		applet.startAnimation();
	}
}
// A mesma coisa aqui
function func3() {
	var applet = document.ggbApplet;
	applet.stopAnimation();
	applet.setAnimating('t_1',false)
	applet.setAnimating('t_2',false)
	applet.setVisible('D', 1);
	applet.setVisible('poly1', 1);
	applet.setFixed('a_1', 1);
	applet.setFixed('a_1', 1);
	applet.setFixed('b_1', 1);
	applet.setFixed('a_2', 1);
	applet.setFixed('b_2', 1);
	applet.setFixed('c', 1);
	applet.setFixed('d', 1);
}

function registerListeners_a1_p3(){
	var applet = document.ggbApplet;
	applet.registerUpdateListener("updateListener_a1_p3");
}

// Esse segundo teste eh o problema. Dependendo do valor, a diferenca eh mto grande.
function updateListener_a1_p3(objName) {
	var applet = document.ggbApplet;
	if (PosicaoAtual.Parte == 2){
		if ( (objName=='t_1') && (applet.getValue('t_1') >= 1) ){
			func2();
		}
		if ( (objName=='t_2') && (applet.getValue('t_2') >= 1) ){
			func3();
		}
	}
}
