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

if (carrito.length === 0 && 
    carrito.length <1) {
    
} else {
    let resultado = carrito.reduce((accum, carrito) => {
    return accum + carrito})

    console.log(resultado)
}


const carritoProductos = []
console.log(carritoProductos)

const cart = document.querySelector("#ddm")

for (let carritoProducto of carritoProductos){

    let lista = document.createElement("li");

    lista.innerHTML = carritoProducto

    cart.appendChild(lista);
    
}


// remeras

const reme1 =document.querySelector("#reme1")

reme1.onclick = function(){
    console.log(`${remeras[0].producto} $${remeras[0].precio}`);
    carrito.push(parseInt(`${remeras[0].precio}`));
    console.log(carrito);
    carritoProductos.push(`${remeras[0].producto}` + " " + `$${remeras[0].precio}`);
}


const reme2 =document.querySelector("#reme2")

reme2.onclick = function(){
    console.log(`${remeras[1].producto} $${remeras[1].precio}`);
    carrito.push(parseInt(`${remeras[1].precio}`));
    console.log(carrito);
    carritoProductos.push(`${remeras[1].producto}` + " " + `$${remeras[1].precio}`);
}


const reme3 =document.querySelector("#reme3")

reme3.onclick = function(){
    console.log(`${remeras[2].producto} $${remeras[2].precio}`);
    carrito.push(parseInt(`${remeras[2].precio}`));
    console.log(carrito);
    carritoProductos.push(`${remeras[2].producto}` + " " + `$${remeras[2].precio}`);
}


const reme4 =document.querySelector("#reme4")

reme4.onclick = function(){
    console.log(`${remeras[3].producto} $${remeras[3].precio}`);
    carrito.push(parseInt(`${remeras[3].precio}`));
    console.log(carrito);
    carritoProductos.push(`${remeras[3].producto}` + " " + `$${remeras[3].precio}`);
}



// buzos

const buzo1 =document.querySelector("#buzo1")

buzo1.onclick = function(){
    console.log(`${buzos[0].producto} $${buzos[0].precio}`);
    carrito.push(parseInt(`${buzos[0].precio}`));
    console.log(carrito);
    carritoProductos.push(`${buzos[0].producto}` + " " + `$${buzos[0].precio}`);
}


const buzo2 =document.querySelector("#buzo2")

buzo2.onclick = function(){
    console.log(`${buzos[1].producto} $${buzos[1].precio}`);
    carrito.push(parseInt(`${buzos[1].precio}`));
    console.log(carrito);
    carritoProductos.push(`${buzos[1].producto}` + " " + `$${buzos[1].precio}`);
}


const buzo3 =document.querySelector("#buzo3")

buzo3.onclick = function(){
    console.log(`${buzos[2].producto} $${buzos[2].precio}`);
    carrito.push(parseInt(`${buzos[2].precio}`));
    console.log(carrito);
    carritoProductos.push(`${buzos[2].producto}` + " " + `$${buzos[2].precio}`);
}


const buzo4 =document.querySelector("#buzo4")

buzo4.onclick = function(){
    console.log(`${buzos[3].producto} $${buzos[3].precio}`);
    carrito.push(parseInt(`${buzos[3].precio}`));
    console.log(carrito);
    carritoProductos.push(`${buzos[3].producto}` + " " + `$${buzos[3].precio}`);
}



// discos

const discos1 =document.querySelector("#discos1")

discos1.onclick = function(){
    console.log(`${discos[0].producto} $${discos[0].precio}`);
    carrito.push(parseInt(`${discos[0].precio}`));
    console.log(carrito);
    carritoProductos.push(`${discos[0].producto}` + " " + `$${discos[0].precio}`);
}


const discos2 =document.querySelector("#discos2")

discos2.onclick = function(){
    console.log(`${discos[1].producto} $${discos[1].precio}`);
    carrito.push(parseInt(`${discos[1].precio}`));
    console.log(carrito);
    carritoProductos.push(`${discos[1].producto}` + " " + `$${discos[1].precio}`);
}


const discos3 =document.querySelector("#discos3")

discos3.onclick = function(){
    console.log(`${discos[2].producto} $${discos[2].precio}`);
    carrito.push(parseInt(`${discos[2].precio}`));
    console.log(carrito);
    carritoProductos.push(`${discos[2].producto}` + " " + `$${discos[2].precio}`);
}


const discos4 =document.querySelector("#discos4")

discos4.onclick = function(){
    console.log(`${discos[3].producto} $${discos[3].precio}`);
    carrito.push(parseInt(`${discos[3].precio}`));
    console.log(carrito);
    carritoProductos.push(`${discos[3].producto}` + " " + `$${discos[3].precio}`);
}



// accessorios

const acces1 =document.querySelector("#acces1")

acces1.onclick = function(){
    console.log(`${accesorios[0].producto} $${accesorios[0].precio}`);
    carrito.push(parseInt(`${accesorios[0].precio}`));
    console.log(carrito);
    carritoProductos.push(`${accesorios[0].producto}` + " " + `$${accesorios[0].precio}`);
}


const acces2 =document.querySelector("#acces2")

acces2.onclick = function(){
    console.log(`${accesorios[1].producto} $${accesorios[1].precio}`);
    carrito.push(parseInt(`${accesorios[1].precio}`));
    console.log(carrito);
    carritoProductos.push(`${accesorios[1].producto}` + " " + `$${accesorios[1].precio}`);
}


const acces3 =document.querySelector("#acces3")

acces3.onclick = function(){
    console.log(`${accesorios[2].producto} $${accesorios[2].precio}`);
    carrito.push(parseInt(`${accesorios[2].precio}`));
    console.log(carrito);
    carritoProductos.push(`${accesorios[2].producto}` + " " + `$${accesorios[2].precio}`);
}


const acces4 =document.querySelector("#acces4")

acces4.onclick = function(){
    console.log(`${accesorios[3].producto} $${accesorios[3].precio}`);
    carrito.push(parseInt(`${accesorios[3].precio}`));
    console.log(carrito);
    carritoProductos.push(`${accesorios[3].producto}` + " " + `$${accesorios[3].precio}`);
}







function compra(){
}

compra();
