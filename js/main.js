
import { stockPizzas } from "./objects.js"; 
import { stockEmpanadas } from "./objects.js"; 
import { stockPostres } from "./objects.js"; 

let productosPizza = document.getElementById('Container');
let productosEmpanada = document.getElementById('Container');
let productosPostre = document.getElementById('Container');
let contenedorCarrito = document.getElementById('carrito');




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
agregarLink.addEventListener('click', ()=> { agregarAlCarrito(producto.id)})
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
agregarLink.addEventListener('click', ()=> { agregarAlCarrito(producto.id)})
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


//----------LINK PARA AGREGAR AL CARRITO-----------------------------//
let agregarLink = document.getElementById(`linkAgregar${producto.id}`);
agregarLink.addEventListener('click', ()=> { 
  agregarAlCarrito(producto.id)})
}
  );



//-----------------------------------CREAR LISTA ABAJO (CARRITO HTML)------------------------------------//  
const elegirProducto = document.querySelectorAll(".menu-title");

for (let i = 0; i < elegirProducto.length; i++) {
  elegirProducto[i].addEventListener("click", crearLista );
  
} 

function crearLista(e){
  e.preventDefault();
  if (e.target.classList.contains("menu-title")){
    let productoElegido = document.createElement('li');
    productoElegido.textContent = e.target.textContent
    let lista = document.getElementById("lista")
    lista.appendChild(productoElegido);
  }
}


//-----------------------------------CREAR CARRITO JS------------------------------------//  
 
function agregarAlCarrito (id){
  let agregarPizza = stockPizzas.find(item => item.id == id);
  let agregarEmpanada = stockEmpanadas.find(item => item.id == id);
  let agregarPostre = stockPostres.find(item => item.id == id);



  let div = document.createElement('div');
  div.className="productoEnCarrito";
  div.innerHTML =`
  <p>${agregarPizza.nombre}</p>
  <p>Precio: $${agregarPizza.precio}</p>
  <button class="boton-eliminar"><i class="fa-solid fa-rectangle-xmark"></i>
  <p>${agregarEmpanada.nombre}</p>
  <p>Precio: $${agregarPizza.precio}</p>
  <button class="boton-eliminar"><i class="fa-solid fa-rectangle-xmark"></i>
  <p>${agregarPostre.nombre}</p>
  <p>Precio: $${agregarPizza.precio}</p>
  <button class="boton-eliminar"><i class="fa-solid fa-rectangle-xmark"></i>
  
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




