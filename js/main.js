
import { stockProductos } from "./objects.js"; 



let carritoStorage = [];
let carritoDeCompras=[];
let productos= document.getElementById('Container');
let precioTotal = document.getElementById('precioTotal');
let contenedorCarrito = document.getElementById('carrito'); 
let contadorCarrito = document.getElementById('contadorCarrito'); 




//-----------------------------------CREAR LOS ELEMENTOS (MENU DE PRODUCTOS)------------------------------------//



//----------PIZZAS---------------//
if (localStorage.getItem("carrito")){
  carritoStorage = JSON.parse(localStorage.getItem("carrito"))
  carritoStorage.map((producto) =>{
    
  })
}
stockProductos.forEach(producto =>{ 
 
 const div = document.createElement('div');
 div.className = 'mix category-1 menu-restaurant';
 div.setAttribute('data-myorder', '2');
 div.innerHTML = `<span class="clearfix"><a id="linkAgregar${producto.id}" class="menu-title"  href="#" data-meal-img="assets/img/restaurant/rib.jpg">${producto.nombre}</a>
 <span style="left: 166px; right: 44px;" class="menu-line"></span>
<span class="menu-price">$${producto.precio}</span>
</span>
<span class="menu-subtitle">${producto.ingredientes}</span>`  


productos.appendChild(div)
let agregarLink = document.getElementById(`linkAgregar${producto.id}`);
agregarLink.addEventListener('click', (e)=> { agregarAlCarrito(producto.id); e.preventDefault(); actualizarCarrito()})
}
  );


//-----------------------------------CREAR CARRITO JS------------------------------------//  
 
function agregarAlCarrito (id){

  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("carrito")) {
      carritoDeCompras = JSON.parse(localStorage.getItem("carrito"))
      actualizarCarrito(carritoDeCompras);
    }
  })
  
  let agregarProducto = stockProductos.find(item => item.id === id);


carritoDeCompras.push(agregarProducto)

  let div = document.createElement('div');
  div.className="productoEnCarrito";
  div.innerHTML =`
  <p style="display:inline"><b>${agregarProducto.nombre}</b></p>
  <p>Cantidad: ${agregarProducto.cantidad}</p>
  <p style="display:inline">Precio: $${agregarProducto.precio}</p><button id="btnEliminar${agregarProducto.id}" style="border:none; background:none;" class="boton-eliminar"><img style="width:25px" src="../img/icons8-basura.svg"></button></br></br>
    `
  
  contenedorCarrito.appendChild(div);
  let btnEliminar= document.getElementById(`btnEliminar${agregarProducto.id}`)
  btnEliminar.addEventListener('click', ()=>{
    btnEliminar.parentElement.remove()
    carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != agregarProducto.id)
    actualizarCarrito()
  })
}



function actualizarCarrito(){

contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=>acc + el.cantidad,0);
precioTotal.innerText = carritoDeCompras.reduce((acc, el)=> acc + (el.precio * el.cantidad),0);
localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}




//---------------------CONFIRMAR PEDIDO-----------------------------------------//
function confirmarPedido(){
  let pregunta = prompt("Queres confirmar tu pedido?", "RESPONDE: Si o No.");
 
 if (pregunta.toUpperCase() == "NO"){
    alert (" REALIZA TU PEDIDO NUEVAMENTE.");
    document.getElementById("carrito").innerHTML="";
    document.getElementById("precioTotal").innerHTML="";
  }else if (pregunta.toUpperCase() == "SI"){
    alert (`TU PEDIDO ES ${contenedorCarrito.textContent}`);
  }else (alert ("Los datos ingresados son incorrectos, realiza tu pedido nuevamente"));

}

let botonCompra= document.getElementById("botonCompra");
botonCompra.addEventListener("click", confirmarPedido);




