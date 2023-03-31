// Caso 1
const imagen = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'
let expr = /(=\s*"(.+?)")/;
let extracto = expr.exec(imagen);
console.log("Caso 1");
console.log("URL de la imagen: "+extracto[2]);

// Caso 2
const html = '<html><body><img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/> <h1>ejemplo</h1> <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></body></html>'

//expr = /(?:(?:https?):\/\/)?[\w/\-?=%.]+\.[\w/\-?=%.]+/g;
expr = /https?:\/\/?[\w/\-?=%.]+\.[\w/\-?=%.]+/g;
console.log("\nCaso 2");


for(i=0;i<html.match(expr).length;i++){
    console.log(i+1+"º SRCs de los objetos img: "+html.match(expr)[i]);
}

