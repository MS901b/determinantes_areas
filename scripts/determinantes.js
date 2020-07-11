var parteatual = 1;
var index = 1;
var questao_a_responder = '0';
applet_1_play_flag_verifica = 0;
var applet_1_play_flag = 0;
var ok_p5_2 = 0;

/******************************************************************************************************************************************************
 ****    Flash                         *******
 ******************************************************************************************************************************************************/
// Retorna o elemento do video Flash com o nome movieName
function getFlashMovie(movieName) {
 var isIE = navigator.appName.indexOf("Microsoft") != -1;
 return (isIE) ? window[movieName] : document[movieName];
}
var nomeSoft = 'determinantes';
function getResp(id) {
 return $('SalvaLocal').Pega(nomeSoft,id);
}

function setResp(id,valor) {
 $('SalvaLocal').Salva(nomeSoft,id,valor);
}

function apagaTodasResp() {
 return ($('SalvaLocal').ApagaTudo(nomeSoft));
}

function init() {
 return ($('SalvaLocal').ApagaTudo(nomeSoft));
}

function mudaValorResposta(id, value) {
 mudaImagemCertoErrado("img"+id, 0);
 respId=id.replace("Resp_","");
 setResp(respId,value);
}

function func_stop() {
	var applet = document.ggbApplet;
	if (applet.isAnimationRunning()) applet.stopAnimation()
	else applet.startAnimation()
}

var ggb_abriu = false;
function ggbOnInit(){
	if (PosicaoAtual.Parte == 2) {
		registerListeners_a1_p3();
	}
	//if ( (PosicaoAtual.Atividade == 1) && (PosicaoAtual.Parte == 3) )
	//{
	//	var posicao = {Parte: 3, Questao: 'parte4_q5', Item:0};
	//	PegaQuestao(posicao).seleciona();
	//}

	ggb_abriu = true;
}

// Atividade 2 Parte 1
function funcao_geogebra_a2_p1_q_valorinicial(){
var applet = document.ggbApplet;

var x1 = ($('eixo1_a2').value);
var y1 = ($('eixo2_a2').value);

var x2 = ($('eixo3_a2').value);
var y2 = ($('eixo4_a2').value);

x1 = x1.replace(/,/i,".");
y1 = y1.replace(/,/i,".");
x2 = x2.replace(/,/i,".");
y2 = y2.replace(/,/i,".");
applet.evalCommand("A = (" + x1 + "," + y1 + ")");

applet.evalCommand("B = (" + x2 + "," + y2 + ")");


$('parte1_q1_a_21').update(x2);
$('parte1_q1_a_22').update(y2);

applet.setFixed('A', true);
applet.setFixed('B', true)
}

function funcao_geogebra_a2_p1_q_1(){
var applet = document.ggbApplet;
applet.evalCommand("verP2 = true");
}

function funcao_geogebra_a2_p1_q_2(){
var applet = document.ggbApplet;
applet.evalCommand("verP3 = true");
}

function funcao_geogebra_a2_p2_q_1(){
var applet = document.ggbApplet;
var x1 = $('eixo1_a3').value;
var y1 = $('eixo2_a3').value;

var x2 = $('eixo3_a3').value;
var y2 = $('eixo4_a3').value;
x1 = x1.replace(/,/i,".");
y1 = y1.replace(/,/i,".");
x2 = x2.replace(/,/i,".");
y2 = y2.replace(/,/i,".");
applet.evalCommand("B = (" + x1 + "," + y1 + ")");
applet.evalCommand("C = (" + x2 + "," + y2 + ")");

$('parte1_q1_a_21').update(x2);
$('parte1_q1_a_22').update(y2);

$('parte1_q2_a_11').update(x1);
$('parte1_q2_a_12').update(y1);

}

var P4_feita = new Array();
P4_feita.push(false);
P4_feita.push(false);
P4_feita.push(false);
P4_feita.push(false);
P4_feita.push(false);

