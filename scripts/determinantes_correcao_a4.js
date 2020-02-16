Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
});

var flag = 1;

Event.observe(document, 'flash:SalvaLocal', function(ev){
	flag = 1;
	Event.observe('link_continuar', 'focus', function(evento){
		if(($('link_continuar').className) == 'ativado'){
			setResp('atividade_4',3);
		}
	});
	
	if (getResp('atividade_4') != 3){
		setResp('atividade_4',2);
	}
});

Event.observe(window, 'load', function(){
	if (flag){
		if (getResp('atividade_4') != 3){
			setResp('atividade_4',2);
		}
		Event.observe('link_continuar', 'focus', function(evento){
			if(($('link_continuar').className) == 'ativado'){
				setResp('atividade_4',3);
			}
		});
		
		if(getResp('a3_box_parte1_q1') != 'undefined'){
			$('parte1_q1_a_' + getResp('a3_box_parte1_q1')).setChecked(true);
		}
		
		if(getResp('a3_box_parte1_q2') != 'undefined'){
			$('parte1_q2_a_' + getResp('a3_box_parte1_q2')).setChecked(true);
		}
		
		if(getResp('a3_box_parte1_q3') != 'undefined'){
			$('parte1_q3_a_' + getResp('a3_box_parte1_q3')).setChecked(true);
		}
		
		if ((getResp('atividade_2') == 3)&&(getResp('atividade_3') == 3)&&(getResp('atividade_4') == 3)){
			setResp('transicao_1', 3);
		}
	}
});

function Exibir_matriz_a4_p1(){
var applet = document.ggbApplet;
applet.evalCommand("matriz2 = true");
}

function corrige_q_1_a(valor)	
{
return[$('Ele').Corrige()]; // Se eu tiro esse comentario, da pau nas paginas.
}
 
function corrige_q_2_a(valor)
{
	return [valor[0] == '12'];
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
	return [(valor[0] == 1),(valor[1] == 6),(valor[2] == 6),(valor[3] == 15), (valor[4] == 14)];
}


function corrige_a2_p1_valorinicial()
{
var valor = new Array()
valor[0] =  ($('eixo1').value);
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
	for (var i = 0; i <= valor.length; i++){
		if (valor[i] == true) setResp('a3_box_parte1_q1', i+1);
	}
	return [(valor[0]?false:null),(valor[1]?false:null),(valor[2]?false:null),(valor[3]?true:null)];

}

function corrige_a2_p3_q_2(valor)
{
	for (var i = 0; i <= valor.length; i++){
		if (valor[i] == true) setResp('a3_box_parte1_q2', i+1);
	}
	return [(valor[0]?false:null),(valor[1]?false:null),(valor[2]?true:null),(valor[3]?false:null)];

}

function corrige_a2_p3_q_3(valor)
{
	for (var i = 0; i <= valor.length; i++){
		if (valor[i] == true) setResp('a3_box_parte1_q3', i+1);
	}
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

