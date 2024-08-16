<?php
require_once "../Modelo/ModeloDAO.php";
if ($_SERVER['request_method'] = "post") {
    registro();
}
function registro()
{
    $id = $_POST['id'];
    $titulo = $_POST['titulo'];
    $permalink = $_POST['permalink'];
    $imagen = $_POST['imagen'];
    $precio = $_POST['precio'];

    $respuesta = new Producto();
    $respuesta->registrarProducto($id, $titulo, $permalink, $imagen, $precio);
    json_encode($respuesta);
}
