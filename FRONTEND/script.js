window.onload = async () => {
  productos = await obtenerProductos();
  mostrarProductos(productos)

}
let productos = [];
async function obtenerProductos() {
  let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";
  try {
    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    return datos.results;
  }
  catch (error) {
    console.error('error al cargar los productos')
  }

}

function mostrarProductos(productos) {
  const tablaProd = document.querySelector('#productTable');
  productos.forEach(producto => {

    tablaProd.innerHTML += `
  <tr>
    <td>${producto.title}</td>
    <td>${producto.permalink}</td>
    <td><img src="${producto.thumbnail}"></td>
    <td>${producto.price}</td>
    <td><button onclick="guardarProducto('${producto.id}')">Guardar</button></td>
    

  `
  });


}
async function guardarProducto(id) {
  const producto = productos.find((producto) => producto.id = id);
  const formData = new FormData();
  formData.append("id", producto.id);
  formData.append("titulo", producto.title);
  formData.append("link", producto.permalink);
  formData.append("imagen", producto.thumbnail);
  formData.append("precio", producto.price);
  const respuesta = await fetch("http://localhost/entrega/BACKEND/Controlador/Controlador.php", {
    method: "post",
    body: formData
  })
const datos = await respuesta.text();
console.log(datos)


}