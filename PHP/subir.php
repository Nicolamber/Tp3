<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 

    <!-- JqueryMobile CDN 1.3 -->
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.css" />
        <script src="http://code.jquery.com/jquery-1.9.1.js" type="text/javascript"></script>
        <script src="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.js" type="text/javascript"></script>
</head>
<body>
    <div data-role="page" id="subir">
            <div data-role="header" id="headerA" class="ui-bar-a" data-theme="b" data-position="fixed" data-tap-toggle="false">
                <img class="logoH" src="images/logoH.png"/>
                <!--<img class="logo" src="images/logo3.png" border="0" width="60" height="40" />
                <div class="page-title">LISTADO</div>
                <div class="page-subtitle">HABITACIONES</div>-->
                <a href="#index" data-rel="back" data-theme="b">Volver</a>
                <a href="#index" data-theme="b">Home</a>

            </div><!-- /header -->
        <!-- Separador -->
        <div class="separador"><h3>"El placer del Confort, la calidad del Servicio"</h3></div>
        <div data-role="content">

            <?php

            $error = 0;
            
            $cuarto = "";

            switch ($_POST["cuarto"]) {
                case("1"):
                    $cuarto = "Suite Ejecutiva";
                    break;
                case("2"):
                    $cuarto = "Suite Familiar";
                    break;
                case("3"):
                    $cuarto = "Apartamento 1 Ambiente";
                    break;
                case("4"):
                    $cuarto = "Apartamento 2 Ambientes";
                    break;
                default:
                    $cuarto = "error";
                    break;
            }
            
            if($cuarto != "error"){
                
            $mensaje = "Reserva Hotel San Lorenzo\n\nNombre: " . $_POST["nombre"] . "\nE-mail: " . $_POST["mail"] . "\nTelefono: " . $_POST["telefono"] . "\nPais: " . $_POST["pais"] . "\nProvincia: " . $_POST["provincia"] . "\nHabitación: ". $cuarto . "\nFecha:\nDesde" . $_POST["desdeDia"] . " - " . $_POST["desdeMes"] . " - " . $_POST["desdeAnio"] . " \nHasta: " . $_POST["hastaDia"] . " - " . $_POST["hastaMes"] . " - " . $_POST["hastaAnio"] . "\nAsunto: " . $_POST["asunto"] . "\nConsulta: " . $_POST["consulta"];

            //Enviar correo
            try{
                
            mail("matrixcmr@gmail.com,fernandoquintana84@hotmail.com", "San Lorenzo Apart", $mensaje);
            
            
            }  catch (Exception $e){
                
            }
            
            }else{
                
                $error = 1;
                
            }
            
            if ($error != 1) {
                
                echo "Su reserva ha sido solicitada, lo estaremos contactando brevemente. Saludos y Muchas Gracias.";
                
            } else {
                
                echo "Ha ocurrido un problema, por favor, intentelo nuevamente. Muchas Gracias.";
                
            }
            ?>
        </div>
    </div>
</body>