var minhaString = new Array();
minhaString.push(false);
minhaString.push(false);
minhaString.push(false);
minhaString.push(false);
minhaString.push(false);

var meu_seletor1 = new Array();
meu_seletor1.push(false);
meu_seletor1.push(false);
meu_seletor1.push(false);
meu_seletor1.push(false);
meu_seletor1.push(false);

var meu_seletor2 = new Array();
meu_seletor2.push(false);
meu_seletor2.push(false);
meu_seletor2.push(false);
meu_seletor2.push(false);
meu_seletor2.push(false);

var meu_seletor3 = new Array();
meu_seletor3.push(false);
meu_seletor3.push(false);
meu_seletor3.push(false);
meu_seletor3.push(false);
meu_seletor3.push(false);


//Matias
var primeira_selecao = true;
var num_init_retries= 0;
// Super gambiarra. Se for a primeira seleção, mostra o applet e depois executa o código que estava aqui
// Se não for, só executa o código... sim está duplicado.

function selecionou_q_6_a(){
	// Quando a pagina abre, ele seleciona esta questao!
	if (ggb_abriu == true){
			if (P4_feita[0] == 1){
			var applet = document.ggbApplet;
				applet.setXML(minhaString[0]);
				$('eixo1a').value = applet.getXcoord('B');
				$('eixo1c').value = applet.getXcoord('C');
				$('eixo1d').value = applet.getYcoord('C');
			}else{
				$('eixo1a').value = 0;
				$('eixo1c').value = 0;
				$('eixo1d').value = 0;
				limpar_applet();
				P4_feita[0] = 1;
				// Matias
				var applet = document.ggbApplet;

			}
			minhaString[0] = applet.getXML();
	}
			questao_a_responder = 'p1_q6_a';
}

function selecionou_q_6_b(){
	if (P4_feita[1] == 1){
		var applet = document.ggbApplet;
		applet.setXML(minhaString[1]);
		$('eixo1a').value = applet.getXcoord('B');
		$('eixo1c').value = applet.getXcoord('C');
		$('eixo1d').value = applet.getYcoord('C');
	}else{
		$('eixo1a').value = 0;
		$('eixo1c').value = 0;
		$('eixo1d').value = 0;
		limpar_applet();
		P4_feita[1] = 1;

		// Matias
		var applet = document.ggbApplet;
		minhaString[1] = applet.getXML();

	}
	questao_a_responder = 'p1_q6_b';
}

function selecionou_q_6_c(){
	if (ggb_abriu == true){
		if (P4_feita[2] == 1){
			var applet = document.ggbApplet;
			applet.setXML(minhaString[2]);
			$('eixo1a').value = applet.getXcoord('B');
			$('eixo1c').value = applet.getXcoord('C');
			$('eixo1d').value = applet.getYcoord('C');
		}else{
			$('eixo1a').value = 0;
			$('eixo1c').value = 0;
			$('eixo1d').value = 0;
			limpar_applet();
			P4_feita[2] = 1;
			// Matias
			var applet = document.ggbApplet;
			minhaString[2] = applet.getXML();
		}
		questao_a_responder = 'p1_q6_c';
	}
}

function selecionou_q_7_a(){
	if (P4_feita[3] == 1){
		var applet = document.ggbApplet;
		applet.setXML(minhaString[3]);
		$('eixo1a').value = applet.getXcoord('B');
		$('eixo1c').value = applet.getXcoord('C');
		$('eixo1d').value = applet.getYcoord('C');
	}else{
		$('eixo1a').value = 0;
		$('eixo1c').value = 0;
		$('eixo1d').value = 0;
		limpar_applet();
		P4_feita[3] = 1;

				// Matias
				var applet = document.ggbApplet;
				minhaString[3] = applet.getXML();

	}
	questao_a_responder = 'p1_q7_a';
}

