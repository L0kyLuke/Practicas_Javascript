const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
    desayuno: false,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
    desayuno: false,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
    desayuno: true,
  },
];

class Reserva {
  constructor() {
    this._reservas = [];
    this._subtotal = 0;
    this._total = 0;
  }

  tipoRoom(tipo) {
    switch (tipo) {
      case "standard":
        return 100;
      case "suite":
        return 150;
    }
  }

  personaAdic(persona) {
    return persona > 1 ? 40 * (persona - 1) : 0;
  }

  desayunoInc(breakfast) {
    return breakfast ? 15 : 0;
  }
  
  getSubtotal() {
    this._subtotal = reservas.reduce(
      (sum, { tipoHabitacion, pax, noches, desayuno }) =>
        sum +
        noches *
          (this.tipoRoom(tipoHabitacion) +
            this.personaAdic(pax) +
            this.desayunoInc(desayuno) * pax),
      0
    );
  }

  getTotal() {
    const IVA = 1.21;
    this._total = reservas.reduce(
      (sum, { tipoHabitacion, pax, noches, desayuno }) =>
        sum +
        noches *
          (this.tipoRoom(tipoHabitacion) +
            this.personaAdic(pax) +
            this.desayunoInc(desayuno) * pax) *
          IVA,
      0
    );
  }
  get subtotal() {
    return this._subtotal;
  }
  get total() {
    return this._total;
  }
  set reservas(nuevaReserva) {
    this._reservas = nuevaReserva;
    this.getSubtotal();
    this.getTotal();
  }
}

class ClientePartic extends Reserva {
  constructor() {
    super();
  }
}

class TourOperator extends Reserva {
  constructor() {
    super();
  }
  tipoRoom(tipo) {
    return (tipo = 100);
  }
  get total() {
    return (this._total * 0.85).toFixed(2);
  }
}

const clientePartic = new ClientePartic();
clientePartic.reservas = reservas;
console.log("-------------------------------");
console.log("Caso 1: Cliente Particular");
console.log("-------------------------------");
console.log("Subtotal: ", clientePartic.subtotal + "€");
console.log("Total + IVA: ", clientePartic.total + "€");
console.log("\n");
const tourOperator = new TourOperator();
tourOperator.reservas = reservas;
console.log("-------------------------------");
console.log("Caso 2: Tour Operador");
console.log("-------------------------------");
console.log("Subtotal: ", tourOperator.subtotal + "€");
console.log("Total: ", tourOperator.total + "€");
