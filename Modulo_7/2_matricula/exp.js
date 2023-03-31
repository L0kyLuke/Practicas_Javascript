// Validar matrícula coche

// Caso 1
const matriculas = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
let expr = /^\d{4}(\s|-)?[A-Z]{3}$/;
console.log('Caso 1');
matriculas.forEach((matriculas) => {
    if(expr.test(matriculas)==true){
        console.log("La matrícula "+matriculas+" tiene el formato correcto");
    }else{
        console.log("La matrícula "+matriculas+" no tiene el formato correcto");
    }
})

// Caso 2
expr = /^(\d{4})(\s|-)?([A-Z]{3})$/;
matriculas.forEach((matriculas) => {
    const extracto = expr.exec(matriculas);
    console.log('Matricula: ' + matriculas +', números: ' +extracto[1] +' ,letras: ' +extracto[3]);
})