function selecionou_q_7_b(){
	if (P4_feita[4] == 1){
		var applet = document.ggbApplet;
		applet.setXML(minhaString[4]);
		$('eixo1a').value = applet.getXcoord('B');
		$('eixo1c').value = applet.getXcoord('C');
		$('eixo1d').value = applet.getYcoord('C');
	}else{
		$('eixo1a').value = 0;
		$('eixo1c').value = 0;
		$('eixo1d').value = 0;
		limpar_applet();
		P4_feita[4] = 1;
			// Matias
			var applet = document.ggbApplet;
			minhaString[4] = applet.getXML();

	}
	questao_a_responder = 'p1_q7_b';
}

// FUNCOES GEOGEBRAS

var strLength = 150;

var nomePontoEmReta = "Ponto";
function limpar_applet(){
	var applet = document.ggbApplet;
	if (ggb_abriu){
		applet.reset();
	}
}

var X1_P4
var Y1_P4
var X2_P4
var Y2_P4


function cleanApplet2() {
	document.applets[1].reset();
}

function funcao_corrige_q_6_a(valor){
	respostaEsperada = P4_areas[0];
	if ((valor[0] == respostaEsperada)&&(P4_restricoes[0] == 1)){
		return true;
	}else{
		return false;
	}
}

function funcao_corrige_q_6_b(valor){
	respostaEsperada = P4_areas[1];
	if ((valor[0] == respostaEsperada)&&(P4_restricoes[1] == 1)){
		return true;
	}else{
		return false;
	}
}

function funcao_corrige_q_6_c(valor){
	respostaEsperada = P4_areas[2];
	if ((valor[0] == respostaEsperada)&&(P4_restricoes[2] == 1)){
		return true;
	}else{
		return false;
	}
}

function funcao_corrige_q_7_a(){
return (P4_restricoes[3]);
}

function funcao_corrige_q_7_b(){
return (P4_restricoes[4]);
}


var P4_areas = new Array();
P4_areas.push(false);
P4_areas.push(false);
P4_areas.push(false);

var P4_restricoes = new Array();
P4_restricoes.push(false);
P4_restricoes.push(false);
P4_restricoes.push(false);
P4_restricoes.push(false);
P4_restricoes.push(false);

var questao = 0;

// Envia a resposta do applet 4
function Responder_applet_p4(){
	var aa = ($('eixo1a').value);
	var bb = ($('eixo1c').value);
	var cc = ($('eixo1d').value);

	if ((aa != 0)||(bb != 0)||(cc != 0)){
		if(questao_a_responder != 0){
			var applet = document.ggbApplet;
			X1_applet = ($('eixo1a').value);
			X2_applet = ($('eixo1c').value);
			Y2_applet = ($('eixo1d').value);
			var respostaEsperada = X1_applet * Y2_applet;
			switch(questao_a_responder)
				{
				case "p1_q6_a":
					P4_areas[0] = respostaEsperada;
					if ((X1_applet != 0)&&(Y2_applet!=0)){
						P4_restricoes[0] = 1;
						}else{
						P4_restricoes[0] = 0;
						}
					minhaString[0] = applet.getXML();
					meu_seletor1[0] = X1_applet;
					meu_seletor2[0] = X2_applet;
					meu_seletor3[0] = Y2_applet;
					break;
				case "p1_q6_b":
					if ((X1_applet != 0)&&(X2_applet == 0)&&(Y2_applet!=0)){
						P4_restricoes[1] = 1;
						}else{
						P4_restricoes[1] = 0;
						}
					P4_areas[1] = respostaEsperada;
					minhaString[1] = applet.getXML();
					meu_seletor1[1] = X1_applet;
					meu_seletor2[1] = X2_applet;
					meu_seletor3[1] = Y2_applet;
					break;
				case "p1_q6_c":
					if ((X1_applet != 0)&&(X2_applet == 0)&&(Y2_applet!=0)){
							if(X1_applet == Y2_applet){
							P4_restricoes[2] = 1;
							}else{
							P4_restricoes[2] = 0;
							}
						}else{
						P4_restricoes[2] = 0;
						}
					P4_areas[2] = respostaEsperada;
					minhaString[2] = applet.getXML();
					meu_seletor1[2] = X1_applet;
					meu_seletor2[2] = X2_applet;
					meu_seletor3[2] = Y2_applet;
					break;
				case "p1_q7_a":
					if ((respostaEsperada == 24)&&(X1_applet != 0)&&(X2_applet == 0)&&(Y2_applet != 0)){
						P4_restricoes[3] = 1;
						}else{
						P4_restricoes[3] = 0;
					}
					minhaString[3] = applet.getXML();
					break;
				case "p1_q7_b":
					if ((X1_applet != 0)&&(Y2_applet != 0)&&(X2_applet != 0)){
						if (respostaEsperada == 24){
							P4_restricoes[4] = 1;
						}else{
							P4_restricoes[4] = 0;
						}
					}else{
						P4_restricoes[4] = 0;
					}
					minhaString[4] = applet.getXML();
					break;
				};
			$(questao_a_responder + 'spammatriz').update('<div class="matriz matriz_menor sem_margem"><div class="supe_esq"></div><div class="supe_dir"></div><span><div id='+questao_a_responder+'a11></div></span><span><div id='+questao_a_responder+'a12></div></span><br class="limpador"/><span><div id='+questao_a_responder+'a21></div></span><span><div id='+questao_a_responder+'a22></div></span><br class="limpador"/><div class="esquerda inferior infe_esq"></div><div class="direita inferior infe_dir"></div></div>');
			$(questao_a_responder+"a11").update(X1_applet);
			$(questao_a_responder+"a12").update('0');
			$(questao_a_responder+"a21").update(X2_applet);
			$(questao_a_responder+"a22").update(Y2_applet);

		}else if (questao_a_responder == 0){
					("É necessário selecionar uma questão");
		}
	}
}

