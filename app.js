// 

let articulos = prompt(`Seleccione el producto que desea comprar
1: Remera
2: Pantalon
3: Campera
4: Zapatillas`)

switch (articulos){
    case "1":
        alert("El precio de la remera es $1200. Haga click en Aceptar para pasar al metodo de pago")
        console.log("Remera $1200")
    break
    case "2": 
        alert("El precio del pantalon es $3500. Haga click en Aceptar para pasar al metodo de pago")
        console.log("Pantalon $3500")
    break
    case "3":
        alert("El precio de la campera es $5700. Haga click en Aceptar para pasar al metodo de pago")
        console.log("Campera $5700")
    break
    case "4":
        alert("El precio de las zapatillas es $12000. Haga click en Aceptar para pasar al metodo de pago")
        console.log("Zapatillas $12000")
    break
    default:
        alert("No has introducido una opcion correcta")
        console.log("No has introducido una opcion correcta")
    break
}

const metodoPago = prompt(`Indique el metodo de pago`)

if (metodoPago == "efectivo" ||
metodoPago == "tarjeta" ||
metodoPago == "cheque"){
    alert(`Has pagado con ${metodoPago}`)
    console.log(`Has pagado con ${metodoPago}`)
    alert("Compra exitosa! Muchas gracias por comprar con nosotros!")
    console.log("Compra exitosa!")
} else {
    alert("No ingreso datos correctos")
    console.log("No ingreso datos correctos")
}

