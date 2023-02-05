// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

var numeros = document.getElementById("numeros");
var main = document.getElementById("lista-elementos");
var contenedor = document.getElementById("campos");
var abajo = document.getElementById("total");
var derecha = document.getElementById("resultado");
var bot = document.getElementById("boton");


// Elemento descripción
var crearDescripcion = producto => {
    var elemento = document.createElement("li");
    var descripcion = document.createElement("li");
    descripcion.setAttribute("class", "prods");
    descripcion.innerHTML = producto.description + " - " + producto.price +"€/ud. ";
    numeros.appendChild(elemento);
    main.appendChild(descripcion);
}

// Elemento input
var crearInput = producto => {

    var input = document.createElement("input")
    input.setAttribute("class","product-unit")
    input.setAttribute("type","number");
    input.setAttribute("min",0);
    input.addEventListener("change", event => (producto.units = event.target.value,verificar()))
    input.setAttribute("value",producto.units);
    contenedor.appendChild(input);
}

// Elemento botón
var crearBoton = (producto) => {
    var bot = document.createElement("button");
    bot.setAttribute("class", "button");
    boton.appendChild(bot);
    bot.innerText= "Calcular";
    bot.setAttribute("disabled", "");
    bot.setAttribute("id","accion");
    bot.addEventListener("click", () => (calcular()));

}

// Elementos resultados
var crearResultados = () => {
    var subtotal = document.createElement("h4");
    var iva = document.createElement("h4");
    var total = document.createElement("h3");
    abajo.appendChild(subtotal);
    abajo.appendChild(iva);
    abajo.appendChild(total);
    subtotal.innerHTML="Subtotal";
    iva.innerHTML="IVA";
    total.innerHTML="TOTAL";

    var resSubtotal = document.createElement("h4");
    resSubtotal.setAttribute("id","subto");
    var resIva = document.createElement("h4");
    resIva.setAttribute("id","iva");
    var resTotal = document.createElement("h3");
    resTotal.setAttribute("id","tot");
    derecha.appendChild(resSubtotal);
    derecha.appendChild(resIva);
    derecha.appendChild(resTotal);
    resSubtotal.innerHTML="0 €";
    resIva.innerHTML="0 €";
    resTotal.innerHTML="0 €";

}

// Habilita/Deshabilita el botón dependiendo de si hay unidades en la cesta
var verificar = () => {
    const result = products.filter(producto => producto.units > 0);

    if(result.length>0){
        document.getElementById("accion").disabled=false;
    }else{
        document.getElementById("accion").disabled=true;
        document.getElementById("subto").innerHTML="0 €";
        document.getElementById("iva").innerHTML="0 €";
        document.getElementById("tot").innerHTML="0 €";
    }
}

// Cálculo de factura
var calcular = () =>{
    // Calculamos subtotal
    var subtotales = [];
    var ivas = [];
    var totales = [];
    for (i=0;i<products.length;i++) {
        subtotales[i]=products[i].price * products[i].units;
    }
    let temp = subtotales.reduce((a, b) => {
        return a + b;
    }, 0);
    document.getElementById("subto").innerHTML=temp.toFixed(2) + " €";

    // Calculamos IVA
    for (i=0;i<products.length;i++) {
            switch (products[i].tax) {
                case 21:
                    ivas[i]= subtotales[i] * 21/100;
                    break;
                case 4:
                    ivas[i]= subtotales[i] * 4/100;
                    break;
                case 0:
                    ivas[i]= 0;
                    break;
            };
    }
    temp = ivas.reduce((a, b) => {
        return a + b;
    }, 0);
    document.getElementById("iva").innerHTML=temp.toFixed(2) + " €";

    // Calculamos total
    for (i=0;i<products.length;i++) {
        totales[i]=subtotales[i]+ivas[i];
    }
    temp = totales.reduce((a, b) => {
        return a + b;
    }, 0);
    document.getElementById("tot").innerHTML=temp.toFixed(2) + " €";
}

// Muestra todos los elementos de la cesta
var mostrarProductos = listaProductos => {
    for (producto of listaProductos) {
        crearDescripcion(producto);
        crearInput(producto);
    }
    crearBoton(producto);
    crearResultados();
}


mostrarProductos(products);



