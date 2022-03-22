

let carritoStorage = [];
let carritoDeCompras = {};
let productos = document.getElementById("Container");

let precioTotal = document.getElementById("precioTotal");
let contenedorCarrito = document.getElementById("carrito");
let contadorCarrito = document.getElementById("contadorCarrito");
const templateFooter = document.getElementById ('template-footer').content
const templateCarrito = document.getElementById ('template-carrito').content
const fragment = document.createDocumentFragment()
const items = document.getElementById('items')
const footer = document.getElementById('footer')

document.addEventListener('DOMContentLoaded', ()=>{
fetchData()
if (localStorage.getItem('carritoDeCompras')){
  carritoDeCompras = JSON.parse(localStorage.getItem('carritoDeCompras'))
  pintarCarrito()
}

})
productos.addEventListener("click", e =>{
  e.preventDefault()
  agregarAlCarrito(e)
})
items.addEventListener('click', e => {
  btnAccion(e)
})
                    
const fetchData = async ()=>{
  try{
      const res = await fetch('js/productos.json')
      const data = await res.json()
      pintarProductos(data)
  
  }catch(error){
    console.log(error)
  }
}

const pintarProductos = data => {
  
    data.forEach(producto => {
      const {id, nombre, precio, ingredientes, category} = producto; 
      const div = document.createElement("div");
         div.className = `mix category${category} menu-restaurant`;
         div.style.display = "inline-block";
         div.setAttribute("data-myorder", "2");
         div.setAttribute("data-bound", "");
         div.innerHTML = `<span class="clearfix"><a id="${id}" class="menu-title"  href="#" data-meal-img="assets/img/restaurant/rib.jpg">${nombre}</a>
         <span style="left: 166px; right: 44px;" class="menu-line"></span>
         <span class="menu-price">${precio}</span>
         </span>
         ${ingredientes ? `<span class="menu-subtitle">${ingredientes}</span>` : `<span class="menu-subtitle">Ingredientes Desconocidos</span>`}`//<<<<<<<<<--------OPERADOR TERNARIO
    
      productos.appendChild(div);
      
   
    })
    
    }

const agregarAlCarrito = e => {
  
  if (e.target.classList.contains('menu-title')){
    setCarrito(e.target.parentElement)
  }
  e.stopPropagation()
}

const setCarrito = objeto => {

const producto ={
  id: objeto.querySelector('.menu-title').id,
  nombre: objeto.querySelector('.menu-title').textContent,
  precio: objeto.querySelector('.menu-price').textContent,
  cantidad: 1
}
if(carritoDeCompras.hasOwnProperty(producto.id)){
  producto.cantidad = carritoDeCompras[producto.id].cantidad + 1
}
carritoDeCompras[producto.id] = {...producto}
pintarCarrito()

}


const pintarCarrito = () => {
console.log(carritoDeCompras)
items.innerHTML = ''
Object.values(carritoDeCompras).forEach(producto => {
  templateCarrito.querySelector ('th').textContent = producto.id
  templateCarrito.querySelectorAll ('td')[0].textContent = producto.nombre
  templateCarrito.querySelectorAll ('td')[1].textContent = producto.cantidad
  templateCarrito.querySelector('.btn-info').dataset.id = producto.id
  templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
  templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

  const clone = templateCarrito.cloneNode(true)
  fragment.appendChild(clone)
})

items.appendChild(fragment)
pintarFooter()
localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
}

const pintarFooter = ()=>{
  footer.innerHTML = ""
  if(Object.keys(carritoDeCompras).length === 0){
    footer.innerHTML = ` <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
    return
  }
  const nCantidad = Object.values(carritoDeCompras).reduce((acc, {cantidad})=> acc + cantidad, 0)
  const nPrecio = Object.values(carritoDeCompras).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
  templateFooter.querySelectorAll('td')[0].textContent = nCantidad
  templateFooter.querySelectorAll('span')[0].textContent = nPrecio
  const clone = templateFooter.cloneNode(true)
  fragment.appendChild(clone)
  footer.appendChild(fragment)

  const btnVaciar = document.getElementById('vaciar-carrito')
  btnVaciar.addEventListener('click', ()=>{
    carritoDeCompras = {}
    pintarCarrito()
  })
}

const btnAccion = e => {
  if(e.target.classList.contains('btn-info')){
  const producto = carritoDeCompras[e.target.dataset.id]
  console.log(carritoDeCompras[e.target.dataset.id])
  producto.cantidad++ 
  carritoDeCompras[e.target.dataset.id] = {...producto}
  pintarCarrito()
  }

  if(e.target.classList.contains('btn-danger')){
  const producto = carritoDeCompras[e.target.dataset.id]
  console.log(carritoDeCompras[e.target.dataset.id])
  producto.cantidad--
  if(producto.cantidad===0) {
    delete carritoDeCompras[e.target.dataset.id]
    pintarCarrito()
  } 
  }
  e.stopPropagation()
}


//---------------------CONFIRMAR PEDIDO-----------------------------------------//
/* function confirmarPedido() {
  Swal.fire({
    title: "Querés confirmar tu pedido?",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `<h2 style='color:blue'>PEDIDO INGRESADO:</h2><br><br> ${contenedorCarrito.textContent}<br><br><h4 style='color:red'>El precio total es: $${precioTotal.textContent}</h4>`,
        confirmButtonText: "CONFIRMAR",
      }).then(() => {
        Swal.fire({ icon: "success", showConfirmButton: false, timer: 1500 });
      }); 
    } else if (result.isDenied) {
      Swal.fire("Realiza tu pedido nuevamente", "", "info");
    }
  });
}

let botonCompra = document.getElementById("botonCompra");
botonCompra.addEventListener("click", confirmarPedido);
 */






