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
			setResp('atividade_2',3);
		}
	});
});

Event.observe(window, 'load', function(){
	if (flag){
		if (getResp('atividade_2') != 3){
			setResp('atividade_2',2);
		}
	}
	
});

Event.observe(window, 'load', function(){
	adicionaEsperando({Parte: 0, Questao:'parte1_q1', Item: 0});
	adicionaEsperando({Parte: 0, Questao:'parte1_q1', Item: 1});
	
	adicionaEsperando({Parte: 0, Questao:'parte1_q2', Item: 0});
	adicionaEsperando({Parte: 0, Questao:'parte1_q2', Item: 1});
	
	$('valor_inicial').removeClassName('desabilitada');
	$('eixo1_a2').removeAttribute('disabled');
	$('eixo2_a2').removeAttribute('disabled');
	$('eixo3_a2').removeAttribute('disabled');
	$('eixo4_a2').removeAttribute('disabled');
	
	if(getResp('eixo1_a2') != 'undefined'){
		$('eixo1_a2').value = getResp('eixo1_a2');
	}
	if(getResp('eixo2_a2') != 'undefined'){
		$('eixo2_a2').value = getResp('eixo2_a2');
	}
	if(getResp('eixo3_a2') != 'undefined'){
		$('eixo3_a2').value = getResp('eixo3_a2');
	}
	if(getResp('eixo4_a2') != 'undefined'){
		$('eixo4_a2').value = getResp('eixo4_a2');
	}
	if(getResp('a2_parte1_q1_a_11') != 'undefined'){
		$('parte1_q1_a_11').value = getResp('a2_parte1_q1_a_11');
	}
	if(getResp('a2_parte1_q1_a_12') != 'undefined'){
		$('parte1_q1_a_12').value = getResp('a2_parte1_q1_a_12');
	}
	
	if(getResp('a2_parte1_q2_a_11') != 'undefined'){
		$('parte1_q2_a_11').value = getResp('a2_parte1_q2_a_11');
	}
	if(getResp('a2_parte1_q2_a_12') != 'undefined'){
		$('parte1_q2_a_12').value = getResp('a2_parte1_q2_a_12');
	}
	if(getResp('a2_parte1_q2_a_21') != 'undefined'){
		$('parte1_q2_a_21').value = getResp('a2_parte1_q2_a_21');
	}
	if(getResp('a2_parte1_q2_a_22') != 'undefined'){
		$('parte1_q2_a_22').value = getResp('a2_parte1_q2_a_22');
	}
	
	if(getResp('a2_parte1_q1_b') != 'undefined'){
		$('parte1_q1_b').value = getResp('a2_parte1_q1_b');
	}
	if(getResp('a2_parte1_q2_b') != 'undefined'){
		$('parte1_q2_b').value = getResp('a2_parte1_q2_b');
	}
	if(getResp('a2p3_box') != 'undefined'){
		$('parte1_q3_a_' + getResp('a2p3_box')).setChecked(true);
	}
	
	Event.observe('eixo1_a2', 'change', function(evento){
			validar_numeros_limites('eixo1_a2',0,300);
			if ($('eixo1_a2').value != ""){
				setResp('eixo1_a2',$('eixo1_a2').value);
			}
		});	
		
		Event.observe('eixo2_a2', 'change', function(evento){
			validar_numeros_limites('eixo2_a2',0,300);
			if ($('eixo2_a2').value != ""){
				setResp('eixo2_a2',$('eixo2_a2').value);
			}
		});
		
		Event.observe('eixo3_a2', 'change', function(evento){
			validar_numeros_limites('eixo3_a2',0,300);
			if ($('eixo3_a2').value != ""){
				setResp('eixo3_a2',$('eixo3_a2').value);
			}
		});
		
		Event.observe('eixo4_a2', 'change', function(evento){
			validar_numeros_limites('eixo4_a2',0,300);
			if ($('eixo4_a2').value != ""){
				setResp('eixo4_a2',$('eixo4_a2').value);
			}
		});
		
		Event.observe('parte1_q1_a_11', 'change', function(evento){
			validar_numeros('parte1_q1_a_11');
			if ($('parte1_q1_a_11').value != ""){
				setResp('a2_parte1_q1_a_11',$('parte1_q1_a_11').value);
			}
		});
		
		Event.observe('parte1_q1_a_12', 'change', function(evento){
			validar_numeros('parte1_q1_a_12');
			if ($('parte1_q1_a_12').value != ""){
				setResp('a2_parte1_q1_a_12',$('parte1_q1_a_12').value);
			}
		});
		
		Event.observe('parte1_q2_a_21', 'change', function(evento){
			validar_numeros('parte1_q2_a_21');
			if ($('parte1_q2_a_21').value != ""){
				setResp('a2_parte1_q2_a_21',$('parte1_q2_a_21').value);
			}
		});
		
		Event.observe('parte1_q2_a_22', 'change', function(evento){
			validar_numeros('parte1_q2_a_22');
			if ($('parte1_q2_a_22').value != ""){
				setResp('a2_parte1_q2_a_22',$('parte1_q2_a_22').value);
			}
		});
		
		Event.observe('link_continuar', 'focus', function(evento){
			if(($('link_continuar').className) == 'ativado'){
				setResp('atividade_2',3);
				if((getResp('atividade_3') == 3) && (getResp('atividade_4') == 3)){
					setResp('transicao_1',3);
				}
			}
		});
		
		
	})

