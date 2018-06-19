<?php
function conectar_bd() { //Funcion para conectar a MySql, le paso Localhost, user, pass y base de datos
    $conexion = @mysql_connect("mysql4.brinkster.com", "riyada", "ra2408195611") or die("Fallo en el establecimiento de la conexión !");
    @mysql_select_db("riyada") or die("No se encuentra la Base de Datos !");
    return $conexion;
}

?>

