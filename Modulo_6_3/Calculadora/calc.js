//COGER DE CERO Y VER BIEN COMO FUNCIONA COMPARANDO CON EL ENUNCIADO, Y MODIFICAR SI SE PUEDE MEJORAR
const efectivo = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

var calculo = () =>{
    var importe=document.getElementById("importe").value;
    var entrega=document.getElementById("entregado").value;
    var cambio=entrega-importe;
    if(cambio>-1){
        document.getElementById("cambio").innerHTML="El cambio total es " + cambio + " euros";

        for (const dinero of efectivo){
            var cuenta=pagaCambio(dinero,cambio);
            var x;
            if(cuenta>=1){
                cambio=cambio-parseInt(cuenta)*dinero;
                if(dinero<=2){
                    x="moneda";
                }else{
                    x="billete"
                }
                var mensaje= parseInt(cuenta) + " " + x + " de " + dinero + " euros";
                pinta(mensaje);
            }
        }
        return cambio;
    }else{
        var mensaje= "Ha pagado "+entrega+" cuando el precio de la compra es "+importe;
        pinta(mensaje);
    }
}

var pagaCambio = (dinero, cambio) => {
    return cambio / dinero;
}

var pinta = (mensaje) => {
    var lista = document.getElementById('lista');
    var elemento = document.createElement('li');
    elemento.innerText = mensaje;
    document.getElementById("btn").disabled=true;
    return lista.appendChild(elemento);
  };

var recarga = () => {
    document.location.reload(true);
}

document.getElementById("reload").addEventListener('click', recarga);
document.getElementById("btn").addEventListener('click', calculo);