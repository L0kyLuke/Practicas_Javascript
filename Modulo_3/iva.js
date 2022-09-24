const product = { count: 3, price: 12.55, type: "ropa" };

function getTotal() {
    if (product.count >= 0) {
        return product.count * product.price;
    } else {
        return 0;
    }
};

const total = getTotal();

function getVat() {
    switch (product.type) {
        case "alimentacion":
            iva= total * 0.1;
            break;
        case "libro":
            iva= total * 0.04;
            break;
        default:
            iva= total * 0.21
            break;
    };
    return iva;
}
const totalConIva=product.count*product.price+getVat();
console.log("Subtotal:", getTotal() + "€");
console.log("IVA:", getVat() + "€");
console.log("Total:", totalConIva + "€");