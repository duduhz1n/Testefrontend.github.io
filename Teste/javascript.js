var CasoDeTeste = "";
var vetorTestes = [];
var stringTestes = "";

function preencheObjeto() {
    var Teste = document.getElementById("txtTeste").value;
    var Entrada = document.getElementById("txtEntrada").value;
    var Resultesperado = document.getElementById("txtResultesperado").value;
    var ResultadoTeste = document.getElementById("txtResultado").value;
 
    CasoDeTeste = "Teste: " + Teste + "<br> Entrada: " + Entrada + "<br> Resultado Esperado: " + Resultesperado + "<br> Resultado: " + ResultadoTeste + "<br>";
    vetorTestes.push(CasoDeTeste);

    limpaTxt();
}

function mostrarTeste() {
    stringTestes = vetorTestes.join('<br>');

    var lblMostrarCarro = document.getElementById("lblMostrarCarro");
    lblMostrarCarro.innerHTML = stringTestes;
}

function limpaTxt() {
    document.getElementById("txtTeste").value = "";
    document.getElementById("txtEntrada").value = "";
    document.getElementById("txtResultesperado").value = "";
    document.getElementById("txtResultado").value = "";
}
