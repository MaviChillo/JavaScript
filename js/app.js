
const contenedorProductos = document.querySelector('#contenedor-productos')

const contenedorCarrito = document.querySelector(`#carrito-contenedor`)

const botonVaciar = document.querySelector(`#vaciar-carrito`)

botonVaciar.addEventListener(`click`, () =>{
    carrito.length = 0
    actualizarCarrito()
})

const botonComprar = document.querySelector(`#buy`)

botonComprar.addEventListener(`click`, () =>{
    carrito.length = 0
    actualizarCarrito()
})

const contadorCarrito = document.querySelector(`#contadorCarrito`)

const precioTotal = document.querySelector(`#precioTotal`)

    const arrayProductos = []
    const carrito = []

    // document.addEventListener('DOMContentLoaded', () => {
    //     if (localStorage.getItem('carrito')){
    //         carrito = JSON.parse(localStorage.getItem('carrito'))
    //         actualizarCarrito()
    //     }
    // })

    fetch("data.json") 
    .then((res) => res.json())
    .then ((data) => {
        arrayProductos.push({id: 1, nombre: "Remera Red Cross", precio: 2500, cantidad: 1, img: `./img/merch/remes/reme1.png`},
        {id: 2, nombre: "Remera The Fighter", precio: 2500, cantidad: 1, img: `./img/merch/remes/reme2.png`},
        {id: 3, nombre: "Remera Album Art", precio: 2500, cantidad: 1, img: `./img/merch/remes/reme3.png`},
        {id: 4, nombre: "Remera Phantom Tomorrow", precio: 2500, cantidad: 1, img: `./img/merch/remes/reme4.png`},
        {id: 5, nombre: "Buzo Blessed and Cursed", precio: 5500, cantidad: 1, img: `./img/merch/buzos/buzo1.png`},
        {id: 6, nombre: "Buzo Phantom Tomorrow", precio: 5500, cantidad: 1, img: `./img/merch/buzos/buzo2.png`},
        {id: 7, nombre: "Buzo Scarlet Cross", precio: 5500, cantidad: 1, img: `./img/merch/buzos/buzo3.png`},
        {id: 8, nombre: "Buzo Wounds", precio: 5500, cantidad: 1, img: `./img/merch/buzos/buzo4.png`},
        {id: 9, nombre: "Vinilo Phantom Tomorrow", precio: 2600, cantidad: 1, img: `./img/merch/vin-cd/vinilo1.png`},
        {id: 10, nombre: "Cd Phantom Tomorrow", precio: 1200, cantidad: 1, img: `./img/merch/vin-cd/cd1.png`},
        {id: 11, nombre: "Cd Wretched and Divine", precio: 1000, cantidad: 1, img: `./img/merch/vin-cd/cd2.png`},
        {id: 12, nombre: "Vinilo Re-stitch These Wounds", precio: 2500, cantidad: 1, img: `./img/merch/vin-cd/vinilo2.png`},
        {id: 13, nombre: "Buttons Born Again", precio: 1000, cantidad: 1, img: `./img/merch/accesorios/buttons.png`},
        {id: 14, nombre: "Patches Phantom Tomorrow", precio: 2000, cantidad: 1, img: `./img/merch/accesorios/patches.png`},
        {id: 15, nombre: "Beanie Black Veil Brides", precio: 3000, cantidad: 1, img: `./img/merch/accesorios/beanie.png`},
        {id: 16, nombre: "Necklace Black Veil Brides", precio: 2000, cantidad: 1, img: `./img/merch/accesorios/collar.jpg`}
        )
    arrayProductos.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src=${producto.img} alt= "">
        <h3>${producto.nombre}</h3>
        <p class="precioProducto">Precio:$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Agregar al Carrito</button>
        `
        contenedorProductos.appendChild(div)
    
        const boton = document.querySelector(`#agregar${producto.id}`)
        
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
    })

    })

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe){
        const prod = carrito.map (prod => {
            prod.id === prodId && prod.cantidad++ 
        })
    } else {
        const item = arrayProductos.find ((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    actualizarCarrito()
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement(`div`)
        div.className = (`productoEnCarrito`)
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"<i>🗑</i></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem(`carrito`, JSON.stringify(carrito))
    });
    
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)

}






const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
})

// carrito




const buy =document.querySelector("#buy")

buy.onclick = function(){

    if (carrito != 0) {
        Swal.fire({
    title: 'Comprar?',
    text: "Estas seguro de que quieres continuar?",
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
    confirmButtonText: 'Si, comprar carrito',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Listo!',
        text: 'Gracias por comprar con nosotros!',
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

        botonComprar.addEventListener(`click`, () =>{
            carrito.length = 0
            actualizarCarrito()
        })

        //localStorage.removeItem("Carrito")

    }
  })
    } else {
        Swal.fire({
            title: 'El carrito esta vacio!',
            text: 'No puedes "Comprar Carrito" si este esta vacio.',
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



const delet = document.querySelector("#vaciar-carrito")

delet.onclick = function(){

    if (carrito != 0) {
        Swal.fire({
    title: 'Vaciar?',
    text: "Estas seguro de que quieres vaciar el carrito?",
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
    confirmButtonText: 'Si, vaciar carrito',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        
        title: 'Listo!',
        text: 'Has vaciado el carrito!',
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
        botonVaciar.addEventListener(`click`, () =>{
            carrito.length = 0
            actualizarCarrito()
        })
        
        //localStorage.removeItem("Carrito")
    
    }
  })
    } else {
        Swal.fire({
            title:'El carrito esta vacio!',
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