function valida_applet_a2_p1(){
	xB2 = document.getElementById('a2_p1_x1').value;
	yB2 = document.getElementById('a2_p1_y1').value;
	xC2 = document.getElementById('a2_p1_x2').value;
	yC2 = document.getElementById('a2_p1_y2').value;
	if ( (xB2 >=1) && (xB2 <= 3) && (yB2 >=1) && (yB2 <= 3) && (xC2 >=1)
		&& (xC2 <= 3) && (yC2 >=1) && (yC2 <= 3)){
		return 1;
	}else{
		return 0;
	}
}

function mudaValorResposta2(id,value) {
	if (document.getElementsByName(id)[0].type!='radio') {
		validarResposta_fixar_zero(id);
		value = document.getElementById(id).value
	};

	mudaImagemCertoErrado( "img"+id,0);

	if (value!="") {
		respId=id.replace("Resp_","");
		setResp(respId,value);
	};
}

function mudaValorResposta3(id,value) {
	if (document.getElementsByName(id)[0].type!='radio') {
		validarResposta_nao_negativo(id);
		value = document.getElementById(id).value
	};

	mudaImagemCertoErrado( "img"+id,0);

	if (value!="") {
		respId=id.replace("Resp_","");
		setResp(respId,value);
	};
}

function validarResposta_fixar_zero(id){

		respostaData=document.getElementById(id).value;
		respostaData=respostaData.replace(',','.');
		if ((respostaData != 0)||(isNaN(respostaData)))  {
			document.getElementById(id).value=0;
		}
}

function validarResposta_nao_negativo(id){

		respostaData=document.getElementById(id).value;
		respostaData=respostaData.replace(',','.');
		if ((respostaData < 0)||(isNaN(respostaData))) {
			document.getElementById(id).value="";
		} else {
			var myNum=new Number(respostaData);
			document.getElementById(id).value=myNum.toFixed(0);
		}
}

function init_a1_p1(){
document.getElementById("Resp_A1_P1_Q2").value="";
}

function init_a1_p2(){
document.getElementById("Resp_A1_P2_Q4").value="";
}

