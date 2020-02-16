Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
});
var flag = 0;
Event.observe(document, 'flash:SalvaLocal', function(ev){
	flag = 1;
	if ((getResp('atividade_2') == 3)&&(getResp('atividade_3') == 3)&&(getResp('atividade_4') == 3)){
		setResp('transicao_1', 3);
	}
	
	Event.observe('link_continuar', 'focus', function(evento){
		if(($('link_continuar').className) == 'ativado'){
			setResp('atividade_3',3);
		}
	});
});

Event.observe(window, 'load', function(){
	if (flag){
		if (getResp('atividade_3') != 3){
			setResp('atividade_3',2);
		}
	}
});
Event.observe(window, 'load', function(){
	adicionaEsperando({Parte: 0, Questao:'parte1_q1', Item: 0});
	adicionaEsperando({Parte: 0, Questao:'parte1_q2', Item: 0});
	
	$('valor_inicial').removeClassName('desabilitada');
	$('eixo1_a3').removeAttribute('disabled');
	$('eixo2_a3').removeAttribute('disabled');
	$('eixo3_a3').removeAttribute('disabled');
	$('eixo4_a3').removeAttribute('disabled');
	
	if(getResp('eixo1_a3') != 'undefined'){
		$('eixo1_a3').value = getResp('eixo1_a3');
	}
	if(getResp('eixo2_a3') != 'undefined'){
		$('eixo2_a3').value = getResp('eixo2_a3');
	}
	if(getResp('eixo3_a3') != 'undefined'){
		$('eixo3_a3').value = getResp('eixo3_a3');
	}
	if(getResp('eixo4_a3') != 'undefined'){
		$('eixo4_a3').value = getResp('eixo4_a3');
	}
	if(getResp('a3_parte1_q1_a_11') != 'undefined'){
		$('parte1_q1_a_11').value = getResp('a3_parte1_q1_a_11');
	}
	if(getResp('a3_parte1_q1_a_12') != 'undefined'){
		$('parte1_q1_a_12').value = getResp('a3_parte1_q1_a_12');
	}
	if(getResp('a3_parte1_q2_a_21') != 'undefined'){
		$('parte1_q2_a_21').value = getResp('a3_parte1_q2_a_21');
	}
	if(getResp('a3_parte1_q2_a_22') != 'undefined'){
		$('parte1_q2_a_22').value = getResp('a3_parte1_q2_a_22');
	}
	Event.observe('eixo1_a3', 'change', function(evento){
			validar_numeros_limites('eixo1_a3',1,300);
			if ($('eixo1_a3').value != ""){
				setResp('eixo1_a3',$('eixo1_a3').value);
			}
		});	
		
		Event.observe('eixo2_a3', 'change', function(evento){
			validar_numeros_limites('eixo2_a3',1,300);
			if ($('eixo2_a3').value != ""){
				setResp('eixo2_a3',$('eixo2_a3').value);
			}
		});
		
		Event.observe('eixo3_a3', 'change', function(evento){
			validar_numeros_limites('eixo3_a3',1,300);
			if ($('eixo3_a3').value != ""){
				setResp('eixo3_a3',$('eixo3_a3').value);
			}
		});
		
		Event.observe('eixo4_a3', 'change', function(evento){
			validar_numeros_limites('eixo4_a3',1,300);
			if ($('eixo4_a3').value != ""){
				setResp('eixo4_a3',$('eixo4_a3').value);
			}
		});
		
		Event.observe('parte1_q1_a_11', 'change', function(evento){
			validar_numeros('parte1_q1_a_11');
			if ($('parte1_q1_a_11').value != ""){
				setResp('parte1_q1_a_11',$('parte1_q1_a_11').value);
			}
		});
		
		Event.observe('parte1_q1_a_12', 'change', function(evento){
			validar_numeros('parte1_q1_a_12');
			if ($('parte1_q1_a_12').value != ""){
				setResp('parte1_q1_a_12',$('parte1_q1_a_12').value);
			}
		});
		
		Event.observe('parte1_q2_a_21', 'change', function(evento){
			validar_numeros('parte1_q2_a_21');
			if ($('parte1_q2_a_21').value != ""){
				setResp('parte1_q2_a_21',$('parte1_q2_a_21').value);
			}
		});
		
		Event.observe('parte1_q2_a_22', 'change', function(evento){
			validar_numeros('parte1_q2_a_22');
			if ($('parte1_q2_a_22').value != ""){
				setResp('a3_parte1_q2_a_22',$('parte1_q2_a_22').value);
			}
		});
		
		Event.observe('link_continuar', 'focus', function(evento){
			if(($('link_continuar').className) == 'ativado'){
				setResp('atividade_3',3);
				if((getResp('atividade_2') == 3) && (getResp('atividade_4') == 3)){
					setResp('transicao_1',3);
				}
			}
		});
});

function corrige_a2_p2_q_1(valor)
{
	var x_esperado = Number($('eixo1_a3').value) + Number($('eixo3_a3').value);
	var y_esperado = Number($('eixo2_a3').value) + Number($('eixo4_a3').value);
	if((valor[0] == x_esperado) && ((valor[1] == y_esperado))){
	funcao_geogebra_a2_p1_q_1();
	setResp('a3_parte1_q1_a_11',$('parte1_q1_a_11').value);
	setResp('a3_parte1_q1_a_12',$('parte1_q1_a_12').value);
	}
	return [((valor[0] == x_esperado)&&(valor[1] == y_esperado))];
	
}


