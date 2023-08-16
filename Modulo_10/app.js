// hasId
const objeto = {
  id: 1,
  name: 'Jose',
  age: 42,
  nationality: 'Spanish'
};
const hasId = ({ id }) => (id ? true : false);
console.log(hasId(objeto));

// head
const lista = ['primero', 'segundo', 'tercero', 'cuarto'];
const head = ([firstElement]) => firstElement;
console.log(head(lista));

// tail
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
const tail = ([, ...rest]) => rest;
console.log(tail(dias));

// swapFirstToLast
const posic = ['primero', 'segundo', 'tercero', 'cuarto'];
const swapFirstToLast = ([first, ...rest]) => [...rest, first];
console.log(swapFirstToLast(posic));

// excludeId
const objeto2 = {
  id: 1,
  name: 'Jose',
  age: 42,
};
const exclueId = ({ id, ...rest }) => rest;
console.log(exclueId(objeto2));

// wordsStartingWithA
const nombres = ['Angel', 'Pepa', 'Rocío', 'Alba'];
const wordsStartingWithA = (nombres) => nombres.filter(([nombre]) => nombre.toLowerCase() == 'a');
console.log(wordsStartingWithA(nombres));

// concat
const concat = (...items) => items.join(' | ');
console.log(concat('primero', 'segundo', 'tercero', 'cuarto'));

// multArray
const arr = [1, 2, 3, 4];
const multArray = (arr, x) => arr.map((item) => item * x);
console.log(multArray(arr, 5));

// calcMult
const numeros = [1, 2, 3, 4, 5];
const calcMult = ([...numeros]) => numeros.reduce((acc, n) => acc * n);
console.log(calcMult(numeros));
