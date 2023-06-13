var CasoDeTeste = "";
var vetorTestes = [];
var stringTestes = "";

function preencheObjeto() {
    var Modelo = document.getElementById("txtModelo").value;
    var Introducao = document.getElementById("txtIntroducao").value;
    var Objetivos = document.getElementById("txtObjetivos").value;
    var Estrategia = document.getElementById("txtEstrategia").value;
    var Ferramentas = document.getElementById("txtFerramentas").value;
    var Escopo = document.getElementById("txtEscopo").value;
    var Equipe = document.getElementById("txtEquipe").value;
 
    CasoDeTeste = "Modelo: " + Modelo + "<br> Introdução: " + Introducao + "<br> Objetivos: " + Objetivos + "<br> Escopo Geral: " + Escopo + "<br> Estratégia de Teste: " + Estrategia + "<br> Ferramentas: " + Ferramentas + "<br> Equipe: " + Equipe + "<br>";
    vetorTestes.push(CasoDeTeste);

    limpaTxt();
}

function mostrarTeste() {
    stringTestes = vetorTestes.join('<br>');

    var lblMostrarCarro = document.getElementById("lblMostrarCarro");
    lblMostrarCarro.innerHTML = stringTestes;
}

function limpaTxt() {
    document.getElementById("txtModelo").value = "";
    document.getElementById("txtIntroducao").value = "";
    document.getElementById("txtObjetivos").value = "";
    document.getElementById("txtEstrategia").value = "";
    document.getElementById("txtFerramentas").value = "";
    document.getElementById("txtEscopo").value = "";
    document.getElementById("txtEquipe").value = "";
}
