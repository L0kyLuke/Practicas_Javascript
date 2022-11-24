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

//Mostrar todos los elementos del carro
function carga() {
    var main = document.getElementById('productos');
    var i = 0;
    for (carro of carrito) {
        var elemento = document.createElement('li');
        var nombre = document.createElement('h2');
        var precio = document.createElement('h3');
        var premium = document.createElement('h4');
        var identificador = document.createElement('h4');
        var cantidad = document.createElement('h5');
        var linea = document.createElement('hr');


        elemento.appendChild(nombre);
        elemento.appendChild(identificador);
        elemento.appendChild(precio);
        elemento.appendChild(premium);
        elemento.appendChild(cantidad);


        if (document.getElementById("prime").checked == true) {

            if (carro.premium == true) {
                main.appendChild(elemento);
                nombre.innerHTML = carro.name;
                identificador.innerHTML = "ID: " + carro.id;
                precio.innerHTML = carro.price + "€";
                cantidad.innerHTML = "Cantidad: " + carro.count;
                premium.innerHTML = "<span style='color:orange'>Producto Premium</span>";
                var elimina = document.createElement('button');
                elimina.innerHTML = "Eliminar";
                elimina.setAttribute("id", carro.id);
                elemento.appendChild(elimina);
                elimina.addEventListener("click", eliminaElemento);
                elemento.appendChild(linea);

            }
        } else {
            main.appendChild(elemento);
            nombre.innerHTML = carro.name;
            identificador.innerHTML = "ID: " + carro.id;
            precio.innerHTML = carro.price + "€";
            cantidad.innerHTML = "Cantidad: " + carro.count;
            if (carro.premium == true) {
                premium.innerHTML = "<span style='color:orange'>Producto Premium</span>";
            }
            var elimina = document.createElement('button');
            elimina.innerHTML = "Eliminar";
            elimina.setAttribute("id", carro.id);
            elemento.appendChild(elimina);
            elimina.addEventListener("click", eliminaElemento);
            elemento.appendChild(linea);
        }

    }
    calcula(carrito);
}

carga();

// Calcular total de la compra
function calcula(carrito) {
    var noPrime = 0;
    let total = 0;
    var result = document.getElementById('total');
    var res = document.createElement('h1');
    var envio = document.createElement('h3');
    result.appendChild(res);
    for (carro of carrito) {
        total += carro.price * carro.count;
        if(carro.premium==false){//Contador de elementos no prime en carro
            noPrime++;
        }
    }
    //Mostrar descuento si la compra es superior a 50
    if (total < 50) {
        res.innerHTML = "Precio total: " + total.toFixed(2) + "€";
    } else {
        total = total - total * 0.05;
        res.innerHTML = "Precio total con 5% de descuento: " + total.toFixed(2) + "€";
    }


    //Mostrar tipo de gastos de envío dependiendo de si hay elementos no prime en carro
    result.appendChild(envio);
    if (noPrime==0 && carrito.length>0) {
        envio.innerHTML = "<span style='color:green'>Gastos de envío gratis</span>";
    }
    else if(carrito.length>0) {
        envio.innerHTML = "<span style='color:red'>Con gastos de envío</span>";
    }
}

//Para mostrar solo los primes o todos
document.getElementById("prime").onclick = function checkPrime() {
    document.getElementById("productos").innerHTML = "";
    document.getElementById("total").innerHTML = "";
    carga();
}

//Elimina el elemento que pulsemos
function eliminaElemento() {
    var buttons = document.getElementsByTagName("button");
    var buttonsCount = buttons.length;
    var y = 0;
    for (var i = 0; i <= buttonsCount; i += 1) {

        while (carrito[y].id != this.id) {
            y++
        }
        carrito.splice(y, 1);
        document.getElementById("productos").innerHTML = "";
        document.getElementById("total").innerHTML = "";
        carga();

    }
}