function corrige_a2_p3_q_1(valor){
	for (var i = 0; i <= valor.length; i++){
		if (valor[i] == true) setResp('a2p3_box', i+1);
	}
return [valor[0]?false:null, valor[1]?false:null, valor[2]?false:null, valor[3]?true:null, valor[4]?false:null];
}

function corrige_a2_p1_valorinicial()
{

var valor = new Array()
valor[0] =  ($('eixo1_a2').value);
valor[1] =	($('eixo2_a2').value);
valor[2] =	($('eixo3_a2').value);
valor[3] =	($('eixo4_a2').value);

	if(((valor[0] >= 0)&&(valor[0]<=300)),((valor[1] >= 0)&&(valor[1]<=300)),((valor[2] >= 0)&&(valor[2]<=300)),((valor[3] >= 0)&&(valor[3]<=300))){
	funcao_geogebra_a2_p1_q_valorinicial();
	}

}

function corrige_a2_p1_q_1_a(valor)
{
	if( (valor[0] == (2*($('eixo1_a2').value)))&&(valor[1] == (2*($('eixo2_a2').value))) ){
	funcao_geogebra_a2_p1_q_1();
	setResp('a2_parte1_q1_a_11',$('parte1_q1_a_11').value);
	setResp('a2_parte1_q1_a_12',$('parte1_q1_a_12').value);
	}
	return [((valor[0] == (2*($('eixo1_a2').value)))&&(valor[1] == (2*($('eixo2_a2').value))))];
}

function corrige_a2_p1_q_1_b(valor)
{
	if (valor[0] == 2){
		setResp('a2_parte1_q1_b', 2);
	}
	return [(valor[0] == 2)];
}

function corrige_a2_p1_q_2_a(valor)
{
	if( (valor[0] == (2*($('eixo1_a2').value)))&&(valor[1] == (2*($('eixo2_a2').value)))&&(valor[2] == (2*($('eixo3_a2').value)))&&(valor[3] == (2*($('eixo4_a2').value))) ){
	funcao_geogebra_a2_p1_q_2();
	setResp('a2_parte1_q2_a_21',$('parte1_q2_a_21').value);
	setResp('a2_parte1_q2_a_22',$('parte1_q2_a_22').value);
	setResp('a2_parte1_q2_a_11',$('parte1_q2_a_11').value);
	setResp('a2_parte1_q2_a_12',$('parte1_q2_a_12').value);
	}
	return [(valor[0] == (2*($('eixo1_a2').value)))&&(valor[1] == (2*($('eixo2_a2').value)))&&(valor[2] == (2*($('eixo3_a2').value)))&&(valor[3] == (2*($('eixo4_a2').value)))];
}

