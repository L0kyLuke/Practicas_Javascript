/*
var hotel = {
    name: "",
    location: "",
    image: "",
    estrellas: "",
};
hotel["name"] = prompt("Introduce el nombre del hotel");
document.getElementById("name-hotel").innerHTML = "Hotel " + hotel["name"];
hotel["location"] = prompt("Introduce la ubicación del hotel");
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hotel["location"];
hotel["image"] = prompt("Introduce la url de la imagen del hotel");
document.getElementById("img-hotel").src = hotel["image"];
hotel["estrellas"] = prompt("Puntuación: del 1 al 5");
document.getElementById("rating").innerHTML = hotel["estrellas"] + " estrellas";
var anonimo = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonimo;
*/
var hoteles = {
    Ritch: {
        name: "Ritch",
        location: "Mallorca",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    },
    Hilton: {
        name: "Hilton",
        location: "Madrid",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/23/cf/4d/da/hotel-exterior.jpg",
    },
    Zebra: {
        name: "Zebra",
        location: "Málaga",
        img: "https://www.alegria-hotels.com/uploads/galeriahoteles/-DSC0273-Editado.jpg"
    },
}
var stars = {
    una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};
var selectedHotel = prompt("Indique hotel sobre el que quiere hacer la reseña: Ritch / Hilton / Zebra");
document.getElementById("name-hotel").innerHTML = hoteles[selectedHotel]["name"];
document.getElementById("location-hotel").innerHTML = hoteles[selectedHotel]["location"];
document.getElementById("img-hotel").src = hoteles[selectedHotel]["img"];
var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrella");
document.getElementById("rating").innerHTML = stars[rating];
