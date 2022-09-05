// 

const productos = [
    {id: 1, producto: "remera", precio:1200},
    {id: 2, producto: "pantalon", precio: 3500},
    {id: 3, producto: "campera", precio: 5700},
    {id: 4, producto: "zapatillas", precio: 12000}
]

console.log(productos.length)

function compra(){

    let articulos = prompt(`Seleccione el producto que desea comprar:
    1: Remera
    2: Pantalon
    3: Campera
    4: Zapatillas`);


switch (articulos){
    case "1":
        alert("El precio de la remera es $1200. Haga click en Aceptar para pasar al Metodo de Pago.");
        console.log("Remera $1200");
    break
    case "2": 
        alert("El precio del pantalon es $3500. Haga click en Aceptar para pasar al Metodo de Pago.");
        console.log("Pantalon $3500");
    break
    case "3":
        alert("El precio de la campera es $5700. Haga click en Aceptar para pasar al Metodo de Pago.");
        console.log("Campera $5700");
    break
    case "4":
        alert("El precio de las zapatillas es $12000. Haga click en Aceptar para pasar al Metodo de Pago.");
        console.log("Zapatillas $12000");
    break
    default:
        alert("No has introducido una opcion correcta");
        console.log("No has introducido una opcion correcta");
    break
}


if (articulos != null && (articulos == 1 ||
    articulos == 2 ||
    articulos == 3 ||
    articulos == 4)) {
    const metodoPago = prompt(`Indique el metodo de pago:
    efectivo
    tarjeta
    cheque
    (por favor, en minuscula)`);

    if (metodoPago == "efectivo" ||
        metodoPago == "tarjeta" ||
        metodoPago == "cheque"){
            alert(`Has pagado con ${metodoPago}`);
            console.log(`Has pagado con ${metodoPago}`);
            alert("Compra exitosa! Muchas gracias por comprar con nosotros!");
            console.log("Compra exitosa!");
    } else {
        alert("No ingreso datos correctos");
        console.log("No ingreso datos correctos");
    }
} else {
    alert("Al no elegir una de las opciones, no podemos continuar");
}

}

compra();
