/*Table structure for table `alojamiento` */

DROP TABLE IF EXISTS `HotelAconcagua_alojamiento`;

CREATE TABLE `HotelAconcagua_alojamiento` (
  `id_Alojamiento` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Descripcion` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Fotolistview` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `FotoHabitacion` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Fk_Portada` int(11) DEFAULT NULL,
  `capacidad` int(2) DEFAULT NULL,
  `ambientes` int(2) DEFAULT NULL,
  PRIMARY KEY (`id_Alojamiento`),
  KEY `Fk_Portada` (`Fk_Portada`),
  CONSTRAINT `alojamiento_ibfk_1` FOREIGN KEY (`Fk_Portada`) REFERENCES `portada` (`id_Portada`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `alojamiento` */

insert  into `HotelAconcagua_alojamiento`(`id_Alojamiento`,`Titulo`,`Descripcion`,`Fotolistview`,`FotoHabitacion`,`Fk_Portada`,`capacidad`,`ambientes`) values (1,'Suite Ejecutiva','Amplias Suites confortables. Triunfa con tus negocios, nosotros lo logramos.','lwH-0','ftH-0',1,2,2),(2,'Suite Familiar','Acorde al tipo de Familia. Usted, y su familia siempre juntos.','lwH-1','ftH-1',1,4,2),(3,'Apartamento 1 ambiente','Todo lo que busca para vivir una vida de dos, en un mismo lugar.','lwH-2','ftH-2',1,2,1),(4,'Apartamento 2 ambientes','Aptos para pasarla con amigos, y en pareja. Su lugar es aquí.','lwH-3','ftH-3',1,5,2),(5,'Servicios','Contamos con una amplia gama de servicios a tu disposición.','','images/fotoServicios.jpg',3,0,0),(6,'Fotos','Galería de Fotos','','',2,0,0),(7,'Tarifa','Todos nuestros precios a tu disposición.','','images/fotoTarifas.jpg',4,0,0);

/*Table structure for table `fotos` */

DROP TABLE IF EXISTS `HotelAconcagua_fotos`;

CREATE TABLE `HotelAconcagua_fotos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `foto` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `fotos` */

insert  into `HotelAconcagua_fotos`(`id`,`titulo`,`foto`) values (1,'Suite Ejecutiva','gF-0'),(2,'Suite Familiar','gF-1'),(3,'Apartamento 1 Ambiente','gF-2'),(4,'Apartamento 2 Ambientes','gF-3');

/*Table structure for table `lista` */

DROP TABLE IF EXISTS `HotelAconcagua_lista`;

CREATE TABLE `HotelAconcagua_lista` (
  `id_Lista` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Fk_Alojamiento` int(11) DEFAULT NULL,
  `Fk_Portada` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_Lista`),
  KEY `FK_lista` (`Fk_Portada`),
  CONSTRAINT `FK_lista` FOREIGN KEY (`Fk_Portada`) REFERENCES `portada` (`id_Portada`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `lista` */

insert  into `HotelAconcagua_lista`(`id_Lista`,`descripcion`,`Fk_Alojamiento`,`Fk_Portada`) values (1,'Climatización Frío - Calor (Sistema Fan Coil)',1,1),(2,'Televisión por cable',1,1),(3,'Sommier Queen Size',1,1),(4,'Heladera',1,1),(5,'Microondas',1,1),(6,'Frigobar las 24 horas',1,1),(7,'Climatización Frío - Calor (Sistema Fan Coil)',2,1),(8,'Televisión por cable',2,1),(9,'Heladera',2,1),(10,'Microondas',2,1),(11,'Teléfono',2,1),(12,'Servicio de mucama',2,1),(13,'Secador de pelo',2,1),(14,'Internet Conexión WIFI',2,1),(15,'Estacionamiento',2,1),(16,'Teléfono',1,1),(17,'Servicio de mucama',1,1),(18,'Secador de pelo',1,1),(19,'Servicio de lavandería',1,1),(20,'Internet Conexión WIFI',1,1),(21,'Caja de Seguridad',1,1),(22,'Estacionamiento',1,1),(23,'Aire Acondicionado Frío - Calor (Split)',3,1),(24,'Televisión por cable',3,1),(25,'Confortable cama de Roble',3,1),(26,'Kitchenette equipadas (Cocina tipo anafe)',3,1),(27,'Frigobar las 24 horas',3,1),(28,'Teléfono',3,1),(29,'Servicio de mucama',3,1),(30,'Servicio de lavandería',3,1),(31,'Internet Conexión WIFI',3,1),(32,'Caja de Seguridad',3,1),(33,'Estacionamiento',3,1),(34,'Aire Acondicionado Frío - Calor (Split)',4,1),(35,'Televisión por cable',4,1),(36,'3 confortables camas de Roble',4,1),(37,'2 Kitchenette equipadas (Cocina tipo anafe)',4,1),(38,'Frigobar las 24 horas',4,1),(39,'Teléfono',4,1),(40,'Servicio de mucama',4,1),(41,'Servicio de lavandería',4,1),(42,'Internet Conexión WIFI',4,1),(43,'Caja de Seguridad',4,1),(44,'Estacionamiento',4,1),(45,'Desayuno Continental',5,3),(46,'T.V. por cable',5,3),(47,'Servicio de Lavandería',5,3),(48,'Servicio de Mucama',5,3),(49,'Cafetería / Buffet',5,3),(50,'Depósito de equipaje',5,3),(51,'Gimnacio',5,3),(52,'Sauna',5,3),(53,'Masajes',5,3),(54,'Piscina',5,3),(55,'Solarium',5,3),(56,'Ducha escocesa',5,3),(57,'Información turística',5,3),(58,'Bodegas',5,3),(59,'Excursiones',5,3),(60,'City Tour',5,3),(61,'Alta Montaña',5,3),(62,'Caminos del Vino',5,3),(63,'Villavicencio',5,3),(64,'Télefono DDN / DDI',5,3),(65,'Fax',5,3),(66,'Correo electrónico',5,3),(67,'Sala de Reuniones',5,3),(68,'Oficinas equipadas',5,3),(69,'Internet',5,3),(70,'Video casetera',5,3);

/*Table structure for table `menu` */

DROP TABLE IF EXISTS `HotelAconcagua_menu`;

CREATE TABLE `HotelAconcagua_menu` (
  `id_Menu` int(11) NOT NULL AUTO_INCREMENT,
  `FotoMenu` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `texto` varchar(7200) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_Menu`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `menu` */

insert  into `HotelAconcagua_menu`(`id_Menu`,`FotoMenu`,`descripcion`,`texto`) values (1,'lwM-0','Mendoza','La mejor ubicación, cercano a:<br>Plaza Italia.<br>Plaza Independencia.<br>Area peatonal y comercial.<br>Centro de Congreso y Exposiciones.<br>Restaurantes del mejor nivel.<br>Bancos.<br>Dirección de Turismo.<br>Parque General San Martín.<br>Palacio Municipal.<br>Centro Cívico.<br>Teatro Independencia.<br>Museo de Arte Moderno.<br>Plaza España.<br>Plaza Chile.<br>Plaza San Martín.<br><br>Usted puede visitar:<br>Zoológico.<br>Cerro de la Gloria.<br>Anfiteatro Frank Romero Day.<br>Acuario.<br>Serpentario.<br>Area Fundacional, plazas y paseos.<br><br>Centros de ski:<br>Las Leñas.<br>Penitentes.<br>Vallecitos.<br>Alta montaña:<br>Cristo Redentor.<br>Aconcagua.<br>Puente del Inca.<br>Cacheuta.<br>Potrerillos.<br>Cañon del Atuel.<br>Villavicencio.<br>Ciudad y alrededores.<br>City Nocturno.<br>Bodegas y Viñedos.<br>Caminos del Vino con almuerzo.<br>Picadas de las bodegas.<br>Termas de Cacheuta.<br><br>Turismo aventura:<br>Rafting.<br>Cabalgatas.<br>Rappel.<br>Kayak.<br>Canopy.<br>Tirolesa.'),(2,'lwM-1','Promociones Especiales','SUPER DESCUENTO OTOÑO<br>(VALIDA DEL 02 ABRIL AL 30 DE JUNIO)<br><br>PRECIOS SUPER ESPECIALES<br><br>PRECIOS LISTA<br><br>Standart (Apartamento 2 personas): $ 488<br>Superior (Suite 2 personas): $ 554<br>Apartamento Fliar   (4 personas): $ 775<br><br>En Efectivo<br><br> Standart (Apartamento 2 personas): $ 340<br>Superior (Suite 2 personas): $ 390<br>Apartamento Fliar   (4 personas):  $ 540<br><br>Tarifas Solo por pago contado efectivo con IVA incluido, no comisionables.  Las tarifas están expresadas en pesos argentinos por noche por habitación.'),(3,'lwM-2','Cajeros Automáticos','Banca Nazionale del Lavoro S.A.<br> Gutierrez 102<br> Mendoza, Mendoza<br> Red Link (01023)<br><br> Banca Nazionale del Lavoro S.A.<br> Olegario Andrade 540<br> Mendoza, Mendoza<br> Red Link (01134)<br><br> Banca Nazionale del Lavoro S.A.<br> Colón 459<br> Mendoza, Mendoza<br> Red Link (01136)<br><br> Banca Nazionale del Lavoro S.A.<br> Gutierrez 102<br> Mendoza, Mendoza<br> Red Link (01163)<br><br> Banco Columbia S.A.<br> San Martin 1273<br> Mendoza, Mendoza<br> Red Link (00788)<br><br> Banco Credicoop Coop. Ltdo.<br> 9 de Julio 1228<br> Mendoza, Mendoza<br> Red Link (811531)<br><br> Banco Credicoop Coop. Ltdo.<br> 9 De Julio 1228<br> Mendoza, Mendoza<br> Red Link (811551)<br><br> Banco Credicoop Coop. Ltdo.<br> Belgrano 1415<br> Mendoza, Mendoza<br> Red Link (870551)<br><br> Banco Credicoop Coop. Ltdo.<br> Av. 7 Colores 2013<br> Mendoza, Mendoza<br> Red Link (870601)<br><br>'),(4,'lwM-3','Conversor de Monedas',''),(5,'lwM-4','Consulados','Alemania<br> <br> <br>Consulado de la República Federal de Alemania <br>Consulado Honorario en Mendoza <br>Dirección Montevideo 127 Piso 1 Dto. 6 - C.P. 5500 - Ciudad de Mendoza <br>Teléfono (54 261) 429-6539 <br>Fax  (54 261) 429-6609 <br>E-mail: fliahilbing@hotmail.com <br>Señor Federico Werner Hilbing - Cónsul Honorario <br> <br>Bolivia <br> <br>Consulado de Bolivia <br>Dirección: Garibaldi 380 – Planta Alta - 5500 - Mendoza <br>Teléfono (54 261) 429-2458Fax  (54 261) 423-5343 <br>E-mail: colivian-mendoza@sinectis.com.ar <br>Cónsul: Dn. Raúl García Chalar <br> <br>Brasil <br> <br>Consulado de la República Federativa del Brasil <br>Consulado Honorario en Mendoza <br>Dirección Pedro Molina 497 - 5500 - Ciudad de Mendoza <br>Teléfono (54 261) 438-0038 <br>Fax (54 261) 438-0038 <br>E-mail: conbras@dynastar.com.ar <br>Señor Guillermo Pedro Edgardo Cuervo - Cónsul Honorario <br> <br>Chile <br> <br>Consulado General de Chile <br>Consulado General en Mendoza <br>Dirección Av. Paso de los Andes 1147 - C.P. 5500 - Ciudad de Mendoza <br>Teléfonos: (54 261) 425-4844 / 425-5024 <br>Fax(54 261) 429-7297 <br>E-mail: cpchilmen@speedy.com.ar <br>Dn. Jorge Montero Figueroa - Consul General de Mza. <br> <br>Dinamarca <br> <br>Consulado de Dinamarca <br>Consulado Honorario en Mendoza <br>Dirección: Gutiérrez 323 - P.B. - 5500 - Mendoza <br>Teléfonos: (54 261) 420-0800 / 423-2610 <br>Fax: (54 261) 423-2610 <br>E-mail: apulenta@impsat1.com.ar <br>Dn. Antonio Pulenta - Consul Honorario <br> <br>Ecuador <br> <br>Consulado de Ecuador <br>Consulado Honorario en Mendoza <br>Dirección: Francisco Moyano 1587 - C.P. 5500 - Ciudad de Mendoza <br>Teléfono: (54 261) 429-6416 <br>Fax: (54 261) 429-6416 <br>E-mail: consuldormza@ciudad.com.ar <br>Da. Julia B. Kramarenko de Battistón - Cónsul Honorario <br> <br>España <br> <br>Consulados del Reino de España <br>Consulado General en Mendoza <br>Dirección: Agustín Alvarez 455 - C.P. 5500 - Ciudad de Mendoza <br>Teléfono: (54 261) 425-8483 / 425-3947 <br>Fax: (54 261) 438-0125 <br>E-mail: cgmendoza@infovia.com.ar <br>Dn. Miguel Albero Suárez - Cónsul General <br> <br>Viceconsulado Honorario en San Rafael <br>Dirección: Monte Caseros 1080 - C.P.  5600 San Rafael <br>Teléfono: (54 2627) 42-4421 <br>Señora Emilia González Mesas - Vicecónsul Honorario <br> <br>Agencia Consular Honoraria en General Alvear <br>Dirección Fleming 237 Casilla de Correo 183 <br>Teléfono (54 2625) 42-2584 Fax <br>Señor Julián López Hernández - Agente Consular Honorario <br> <br>Francia <br> <br>Consulado de la República Francesa <br>Consulado Honorario en Mendoza <br>Dirección: Alzaga 3972 - C.P. M5528AKJ - Chacras de Coria <br>Tel.: (54 - 261) 496 2417Fax: (54 - 261) 496 4683 <br>E-mail: chfmdz@gmail.com <br>Señor Philippe Rolet - Cónsul Honorario <br> <br>Finlandia, Gran Bretaña, Paises Bajos <br> <br>Consulado Gran Bretaña, Finlandia y los Países Bajos <br>Consulado Honorario en Mendoza <br>Dirección Emilio Civit 778 - C.P. 5500 - Ciudad de Mendoza <br>Teléfono (54 261) 423-8514 / 8529 <br>Fax: (54 261) 423-8565 <br>E-mail: cpulenta@bodegasalentein.com <br>Señor Carlos A. Pulenta - Cónsul Honorario <br> <br>Israel <br> <br>Consulados del Estado de Israel <br>Consulado Honorario en Mendoza <br>Dirección Lamadrid 738 - C.P. M5502GIN - Ciudad de Mendoza <br>Teléfono: (54 261) 4427-1507 / 428-2140 <br>Fax: (54 261) 428-2141 <br>Celular: (54 261) 15-557-4039 <br>E-mail: grupo2@nysnet.com.ar <br>Ing. Gerardo César Belinsky Echin - Cónsul Honorario de Israel <br> <br>Italia <br> <br>Consulados de la República Italiana <br>Consulado en Mendoza <br>Dirección: Necochea 712 - C.P. 5500 - Ciudad de Mendoza <br>Teléfono: (54 261) 423-1640 / 438-0453 <br>Fax: (54 261) 438-0714 <br>E-mail: console.mendoza@esteri.it <br>Señor Dr.Pietro Tombaccini - Cónsul Corresponsal <br> <br>Consular Honorario en San Carlos <br>Dirección E. Quiroga 247 - C.P.  5567 - San Carlos <br>Teléfono (54 2622) 47-0358FaxE-mail <br>Señor Alberto Piattelli - Corresponsal Consular Honorario <br> <br>Corresponsal Consular Honorario en San Martín <br>Dirección General Gutiérrez 132 - C.P. 5570 San Martín <br>Teléfono (54 2623) 42-2003 <br>Señora Giovanna Ciancio - Corresponsal Consular Honorario <br> <br>Corresponsal Consular Honorario en Tupungato <br>Dirección Belgrano 1201 - C.P. 5561 Tupungato <br>Telefono (54-482622) 48-8368 <br>Señor Juan Carlos Balestra - Corresponsal Consular Honorario <br> <br>Viceconsulado Honorario en San Rafael <br>Dirección Francia 113 - C.P. 5600 San Rafael <br>Teléfono (54 2627) 42-0373 <br>Fax (54 2627) 43-0131 <br>Señor Ricardo Stradella - Vicecónsul Honorario <br> <br>Corresponsal Consular Honorario en General Alvear <br>Dirección Calle Mitre 1657 - C.P. 5620 General Alvear <br>Teléfono (54 2625) 42-3626FaxE-mail <br>Señor José Saponara - Corresponsal Consular Honorario <br> <br>México <br> <br>Consulado de los Estados Unidos Mexicanos <br>Consulado Honorario en Luján de Cuyo <br>Dirección Carril San Martín 4733 - C.P. 5505 - Chacras de Coria <br>Teléfono (54 261) 496-2192 <br>Fax (54 261) 496-2192 <br>E-mail: magola@supernet.com.ar <br>Señora María Landa de González - Cónsul Honorario <br> <br>Panamá <br> <br>Consulados de Panama Consulado Honorario <br>Dirección: Paseo Sarmiento 49 P 9 Of. A - C.P. 5500 - Ciudad de Mendoza <br>Tel./Fax: (54 261) 425-5678 <br>E-mail: hfgg@impsat1.com.ar <br>Señor Hector Francisco Garcia Gabrielli - Cónsul Honorario <br> <br>Perú <br> <br>Consulado de la República del Perú <br>Consulado General en Mendoza <br>Dirección Coronel Rodriguez 1150 - C.P. 5500 - Ciudad de Mendoza <br>Teléfono: (54 261) 429-9831 <br>Fax (54 261) 423-2380 <br>E-mail: cpmendoza@millic.com.ar <br>Señor Víctor Matallana Bahamonde - Cónsul General <br> <br>Portugal <br> <br>Consulado de la República Portuguesa <br>Consulado Honorario en Godoy Cruz <br>Dirección: cervantes 1880 - C.P. 5501 - Godoy Cruz <br>Teléfono: (54 261) 452-4813 / 4697 <br>Fax:(54 261) 452-6611 <br>E-mail: juvenalargentina@infovia.com.ar <br>Señor Raúl Roger Romero Gomes - Cónsul Honorario <br> <br>Republica Árabe Siria <br> <br>Consulado de la República Arabe Siria <br>Consulado Honorario en Mendoza <br>Dirección: San Martín 1786 Piso 2 - Of. B  - C.P. 5500 - Ciudad de Mendoza <br>Teléfono: (54 261) 423-3834 / 425-4063 <br>Fax: (54 261) 423-3834 <br>E-mail: saadamus@speedy.com.ar <br>Señor Mustafa Saada - Cónsul Honorario <br> <br>Republica Checa <br> <br>Consulados de  la Rca. Checa <br>Consulado Honorario en Mendoza <br>Dirección: Av. España 1340 – P 9 – of. 20 – C.P. 5500 - Ciudad de Mendoza <br>Teléfono: (54 261) 423-2148 / 438-1592 <br>Fax:(54 261) 438-1592 <br>E-mail: conschecomza@hotmail.com <br>Señor Fabián Raúl Meilan - Cónsul Honorario <br> <br>Rumania <br> <br>Consulado de Rumania <br>Consulado Honorario en Guaymallén <br>Dirección: Lat. Sur Av. Ac. Este 2453 - 5500 - Guaymallén <br>Teléfono: (54 261) 431-7020 / 6962 / 432-2546 <br>Fax: (54 261) 431-7078 <br>E-mail: consrumza@infovia.com.ar <br>Señor Octavio Viorel Chirca - Cónsul Honorario'),(6,'lwM-5','Salud',''),(7,'lwM-6','Policía','DEPARTAMENTAL DE SEGURIDAD CAPITAL <br> <br>Con asiento físico en Comisaría 1º <br> <br>Mitre 1541– Planta Alta – Ciudad - <br> <br>Tel: 4296279/4258028 <br> <br> <br>Comisaría 1° <br> <br>Mitre 1541 – Planta Baja - Ciudad – Mza.- <br> <br>Tel: 4256460/ 4296244.- <br> <br> <br>Comisaría 2° <br> <br>Av. San Martín 124– Ciudad – Mza.- <br> <br>Tel: 4241118/ 4242555/ 4243766/ 4243793.- <br> <br> <br>Comisaría 3° <br> <br>Rioja 1252 - Ciudad – Mza.- <br> <br>Tel: 4254901/ 4202001/ 4295822/ 4295827/ 4293136.- <br> <br> <br>Comisaría 4° <br> <br>San Martín 2556 –Ciudad – Mza.- <br> <br>Tel: 4307824/ 4372335/ 4372484/ 4374357.- <br> <br> <br>Comisaría 5° <br> <br>Juan B. Justo 804 – Ciudad – Mza.- <br> <br>Tel: 4255283/ 4203218/ 4296041/ 4295918.- <br> <br> <br>Comisaría 6° <br> <br>Las Magnolias y Los Viscos Bº Cano – Ciudad – Mza.- <br> <br>Tel: 4257422/ 4291211/ 4251458.- <br> <br> <br>Comisaría 33° <br> <br>Uspallata y Laguna Blanca Bº San Martín – Ciudad – Mza.- <br> <br>Tel: 4444889/ 4446683/ 4442281/ 4444356/ 4444394.- <br> <br> <br>Comisaría 59° <br> <br>Gimnasio Municipal Nº 5 Bº La Favorita –Ciudad – Mza.- <br> <br>Tel: 4440600/ 4447127.-'),(8,'lwM-7','Aeropuerto',''),(9,'lwM-8','Terminal de Colectivos','');

/*Table structure for table `portada` */

DROP TABLE IF EXISTS `HotelAconcagua_portada`;

CREATE TABLE `HotelAconcagua_portada` (
  `id_Portada` int(11) NOT NULL AUTO_INCREMENT,
  `FotoPortada` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_Portada`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `portada` */

insert  into `HotelAconcagua_portada`(`id_Portada`,`FotoPortada`,`descripcion`) values (1,'img-apartamentos','Apartamentos'),(2,'img-fotos','Fotos'),(3,'img-servicios','Servicios'),(4,'img-tarifas','Tarifas'),(5,'img-reservas','Reservas');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
