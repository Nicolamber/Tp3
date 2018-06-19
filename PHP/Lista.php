<!DOCTYPE html>
<html>
    <head>

        <title>
            Panel Administracion
        </title>

    </head>

    <body id="public">

        <?php
        include_once("conexion.php");

        $link = conectar_bd();

        $query = "select * from riyada.HotelAconcagua_lista";
        $result = mysql_query($query);

        if (!$result) {

            echo "No pudo ejecutarse satisfactoriamente la consulta ($sql) " .
            "en la BD: " . mysql_error();

            exit;
        }
        while ($rowEmp = mysql_fetch_array($result)) {
            $data[] = array_map('utf8_encode', $rowEmp);
        }

        $ar = fopen("../jSon/lista.json", "w") or die("Problemas en la creacion");

        fputs($ar, json_encode($data));

        echo '<div id="container" class="ltr">
    <h1 id="logo">
    </h1>
    <form id="form2" name="form2" class="wufoo topLabel page" autocomplete="off" enctype="" method="post" novalidateaction="">
    <header id="header" class="info">
    <h2>Listo!</h2>
    <div></div>
    </header>
    <ul>
    <li>Archivo JSON generado con exito</li>
    <li class="buttons">
    <div>
    <a href="../index.html"><input type="button" value="Volver" class="btTxt submit" name="reset"><a>
    </div>
    </li>
    </ul>
    </form>
    </div><!--container-->';
        ?>

    </body>
</html>