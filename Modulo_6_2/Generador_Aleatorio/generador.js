
var numeros = [];

var randomPick = function (n, min, max) {

  var aleatorio = function () {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  if (max - min + 1 < n) {
    console.log("Es imposible mostrar " + n + " números aleatorios no repetidos entre " + min + " y " + max);
    return false;
  } else {
    for (let i = 0; i < n; i++) {

      do {
        random = aleatorio();
      } while (numeros.indexOf(random) !== -1)

      numeros[i] = random;
    }
  }
  return numeros;
}

// Elije los valores
const cantidad = 10; // Números a generar
const minimo = 1; // Valor mínimo del rango
const maximo = 100; // Valor máximo del rango


var resultado = randomPick(cantidad, minimo, maximo);
if (resultado != false) {
  console.log(numeros);
}



