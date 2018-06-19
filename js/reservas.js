$(function() {

    var Reservas = {};

    (function(app) {

        app.init = function() {
            app.bindings();
        };

        app.bindings = function() {

            /************************ RESERVAS ****************************/
            //Agrego una regla al jquery.validate, para poder validar el Select
            /*$.validator.addMethod("valueNotEquals", function(value, elemen, arg) {
             return arg != value;
             }, "Value must not equal arg.");*/

            $("#formReserva").validate({//Funcion de jquery.validate
                rules: {//Estas son las reglas aplicadas a los campos del form
                    nombre: {//Nombre del id
                        required: true, //Es obligatorio
                        minlength: 2//Longitud minima
                    },
                    mail: {//Nombre del id
                        required: true, //Es obligatorio
                        email: true//Lo que ingresa debe ser un email
                    },
                    telefono: {//Nombre del id
                        required: true //Es obligatorio
                                //phoneUS: true//Lo que ingresa debe ser un número//lo saque porque tiraba error en consola
                    },
                    provincia: {//Nombre del id
                        required: true, //Es obligatorio
                        minlength: 2//Longitud minima de dos
                    }/*,
                     desdeDia: {
                     valueNotEquals: "0"
                     },
                     desdeMes: {
                     valueNotEquals: "0"
                     },
                     desdeAnio: {
                     valueNotEquals: "0"
                     },
                     hastaDia: {
                     valueNotEquals: "0"
                     },
                     hastaMes: {
                     valueNotEquals: "0"
                     },
                     hastaAnio: {
                     valueNotEquals: "0"
                     }*/
                },
                messages: {//Estos son los mensajes mostrados para las reglas
                    nombre: {//Nombre del id
                        required: "Escribe tu nombre", //En caso de que no lo haya ingresado muestra
                        minlenght: "Nombre erróneo", //En caso de que no se cumpla la longitud minima muestra
                        error: "Nombre erróneo"//En caso de error muestra                  
                    },
                    mail: {
                        required: "Escribe tu mail",
                        error: "Mail erróneo"
                    },
                    telefono: {
                        required: "Escribe tu telefono",
                        error: "Telefono erróneo"
                    },
                    provincia: {
                        required: "Escribe tu provincia",
                        error: "Provincia errónea"
                    }/*,
                     desdeDia: {
                     valueNotEquals: ""//Hasta ponerlo fuera, del select, no poner nada
                     },
                     desdeMes: {
                     valueNotEquals: ""
                     },
                     desdeAnio: {
                     valueNotEquals: ""
                     },
                     hastaDia: {
                     valueNotEquals: ""
                     },
                     hastaMes: {
                     valueNotEquals: ""
                     },
                     hastaAnio: {
                     valueNotEquals: ""
                     }*/
                }
            });
            //Luego de mostrada la página, se crean las fechas
            $("#reservas").on("pagebeforeshow", function(e) {
                app.crearFechas();
            });
            //Cuando se cambia el dia
            $("#desdeDia").on("change", function() {
                app.cambioDiaDesde();
            });
            //Cuando se cambia el mes
            $("#desdeMes").on("change", function() {
                app.controlarDiaDesde();
            });
            //Cuando se cambia el año
            $("#desdeAnio").on("change", function() {
                app.controlarDiaDesde();
            });
            $("#hastaDia").on("click", function() {//Si utilizo el change en esta etapa, torna a infinito
                app.controlarCambioHastaFecha();
            });
            $("#hastaMes").on("click", function() {
                app.controlarCambioHastaFecha();
            });
            $("#hastaAnio").on("click", function() {
                app.controlarCambioHastaFecha();
            });

            /************************* FIN RESERVAS ************************/

        };

        /* ************************* VALIDACIONES RESERVAS - FECHA ******************************* */

        app.crearFechas = function() {
            //Agrego los meses
            app.crearMes();
            //Agrego los años
            app.crearAnios();
            //Agrego los dias
            app.crearDias();
        };

        app.crearMes = function() {

            //Meses
            var contenido = "<option value='0'>Mes</option>";
            var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            //Los agrego al contenido
            $.each(meses, function(index, valor) {
                //En el elemento correspondiente, segun su id, agrego el valor
                contenido += "<option value='" + index + "'>" + valor + "</option>";

            });
            //Los inserto en el html
            $("#desdeMes").html(contenido).selectmenu("refresh");
            $("#hastaMes").html(contenido).selectmenu("refresh");

        };

        app.crearAnios = function() {

            //Debería de recibir el año actual por json
            var anio = app.anioActual();
            var anios = "<option value='0'>Año</option>";
            //Pongo en un array 4 años
            for (i = 0; i < 4; i++) {
                //En value le sumo 1 al valor de i, porque el valor 0 ya existe
                //En el texto, comienzo desde el anio actual sumandole 0 al principio
                anios += "<option value='" + (anio + i) + "'>" + (anio + i) + "</option>";
            }
            //Los inserto en el html
            $("#desdeAnio").html(anios).selectmenu("refresh");
            $("#hastaAnio").html(anios).selectmenu("refresh");

        };

        app.crearDias = function() {

            //Mes y anio actual
            var anio = app.anioActual();
            var mes = app.mesActual();

            var insertar = app.insertarDia(mes, anio);

            //Los inserto en el html
            $("#desdeDia").html(insertar).selectmenu("refresh");
            $("#hastaDia").html(insertar).selectmenu("refresh");

        };

        //Calculo el dia en base al mes y el año
        app.insertarDia = function(mes, anio) {

            //Necesito el día actual y el mes actual para calcular la cantidad de dias
            var cantidadDias = app.calcularDias(mes, anio);

            return app.generarDias(cantidadDias);

        };

        app.anioActual = function() {
            //Anio actual
            return (Number(new Date().getFullYear()));
        };

        app.mesActual = function() {
            //Mes actual
            return (Number(new Date().getMonth()) + 1);//Comienza en cero
        };

        app.calcularDias = function(mes, anio) {

            var dias = 0;

            if (mes === 2) {

                if (anio % 4 === 0) {

                    dias = 29;

                } else {

                    dias = 28;

                }

            } else {

                if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {

                    dias = 31;

                } else {

                    dias = 30;

                }

            }

            return dias;

        };

        app.generarDias = function(cantidadDias) {

            var dias = "<option value='0'>Día</option>";

            //Genero los dias
            for (i = 1; i <= cantidadDias; i++) {

                dias += "<option value='" + (i) + "'>" + (i) + "</option>";

            }

            return dias;

        };

        app.cambioDiaDesde = function() {

            //Obtengo el valor del dia seleccionado
            var dia = app.getValor("#desdeDia");

            //Y lo seteo en hastaDia
            app.setOptionSelect("#hastaDia", (dia - 1));//Seteo el dia seleccionado

        };

        app.controlarDiaDesde = function() {

            //Obtengo el valor del mes, anio y el dia seleccionados
            var desdeMes = app.getValor("#desdeMes");
            var desdeAnio = app.getValor("#desdeAnio");
            var desdeDia = app.getValor("#desdeDia");

            //Obtengo la lista de dias que tengo que inservar en base al mes y el anio
            var insertar = app.insertarDia(desdeMes, desdeAnio);

            //Vacio la lista
            $("#desdeDia").empty();
            $("#desdeDia").html(insertar).selectmenu("refresh");//La seteo

            //Si el dia que tenia, esta dentro de la nueva cantidad de dias, vuelvo a setearlo
            if (desdeDia <= app.selectCantidad("#desdeDia")) {
                app.setOptionSelect("#desdeDia", (desdeDia - 1));//Seteo la opcion 1 del dia
            } else {//Sino, dado que no entra en el nuevo rango de dias del mes
                app.setOptionSelect("#desdeDia", 1);//Seteo la opcion 1 del dia
                //Y seteo desdeDia a 1, para poner mandarlo bien a controlarHastaFecha()
                desdeDia = 1;
            }

            //Una vez asigne la fecha en desdeFecha, tengo que hacerlo tambien para hastaFecha
            app.asignarHastaFecha(insertar, desdeDia, desdeMes, desdeAnio);
        };

        app.asignarHastaFecha = function(insertar, dia, mes, anio) {
            //Vacio la lista
            $("#hastaDia").empty();
            $("#hastaDia").html(insertar).selectmenu("refresh");//Seteo la nueva cantidad de dias
            app.setOptionSelect("#hastaDia", null);//Seteo el dia seleccionado
            app.setOptionSelect("#hastaDia", (dia - 1));//Seteo el dia seleccionado
            app.setOptionSelect("#hastaMes", (mes));//Seteo el mes seleccionado
            app.setOptionSelectValue("#hastaAnio", (anio - 1));//Seteo el anio seleccionado

        };

        app.controlarCambioHastaFecha = function() {

            //Obtengo el valor del mes, anio y el dia seleccionados en desde Fecha
            var desdeMes = app.getValor("#desdeMes");
            var desdeAnio = app.getValor("#desdeAnio");
            var desdeDia = app.getValor("#desdeDia");
            //Obtengo el valor del mes, anio y el dia seleccionados en hasta Fecha
            var hastaMes = app.getValor("#hastaMes");
            var hastaAnio = app.getValor("#hastaAnio");
            var hastaDia = app.getValor("#hastaDia");

            var dia = hastaDia;
            var mes = hastaMes;
            var anio = hastaAnio;
            //Si el año seleccionado es menor que en el anio de comienzo
            if (hastaAnio < desdeAnio) {

                anio = desdeAnio;

            }
            //Si el mes seleccionado es menor que el mes de comienzo, y el anio no es mayor que el anio de comienzo
            if (hastaMes < desdeMes && !(anio > desdeAnio)) {

                mes = desdeMes;

            }
            //Si el dia seleccionado es menor que el dia de comienzo, y el mes o año son mayores que sus respectivos de comienzo
            if (hastaDia < desdeDia && !(mes > desdeMes || anio > desdeAnio)) {

                dia = desdeDia;

            }
            //Obtengo la lista de dias que tengo que inservar en base al mes y el anio
            var insertar = app.insertarDia(mes, anio);
            //Y los inserto
            app.asignarHastaFecha(insertar, dia, mes, anio);
        };

        app.getValor = function(id) {
            return Number($(id).val()) + 1;
        };

        app.setOptionSelect = function(id, n) {
            //Cambio el item seleccionado en base al lugar del option
            //$(id + ' option').eq(n).attr('selected', 'selected').change(); para version 1.7.1

            var myselect = $(id);
            myselect[0].selectedIndex = n;
            myselect.selectmenu("refresh");

        };

        app.setOptionSelectValue = function(id, n) {
            //Cambio el item seleccionado, en base a su value
            //var value = "[value=" + n + "]";//Notar que el option tiene que quedar pegado al value 
            //$(id + ' option' + value).attr('selected', 'selected').change();

            // Grab a select field
            var selected = $(id);

            // Select the relevant option, de-select any others
            selected.val(n).attr('selected', true).siblings('option').removeAttr('selected');

            // jQM refresh
            selected.selectmenu("refresh", true);


        };

        app.selectCantidad = function(id) {
            return $(id + ' option').length;
        };

        /* ************************* FIN VALIDACIONES RESERVAS - FECHA **************************** */


        app.init();

    })(Reservas);
});