function corrige_a2_p1_q_2_b(valor)
{
	if (valor[0] == 4){
		setResp('a2_parte1_q2_b', 4);
	}
	return [(valor[0] == 4)];
}


function set1()
{
var x1 = ($('eixo1_a2').value);
var y1 = ($('eixo2_a2').value);
var x2 = ($('eixo3_a2').value);
var y2 = ($('eixo4_a2').value);
x1 = x1.replace(/,/i,".");
y1 = y1.replace(/,/i,".");
x2 = x2.replace(/,/i,".");
y2 = y2.replace(/,/i,".");
($('eixo1_a2').value) = x1; 
($('eixo2_a2').value) = y1;
($('eixo3_a2').value) = x2;
($('eixo4_a2').value) = y2;

	if (($('eixo1_a2').value == "")||($('eixo2_a2').value == "")||($('eixo3_a2').value == "")||($('eixo4_a2').value == "")){
		
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
		Event.stopObserving($('link_valor_inicial'),'click');
		//$('link_valor_inicial').writeAttribute({onClick: 'javascript:set1();'});
		Event.observe($('link_valor_inicial'), 'click', set1);

		$('eixo1_a2').removeAttribute('disabled');
		$('eixo2_a2').removeAttribute('disabled');
		$('eixo3_a2').removeAttribute('disabled');
		$('eixo4_a2').removeAttribute('disabled');

	}else{
	corrige_a2_p1_valorinicial();
	// Arruma o ZOOM
	var applet = document.ggbApplet;
	var xMax = Number($('eixo1_a2').value);
	xMax = xMax +  + Number($('eixo3_a2').value);
	var yMax = Number($('eixo2_a2').value);
	yMax = yMax + Number($('eixo4_a2').value);
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
	
	
	$('valor_inicial').addClassName('desabilitada');
	$('eixo1_a2').writeAttribute({disabled: 'disabled'});
	$('eixo2_a2').writeAttribute({disabled: 'disabled'});
	$('eixo3_a2').writeAttribute({disabled: 'disabled'});
	$('eixo4_a2').writeAttribute({disabled: 'disabled'});
	setResp('eixo1_a2',$('eixo1_a2').value);
	setResp('eixo2_a2',$('eixo2_a2').value);
	setResp('eixo3_a2',$('eixo3_a2').value);
	setResp('eixo4_a2',$('eixo4_a2').value);
	
	
	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0});
	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 1});
	
	removeEsperando({Parte: 0, Questao:'parte1_q2', Item: 0});
	removeEsperando({Parte: 0, Questao:'parte1_q2', Item: 1});
	$('link_valor_inicial').hide();
	$('unset_inicial').show();
	}
}

function unset_inicial()
{
	if (this.resultado == 'sim'){
	$('valor_inicial').removeClassName('desabilitada');
	$('eixo1_a2').removeAttribute('disabled');
	$('eixo2_a2').removeAttribute('disabled');
	$('eixo3_a2').removeAttribute('disabled');
	$('eixo4_a2').removeAttribute('disabled');
	
	adicionaEsperando({Parte: 0, Questao:'parte1_q1', Item: 0});
	adicionaEsperando({Parte: 0, Questao:'parte1_q1', Item: 1});
	
	adicionaEsperando({Parte: 0, Questao:'parte1_q2', Item: 0});
	adicionaEsperando({Parte: 0, Questao:'parte1_q2', Item: 1});
	$('link_valor_inicial').show();
	$('unset_inicial').hide();
	limpar_applet();
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
		case 'sim':	alert('Vc clicou em sim!');
		break;

	}
}


