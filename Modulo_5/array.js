const carrito = [
    {
        id: 100001,
        name: "Patatas",
        price: 2.95,
        count: 3,
        premium: false
    },
    {
        id: 100002,
        name: "Fresas",
        price: 3.95,
        count: 2,
        premium: true
    },
    {
        id: 100003,
        name: "Leche",
        price: 1.95,
        count: 7,
        premium: false
    },
    {
        id: 100004,
        name: "Cerveza",
        price: 0.95,
        count: 9,
        premium: true
    },
    {
        id: 100005,
        name: "Vino",
        price: 3.95,
        count: 2,
        premium: true
    },
    {
        id: 100006,
        name: "Atún",
        price: 2.50,
        count: 3,
        premium: false
    },
    {
        id: 100007,
        name: "Pollo",
        price: 4.95,
        count: 2,
        premium: true
    }
];
// Eliminar el segundo elemento del carro
function eliminado(carrito) {
    var elementoEliminado = carrito.splice(1, 1);
}
eliminado(carrito);

// Listamos todos los productos
function imprimir(carro) {
    console.log("------------------");
    for (attr in carro) {
        console.log(attr.toUpperCase() + ": " + carro[attr]);
    }
}
for (carro of carrito) {
    imprimir(carro);
}

// Calcular total de la compra
function calcula(carrito) {
    let total = 0;
    for (carro of carrito) {
        total += carro.price * carro.count;
    }
    if (total < 50) {
        console.log("------------------");
        console.log("---PRECIO TOTAL---");
        console.log("------------------");
        console.log(total.toFixed(3) + "€");
    } else {
        total = total-total*0.05;
        console.log("--------------------------------------");
        console.log("---PRECIO TOTAL CON 5% DE DESCUENTO---");
        console.log("--------------------------------------");
        console.log(total.toFixed(3) + "€");
    }
}
calcula(carrito);

// Filtrar productos prime
function filtrar(carro) {
    console.log("------------------");
    for (attr in carro) {
        console.log(attr.toUpperCase() + ": " + carro[attr]);
    }
}
document.getElementById("prime").onclick = function checkPrime() {
    console.clear();
    if (document.getElementById("prime").checked == true) {
        for (carro of carrito) {
            if (carro.premium) filtrar(carro);
        }
        console.log("------------------");
        console.log("Gastos de envío cero");
    } else {
        for (carro of carrito) {
            imprimir(carro);
        }
        console.log("------------------");
        console.log("Con gastos de envío");
    }
    calcula(carrito);
}