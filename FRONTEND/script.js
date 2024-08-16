
async function obtenerProductos() {
    let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144"; 
    try {
      let respuesta = await fetch(url); 
      let datos = await respuesta.json();
      return datos.results; 
    }
    catch (error){
      console.error('error al cargar los productos')
    }
   
}

async function imprimirProd(){
  const prod = await obtenerProductos();
  prod.forEach((element) => console.log(element));
  console.log(prod);
}

imprimirProd();

function mostrarProductos(){
let div = document.querySelector(div)
div.innerHTML = "ver"
let a=10;
let p=document.createElement("p");
div.oppendChild(p)
let btn =document.createElement("button");
div.oppendChild(btn)
btn.onclick=()=>{guardarProduct(a) }
}


function gurdarProducto(){



}