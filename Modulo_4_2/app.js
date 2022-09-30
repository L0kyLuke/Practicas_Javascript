

let temp;
let operador;
document.getElementById("suma").addEventListener("click", () => {
    operador = "suma";
    const op = parseInt(document.getElementById("num").value);
    if (isNaN(op)) {
        console.log("Introduce número");
    } else {
        if (isNaN(temp)) {
            temp = op;
        }
    }
});
document.getElementById("resta").addEventListener("click", () => {
    operador = "resta";
    const op = parseInt(document.getElementById("num").value);
    if (isNaN(op)) {
        console.log("Introduce número");
    } else {
        if (isNaN(temp)) {
            temp = op;
        }
    }
});
document.getElementById("multiplica").addEventListener("click", () => {
    operador = "multiplica";
    const op = parseInt(document.getElementById("num").value);
    if (isNaN(op)) {
        console.log("Introduce número");
    } else {
        if (isNaN(temp)) {
            temp = op;
        }
    }
});
document.getElementById("divide").addEventListener("click", () => {
    operador = "divide";
    const op = parseInt(document.getElementById("num").value);
    if (isNaN(op)) {
        console.log("Introduce número");
    } else {
        if (isNaN(temp)) {
            temp = op;
        }
    }
});
document.getElementById("calcula").addEventListener("click", () => {
    const op = parseInt(document.getElementById("num").value);
    if (isNaN(op)) {
        console.log("Introduce número");
    } else {
        if (isNaN(temp)) {

            document.getElementById("operaciones").innerText = op;
        } else {
            const op = parseInt(document.getElementById("num").value);
            switch (operador) {
                case 'suma':
                    temp = op + temp;
                    document.getElementById("operaciones").innerText = temp;
                    operador = "nada";
                    break;
                case 'resta':
                    temp = temp - op;
                    document.getElementById("operaciones").innerText = temp;
                    operador = "nada";
                    break;
                case 'multiplica':
                    temp = op * temp;
                    document.getElementById("operaciones").innerText = temp;
                    operador = "nada";
                    break;
                case 'divide':
                    temp = temp / op;
                    document.getElementById("operaciones").innerText = temp;
                    operador = "nada";
                    break;
            }
        }
    }
});