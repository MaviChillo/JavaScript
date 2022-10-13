// 


const carrito = []
console.log(carrito)
console.log(carrito.length)


const carritoProductos = []
console.log(carritoProductos)

const carritoProductosArray = []
    let resultado;

function compra(){

    const cart = document.querySelector("#ddm");
    let lista = document.createElement("li");

    for (let carritoProducto of carritoProductos){ 

    lista.innerHTML = carritoProducto

        cart.appendChild(lista);

    }
}

// function total(){

//     const cartTotal = document.querySelector("#total");
//     let liTotal = document.createElement("li");

//     carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); liTotal.innerHTML = resultado; 

//     cartTotal.appendChild(liTotal);

// }


function prod() {

// remeras

    const remeras = [] //crear array vacio

    fetch("data.json") //fetch(``)//pushear a un array vacio llamado remeras
    .then((res) => res.json())
    .then ((data) => {
        remeras.push({id: 1, producto: "Remera Red Cross", precio: 2500},
        {id: 2, producto: "Remera The Fighter", precio: 2500},
        {id: 3, producto: "Remera Album Art", precio: 2500},
        {id: 4, producto: "Remera Phantom Tomorrow", precio: 2500})
    })

const reme1 =document.querySelector("#reme1")

reme1.onclick = function(){
    console.log(`${remeras[0].producto} $${remeras[0].precio}`);

    carrito.push(parseInt(`${remeras[0].precio}`));
    console.log(carrito);

    carritoProductos.push(`${remeras[0].producto}` + " " + `$${remeras[0].precio}`);

    carritoProductosArray.push(`${remeras[0].producto}` + " " + `$${remeras[0].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito});console.log(resultado);

    compra()
    } 


const reme2 =document.querySelector("#reme2")


reme2.onclick = function(){
    console.log(`${remeras[1].producto} $${remeras[1].precio}`);

    carrito.push(parseInt(`${remeras[1].precio}`));
    console.log(carrito);

    carritoProductos.push(`${remeras[1].producto}` + " " + `$${remeras[1].precio}`);

    carritoProductosArray.push(`${remeras[1].producto}` + " " + `$${remeras[1].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito});console.log(resultado);

    compra()
}


const reme3 =document.querySelector("#reme3")

reme3.onclick = function(){
    console.log(`${remeras[2].producto} $${remeras[2].precio}`);

    carrito.push(parseInt(`${remeras[2].precio}`));
    console.log(carrito);

    carritoProductos.push(`${remeras[2].producto}` + " " + `$${remeras[2].precio}`);

    carritoProductosArray.push(`${remeras[2].producto}` + " " + `$${remeras[2].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito});console.log(resultado);

    compra()
    }    



const reme4 =document.querySelector("#reme4")

reme4.onclick = function(){
    console.log(`${remeras[3].producto} $${remeras[3].precio}`);

    carrito.push(parseInt(`${remeras[3].precio}`));
    console.log(carrito);

    carritoProductos.push(`${remeras[3].producto}` + " " + `$${remeras[3].precio}`);

    carritoProductosArray.push(`${remeras[3].producto}` + " " + `$${remeras[3].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito});console.log(resultado);

    compra()
    } 



// buzos

const buzos = [] //crear array vacio

fetch("data.json") //fetch(``)//pushear a un array vacio llamado remeras
.then((res) => res.json())
.then ((data) => {
    buzos.push({id: 5, producto: "Buzo Blessed and Cursed", precio: 5500},
    {id: 6, producto: "Buzo Phantom Tomorrow", precio: 5500},
    {id: 7, producto: "Buzo Scarlet Cross", precio: 5500},
    {id: 8, producto: "Buzo Wounds", precio: 5500})
})

const buzo1 =document.querySelector("#buzo1")

buzo1.onclick = function(){
    console.log(`${buzos[0].producto} $${buzos[0].precio}`);

    carrito.push(parseInt(`${buzos[0].precio}`));
    console.log(carrito);

    carritoProductos.push(`${buzos[0].producto}` + " " + `$${buzos[0].precio}`);

    carritoProductosArray.push(`${buzos[0].producto}` + " " + `$${buzos[0].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito});console.log(resultado);

    compra()
    } 



const buzo2 =document.querySelector("#buzo2")

buzo2.onclick = function(){
    console.log(`${buzos[1].producto} $${buzos[1].precio}`);

    carrito.push(parseInt(`${buzos[1].precio}`));
    console.log(carrito);

    carritoProductos.push(`${buzos[1].producto}` + " " + `$${buzos[1].precio}`);

    carritoProductosArray.push(`${buzos[1].producto}` + " " + `$${buzos[1].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); console.log(resultado);

    compra()
    } 


const buzo3 =document.querySelector("#buzo3")

buzo3.onclick = function(){
    console.log(`${buzos[2].producto} $${buzos[2].precio}`);

    carrito.push(parseInt(`${buzos[2].precio}`));
    console.log(carrito);

    carritoProductos.push(`${buzos[2].producto}` + " " + `$${buzos[2].precio}`);

    carritoProductosArray.push(`${buzos[2].producto}` + " " + `$${buzos[2].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito});console.log(resultado);

    compra()
    } 



const buzo4 =document.querySelector("#buzo4")

buzo4.onclick = function(){
    console.log(`${buzos[3].producto} $${buzos[3].precio}`);

    carrito.push(parseInt(`${buzos[3].precio}`));
    console.log(carrito);

    carritoProductos.push(`${buzos[3].producto}` + " " + `$${buzos[3].precio}`);

    carritoProductosArray.push(`${buzos[3].producto}` + " " + `$${buzos[3].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); console.log(resultado);
    
    compra()
    } 




// discos

const discos = [] //crear array vacio

fetch("data.json") //fetch(``)//pushear a un array vacio llamado remeras
.then((res) => res.json())
.then ((data) => {
    discos.push({id: 9, producto: "Vinilo Phantom Tomorrow", precio: 2600},
    {id: 10, producto: "Cd Phantom Tomorrow", precio: 1200},
    {id: 11, producto: "Cd Wretched and Divine", precio: 1000},
    {id: 12, producto: "Vinilo Re-stitch These Wounds", precio: 2500})
})

const discos1 =document.querySelector("#discos1")

discos1.onclick = function(){
    console.log(`${discos[0].producto} $${discos[0].precio}`);

    carrito.push(parseInt(`${discos[0].precio}`));
    console.log(carrito);

    carritoProductos.push(`${discos[0].producto}` + " " + `$${discos[0].precio}`);

    carritoProductosArray.push(`${discos[0].producto}` + " " + `$${discos[0].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); console.log(resultado);

    compra()
    } 


const discos2 =document.querySelector("#discos2")

discos2.onclick = function(){
    console.log(`${discos[1].producto} $${discos[1].precio}`);

    carrito.push(parseInt(`${discos[1].precio}`));
    console.log(carrito);

    carritoProductos.push(`${discos[1].producto}` + " " + `$${discos[1].precio}`);

    carritoProductosArray.push(`${discos[1].producto}` + " " + `$${discos[1].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); console.log(resultado);

    compra()
    } 


const discos3 =document.querySelector("#discos3")

discos3.onclick = function(){
    console.log(`${discos[2].producto} $${discos[2].precio}`);

    carrito.push(parseInt(`${discos[2].precio}`));
    console.log(carrito);

    carritoProductos.push(`${discos[2].producto}` + " " + `$${discos[2].precio}`);

    carritoProductosArray.push(`${discos[2].producto}` + " " + `$${discos[2].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); console.log(resultado);

    compra()
    } 



const discos4 =document.querySelector("#discos4")

discos4.onclick = function(){
    console.log(`${discos[3].producto} $${discos[3].precio}`);

    carrito.push(parseInt(`${discos[3].precio}`));
    console.log(carrito);

    carritoProductos.push(`${discos[3].producto}` + " " + `$${discos[3].precio}`);

    carritoProductosArray.push(`${discos[3].producto}` + " " + `$${discos[3].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); console.log(resultado);

    compra()

} 



// accessorios

const accesorios = [] //crear array vacio

fetch("data.json") //fetch(``)//pushear a un array vacio llamado remeras
.then((res) => res.json())
.then ((data) => {
    accesorios.push({id: 13, producto: "Buttons Born Again", precio: 1000},
    {id: 14, producto: "Patches Phantom Tomorrow", precio: 2000},
    {id: 15, producto: "Beanie Black Veil Brides", precio: 3000},
    {id: 16, producto: "Necklace Black Veil Brides", precio: 2000})
})

const acces1 =document.querySelector("#acces1")

acces1.onclick = function(){
    console.log(`${accesorios[0].producto} $${accesorios[0].precio}`);

    carrito.push(parseInt(`${accesorios[0].precio}`));
    console.log(carrito);

    carritoProductos.push(`${accesorios[0].producto}` + " " + `$${accesorios[0].precio}`);

    carritoProductosArray.push(`${accesorios[0].producto}` + " " + `$${accesorios[0].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); console.log(resultado);

    compra()
    } 



const acces2 =document.querySelector("#acces2")

acces2.onclick = function(){
    console.log(`${accesorios[1].producto} $${accesorios[1].precio}`);

    carrito.push(parseInt(`${accesorios[1].precio}`));
    console.log(carrito);

    carritoProductos.push(`${accesorios[1].producto}` + " " + `$${accesorios[1].precio}`);

    carritoProductosArray.push(`${accesorios[1].producto}` + " " + `$${accesorios[1].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); console.log(resultado);


    compra()
    } 




const acces3 =document.querySelector("#acces3")

acces3.onclick = function(){
    console.log(`${accesorios[2].producto} $${accesorios[2].precio}`);

    carrito.push(parseInt(`${accesorios[2].precio}`));
    console.log(carrito);

    carritoProductos.push(`${accesorios[2].producto}` + " " + `$${accesorios[2].precio}`);

    carritoProductosArray.push(`${accesorios[2].producto}` + " " + `$${accesorios[2].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); console.log(resultado);

    compra()

    } 



const acces4 =document.querySelector("#acces4")

acces4.onclick = function(){
    console.log(`${accesorios[3].producto} $${accesorios[3].precio}`);

    carrito.push(parseInt(`${accesorios[3].precio}`));
    console.log(carrito);

    carritoProductos.push(`${accesorios[3].producto}` + " " + `$${accesorios[3].precio}`);

    carritoProductosArray.push(`${accesorios[3].producto}` + " " + `$${accesorios[3].precio}`);
    localStorage.setItem("Carrito", JSON.stringify(carritoProductosArray));

    carrito.length === 0 ? console.log("carrito vacio") : resultado = carrito.reduce((accum, carrito) => {return accum + carrito}); console.log(resultado);

    compra()
    } 

}


// carrito




const buy =document.querySelector("#buy")

buy.onclick = function(){

    if (carritoProductos != 0) {
        Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'question',
    showCancelButton: true,
    color: 'darkred', // text
    background: '#191919', // alert backgorund
    backdrop: `
      rgba(black, 0.6)
      left top
      no-repeat
    `,// atras del alert
    confirmButtonColor: 'darkgreen',
    cancelButtonColor: 'darkred',
    confirmButtonText: 'Yes, buy cart'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'All Done!',
        text: 'Thank you for shopping with us!',
        icon: 'success',
        confirmButtonColor: 'darkred',
        color: 'darkred', // text
    background: '#191919', // alert backgorund
    backdrop: `
      rgba(black, 0.6)
      left top
      no-repeat
    `,// atras del alert
        })

        const liMod= document.querySelector("#ddm").textContent=""
        carrito.splice(0,carrito.length)
        carritoProductos.splice(0,carritoProductos.length)

        localStorage.removeItem("Carrito")

    }
  })
    } else {
        Swal.fire({
            title: 'The cart is empty!',
            text: 'You cannot buy if the cart is empty, please select a product.',
            icon: 'error',
            confirmButtonColor: 'darkred',
            color: 'darkred', // text
    background: '#191919', // alert backgorund
    backdrop: `
      rgba(black, 0.6)
      left top
      no-repeat
    `,// atras del alert
        })
    }



}



const delet =document.querySelector("#delet")

delet.onclick = function(){

    if (carritoProductos != 0) {
        Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    color: 'darkred', // text
    background: '#191919', // alert backgorund
    backdrop: `
      rgba(black,0.6)
      left top
      no-repeat
    `,// atras del alert
    showCancelButton: true,
    confirmButtonColor: 'dargreen',
    cancelButtonColor: 'darkred',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success',
        confirmButtonColor: 'darkred',
        color: 'darkred', // text
    background: '#191919', // alert backgorund
    backdrop: `
      rgba(black, 0.6)
      left top
      no-repeat
    `,// atras del alert
        
    })
        const liMod= document.querySelector("#ddm").textContent=""
        carrito.splice(0,carrito.length)
        carritoProductos.splice(0,carritoProductos.length)
        
        localStorage.removeItem("Carrito")
    
    }
  })
    } else {
        Swal.fire({
            title:'The cart is empty!',
            text:``,
            icon: 'error',
            confirmButtonColor: 'darkred',
            color: 'darkred', // text
    background: '#191919', // alert backgorund
    backdrop: `
      rgba(black, 0.6)
      left top
      no-repeat
    `,// atras del alert
        })
    }


}




prod();
compra();
//total();