function init_a1_p3(){
document.getElementById("x1").value="";
document.getElementById("y1").value="";
document.getElementById("x2").value="";
document.getElementById("y2").value="";
}

function init_a1_p5(){
document.getElementById("Resp_A1_P5_Q4_a").value="";
document.getElementById("Resp_A1_P5_Q4_b").value="";
document.getElementById("Resp_A1_P5_Q4_c").value="";
document.getElementById("Resp_A1_P5_Q4_d").value="";
document.getElementById("Resp_A1_P5_Q4_e").value="";
}


/* Funcao que redireciona para uma determinada parte de uma atividade.
 * @param {Object} qual		onde sera redirecionado
 * @param {Object} modo		tipo de modo(pde ser um div, pagina).
 */
function vai(qual, modo) {

	antiga = parteatual;

	if (modo == 'pagina') {
		var form = document.getElementById('Partes'+ antiga);
		form.action = 'a1_p' + qual + '.html';
		form.submit();
	} else {

		var div_antiga = document.getElementById('parte_' + antiga);
		var div_nova = document.getElementById('parte_' + qual);
		var div_parte_antiga = document.getElementById('esta_etapa_' + antiga);
		var div_parte_nova = document.getElementById('esta_etapa_' + qual);

		div_antiga.className = 'quadradinho';
		div_nova.className = 'selecionado quadradinho';
		div_parte_antiga.className = 'esta_etapa escondido';
		div_parte_nova.className = 'esta_etapa';
		window.scrollTo(0, 0);
	}

	parteatual = qual;

}


function trocaApplet(antigo,novo)
	{

		var div_antiga = document.getElementById('applet_' + antigo);
		var div_nova = document.getElementById('applet_' + novo);

		div_antiga.className = 'esta_etapa escondido';
		div_nova.className = 'selecionado quadradinho';
	}

function escondeApplet(qual) {

		var div = document.getElementById('applet_' + qual);

		div.className = 'esta_etapa escondido';
}


function abre_popup(html)
{
	var altura = document.viewport.getHeight();
	var scroll = document.viewport.getScrollOffsets().top;
	$('popup').show()
	$('popup').setStyle({
		display: 'block',
		top: String(scroll+27)+'px'
	});
	if(html)
		$('popup').innerHTML = html + '<a href="javascript:fecha_popup();" style="position: absolute; top: 5px; right: 10px;">Fechar</a>';
		$('fundo').show();
		$('fundo').setStyle({
		backgroundColor: 'RGB(0,0,0)',
		opacity: 0.65,
		top: '0px',
		height: scroll+altura+'px'
	});
}


function fecha_popup()
{
	$('popup').hide();
	$('fundo').hide();
}

function DropMenu(targetpage,selected){
				if (selected.options[selected.selectedIndex].value != ""){
					questao_a_responder = selected.options[selected.selectedIndex].value;
					//eval(targetpage+ ".location='"+questao_a_responder+"' ");
				}
}


/* Funcao generica que redireciona para uma determinada parte.
 * @param {Object} onde	 = nome do arquivo
 */

function redirecionaPara(onde) {
	location.href= onde;
}

function mostra_menu_atividades()
{
	$('menu').className = "";
	$('mostra_atividade').innerHTML = '<a href="javascript:;" onclick="esconde_menu_atividades();"><img src="figuras/combo.gif" /></a>';
}

function esconde_menu_atividades()
{
	$('menu').className = "escondido";
	$('mostra_atividade').innerHTML = '<a href="javascript:;" onclick="mostra_menu_atividades();"><img src="figuras/combo.gif" /></a>';
}


function validar_numeros(id){
	var valor = ($(id).value);
	valor = valor.replace(",",".");
	if(isNaN(valor)){
		$(id).value = "";
	}else{
		$(id).value = valor;
	}
}
function validar_numeros_limites(id, min, max){
	var valor = ($(id).value);
	valor = valor.replace(/,/i,".");
	if((isNaN(valor))||((valor)<min)||((valor)>max)){
		$(id).value = "";
	}
}
