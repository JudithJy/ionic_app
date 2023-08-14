-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: epfdatabase
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `contact_id` int NOT NULL AUTO_INCREMENT,
  `contact_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` decimal(20,0) DEFAULT NULL,
  `address` varchar(100) NOT NULL,
  `contact_subject` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'Judith','judith@jjcorporates.com',785663422,'pretoria','i want more information about epf'),(2,'Manaledi','manaledi@ptyledi.org',745673458,'pretoria','when can i come office'),(3,'Motlatsi','motlatsi@gmail.com',11778655,'joburg','i want more information about epf'),(4,'Lesego','lesego@ttylogistics.org',177980980,'Durban','kbjhbklnllkmnlvkjgmvkjm'),(5,'Yolanda','Yoli@gmail.com',789901664,'Dennilton','hgfdgghchgvhbvnbn'),(6,'Monyadiwe','monyadiwe@gmail.com',824556789,'Jorbug','jbklblknjhvgcgchbvjnbmn'),(7,'Motlatsi','motlatsi@gmail.com',736798291,'Ekangala','Can you please call me so that I can set up a meeting with you.'),(8,'Malope Bogoshi','malope@tt.com',126584648,'Pretoria','jhbkjjfnwlknfwkjwf'),(9,'Cynthia Bogopa','bogopa@bogopacorporates.org',112749933,'Midrand','I would realy like to partner with you guys, you are doing an exellent job.'),(10,'Lehlogonono Moropane','lehlogononomoropane@lmpane.com',824636847,'Garankua','I will like to partner with epf');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `demotable`
--

