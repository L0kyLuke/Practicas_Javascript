document.getElementById("calcula").addEventListener("click", () => {
    let tipoHab = parseInt(document.getElementById("tipoHab").value);
    if (document.getElementById("spa").checked == true) {
        spa = 20;
    }
    else {
        spa = 0;
    }
    let sizeHab = document.getElementById("sizeHab").value;
    let numNoch = document.getElementById("numNoch").value;
    let numPark = document.getElementById("numPark").value;

    resultado = tipoHab + spa;

    switch (sizeHab) {
        case "ind":
            resultado = resultado - resultado * 0.25;
            break;
        case "dob":
            resultado = resultado;
            break;
        case "tri":
            resultado = resultado + resultado * 0.25;
            break;
    }; 
    resultado = numNoch * resultado + numPark * 10;
    document.getElementById("resultado").innerText = "Precio: "+resultado+"€";
});




/*
 const op1 = parseInt(document.getElementById("num1").value);
 const op2 = parseInt(document.getElementById("num2").value);
 if (isNaN(op1) || isNaN(op2)) {
     document.getElementById("resultado").innerText = "ERROR";
 } else {
     document.getElementById("resultado").innerText = suma(op1, op2);
 }*/
