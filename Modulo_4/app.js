function suma(x, y) {
    return x + y;
};
function resta(x, y) {
    return x - y;
};
function multiplica(x, y) {
    return x * y;
};
function divide(x, y) {
    return x / y;
};
document.getElementById("suma").addEventListener("click", () => {
    const op1 = parseInt(document.getElementById("num1").value);
    const op2 = parseInt(document.getElementById("num2").value);
    if (isNaN(op1) || isNaN(op2)) {
        document.getElementById("resultado").innerText = "ERROR";
    } else {
        document.getElementById("resultado").innerText = suma(op1, op2);
    }
});
document.getElementById("resta").addEventListener("click", () => {
    const op1 = parseInt(document.getElementById("num1").value);
    const op2 = parseInt(document.getElementById("num2").value);
    if (isNaN(op1) || isNaN(op2)) {
        document.getElementById("resultado").innerText = "ERROR";
    } else {
        document.getElementById("resultado").innerText = resta(op1, op2);
    }
});
document.getElementById("multiplica").addEventListener("click", () => {
    const op1 = parseInt(document.getElementById("num1").value);
    const op2 = parseInt(document.getElementById("num2").value);
    if (isNaN(op1) || isNaN(op2)) {
        document.getElementById("resultado").innerText = "ERROR";
    } else {
        document.getElementById("resultado").innerText = multiplica(op1, op2);
    }
});
document.getElementById("divide").addEventListener("click", () => {
    const op1 = parseInt(document.getElementById("num1").value);
    const op2 = parseInt(document.getElementById("num2").value);
    if (isNaN(op1) || isNaN(op2)) {
        document.getElementById("resultado").innerText = "ERROR";
    } else {
        document.getElementById("resultado").innerText = divide(op1, op2);
    }

});


