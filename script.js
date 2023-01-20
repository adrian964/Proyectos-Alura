
function encriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    // i para que cambie minuscula y mayuscula
    // g es para la linea u oracion 
    // m multipleslineas o parrafo
    var textocifrado = texto.replace(/e/igm, "enter");
    var textocifrado = textocifrado.replace(/o/igm, "ober");
    var textocifrado = textocifrado.replace(/i/igm, "imes");
    var textocifrado = textocifrado.replace(/a/igm, "ai");
    var textocifrado = textocifrado.replace(/u/igm, "ufat");

    document.getElementById("imgmun").style.display= "none";
    document.getElementById("texto").style.display= "none";
    document.getElementById("texto2").innerHTML = textocifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}

function desencriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    // i para que cambie minuscula y mayuscula
    // g es para la linea u oracion 
    // m multipleslineas o parrafo
    var textocifrado = texto.replace(/enter/igm, "e");
    var textocifrado = textocifrado.replace(/ober/igm, "o");
    var textocifrado = textocifrado.replace(/imes/igm, "i");
    var textocifrado = textocifrado.replace(/ai/igm, "a");
    var textocifrado = textocifrado.replace(/ufat/igm, "u");

    document.getElementById("imgmun").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML =textocifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}
function copy(){
    var contenido =document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy")
    alert("Se copio");
}
