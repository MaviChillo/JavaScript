
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
    let carrito = []


    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('carrito')){
            carrito = JSON.parse(localStorage.getItem('carrito'))
            actualizarCarrito()
        }
    })



    fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src=${prod.img} alt= "">
        <h3>${prod.nombre}</h3>
        <p class="precioProducto">Precio:$ ${prod.precio}</p>
        <button id="agregar${prod.id}" class="boton-agregar">Agregar al Carrito</button>
        `
        contenedorProductos.appendChild(div)
        arrayProductos.push(prod)

    
        const boton = document.querySelector(`#agregar${prod.id}`)
        
        boton.addEventListener('click', () => {
            agregarAlCarrito(prod.id)
    });
  });
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

const sumarProd = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    item.cantidad++;
    actualizarCarrito();

  };

const restarProd = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    if (item.cantidad > 1) {
      item.cantidad--;
      actualizarCarrito();
    }
  };

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement(`div`)
        div.className = (`productoEnCarrito`)
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <button onclick = "sumarProd(${prod.id})" class="boton-sumar"<i>+</i></button>
        <p><span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "restarProd(${prod.id})" class="boton-restar"<i>-</i></button>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"<i>🗑</i></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem(`carrito`, JSON.stringify(carrito))
    });
    
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito
    .map((item) => item.precio * item.cantidad)
    .reduce((prev, current) => prev + current, 0);

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


const buy =document.querySelector("#buy")
const usuario = []
buy.onclick = function(){

    // if (carrito != 0) {
        Swal.fire({
    title: 'Comprar?',
    text: "Estas seguro de que quieres continuar?",
    icon: 'question',
    showCancelButton: true,
    color: 'darkred', 
    background: '#191919', 
    backdrop: `
      rgba(black, 0.6)
      left top
      no-repeat
    `,
    confirmButtonColor: 'darkgreen',
    cancelButtonColor: 'darkred',
    confirmButtonText: 'Si, comprar carrito',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {

        Swal.fire({
            title: 'Completa el formulario para completar la compra!',
            html:
              '<b>Nombre:</b>' +
              '<br/>' +
              '<input id="name"></input>' +
              '<br/>' +
              '<b>Email:</b>' +
              '<br/>' +
              '<input id="email"></input>' +
              '<br/>' +
              '<b>Contraseña:</b>' +
              '<br/>' +
              '<input id="pass"></input>',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              'Confirmar compra',
            cancelButtonText:
              'Cancelar compra',
              confirmButtonColor: 'darkgreen',
            cancelButtonColor: 'darkred',
            color: 'darkred',
            background: '#191919',
    backdrop: `
      rgba(black, 0.6)
      left top
      no-repeat
    `,
    preConfirm: () => {
        const name = Swal.getPopup().querySelector(`#name`).value
        const email = Swal.getPopup().querySelector(`#email`).value
        const pass = Swal.getPopup().querySelector(`#pass`).value
        usuario.push(name, email, pass)
        localStorage.setItem(`usuario`, JSON.stringify(usuario))
        if (!name || !email || !pass) {
          Swal.showValidationMessage(`Porfavor completar los campos correctamente`)
        }
        return { nombre: name, email: email , contraseña: pass}
    }
        }).then((result) => {
            if (result.isConfirmed) {
        
            Swal.fire({
        title: 'Listo!',
        text: `Gracias por comprar con nosotros ${Swal.getPopup().querySelector(`#name`).value}!`,
        icon: 'success',
        confirmButtonColor: 'darkred',
        color: 'darkred', 
    background: '#191919',
    backdrop: `
      rgba(black, 0.6)
      left top
      no-repeat
    `,
        })

        botonComprar.addEventListener(`click`, () =>{
            carrito.length = 0
            actualizarCarrito()
        })

        localStorage.removeItem(`carrito`)
        }

    })
    
}
})

}




const delet = document.querySelector("#vaciar-carrito")

delet.onclick = function(){

        Swal.fire({
    title: 'Vaciar?',
    text: "Estas seguro de que quieres vaciar el carrito?",
    icon: 'warning',
    color: 'darkred', 
    background: '#191919', 
    backdrop: `
      rgba(black,0.6)
      left top
      no-repeat
    `,
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
        color: 'darkred', 
    background: '#191919', 
    backdrop: `
      rgba(black, 0.6)
      left top
      no-repeat
    `,
        
    })
        botonVaciar.addEventListener(`click`, () =>{
            carrito.length = 0
            actualizarCarrito()
        })
        
        localStorage.removeItem(`carrito`)
    
    }
  })
    }
