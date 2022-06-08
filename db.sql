-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: baseproyecto
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articulos`
--

DROP TABLE IF EXISTS `articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articulos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `foto` varchar(150) DEFAULT NULL,
  `usuarios_idUsuarios` int(11) NOT NULL,
  `categorias_idCategorias` int(11) NOT NULL,
  `receptor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_articulos_usuarios_idx` (`usuarios_idUsuarios`),
  KEY `fk_articulos_categorias1_idx` (`categorias_idCategorias`),
  CONSTRAINT `fk_articulos_categorias1` FOREIGN KEY (`categorias_idCategorias`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_articulos_usuarios` FOREIGN KEY (`usuarios_idUsuarios`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulos`
--

LOCK TABLES `articulos` WRITE;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` VALUES (1,'Televisor','Televisor samsung 32\"','televisor.jpg',1,1,4),(2,'Microondas','Microondas/grill','microondas.jpg',2,1,NULL),(3,'Correa de perro','Correa para perro azul','correaPerro.jpg',5,8,NULL),(4,'Auriculares','Auriculares Airpods','auriculares.jpg',4,1,NULL),(5,'Monitor','Monitor 144hz','monitor.jpg',1,1,8),(6,'Armario','Armario de madera de roble','armario.jpg',3,2,NULL),(7,'Gafas de Sol','Gafas Ray-ban','gafasSol.jpg',2,4,8),(8,'Mochila','Mochila adidas','mochila.jpg',4,4,NULL),(9,'Altavoz','Altavoz GPO vintage color crema','altavoz.jpg',8,1,NULL),(10,'Carrito bebe','Carrito de bebe plegable','carritoBebe.jpg',2,7,NULL),(11,'Bambas','Bambas adidas numero 44','bambas.jpg',3,3,NULL),(12,'Mancuernas','Mancuerna 15kg','mancuernas.jpg',5,5,NULL),(13,'Guantes de Boxeo','Guantes de boxeo stars','guantesBoxeo.jpg',4,5,NULL),(14,'Skate','Skate 8\'5 marca santacruz','skate.jpg',5,5,NULL),(15,'Longboard','Long para recorrer largas distancias','longboard.jpg',1,5,NULL),(16,'Disco Queen','Disco de Queen-The game LP','discoQueen.jpg',3,6,NULL),(17,'Ukelele','Ukelele seminuevo perfecto para empezar a aprender','ukelele.jpg',5,6,8),(18,'Afinador','Afinador digital marca Thomann','afinador.jpg',4,6,NULL),(19,'libro harry potter','Libro Harry Potter la piedra filosofal','libroHarryPotter.jpg',2,6,1),(20,'Libro Juego de Tronos','Libro Juego de Tronos, Cancion fuego y hielo','libroJuegoTronos.jpg',3,6,NULL),(21,'Alfombra Fisher-Price ','Alfombra Fisher-Price para bebé. Ideal para el aprendizaje.','alfombraFisherPrice.jpg',7,7,NULL),(22,'Mesa de Comedor','Mesa de comedor de madera, 4 patas','mesaComedor.jpg',5,2,NULL),(23,'Vitrina','Vitrina de cristal','vitrina.jpg',1,2,NULL),(24,'Silla ','2 Silla de madera muy comodas y con buena estetica','silla.jpg',3,2,NULL),(25,'E-book','E-book bq para leer libros digitales','e-book.jpg',6,1,NULL),(26,'Gafas Relidad Virtual','Gafas de realidad virtual para jugar ','gafasRV.jpg',2,1,NULL),(27,'Soporte para Incienso','Soporte para incienso con forma de gato','soporteIncienso.jpg',4,3,NULL),(28,'Edredon','Edredón de invierno perfecto para no pasar frio en las noches','edredon.jpg',3,3,NULL),(29,'Podadora de Cesped','Podadora de césped en perfecto estado con recambios de hoja','podadoraCesped.jpg',1,1,NULL),(30,'Portatil','Portatil acer, componentes: i5, 8RAM, 1T de disco duro, Nvidia1060','portatil.jpg',4,1,NULL),(31,'Micrófono','Microfono dinámico SAMSON Q2U. Entradas USB y XLR','microfono.jpg',2,2,NULL),(32,'Teclado','Teclado mecanico ZERO','teclado.jpg',5,1,9),(33,'Mesita','Mesita de noche auxiliar, negra','mesita.jpg',1,2,NULL),(34,'Colchon','Colchon Ikea malvik 90x200','colchon.jpg',2,3,5),(35,'Estufa','Estufa de gas butano','estufa.jpg',9,3,NULL),(36,'Somier','Estructura de cama con somier, tiene que venir a por ella al domicilio','somier.jpg',6,2,NULL),(37,'Estantería','Estantería metálica con aspecto refinado con mucho espacio para almacenar objetos. ','estanteria.jpg',7,7,NULL),(38,'Muebles Cocina','Como nuevo, perfecto para guardar utensilios de cocina, platos, vasos etc...','mueblesCocina.jpg',2,2,NULL),(39,'taburete','Pareja taburetes, marron con patas metálicas','taburete.jpg',3,2,NULL),(40,'Perchero','Perchero de Ikea, como nuevo','perchero.jpg',8,2,NULL),(41,'Maceta','Macetas pequeñas para plantas','maceta.jpg',1,3,0),(42,'Manguera','Manguera extensible 5m ','manguera.jpg',5,3,NULL),(43,'Mesa de jardín','Mesa extensible de madera para jardín','mesaJardin.jpg',2,3,NULL),(44,'Lampara','Lampara para porche 3 bombillas ','lampara.jpg',8,3,NULL),(45,'Jaula de pajaro','Jaula para pajaros, con bebedero y comedero','jaulaPajaro.jpg',1,3,NULL),(46,'Juguete Perro','Juguete de perro masticable','juguetePerro.jpg',5,8,NULL),(64,'Botines 37','Regalo botines de mujer.  Talla 37. Puedo entregarlos algún fin de semana','1651830865132-botines.jpeg',8,8,2),(65,'Ratón','Regalo ratón pequeño HP. con cable.','1651855598565-raton.jfif',9,1,NULL),(66,'Mochila','Regalo mochila Jansport morada.\r\nTiene compartimiento para ordenador. \r\nMuy buen estado.\r\nLa puedo entregar solo a partir de las 8 pm.','1651856282928-mochila.jpeg',9,4,8),(67,'Casco ','Regalo solo el casco.','1652038231333-casco2.jfif',9,9,NULL),(72,'Cuadros','Regalo cuadros de madera. Miden 25cm x 25cm aproximadamente. ','1652030819000-cuadros (2).jfif',7,3,NULL),(73,'Ollas','Regalo set de 4 ollas. Muy poco usadas. ','ollas.jfif',8,3,NULL),(74,'Planta','Regalo cactus grande. Florece una vez al año en primavera :)','1652036426656-maceta.jfif',9,9,NULL),(75,'Regleta','Regalo regleta con 6 enchufes y botón de encendido.','1652036484784-Regleta-enchufes-pared-0-33674042_m.jpg',9,1,NULL);
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `icono` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Electrónica','electronica.jpg'),(2,'Muebles','muebles.jpg'),(3,'Hogar y Jardín','hogaryjardin.jpg'),(4,'Moda y Accesorios','modayaccesorios.jpg'),(5,'Deporte y Ocio','deporteyocio.jpg'),(6,'Libros y Música','librosymusica.jpg'),(7,'Niños y Bebes','ninosybebes.jpg'),(8,'Mascotas','mascotas.jpg'),(9,'Servicios','servicios.jpg'),(10,'Otros','otros.jpg');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distrito`
--

DROP TABLE IF EXISTS `distrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `distrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `foto` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distrito`
--

LOCK TABLES `distrito` WRITE;
/*!40000 ALTER TABLE `distrito` DISABLE KEYS */;
INSERT INTO `distrito` VALUES (1,'Les Corts','lesCorts.png'),(2,'Gracia','gracia.png'),(3,'Sants-Monjuïc','santsMontjuic.png'),(4,'Ciutat-Vella','ciutatVella.png'),(5,'Eixample','eixample.png'),(6,'Sarriá-Sant Gervasi','sarria.png'),(7,'Horta','horta.png'),(8,'Nou Barris','nouBarris.png'),(9,'Sant Andreu','santAndreu.png'),(10,'Sant Martí','santMarti.png');
/*!40000 ALTER TABLE `distrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intereses`
--

DROP TABLE IF EXISTS `intereses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `intereses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mensaje` varchar(300) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT current_timestamp(),
  `articulos_id` int(11) NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  `asunto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_intereses_articulos1_idx` (`articulos_id`),
  KEY `fk_intereses_usuarios1_idx` (`usuarios_id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intereses`
--

LOCK TABLES `intereses` WRITE;
/*!40000 ALTER TABLE `intereses` DISABLE KEYS */;
INSERT INTO `intereses` VALUES (2,'Buenas tardes!! ¿Sigue disponible esa tele?','2022-04-30 10:14:58',1,3,'Mañana'),(3,'Hola, Juan :) ¿Te vendría bien quedar hoy por la tarde?','2022-04-30 10:14:58',1,4,'Interesada en la tele'),(48,'Hola, me gusta la vitrina','2022-05-02 17:40:11',23,3,'Hola'),(52,'Hola, María. Estaría interesado en el microondas. ¿Está disponible aún?','2022-05-03 16:25:19',2,1,'Microondas'),(54,'Hola, Juan. Sigue disponible el longboard?','2022-05-04 21:06:50',15,2,'Longboard'),(55,'¿Qué tal? A qué hora podría ir a recogelas y dónde quedamos?','2022-05-05 10:32:33',12,1,'Hola, Felipe'),(57,'Hola, María. Veo que vivimos en la misma zona. ¿Podríamos quedar este fin de semana?','2022-05-06 10:25:02',7,8,'Gafas de Sol'),(58,'Hola, Hanna! por supuesto, las gafas son tuyas :D También me interesan esos botines. Quedamos este sábado?','2022-05-06 10:30:33',64,2,'Botines 37'),(59,'Hola, Felipe. Me gustaría recoger el ukelele este fin de semana, si es posible :)','2022-05-06 10:42:11',17,8,'Ukelele'),(60,'Hola, Juan. ¿Puedo ver antes el monitor? Gracias','2022-05-06 10:58:34',5,8,'Monitor'),(61,'Hola, Ricard...','2022-05-06 15:01:24',27,8,'Soporte para Incienso'),(62,'Hola, Ari :) Me ha gustado esa mochila. Podríamos quedar mañana a las 9pm por tu barrio. Un saludo','2022-05-06 17:15:28',66,8,'Mochila'),(64,'Hola, Ariadna. Mañana podría pasarme por tu barrio a las 8 pm, si te viene bien. ','2022-05-08 17:03:02',67,6,'¿Casco y chaqueta?'),(65,'Hola, Ricard. Puedo recoger el perchero mañana a las 9 pm, si está todavía disponible.','2022-05-08 17:05:00',40,6,'Perchero'),(66,'Hola, Ricard. Necesito justo ese tipo de afinador para mi guitarra. Espero que esté disponible aún. ¡Gracias!','2022-05-08 17:10:35',18,6,'Afinador'),(67,'Hola, Valeria. Estoy interesada en los taburetes. Puedo ir a recogerlos este fin de semana, si puedes. ','2022-05-08 17:31:45',39,7,'Hola :)'),(68,'Hola, Ariadna! Tengo un ordenador al que no le va el touchpad. Me vendría genial este ratón :D','2022-05-08 17:35:27',65,7,'Interesada en el ratón'),(69,'Hola, Ricard. Me interesa este perchero. ¿Podría ir a recogerlo este fin de semana?','2022-05-08 17:36:26',40,7,'Perchero'),(70,'Hola, Gregorio. Justo estaba buscando un ebook porque me voy de viaje pronto. Espero que esté disponible aún. Un saludo :)','2022-05-08 17:52:52',25,9,'E-book'),(71,'Hola, Ricard. Necesitaba una mochila para irme de viaje. Espero que me la puedas dar :D ','2022-05-08 17:55:30',8,9,'Mochila'),(72,'Hola, Ariadna. Espero que siga disponible la chaqueta. ¿El casco también lo regalas?','2022-05-08 18:04:49',67,1,'Casco '),(73,'Hola, Ari. Me olvidé de mi casco en otra ciudad y me vendría genial tener uno cuanto antes. Espero que siga disponible. ','2022-05-08 18:10:24',67,5,'Casco'),(74,'Hola, Ricard. Este fin de semana podría ir a Horta a recoger los cascos si siguen disponibles. Un saludo.','2022-05-08 18:18:22',4,9,'Auriculares'),(75,'Hola, Felipe. Se me ha roto el teclado y ahora mismo no puedo trabajar. Este me vendría genial. Estoy dispuesta a ir a recogerlo a cualquier hora. ¡Un saludo! ','2022-05-08 18:32:11',32,9,'Teclado'),(76,'Hola, Ariadna. Estaría interesada en la regleta.','2022-05-08 19:10:25',75,8,'Regleta');
/*!40000 ALTER TABLE `intereses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `necesidades`
--

DROP TABLE IF EXISTS `necesidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `necesidades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `usuarios_idUsuarios` int(11) NOT NULL,
  `categorias_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_necesidades_usuarios1_idx` (`usuarios_idUsuarios`),
  KEY `fk_necesidades_categorias1_idx` (`categorias_id`),
  CONSTRAINT `fk_necesidades_categorias1` FOREIGN KEY (`categorias_id`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_necesidades_usuarios1` FOREIGN KEY (`usuarios_idUsuarios`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `necesidades`
--

LOCK TABLES `necesidades` WRITE;
/*!40000 ALTER TABLE `necesidades` DISABLE KEYS */;
INSERT INTO `necesidades` VALUES (1,'Televisor','Televisor de 30\" con hdmi',4,1),(2,'Microondas','Microondas 700 vatios',3,1),(4,'Monitor','Busco monitor que tenga 144hz y tenga display',5,1),(6,'Armario','Busco armario con puertas correderas de 1\'80',3,2),(8,'Plancha','Potencia 2400W Seco/Spray/Vapor Vapor Vertica',4,3),(10,'E-book','E-book Kindle Paper black de Amazon.',1,1),(11,'Soporte para incienso','Soporte de incienso basico',3,3),(12,'Edredón','Edredón de invierno',4,3),(39,'Colgadores de ropa','¡Hola! Necesito unos 5 colgadores para mi armario, por favor. Muchas gracias :) ',2,3),(58,'Escoba','Necesito una escoba para barrer mi terraza. Gracias!',1,3),(65,'Dinero','Hola, no tengo chaqueta. dame 60 euros',2,4),(66,'Colgadores','Necesito unos 5-10 colgadores de ropa. ¡Gracias!',8,3),(67,'Botas de senderismo','Hola a todos. Busco botas de senderismo talla 37. Serían para terreno llano. Gracias :) ',9,4),(70,'Linterna','Hola, busco una linterna para ir de acampada.',6,3),(71,'Rascador','Busco rascador para gatos ',6,8),(72,'Cuentos','Busco libros con cuentos para niños de 3 a 5 años',7,6),(73,'Columpio para bebé','Busco columpio para niño de 4 años. Sería para ponerlo en la terraza. Gracias :)',7,7),(74,'Despertador','Necesito un despertador simple. ',8,1);
/*!40000 ALTER TABLE `necesidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefono` float DEFAULT NULL,
  `informacion` varchar(300) DEFAULT NULL,
  `foto` varchar(150) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `distrito_id` int(11) NOT NULL,
  `ptospositivos` float DEFAULT NULL,
  `ptosnegativos` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuarios_distrito1_idx` (`distrito_id`),
  CONSTRAINT `fk_usuarios_distrito1` FOREIGN KEY (`distrito_id`) REFERENCES `distrito` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Juan','Jimenez','Juanji@gmail.com',699884000,'Me llamo Juan y utilizo esta aplicación para dar cosas que ya no utilizo y pedir articulos que pueda necesitar, soy de Barcelona.','fotoJuan.jpg','1234',3,12,0),(2,'María','Luengo','marilu88@gmail.com',631533000,'Hola soy María estoy en Barcelona por estudios durante 6 meses y necesito amueblar mi piso.   ','fotoMaria.jpg','1324',3,6,0),(3,'Valeria','Gutierrez','valegu89@gmail.com',645860000,'Soy Valeria, llevo 2 meses en Barcelona y busco articulos que no utilice la gente, tambien puedo aportar cosas que ya no utilizo. ','fotoValeria.jpg','1423',2,4,0),(4,'Ricard','Serra','ricardse90@gmail.com',632159000,'Hola, me llamo Ricard estoy de paso por Barcelona y durante estos meses busco muebles para poder tener un poco mejor el piso en el que resido, tambien puedo ofrecer servicios de informatica.','fotoRicard.jpg','4321',7,9,0),(5,'Felipe','Gonzalez','fegonzo@gmail.com',695855000,'Felipe, resido en Barcelona y llevo 2 años utilizando esta aplicación, aporto articulos y de vez en cuando busco aparatos electronicos que no necesite la gente para repararlos y darles uso.','fotoFelipe.jpg','3421',5,6,0),(6,'Gregorio','Nuñez','granu2004@gmail.com',655958000,'Buenas, soy Gregorio Nuñez, soy nuevo en la aplicación y estoy buscando objetos relacionados con tema de animales y mascotas, tengo 1 perro y 2 gatos asi que cualquier cosa relacionada con mascotas puede venirme bien.','fotoGregorio.jpg','2431',5,3,0),(7,'Lucía','Guillen','lucyguillen@gmail.com',644850000,'Hola, me llamo Lucía. Tengo un niño pequeño y crece tan rápido que siempre necesita cositas nuevas :) cualquier ayuda me vendría bien. ¡Muchas gracias!','fotoLucia.jpg','1432',9,2,0),(8,'Hanna','Petrakova','petrakovahanna@gmail.com',698820000,'¡Hola a todos! Acabo de llegar a Barcelona y estaré aquí unos 4-6 meses. Necesito ayuda para amueblar mi habitación y cocina. Si tienen alguna plantita para darle vida al ambiente, también estaría muy agradecida :)','1652037091151-1652027323820-1651827903498-IMG_20211011_210549.jpg','1234',3,9,0),(9,'Ariadna','Jiménez','arij@gmail.com',650736000,'Hola, me voy de Barcelona en dos semanas por trabajo y estoy regalando cosas porque no sé cuándo volveré. Espero que alguien les pueda dar un buen uso :) Gracias!','1652032141439-fotoAri.jpg','1234',2,14,0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-09 17:55:26
