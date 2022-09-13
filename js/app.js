// 

const remeras = [
    {id: 1, producto: "Remera Red Cross", precio: 2500},
    {id: 2, producto: "Remera The Fighter", precio: 2500},
    {id: 3, producto: "Remera Album Art", precio: 2500},
    {id: 4, producto: "Remera Phantom Tomorrow", precio: 2500}
]

const buzos = [
    {id: 1, producto: "Buzo Blessed and Cursed", precio: 5500},
    {id: 2, producto: "Buzo Phantom Tomorrow", precio: 5500},
    {id: 3, producto: "Buzo Scarlet Cross", precio: 5500},
    {id: 4, producto: "Buzo Wounds", precio: 5500}
]

const discos = [
    {id: 1, producto: "Vinilo Phantom Tomorrow", precio: 2600},
    {id: 2, producto: "Cd Phantom Tomorrow", precio: 1200},
    {id: 3, producto: "Cd Wretched and Divine", precio: 1000},
    {id: 4, producto: "Vinilo Re-stitch These Wounds", precio: 2500}
]

const accesorios = [
    {id: 1, producto: "Buttons Born Again", precio: 1000},
    {id: 2, producto: "Patches Phantom Tomorrow", precio: 2000},
    {id: 3, producto: "Beanie Black Veil Brides", precio: 3000},
    {id: 4, producto: "Necklace Black Veil Brides", precio: 2000}
]

const productos = [
    {id: 1, producto: remeras},
    {id: 2, producto: buzos},
    {id: 3, producto: discos},
    {id: 4, producto: accesorios}
]

const carrito = []
console.log(carrito)
console.log(carrito.length)

const carritoProductos = []

