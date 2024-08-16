<?php
require_once "../Conexion/Conexion.php";
class Producto
{
    function registrarProducto($id, $titulo, $permalink, $imagen, $precio)
    {
        $conexion = new conn;
        $conn = $conexion->connection();
        $sql = "INSERT INTO Productos VALUES('$id','$titulo','$permalink','$imagen','$precio');";
        $respuesta = $conn->query($sql);
        if ($respuesta == false) {
            if ($conn->errno == 1060) {
                $respuesta = $this->actualizarProducto($id, $titulo, $permalink, $imagen, $precio);
                if($respuesta->num_rows )
                return $respuesta;
            } else {
                echo "Se produjo un error inesperado";
            }
        }
    }

    function actualizarProducto($id, $titulo, $permalink, $imagen, $precio)
    {
        $conexion = new conn;
        $conn = $conexion->connection();
        $sql = "UPDATE Productos SET 'titulo'='$titulo','permalink'='$permalink','imagen'='$imagen','precio'='$precio'  WHERE 'id'='$id'";
        $respuesta = $conn->query($sql);
        return $respuesta;
    }
}
