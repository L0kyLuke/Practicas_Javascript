// Caso 1

var valida = () => {
    let expr = /^5[1-5]\d{2}\s?-?\d{4}\s?-?\d{4}\s?-?\d{4}$/;
    let campo = document.getElementById("campo").value;  
    if(campo.match(expr)){
        alert("Formato de Mastercard correcto");
        captura(campo);
    }else{
        alert("Formato de Mastercard incorrecto");
    }
    
}
document.getElementById("btn").addEventListener('click', valida);

// Caso 2

var captura = (tarjeta) => {
    expr = /^(5[1-5]\d{2})\s?-?(\d{4})\s?-?(\d{4})\s?-?(\d{4})$/;
    const extracto = expr.exec(tarjeta);
    for(i=1;i<extracto.length;i++){
        console.log(i+"º sección de la tarjeta: "+extracto[i]);
    }
    
}