function corrige_a2_p2_q_2(valor)
{
	var x_esperado = Number($('eixo1_a3').value) + Number($('eixo3_a3').value);
	var y_esperado = Number($('eixo2_a3').value) + Number($('eixo4_a3').value);
	if((valor[0] == x_esperado) && ((valor[1] == y_esperado))){
		funcao_geogebra_a2_p1_q_2();
		setResp('a3_parte1_q2_a_21',$('parte1_q2_a_21').value);
		setResp('a3_parte1_q2_a_22',$('parte1_q2_a_22').value);
	}
	return [((valor[0] == x_esperado)&&(valor[1] == y_esperado))];

}

function set1()
{
var x1 = ($('eixo1_a3').value);
var y1 = ($('eixo2_a3').value);
var x2 = ($('eixo3_a3').value);
var y2 = ($('eixo4_a3').value);
x1 = x1.replace(/,/i,".");
y1 = y1.replace(/,/i,".");
x2 = x2.replace(/,/i,".");
y2 = y2.replace(/,/i,".");
($('eixo1_a3').value) = x1; 
($('eixo2_a3').value) = y1;
($('eixo3_a3').value) = x2;
($('eixo4_a3').value) = y2;


	if (($('eixo1_a3').value != "")&&($('eixo2_a3').value != "")&&($('eixo3_a3').value != "")&&($('eixo4_a3').value != "")){	
		var valor = new Array()
		valor[0] =  ($('eixo1_a3').value);
		valor[1] =	($('eixo2_a3').value);
		valor[2] =	($('eixo3_a3').value);
		valor[3] =	($('eixo4_a3').value);
		
		$('valor_inicial').addClassName('desabilitada');
		$('eixo1_a3').writeAttribute({disabled: 'disabled'});
		$('eixo2_a3').writeAttribute({disabled: 'disabled'});
		$('eixo3_a3').writeAttribute({disabled: 'disabled'});
		$('eixo4_a3').writeAttribute({disabled: 'disabled'});
		setResp('a3_eixo1_a3',$('eixo1_a3').value);
		setResp('a3_eixo2_a3',$('eixo2_a3').value);
		setResp('a3_eixo3_a3',$('eixo3_a3').value);
		setResp('a3_eixo4_a3',$('eixo4_a3').value);
		removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0});
		removeEsperando({Parte: 0, Questao:'parte1_q2', Item: 0});
		
			funcao_geogebra_a2_p2_q_1();
			// Arruma o ZOOM
			var applet = document.ggbApplet;
			var xMax = Number($('eixo1_a3').value);
			xMax = xMax +  + Number($('eixo3_a3').value);
			var yMax = Number($('eixo2_a3').value);
			yMax = yMax + Number($('eixo4_a3').value);
			xMax = xMax * 2;
			yMax = yMax * 2;
			if (yMax/xMax < 1){
				yMax = xMax/2 + 1;
				xMax++;
				applet.setCoordSystem(-1, xMax, -1, yMax);
			}else{
				xMax = yMax * 2 + 1;
				yMax++;
				applet.setCoordSystem(-1, xMax, -1, yMax);
			}
			removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0}, 'Este item está baseado no valor acima');
			removeEsperando({Parte: 0, Questao:'parte1_q2', Item: 0}, 'Este item está baseado no valor acima');
			$('link_valor_inicial').hide();
			$('unset_inicial').show();
		
	
	}else{
		var Perg =  
		{
			conteudo: 'Foi preenchida alguma coordenada inválida.',
			layout: ['seta_baixo','direita'],
			largura: 10,
			callback: function (){},
			// se o usuário clicar em 'Sim', o popup chamará a funcao funcao_pede na qual this.resultado será 'sim'
			// Veja que essa função deve estar definida, ou ser definida nesse exato momento (como no exemplo "pede2")
			respostas: [{sim: 'Ok'}]
		};
		
		var tmp = new PopupCallback($('link_valor_inicial'), Perg.conteudo,Perg.layout, Perg.largura, Perg.callback, Perg.respostas);
		tmp.abre();
		Event.stopObserving($('link_valor_inicial'), 'click');
	
		//$('link_valor_inicial').writeAttribute({onclick: 'javascript:set1();'});
		Event.observe($('link_valor_inicial'), 'click', set1);
		
		$('eixo1_a3').removeAttribute('disabled');
		$('eixo2_a3').removeAttribute('disabled');
		$('eixo3_a3').removeAttribute('disabled');
		$('eixo4_a3').removeAttribute('disabled');
	}
}

function unset_inicial()
{
	if (this.resultado == 'sim'){
	$('valor_inicial').removeClassName('desabilitada');
	$('link_valor_inicial').update('Desenhar Paralelogramo');
	Event.stopObserving($('link_valor_inicial'), 'click');
	
	//$('link_valor_inicial').writeAttribute({onclick: 'javascript:set1();'});
	Event.observe($('link_valor_inicial'), 'click', set1);

	$('eixo1_a3').removeAttribute('disabled');
	$('eixo2_a3').removeAttribute('disabled');
	$('eixo3_a3').removeAttribute('disabled');
	$('eixo4_a3').removeAttribute('disabled');
	
	limpar_applet();

	adicionaEsperando({Parte: 0, Questao:'parte1_q1', Item: 0});
	adicionaEsperando({Parte: 0, Questao:'parte1_q2', Item: 0});
	
	$('link_valor_inicial').show();
	$('unset_inicial').hide();
	}
}

function selecionou_q_1_d()
{
	alert('teste');
}
/*
	Aqui está um exemplo de função que é chamada pelo popup com pergunta (callback)
*/

function funcao_pede()
{
	switch(this.resultado)
	{
		case 'sim':	alert('Vc clicou em sim!');	break;
		case 'nao':	alert('Nossa, mas pq não?');break;
		case 'sabe_que_num_sei':alert('Não interessa, também.'); break;
	}
}

