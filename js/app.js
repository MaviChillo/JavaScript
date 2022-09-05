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

    let articulos = prompt(`Seleccione el tipo de producto que desea comprar:
    1: Remeras
    2: Buzos
    3: Discos
    4: Accesorios`);


switch (articulos){
    case "1":
        let remeras = prompt(`Seleccione la remera que desea comprar:
        1: Remera Red Cross
        2: Remera The Fighter
        3: Remera Album Art
        4: Remera Phantom Pomorrow`);

        switch (remeras) {
            case "1":
                alert("El precio de la Remera Red Cross es $2500. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Remera Red Cross $2500");
            break;
            case "2":
                alert("El precio de la Remera The Fighter es $2500. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Remera The Fighter $2500");
            break;
            case "3":
                alert("El precio de la Remera Album Art es $2500. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Remera Album Art $2500");
            break;
            case "4":
                alert("El precio de la Remera Phantom Pomorrow es $2500. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Remera Phantom Pomorrow $2500");
            break;
            default:
                alert("No ingresaste una opcion correcta");
                console.log("No ingresaste una opcion correcta");
            break;
        }
    break;
    case "2":
        let buzos = prompt(`Seleccione el buzo que desea comprar:
        1: Buzo Blessed and Cursed
        2: Buzo Phantom Tomorrow
        3: Buzo Scarlet Cross
        4: Buzo Wounds`);

        switch (buzos) {
            case "1":
                alert("El precio del Buzo Blessed and Cursed es $5500. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Buzo Blessed and Cursed $5500");
            break;
            case "2":
                alert("El precio del Buzo Phantom Tomorrow es $5500. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Buzo Phantom Tomorrow $5500");
            break;
            case "3":
                alert("El precio del Buzo Scarlet Cross es $5500. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Buzo Scarlet Cross $5500");
            break;
            case "4":
                alert("El precio del Buzo Wounds es $5500. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Buzo Wounds $5500");
            break;
            default:
                alert("No ingresaste una opcion correcta");
                console.log("No ingresaste una opcion correcta");
            break;
        }
    break;
    case "3":
        let discos = prompt(`Seleccione el disco que desea comprar:
        1: Vinilo Phantom Tomorrow
        2: CD Phantom Tomorrow
        3: CD Wretched and Divine
        4: Vinilo Re-stitch These Wounds`);

        switch (discos) {
            case "1":
                alert("El precio del Vinilo Phantom Tomorrow es $2600. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Vinilo Phantom Tomorrow $2600");
            break;
            case "2":
                alert("El precio del CD Phantom Tomorrow es $1200. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("CD Phantom Tomorrow $1200");
            break;
            case "3":
                alert("El precio del CD Wretched and Divine es $1000. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("CD Wretched and Divine $1000");
            break;
            case "4":
                alert("El precio del Vinilo Re-stitch These Wounds es $2500. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Vinilo Re-stitch These Wounds $2500");
            break;
            default:
                alert("No ingresaste una opcion correcta");
                console.log("No ingresaste una opcion correcta");
            break;
        }
    break;
    case "4":
        let accesorios = prompt(`Seleccione el accesorio que desea comprar:
        1: Buttons Born Again
        2: Patches Phantom Tomorrow
        3: Beanie Black Veil Brides
        4: Necklace Black Veil Brides`);

        switch (accesorios) {
            case "1":
                alert("El precio de los Buttons Born Again es $1000. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Buttons Born Again $1000");
            break;
            case "2":
                alert("El precio de los Patches Phantom Tomorrow es $2000. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Patches Phantom Tomorrow $2000");
            break;
            case "3":
                alert("El precio del Beanie Black Veil Brides es $3000. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Beanie Black Veil Brides $3000");
            break;
            case "4":
                alert("El precio del Necklace Black Veil Brides es $2000. Haga click en Aceptar para pasar al Metodo de Pago.");
                console.log("Necklace Black Veil Brides $2000");
            break;
            default:
                alert("No ingresaste una opcion correcta");
                console.log("No ingresaste una opcion correcta");
            break;
        }
    break;
    default:
        alert("No has introducido una opcion correcta");
        console.log("No has introducido una opcion correcta");
    break;
}


let agregar = prompt(`Agregar otro articulo?
    Si
    No
    (por favor, en minuscula)`);


switch (agregar) {
    case "si":
        compra()
    break;
    case "no":
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
    break;
    default:
        alert("No ingreso datos correctos");
        console.log("No ingreso datos correctos");
    break;
}

}

compra();
