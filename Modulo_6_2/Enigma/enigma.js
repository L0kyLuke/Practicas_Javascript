var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'.";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm%";

var texto1 = function () {
  return document.getElementById("texto1").value;
}
var texto2 = function () {
  return document.getElementById("texto2").value;
}

var encripta = function () {
  return document.getElementById("texto2").value = modifica(texto1(), plainAlphabet, encryptedAlphabet);
}
var desencripta = function () {
  return document.getElementById("texto1").value = modifica(texto2(), encryptedAlphabet, plainAlphabet);
}

document.getElementById("encripta").addEventListener("click", encripta);
document.getElementById("desencripta").addEventListener("click", desencripta);



var modifica = function (texto, base, final) {
  var minuscula = texto.toLowerCase();
  var hecho = "";

  for (var letra of minuscula) {
    hecho = hecho + modificaTexto(letra, base, final);
  }
  return hecho;
};

var modificaTexto = function (letra, base, final) {
  var x="nada";
  for (i = 0; i < base.length; i++) {
    if (base[i] === letra) {
      x=i;
    }
  }
  
  var cambiada = final[x];
  if (x === "nada") {
    return letra;
  } else {
    return cambiada;
  }
};





