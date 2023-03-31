// Validar un IBAN

// Caso 1
const iban='ES6600190020961234567890';
let expr=/^[A-Z]{2}\d{22}$/;
console.log('Caso 1');
if(expr.test(iban)==true){
    console.log("El iban "+iban+" tiene el formato correcto");
}else{
    console.log("El iban "+iban+" no tiene el formato correcto");
}

// Caso 2
const iban2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];
expr=/^[A-Z]{2}\d{2}(\s?\d{4}){5}$/;
console.log('\nCaso 2');
iban2.forEach((iban2) => {
    if(expr.test(iban2)==true){
        console.log("El iban "+iban2+" tiene el formato correcto");
    }else{
        console.log("El iban "+iban2+" no tiene el formato correcto");
    }
});

// Caso 3
const iban3 = 'ES6600190020961234567890';
expr = /^([A-Z]{2})(\d{2})(\d{4}){5}$/;
const extracto = expr.exec(iban3);
console.log('\nCaso 3');
console.log('Código del pais: ' + extracto[1]);
console.log('Dígito de control: ' + extracto[2]);