<?php
ini_set('display_errors', '0');
ini_set('display_startup_errors', '0');

ini_set('log_errors', '1');
ini_set('error_log', '../log/php_errors.log0');

class conn
{


    function connection()
    {

        $host = "localhost";
        $usuario = "root";
        $password = "";
        $bd = "mercadoLibre";
        $puerto = 3306;
        try {
            $mysql = new mysqli($host, $usuario, $password, $bd, $puerto);
            return $mysql;

        } catch (Exception $e) {
            echo 'Excepción capturada: ', $e->getMessage(), "\n";
        }


    }


}


?>