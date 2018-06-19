$(function() {
    var Hotel = {};
    (function(app) {

        //Variable que tendra el contenido de rss
        var contenidoRss = [];
        var tituloContenidoRss = [];

        app.init = function() {
            app.bindings();
            var listado = app.crearLista();
            var menu = app.crearMenu();
        };


        app.bindings = function() {
             $(document).on("pagebeforeload pageload pageloadfailed pagebeforechange pagechange pagechangefailed pagebeforeshow pagebeforehide pageshow pagehide pagebeforecreate pagecreate pageinit pageremove updatelayout", function(e) {
		console.log(e.type);
             });
             
            /*Una vez que se inicia la página, pongo que la transición de defecto sea none, y de esa manera no hay parpadeo al cambiar de página*/
            $(document).on("pageinit", function() {
                $.mobile.defaultPageTransition = 'none';
            });

            $("#listado").on("pagebeforeshow", function(e) {
                var url = $(this).data("absUrl");
                var id_Portada = url.split("=")[1];
                if (id_Portada)
                    app.crearListado(id_Portada);
            });

            $("#fichas").on("pagebeforeshow", function(e) {
                var url = $(this).data("absUrl");
                var N_Apartamento = url.split("=")[1];
                if (N_Apartamento)
                    app.crearFichas(N_Apartamento);
            });

            $("#fichasMenu").on("pagebeforeshow", function(e) {
                var url = $(this).data("absUrl");
                var Fk_Portada = url.split("=")[1];
                if (Fk_Portada)
                    app.crearFichasMenu(Fk_Portada);
            });

            $("#fichaMenuAnexos").on("pagebeforeshow", function(e) {
                var url = $(this).data("absUrl");
                var Fk_Menu = url.split("=")[1];
                if (Fk_Menu) {
                    app.crearFichaMenuAnexos(Fk_Menu);
                }
            });

            $("#rss").on("pagebeforeshow", function(e) {
                app.crearRss();
            });

            $("#fichaRss").on("pagebeforeshow", function(e) {
                var url = $(this).data("absUrl");
                var Fk_Rss = url.split("=")[1];
                if (Fk_Rss) {
                    app.crearFichaRss(Fk_Rss);
                }
            });
        };

        app.crearLista = function() {

            $.getJSON("jSon/portada.json", function(data) {
                var contenidoLista = '<li data-role="list-divider">Menu de Navegación</li>';
                $.each(data, function(index, item) {
                    $('#lista').children().remove('li');
                    
                        contenidoLista += '<li><a href="#listado?id=' + item.id_Portada + '"><img src="images/pxt.png"' + item.FotoPortada + '"/><p>' + item.descripcion + '</p></a></li>';
					   
                });
                $('#lista').html(contenidoLista).listview('refresh');
            });
        };

        app.crearListado = function(id_Portada) {
            $.getJSON('jSon/alojamiento.json', function(data) {
                var listado = '';
                var valor_jugador = id_Portada;
                $.each(data, function(index, item) {
                    if (item.Fk_Portada == valor_jugador) {
                        listado += '<li data-role="list-divider">' + item.Titulo + '</li><li><a href="#fichas?id=' + item.id_Alojamiento + '"><img src="images/pxt.png" class="' + item.Fotolistview + '"/>\n\
                                    <p style="white-space:normal">' + ' ' + item.Descripcion + '</p></a></li>';
                    }
                });
                $('#listaHabitaciones').html(listado).listview('refresh');
            });
        };

        //Crear fichas de las habitaciones
        app.crearFichas = function(id) {
            var N_Apartamento = id;
            var servicios = '';
            $.getJSON('jSon/alojamiento.json', function(data) {
                $.each(data, function(index, item) {
                    if (item.id_Alojamiento == N_Apartamento) {

                        $('#tituloHabitacion').empty();
                        $('#tituloHabitacion').append(item.Titulo);

                        servicios += "<strong>" + item.Descripcion + "</strong><br><br><u>Servicios</u><br><br>";

                        $('#imagenFichaHabitacion').empty();
                        $('#imagenFichaHabitacion').append('<img src="images/pxt.png" class="' + item.FotoHabitacion + '"/>');
                    }
                });
            });
            //Ahora los servicios
            $.getJSON('jSon/lista.json', function(data) {
                $.each(data, function(index, item) {
                    if (item.Fk_Alojamiento == N_Apartamento) {//Si un item de el numero de apartamento que quiero mostrar, y corresponde con el Fk_Portada
                        servicios += item.descripcion + '<br>';
                    }
                });
                $('#servicios').empty();
                $('#servicios').append(servicios);
            });
        };

        /*Creo Fichas Menu*/
        app.crearFichasMenu = function(Fk_Portada) {
            var N_Portada = Fk_Portada;
            $.getJSON('jSon/alojamiento.json', function(data) {
                $.each(data, function(index, item) {
                    if (N_Portada == item.Fk_Portada && item.Fk_Portada != 1) {/*Si el numero de portada es el mismo*/

                        $('#page-titleFichasMenu').empty();
                        $('#page-titleFichasMenu').append(item.Titulo);/*Titulo en el header*/

                        $('#tituloMenu').empty();
                        $('#tituloMenu').append(item.Titulo);

                        $('#imagenFichaMenu').empty();
                        $('#imagenFichaMenu').append('<img src="' + item.FotoHabitacion + '"/>');
                    }
                });
            });
            /*Ahora la lista*/
            $.getJSON('jSon/lista.json', function(data) {
                var lista = '';
                $.each(data, function(index, item) {
                    if (item.Fk_Portada == N_Portada) {//Si el número de Portada coincide con el Fk_Portada
                        lista += item.descripcion + '</br>';
                    }
                });
                $('#descripcionMenu').empty();
                $('#descripcionMenu').html(lista).listview("refresh");
            });
        };

        /*Creo el menu de la izquierda que se encuentra en el index*/
        app.crearMenu = function() {
            $.getJSON("jSon/menu.json", function(data) {
                var contenidoLista = '<li data-role="list-divider" style="text-align: center">Bienvenidos<br>Menu de Recursos</li>';
                $.each(data, function(index, item) {
                    $('#menu').children().remove('li');

                    if (item.id_Menu == 4) {//Si es el conversor de monedas..
                        contenidoLista += '<li data-icon="false"><a href="#conversorMonedas">\n\
                            <p>' + item.descripcion + '</p></a></li>';
                    } else {
                        contenidoLista += '<li data-icon="false"><a href="#fichaMenuAnexos?id=' + item.id_Menu + '">\n\
                            <p>' + item.descripcion + '</p></a></li>';
                    }
                }
                );
                contenidoLista += "<li data-role='list-divider'>Recursos</li>"+
		    '<li data-icon="false"><a class="ui-link-inherit" href=""><p>Sitio Web</p></a></li>'+
                    '<li data-icon="false"><a class="ui-link-inherit" href=""><p>Restaurantes cercanos</p></a></li>'+
                    '<li data-icon="false"><a class="ui-link-inherit" href=""><p>Bares cercanos</p></a></li>'+
                    '<li data-icon="false"><a class="ui-link-inherit" href=""><p>Eventos nocturnos</p></a></li>';
		
                $('#listadoMenu').empty();
                $('#listadoMenu').html(contenidoLista).listview('refresh');
                $('#listadoMenu').trigger("updatelayout");
            });
        };

        //Crear la Ficha del Menu Anexos
        app.crearFichaMenuAnexos = function(id) {
            var Fk_Menu = id;
            $.getJSON('jSon/menu.json', function(data) {
                $.each(data, function(index, item) {
                    if (item.id_Menu == Fk_Menu) {

                        $('#tituloMenuAnexos').empty();
                        $('#tituloMenuAnexos').append(item.descripcion);

                        $('#descripcionMenuAnexos').empty();
                        $('#descripcionMenuAnexos').append(item.texto);

                    }
                });
                $("#boxscroll4").getNiceScroll().resize();
            });
        };

        //Boton que lleva a la pagina crear Rss
        app.btnCrearRss = function() {

            $.mobile.changePage("#rss", {transition: "none"});

        };

        //Creo la pagina principal de rss
        app.crearRss = function() {

            // ISCPA added search filter, home icon, updated CDN-Hosted links
            // forked from sumukh1's "forked: RSS Reader with jQuery Mobile" http://jsdo.it/sumukh1/4Ton
            /* configuration */
            maxLength = 20;//La mande a global, pero era local, var maxLength
            var articleList = '';
            /* writing HTML */

            for (var i = 1; i <= maxLength; i++) {
                articleList += '<li id="rss' + i + '" data-icon="ic1-flechaAzul"><a href="#fichaRss?id=' + i + '" id="link' + i + '">&nbsp;</a></li>';
            }

            $("#articleList").html(articleList).listview("refresh");

            app.segundaInstanciaRss();

        };

        app.crearFichaRss = function(id) {

            var i = id;//En vez de recorrer a todo con un bucle for, le asigno el valor de la i de la pag actual, con el id

            $("#tituloDescripcionRss").html(tituloContenidoRss[i - 1]);//Le agrego el titulo del contenido rss en la posición i - 1
            $("#descripcionFichaRss").html(contenidoRss[i - 1]);//Le agrego el contenido rss en la posición i - 1

        };

        app.segundaInstanciaRss = function() {

            /* JSONP */
            $(function() {
                // getOnlineFeed('http://www4.lehigh.edu/news/rss/LUnews_rss.xml');
                //getOnlineFeed('http://feeds.feedburner.com/HenningsBlog');
                getOnlineFeed('http://feeds.feedburner.com/ultlosandes');

                /*
                 getOnlineFeed('http://www.engadget.com/rss.xml');
                 getOnlineFeed('http://www.fremont.k12.ca.us/site/RSS.aspx?DomainID=1&ModuleInstanceID=4613&PageID=1');
                 getOnlineFeed('http://news.google.com/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=atom&topic=h');
                 getOnlineFeed('http://www.appbank.net/feed');
                 getOnlineFeed('http://japanese.engadget.com/rss.xml');
                 getOnlineFeed('http://www.bebit.co.jp/index.xml');  
                 getOnlineFeed('http://www.ntt.com/rss/release.rdf?link_id=ostop_service_rss');
                 getOnlineFeed('http://feeds.feedburner.com/gapsis');
                 getOnlineFeed('http://octoba.net/feed');
                 getOfflineFeed('google_news_jsonp.js');
                 */
            });
        };

        //Funciones de RSS
        listEntries = function(json) {//comenzaba con var
            if (!json.responseData.feed.entries)
                return false;
            /*$('#widgetTitle').text(json.responseData.feed.title);*/
            var articleLength = json.responseData.feed.entries.length;
            articleLength = (articleLength > maxLength) ? maxLength : articleLength;
            for (var i = 1; i <= articleLength; i++) {
                var entry = json.responseData.feed.entries[i - 1];
                $('#link' + i).text(entry.title);
                tituloContenidoRss.push(entry.title);
                //$('#openButton' + i).attr('href', entry.link);
                contenidoRss.push(entry.content);//Le agrego el contenido
            }
            if (articleLength < maxLength) {//Quita las páginas de más
                for (i = articleLength + 1; i <= maxLength; i++) {
                    $('#rss' + i).remove();
                    $('#article' + i).remove();
                }
            }
        };
        var getOnlineFeed = function(url) {
            var script = document.createElement('script');
            script.setAttribute('src', 'http://ajax.googleapis.com/ajax/services/feed/load?callback=listEntries&hl=ja&output=json-in-script&q='
                    + encodeURIComponent(url)
                    + '&v=1.0&num=' + maxLength);
            script.setAttribute('type', 'text/javascript');
            document.documentElement.firstChild.appendChild(script);
        };
        var getOfflineFeed = function(url) {
            var script = document.createElement('script');
            script.setAttribute('src', url);
            script.setAttribute('type', 'text/javascript');
            document.documentElement.firstChild.appendChild(script);
        };
        //Fin Funciones RSS
        /*
         app.crearGaleriaFotos = function() {
         $.getJSON("jSon/fotos.json", function(data) {
         var contenido = '';
         var fotos = '';
         $.each(data, function(index, item) {
         
         contenido += '<a href="#fotos' + (index + 1) + '" id="aFoto" data-rel="popup" data-position-to="window" data-transition="fade">' +
         '<img class="popphoto ' + item.foto + ' imgMini40" src="images/pxt.png"></a>';
         
         fotos += '<div id="fotos' + (index + 1) + '" data-role="popup" data-overlay-theme="a" data-theme="a" data-corners="false"><ul data-role="listview" data-inset="true" data-dividertheme="a">' +
         '<li data-role="list-divider" style="text-align: center" data-theme="a">' + item.titulo + ': </li>' +
         '</ul><a href="#galeriaFotos" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Cerrar</a>' +
         '<img class="popphoto ' + item.foto + '" src="images/pxt.png" style="max-height:512px;"></div>'
         ;
         
         });
         $('#galeriaFotos2').html(contenido);
         
         });
         };
         
         //Muestro la foto
         app.crearFoto = function(N_Foto) {
         
         //No la estoy usando.. pero debería de poder hacerlo.. capturando el link de la pagina.. a la que va..  
         $("#fotos").empty();
         $("#fotos").html(fotos[(N_Foto - 1)]);
         
         };
         */
        app.init();

    })(Hotel);
});