function compra(){

let shirts;
let hoodie;
let cds;
let accessories;

    let articulos = prompt(`Seleccione el tipo de producto que desea comprar:
    1: Remeras
    2: Buzos
    3: Discos
    4: Accesorios`);


switch (articulos){
    case "1":
        shirts = prompt(`Seleccione la remera que desea comprar:
        1: ${remeras[0].producto}
        2: ${remeras[1].producto}
        3: ${remeras[2].producto}
        4: ${remeras[3].producto}`);

        switch (shirts) {
            case "1":
                alert(`El precio de la ${remeras[0].producto} es $${remeras[0].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${remeras[0].producto} $${remeras[0].precio}`);
                carrito.push(parseInt(`${remeras[0].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${remeras[0].producto}` + " " + `$${remeras[0].precio}`)
            break;
            case "2":
                alert(`El precio de la ${remeras[1].producto} es $${remeras[1].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${remeras[1].producto} $${remeras[1].precio}`);
                carrito.push(parseInt(`${remeras[1].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${remeras[1].producto}` + " " + `$${remeras[1].precio}`)
            break;
            case "3":
                alert(`El precio de la ${remeras[2].producto} es $${remeras[2].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${remeras[2].producto} $${remeras[2].precio}`);
                carrito.push(parseInt(`${remeras[2].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${remeras[2].producto}` + " " + `$${remeras[2].precio}`)
            break;
            case "4":
                alert(`El precio de la ${remeras[3].producto} es $${remeras[3].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${remeras[3].producto} $${remeras[3].precio}`);
                carrito.push(parseInt(`${remeras[3].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${remeras[3].producto}` + " " + `$${remeras[3].precio}`)
            break;
            default:
                alert("No ingresaste una opcion correcta");
                console.log("No ingresaste una opcion correcta");
            break;
        }
    break;
    case "2":
        hoodie = prompt(`Seleccione el buzo que desea comprar:
        1: ${buzos[0].producto}
        2: ${buzos[1].producto}
        3: ${buzos[2].producto}
        4: ${buzos[3].producto}`);

        switch (hoodie) {
            case "1":
                alert(`El precio del ${buzos[0].producto} es $${buzos[0].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${buzos[0].producto} $${buzos[0].precio}`);
                carrito.push(parseInt(`${buzos[0].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${buzos[0].producto}` + " " + `$${buzos[0].precio}`)
            break;
            case "2":
                alert(`El precio del ${buzos[1].producto} es $${buzos[1].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${buzos[1].producto} $${buzos[1].precio}`);
                carrito.push(parseInt(`${buzos[1].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${buzos[1].producto}` + " " + `$${buzos[1].precio}`)
            break;
            case "3":
                alert(`El precio del ${buzos[2].producto} es $${buzos[2].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${buzos[2].producto} $${buzos[2].precio}`);
                carrito.push(parseInt(`${buzos[2].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${buzos[2].producto}` + " " + `$${buzos[2].precio}`)
            break;
            case "4":
                alert(`El precio del ${buzos[3].producto} es $${buzos[3].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${buzos[3].producto} $${buzos[3].precio}`);
                carrito.push(parseInt(`${buzos[3].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${buzos[3].producto}` + " " + `$${buzos[3].precio}`)
            break;
            default:
                alert("No ingresaste una opcion correcta");
                console.log("No ingresaste una opcion correcta");
            break;
        }
    break;
    case "3":
        cds = prompt(`Seleccione el disco que desea comprar:
        1: ${discos[0].producto}
        2: ${discos[1].producto}
        3: ${discos[2].producto}
        4: ${discos[3].producto}`);

        switch (cds) {
            case "1":
                alert(`El precio del ${discos[0].producto} es $${discos[0].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${discos[0].producto} $${discos[0].precio}`);
                carrito.push(parseInt(`${discos[0].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${discos[0].producto}` + " " + `$${discos[0].precio}`)
            break;
            case "2":
                alert(`El precio del ${discos[1].producto} es $${discos[1].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${discos[1].producto} $${discos[1].precio}`);
                carrito.push(parseInt(`${discos[1].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${discos[1].producto}` + " " + `$${discos[1].precio}`)
            break;
            case "3":
                alert(`El precio del ${discos[2].producto} es $${discos[2].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${discos[2].producto} $${discos[2].precio}`);
                carrito.push(parseInt(`${discos[2].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${discos[2].producto}` + " " + `$${discos[2].precio}`)
            break;
            case "4":
                alert(`El precio del ${discos[3].producto} es $${discos[3].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${discos[3].producto} $${discos[3].precio}`);
                carrito.push(parseInt(`${discos[3].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${discos[3].producto}` + " " + `$${discos[3].precio}`)
            break;
            default:
                alert("No ingresaste una opcion correcta");
                console.log("No ingresaste una opcion correcta");
            break;
        }
    break;
    case "4":
        accessories = prompt(`Seleccione el accesorio que desea comprar:
        1: ${accesorios[0].producto}
        2: ${accesorios[1].producto}
        3: ${accesorios[2].producto}
        4: ${accesorios[3].producto}`);

        switch (accessories) {
            case "1":
                alert(`El precio de los ${accesorios[0].producto} es $${accesorios[0].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${accesorios[0].producto} $${accesorios[0].precio}`);
                carrito.push(parseInt(`${accesorios[0].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${accesorios[0].producto}` + " " + `$${accesorios[0].precio}`)
            break;
            case "2":
                alert(`El precio de los ${accesorios[1].producto} es $${accesorios[1].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${accesorios[1].producto} $${accesorios[1].precio}`);
                carrito.push(parseInt(`${accesorios[1].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${accesorios[1].producto}` + " " + `$${accesorios[1].precio}`)
            break;
            case "3":
                alert(`El precio del ${accesorios[2].producto} es $${accesorios[2].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${accesorios[2].producto} $${accesorios[2].precio}`);
                carrito.push(parseInt(`${accesorios[2].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${accesorios[2].producto}` + " " + `$${accesorios[2].precio}`)
            break;
            case "4":
                alert(`El precio del ${accesorios[3].producto} es $${accesorios[3].precio}. Haga click en Aceptar para continuar.`);
                console.log(`${accesorios[3].producto} $${accesorios[3].precio}`);
                carrito.push(parseInt(`${accesorios[3].precio}`))
                console.log(carrito)
                console.log(carrito.length)
                carritoProductos.push(`${accesorios[3].producto}` + " " + `$${accesorios[3].precio}`)
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

if ((shirts != null && shirts > 0 &&
    shirts < 5) ||
    ( hoodie != null && hoodie > 0 &&
    hoodie < 5) ||
    (cds > 0 && cds < 5 &&
    cds != null) ||
    (accessories > 0 && accessories < 5 && 
    accessories != null)) {

        console.log(carritoProductos)

    let agregar = prompt(`Agregar otro articulo?
    Si
    No
    (por favor, en minuscula)`);


    switch (agregar) {
        case "si":
            compra()
        break;
        case "no":
            let resultado = carrito.reduce((accum, carrito) => {
                return accum + carrito})
                console.log(resultado)
            const metodoPago = prompt(`Su total es de $${resultado}. Indique el metodo de pago:
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

                        let lista = document.querySelector("#listaCarrito");
                        for (let carritoProducto of carritoProductos){
                            let listado = document.createElement("li");
                            listado.innerHTML = carritoProducto
                            lista.appendChild(listado);
                            
                            const textModify = document.querySelector(".aqui").textContent="Presione ENTER para borrar la lista del carrito."
                            console.log(textModify)
                            
                            addEventListener("keydown", () =>{
                                document.querySelector("#listaCarrito").textContent = "Se ha borrado la lista. Para iniciar otra compra, presione F5";
                                
                                console.log("Se limpio la lista del carrito")
                            })
                        }
                } else {
                    alert("No ingreso datos correctos");
                    console.log("No ingreso datos correctos");

                    const textMod = document.querySelector(".aqui").textContent = "Se ha producido un error. Para intentar de nuevo, presione F5";
                    console.log(textMod)
                }
        break;
        default:
            alert("No ingreso datos correctos");
            console.log("No ingreso datos correctos");
            
            const textMod = document.querySelector(".aqui").textContent = "Se ha producido un error. Para intentar de nuevo, presione F5";
            console.log(textMod)
        break;
    }

} else {
    alert("No se pudo completar la compra");
    console.log("No se pudo completar la compra");

    const textMod = document.querySelector(".aqui").textContent = "Se ha producido un error. Para intentar de nuevo, presione F5";
    console.log(textMod)
}

}

compra();
