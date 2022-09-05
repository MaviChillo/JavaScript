// 

const remeras = [
    {id: 1, producto: "remera red cross", precio: 2500},
    {id: 2, producto: "remera the fighter", precio: 2500},
    {id: 3, producto: "remera album art", precio: 2500},
    {id: 4, producto: "remera phantom tomorrow", precio: 2500}
]

const buzos = [
    {id: 1, producto: "buzo blessed and cursed", precio: 5500},
    {id: 2, producto: "buzo phantom tomorrow", precio: 5500},
    {id: 3, producto: "buzo scarlet cross", precio: 5500},
    {id: 4, producto: "buzo wounds", precio: 5500}
]

const discos = [
    {id: 1, producto: "vinilo phantom tomorrow", precio: 2600},
    {id: 2, producto: "cd phantom tomorrow", precio: 1200},
    {id: 3, producto: "cd wretched and divine", precio: 1000},
    {id: 4, producto: "vinilo re-stitch these wounds", precio: 2500}
]

const accesorios = [
    {id: 1, producto: "buttons born again", precio: 1000},
    {id: 2, producto: "patches phantom tomorrow", precio: 2000},
    {id: 3, producto: "beanie black veil brides", precio: 3000},
    {id: 4, producto: "necklace black veil brides", precio: 2000}
]

const productos = [
    {id: 1, producto: remeras},
    {id: 2, producto: buzos},
    {id: 3, producto: discos},
    {id: 4, producto: accesorios}
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
