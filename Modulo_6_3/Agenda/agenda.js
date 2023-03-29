// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

// Añadimos la disponibilidad del trabajador por cada franja horaria
var horarioAleatorio = () => {
    for (const trabajador of myTeam) {
        for (let i = 0; i < trabajador.availability.length; i++) {
            if (Math.random() < 0.5) {
                trabajador.availability[i] = "Si";
            } else {
                trabajador.availability[i] = "No";
            }
        }
    }
}

// Mostramos la agenda
var mostrarAgenda = () => {
    for (trabajador of myTeam) {
        console.log("Disponibilidad de " + trabajador.name);
        for (let i = 0; i < trabajador.availability.length; i++) {
            console.log(WORK_HOURS[i] + ": " + trabajador.availability[i]);
        }
        console.log("");
    }
}

// Buscamos franja horaria en la que todos los trabajadores estén disponibles
var huecoLibre = () => {
    var elHueco;
    var encontrado = false;

    var buscador = new Array(myTeam.length).fill("No");
    var ideal = new Array(myTeam.length).fill("Si");

    for (let pos = 0; pos < WORK_HOURS.length; pos++) {

        for (let x = 0; x < myTeam.length; x++) {
            buscador[x] = myTeam[x].availability[pos];
        }

        if (buscador.toString() == ideal) {
            elHueco = WORK_HOURS[pos]
            encontrado = true;
        } else {
            buscador.fill("No");
        }
        
    }

    if (encontrado == true) {
        console.log('Hueco encontrado en el horario ' + elHueco);
    } else {
        console.log('Lo siento, No hay hueco disponible en el equipo');
    }
}

horarioAleatorio();
mostrarAgenda();
huecoLibre();
