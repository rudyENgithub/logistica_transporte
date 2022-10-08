-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: logistica_ingeneo
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombreusuario` varchar(200) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'rudy sorto','rudy.sorto','123456','rudy.eli.ayala@gmail.com');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoTransporte`
--

DROP TABLE IF EXISTS `tipoTransporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoTransporte` (
  `id_tipoTransporte` int NOT NULL AUTO_INCREMENT,
  `tipotransporte` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_tipoTransporte`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoTransporte`
--

LOCK TABLES `tipoTransporte` WRITE;
/*!40000 ALTER TABLE `tipoTransporte` DISABLE KEYS */;
INSERT INTO `tipoTransporte` VALUES (1,'Terrestre');
/*!40000 ALTER TABLE `tipoTransporte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bodegas`
--

DROP TABLE IF EXISTS `bodegas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bodegas` (
  `id_bodega` int NOT NULL AUTO_INCREMENT,
  `nombrebodega` varchar(100) DEFAULT NULL,
  `tipobodega` varchar(100) DEFAULT NULL,
  `id_tipoBodega` int DEFAULT NULL,
  PRIMARY KEY (`id_bodega`),
  KEY `bodegas_FK` (`id_tipoBodega`),
  CONSTRAINT `bodegas_FK` FOREIGN KEY (`id_tipoBodega`) REFERENCES `tipoBodega` (`id_tipoBodega`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodegas`
--

LOCK TABLES `bodegas` WRITE;
/*!40000 ALTER TABLE `bodegas` DISABLE KEYS */;
INSERT INTO `bodegas` VALUES (1,'bodega alsoa','Terrestre',NULL),(2,'bodega samor','Terrestre',NULL),(3,'Bodega miramar','Maritima',NULL);
/*!40000 ALTER TABLE `bodegas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombreproducto` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `envios`
--

DROP TABLE IF EXISTS `envios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `envios` (
  `id_envio` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_transporte` int NOT NULL,
  `cantidadproducto` int DEFAULT NULL,
  `fecharegistro` datetime DEFAULT NULL,
  `fechaentrega` datetime DEFAULT NULL,
  `id_bodega` int DEFAULT NULL,
  `precioenvio` double DEFAULT NULL,
  `numeroguia` varchar(10) DEFAULT NULL,
  `logisticaterrestre` tinyint(1) DEFAULT NULL,
  `logisticamaritima` tinyint(1) DEFAULT NULL,
  `id_producto` int DEFAULT NULL,
  `clientenombre` varchar(200) DEFAULT NULL,
  `clientedireccion` varchar(200) DEFAULT NULL,
  `producto` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT '0',
  `preciodescuento` double DEFAULT NULL,
  `modalidad` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_envio`),
  KEY `envios_FK` (`id_bodega`),
  KEY `envios_FK_1` (`id_producto`),
  KEY `envios_FK_2` (`id_usuario`),
  KEY `envios_FK_3` (`id_transporte`),
  CONSTRAINT `envios_FK` FOREIGN KEY (`id_bodega`) REFERENCES `bodegas` (`id_bodega`),
  CONSTRAINT `envios_FK_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  CONSTRAINT `envios_FK_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `envios_FK_3` FOREIGN KEY (`id_transporte`) REFERENCES `transporte` (`id_transporte`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `envios`
--

LOCK TABLES `envios` WRITE;
/*!40000 ALTER TABLE `envios` DISABLE KEYS */;
INSERT INTO `envios` VALUES (7,1,1,12,'2014-01-01 23:28:57','2014-01-01 23:28:57',1,1220.5,'1010204050',1,0,NULL,'Juan Manuel Marquez','San Juan','Producto x',850,NULL),(27,1,1,12,'2014-01-01 23:28:57','2014-01-01 23:28:57',1,1220.5,'1010204050',1,0,NULL,'Juan Manuel Marquez','San Juan','Producto x',850,NULL),(31,1,1,12,'2014-01-01 23:28:57','2014-01-01 23:28:57',1,1220.5,'1010204050',0,0,NULL,'Juan Manuel Marquezx','San Juan','Producto x',850,NULL),(32,1,1,12,'2014-01-01 23:28:57','2014-01-01 23:28:57',1,1220.5,'1010204050',0,0,NULL,'Juan Manuel Marquezx','San Juan','Producto x',850,NULL),(33,1,1,12,'2014-01-01 23:28:57','2014-01-01 23:28:57',1,1220.5,'1010204050',0,0,NULL,'rudy  sorto','calle abada','Producto x',850,NULL),(41,1,1,20,'2022-10-09 00:00:00','2022-10-23 00:00:00',3,500,'eeee',0,0,NULL,'jose amaya','calle abada','llantas',485,NULL),(42,1,1,50,'2022-10-14 00:00:00','2022-10-09 00:00:00',3,500,'eeee',0,0,NULL,'rudy  sorto','calle abada','llantas',485,NULL),(43,1,1,25,'2022-10-08 00:00:00','2022-10-09 00:00:00',3,600,'eeee',0,0,NULL,'rudy  sorto','calle abada','llantas',582,NULL),(44,1,1,63,'2022-10-09 00:00:00','2022-10-23 00:00:00',2,560,'eeee',0,0,NULL,'jose amaya3','calle abada','llantas',532,NULL),(49,1,48,56,'2022-10-07 00:00:00','2022-10-09 00:00:00',3,500,'xxxx',0,0,NULL,'jose amaya4','calle abada','llantas xxx',485,NULL);
/*!40000 ALTER TABLE `envios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transporte`
--

DROP TABLE IF EXISTS `transporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transporte` (
  `id_transporte` int NOT NULL AUTO_INCREMENT,
  `placa` varchar(6) DEFAULT NULL,
  `desctransporte` varchar(200) DEFAULT NULL,
  `numeroflota` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id_transporte`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transporte`
--

LOCK TABLES `transporte` WRITE;
/*!40000 ALTER TABLE `transporte` DISABLE KEYS */;
INSERT INTO `transporte` VALUES (1,'123456','cabezal','4566224'),(10,NULL,NULL,NULL),(11,NULL,NULL,NULL),(12,NULL,NULL,NULL),(15,NULL,NULL,NULL),(16,NULL,NULL,NULL),(29,'pla001','TERRESTRE','floa001'),(30,'pla001','TERRESTRE','floa001'),(45,'pla001','TERRESTRE','floa001'),(46,'pla001','TERRESTRE','floa001'),(47,'pla001','TERRESTRE','floa001'),(48,'','Maritima','eeee'),(50,'','',''),(52,'','',''),(54,'','','');
/*!40000 ALTER TABLE `transporte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoBodega`
--

DROP TABLE IF EXISTS `tipoBodega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoBodega` (
  `id_tipoBodega` int NOT NULL AUTO_INCREMENT,
  `nombretipoBodega` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_tipoBodega`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoBodega`
--

LOCK TABLES `tipoBodega` WRITE;
/*!40000 ALTER TABLE `tipoBodega` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipoBodega` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-07 14:31:49