DROP TABLE IF EXISTS `demotable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `demotable` (
  `StudentId` int NOT NULL AUTO_INCREMENT,
  `StudentName` varchar(20) DEFAULT NULL,
  `StudentAdmissionDate` date DEFAULT NULL,
  PRIMARY KEY (`StudentId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demotable`
--

LOCK TABLES `demotable` WRITE;
/*!40000 ALTER TABLE `demotable` DISABLE KEYS */;
INSERT INTO `demotable` VALUES (1,'David','2019-05-21');
/*!40000 ALTER TABLE `demotable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hackathons`
--

DROP TABLE IF EXISTS `hackathons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hackathons` (
  `participant_id` int NOT NULL AUTO_INCREMENT,
  `participant_name` varchar(250) NOT NULL,
  `id_number` decimal(13,0) NOT NULL,
  `email_address` varchar(250) NOT NULL,
  `whatsapp_number` decimal(20,0) NOT NULL,
  `disability` varchar(250) NOT NULL,
  `disability_description` varchar(255) DEFAULT NULL,
  `update_participant` varchar(250) NOT NULL,
  `development_experience` varchar(250) NOT NULL,
  `familiar_language` varchar(250) NOT NULL,
  `programming_experience` varchar(250) NOT NULL,
  `cloudprovider_expertise` varchar(250) NOT NULL,
  `hackathons_participation` varchar(250) NOT NULL,
  `which_hackathons` varchar(255) DEFAULT NULL,
  `sourceofinformation` varchar(250) NOT NULL,
  PRIMARY KEY (`participant_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hackathons`
--

LOCK TABLES `hackathons` WRITE;
/*!40000 ALTER TABLE `hackathons` DISABLE KEYS */;
INSERT INTO `hackathons` VALUES (1,'Ledi',9801220822086,'ledi98@gmail.com',764550122,'No',NULL,'Yes','Student','java,php,c++','back-end','none','No','','social media'),(2,'Yolanda',9501040822086,'Yoli@gmail.com',724660122,'No','','Yes','Student','java,php,c++','back-end','none','No','','social media'),(3,'Judith',9801220822086,'judy@gmail.com',7845234289,'yes','poor eye sight','yes','1 year','java','full stack ','none','yes','youth month hackathons','social media'),(4,'Naledi Makitla',9702220822086,'ledi@gmail.com',784563920,'No','None','Yes','Student','Java','Back End','Google Cloud Plartform','Yes','Youth Month Hackathons','Referral/Word of mouth'),(5,'Kesibone',9701220822086,'kedi@gmail.com',784078540,'No','none','Yes','Less than equal to a year','Python','Back End','None','Yes','4th hackathons','Referral/Word of mouth'),(6,'Kesibone',9701220822086,'kedi@gmail.com',784078540,'No','none','Yes','Less than equal to a year','Python','Back End','None','Yes','4th hackathons','Other'),(7,'Malope Matsepe',9401274565483,'lope@gmail.com',784664739,'No','none','No','Less than equal to a year','','Programming','None','No','no','Social Media'),(8,'Kedi Malepa',9875957467484,'malepa@gmail.com',783765843,'No','','Yes','2 - 5 Years','','Full Stack','Microsoft Asure','No','','Referral/Word of mouth'),(9,'Kedi Serame',9412250822086,'serame@gmail.com',756483382,'No',NULL,'Yes','2 - 5 Years','','Back End','Microsoft Asure','Yes','5th Hackathons','Social Media'),(10,'Nomsa Ledwaba',2001240688086,'nomsa@gmail.com',784563827,'No',NULL,'Yes','Less than equal to a year','','Full Stack','Google Cloud Plartform','No',NULL,'Referral/Word of mouth'),(11,'Lindi Majola',9706247722087,'majolalindi@gmail.com',789563322,'No',NULL,'Yes','Less than equal to a year','Php, Python','Back End','Other','Yes','6th Hackathons','Hackathons'),(12,'Mmathoto Portia Bogoshi',83090343087,'portia@gmail.com',764538362,'No',NULL,'No','2 - 5 Years','Java','Front End','Google Cloud Plartform','Yes','5th Hackathons','Social Media'),(13,'Kedibone Mathebe',9801220822086,'kedi@gmail.com',794078540,'No',NULL,'Yes','Less than equal to a year','Java, C#','Back End','Other','Yes','2nd Hackathons','Referral/Word of mouth'),(14,'Khensani Sibuyi',9707180822086,'khensani@gmail.com',835673892,'No',NULL,'Yes','Less than equal to a year','HTML, CSS','Front End','None','Yes','2nd Hackathons','Social Media'),(15,'Maanda Caiphus',2115948088,'maanda305@gmail.com',711540112,'Yes','I have short hair','No','Student','c++, javascript, ladder logic','Programming','Other','Yes','1st Hackathons','Other');
/*!40000 ALTER TABLE `hackathons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partners` (
  `partner_id` int NOT NULL AUTO_INCREMENT,
  `partner_name` varchar(100) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` decimal(20,0) NOT NULL,
  PRIMARY KEY (`partner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (1,'Judith','jj corporates','judith@jjcorporates.com',1754683844),(2,'Naledi','Naledi Logistics','naledi@naledilogistics.org',178863627),(3,'Nape Lebowa','JJ corporates','nape@jjcorporates.com',783457273);
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sponsors`
--

DROP TABLE IF EXISTS `sponsors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sponsors` (
  `sponsor_id` int NOT NULL AUTO_INCREMENT,
  `sponsor_name` varchar(250) NOT NULL,
  `sponsor_surname` varchar(250) NOT NULL,
  `prefered_contactmethod` varchar(250) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `industry` varchar(250) NOT NULL,
  `sponsorship_description` varchar(250) NOT NULL,
  `sourceofinformation` varchar(250) NOT NULL,
  PRIMARY KEY (`sponsor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sponsors`
--

LOCK TABLES `sponsors` WRITE;
/*!40000 ALTER TABLE `sponsors` DISABLE KEYS */;
INSERT INTO `sponsors` VALUES (1,'Kedibone','Mathebe','email','kedi@gmail.com',786589008,'IT','Learnership','Social Media'),(2,'Motlatsi','Mathebe','Email','motlatsi@gmail.com',182754473,'Health and Saftey','Tackling a problem of statement','Hackathons'),(3,'Malope','Bogoshi','email','lope@gmail.com',973638299,'IT','Learnership','Social Media'),(4,'Motlatsi ','Mathabathe','Phone','motlatsi@gmail.com',769364537,'Health care','Other','Social Media'),(5,'Mana','Kid','Phone','mana@gmail.com',728645732,'Logistics','Find new talent','Social Media'),(6,'Lerato','Phuthi','Phone',NULL,786336637,'IT','Tackling a problem of statement','Hackathons'),(7,'Judy','Malapa','Phone',NULL,785364597,'1','Find new talent','Social Media'),(8,'Lelapa','Tau','Email','lelapa@taufinance.com',NULL,'Accounting, banking and finance','Tackling a problem of statement','Social Media'),(9,'Cind','Xaba','Email','cindyxaba@tpy.org',NULL,'Media and Internet','Free Marketing','Social Media'),(10,'Lebogang','Malatela','Phone',NULL,784378292,'Media and Internet','Free Marketing','Social Media'),(11,'Kamogelo','Kotu','Email','kotu@kamopty.org',NULL,'Energy and utilities','Tackling a problem of statement','Referral/Word of mouth'),(12,'Thabang','Molema','Phone',NULL,794037829,'Information Technology','Find new talent','Hackathons'),(13,'Caiphus','Maanda','Phone',NULL,711540112,'Law','Find new talent','Social Media');
/*!40000 ALTER TABLE `sponsors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upcomingevents`
--

DROP TABLE IF EXISTS `upcomingevents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `upcomingevents` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `event_description` varchar(255) DEFAULT NULL,
  `event_startdate` date DEFAULT NULL,
  `event_enddate` date DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upcomingevents`
--

LOCK TABLES `upcomingevents` WRITE;
/*!40000 ALTER TABLE `upcomingevents` DISABLE KEYS */;
INSERT INTO `upcomingevents` VALUES (1,'Youth Month Hackathons','2021-06-26','2021-06-27'),(2,'Safety and Security Hackathons','2021-07-24','2021-07-25'),(3,'Unemployment Hackathons','2021-08-28','2021-08-29'),(4,'FemTec(Female-only) Hackathons','2021-09-25','2021-09-26'),(5,'Food Security and Agriculture Hackathons','2021-10-30','2021-10-31'),(6,'Energy Hackathons','2021-11-27','2021-11-28'),(7,' Annual Awards','2021-06-18','2021-06-19');
/*!40000 ALTER TABLE `upcomingevents` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-19  8:23:18
