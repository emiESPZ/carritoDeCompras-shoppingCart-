
import { stockProductos } from "./objects.js"; 


let productosPizza = document.getElementById('Container');
let productosEmpanada = document.getElementById('Container');
let productosPostre = document.getElementById('Container');
let contenedorCarrito = document.getElementById('carrito');
let precioTotal = document.getElementById('precioTotal')




//-----------------------------------CREAR LOS ELEMENTOS (MENU DE PRODUCTOS)------------------------------------//



//----------PIZZAS---------------//
stockPizzas.forEach(producto =>{ 
 
 const div = document.createElement('div');
 div.className = 'mix category-1 menu-restaurant';
 div.setAttribute('data-myorder', '2');
 div.innerHTML = `
 <span class="clearfix"><a id="linkAgregar${producto.id}" class="menu-title"  href="#" data-meal-img="assets/img/restaurant/rib.jpg">${producto.nombre}</a>
 <span style="left: 166px; right: 44px;" class="menu-line"></span>
<span class="menu-price">$${producto.precio}</span>
</span>
<span class="menu-subtitle">${producto.ingredientes}</span>
 `  
productosPizza.appendChild(div)
let agregarLink = document.getElementById(`linkAgregar${producto.id}`);
agregarLink.addEventListener('click', (e)=> { agregarAlCarrito(producto.id); e.preventDefault(); })
}
  );


//----------EMPANADAS---------------//
stockEmpanadas.forEach(producto =>{ 
 
 const div = document.createElement('div')
 div.className = 'mix category-2 menu-restaurant';
 div.setAttribute('data-myorder', '2');
 div.innerHTML = `
 <span class="clearfix"><a id="linkAgregar${producto.id}" class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">${producto.nombre}</a>
 <span style="left: 166px; right: 44px;" class="menu-line"></span>
<span class="menu-price">$${producto.precio}</span>
</span>
<span class="menu-subtitle">${producto.ingredientes}</span>
 `  
productosEmpanada.appendChild(div)
let agregarLink = document.getElementById(`linkAgregar${producto.id}`);
agregarLink.addEventListener('click', (e)=> { agregarAlCarrito(producto.id); e.preventDefault();})
}
  );



//----------POSTRES---------------//
stockPostres.forEach(producto =>{ 
 
 const div = document.createElement('div')
 div.className = 'mix category-3 menu-restaurant';
 div.setAttribute('data-myorder', '2');
 div.innerHTML = `
 <span class="clearfix"><a id="linkAgregar${producto.id}" class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">${producto.nombre}</a>
 <span style="left: 166px; right: 44px;" class="menu-line"></span>
<span class="menu-price">$${producto.precio}</span>
</span>
<span class="menu-subtitle">${producto.ingredientes}</span>
 `  
productosPostre.appendChild(div)

let agregarLink = document.getElementById(`linkAgregar${producto.id}`);
agregarLink.addEventListener('click', (e)=> { agregarAlCarrito(producto.id); e.preventDefault();})
}
  );



//-----------------------------------CREAR CARRITO JS------------------------------------//  
 
function agregarAlCarrito (id){
  
  /* let agregarProducto = stockProductos.find(item => item.id === id); */
  let agregarProducto = stockPizzas.concat(stockEmpanadas).concat(stockPostres).find(item => item.id === id);


  let div = document.createElement('div');
  div.className="productoEnCarrito";
  div.innerHTML =`
  <p>${agregarProducto.nombre}</p>
  <p>Precio: $${agregarProducto.precio}</p>
  <button class="boton-eliminar"><i class="fa-regular fa-circle-xmark"></i>
    `
  
  contenedorCarrito.appendChild(div);
}








/* //---------------------CONFIRMAR PEDIDO-----------------------------------------//
function confirmarPedido(){
  let pregunta = prompt("Queres confirmar tu pedido?", "RESPONDE: Si o No.");
 
 if (pregunta.toUpperCase() == "NO"){
    alert (" REALIZA TU PEDIDO NUEVAMENTE.");
    document.getElementById("lista").innerHTML="";
  }else if (pregunta.toUpperCase() == "SI"){
    alert (`TU PEDIDO ES ${document.getElementById("lista").textContent}`);
  }else (alert ("Los datos ingresados son incorrectos, realiza tu pedido nuevamente"));

}

let botonCompra= document.getElementById("botonCompra");
botonCompra.addEventListener("click", confirmarPedido); */




