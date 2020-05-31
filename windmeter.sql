-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 31 mai 2020 à 18:28
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `windmeter`
--

-- --------------------------------------------------------

--
-- Structure de la table `caracteristiques_de_transfert`
--

DROP TABLE IF EXISTS `caracteristiques_de_transfert`;
CREATE TABLE IF NOT EXISTS `caracteristiques_de_transfert` (
  `idcaracteristiques_de_transfert` int(11) NOT NULL AUTO_INCREMENT,
  `puissance` int(11) NOT NULL,
  `vitesse` int(11) NOT NULL,
  `eoliennes_ideoliennes` int(11) DEFAULT NULL,
  PRIMARY KEY (`idcaracteristiques_de_transfert`),
  UNIQUE KEY `idcaracteristiques_de_transfert_UNIQUE` (`idcaracteristiques_de_transfert`),
  KEY `fk_caracteristiques_de_transfert_eoliennes1_idx` (`eoliennes_ideoliennes`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `caracteristiques_de_transfert`
--

INSERT INTO `caracteristiques_de_transfert` (`idcaracteristiques_de_transfert`, `puissance`, `vitesse`, `eoliennes_ideoliennes`) VALUES
(1, 10, 5, NULL),
(2, 100, 6, NULL),
(3, 200, 7, NULL),
(4, 300, 8, NULL),
(5, 400, 9, NULL),
(6, 500, 10, NULL),
(7, 600, 11, NULL),
(8, 800, 12, NULL),
(9, 900, 13, NULL),
(10, 1200, 14, NULL),
(11, 1400, 15, NULL),
(12, 1600, 16, NULL),
(13, 1900, 17, NULL),
(14, 2200, 18, NULL),
(15, 2500, 19, NULL),
(16, 2800, 20, NULL),
(17, 3100, 21, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `donnees_vent`
--

DROP TABLE IF EXISTS `donnees_vent`;
CREATE TABLE IF NOT EXISTS `donnees_vent` (
  `iddonnees_vent` int(11) NOT NULL AUTO_INCREMENT,
  `time_p` datetime DEFAULT NULL,
  `wind_speed_avg` int(11) DEFAULT NULL,
  `wind_heading_secteur` varchar(5) DEFAULT NULL,
  `useful_wind_speed_1` float DEFAULT NULL,
  `useful_wind_speed_2` float DEFAULT NULL,
  `useful_wind_speed_3` float DEFAULT NULL,
  `useful_wind_speed_4` float DEFAULT NULL,
  `lieux_idlieux` int(11) DEFAULT NULL,
  PRIMARY KEY (`iddonnees_vent`),
  UNIQUE KEY `iddonnees_vent_UNIQUE` (`iddonnees_vent`),
  KEY `fk_donnees_vent_lieux_idx` (`lieux_idlieux`)
) ENGINE=InnoDB AUTO_INCREMENT=257 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `donnees_vent`
--

INSERT INTO `donnees_vent` (`iddonnees_vent`, `time_p`, `wind_speed_avg`, `wind_heading_secteur`, `useful_wind_speed_1`, `useful_wind_speed_2`, `useful_wind_speed_3`, `useful_wind_speed_4`, `lieux_idlieux`) VALUES
(61, '2020-04-05 09:49:34', 9, NULL, NULL, NULL, NULL, NULL, NULL),
(62, '2020-04-05 09:53:38', 6, NULL, NULL, NULL, NULL, NULL, NULL),
(63, '2020-04-05 09:57:38', 12, NULL, NULL, NULL, NULL, NULL, NULL),
(64, '2020-04-05 10:01:38', 4, NULL, NULL, NULL, NULL, NULL, NULL),
(65, '2020-04-05 10:05:41', 3, NULL, NULL, NULL, NULL, NULL, NULL),
(66, '2020-04-05 10:09:41', 6, NULL, NULL, NULL, NULL, NULL, NULL),
(67, '2020-04-05 10:13:41', 4, NULL, NULL, NULL, NULL, NULL, NULL),
(68, '2020-04-05 10:17:46', 7, NULL, NULL, NULL, NULL, NULL, NULL),
(69, '2020-04-05 10:21:46', 6, NULL, NULL, NULL, NULL, NULL, NULL),
(70, '2020-04-05 10:25:46', 9, NULL, NULL, NULL, NULL, NULL, NULL),
(71, '2020-04-05 10:29:50', 7, NULL, NULL, NULL, NULL, NULL, NULL),
(72, '2020-04-05 10:33:50', 7, NULL, NULL, NULL, NULL, NULL, NULL),
(73, '2020-04-05 10:37:50', 10, NULL, NULL, NULL, NULL, NULL, NULL),
(74, '2020-04-05 10:41:54', 14, NULL, NULL, NULL, NULL, NULL, NULL),
(75, '2020-04-05 10:45:54', 11, NULL, NULL, NULL, NULL, NULL, NULL),
(76, '2020-04-05 10:49:54', 14, NULL, NULL, NULL, NULL, NULL, NULL),
(77, '2020-04-05 10:53:58', 12, NULL, NULL, NULL, NULL, NULL, NULL),
(78, '2020-04-05 10:57:58', 13, NULL, NULL, NULL, NULL, NULL, NULL),
(79, '2020-04-05 11:01:58', 12, NULL, NULL, NULL, NULL, NULL, NULL),
(80, '2020-04-05 11:06:02', 11, NULL, NULL, NULL, NULL, NULL, NULL),
(81, '2020-04-05 11:10:02', 11, NULL, NULL, NULL, NULL, NULL, NULL),
(82, '2020-04-05 11:14:02', 12, NULL, NULL, NULL, NULL, NULL, NULL),
(83, '2020-04-05 11:18:06', 9, NULL, NULL, NULL, NULL, NULL, NULL),
(84, '2020-04-05 11:22:06', 14, NULL, NULL, NULL, NULL, NULL, NULL),
(85, '2020-04-05 11:26:06', 14, NULL, NULL, NULL, NULL, NULL, NULL),
(86, '2020-04-05 11:30:11', 11, NULL, NULL, NULL, NULL, NULL, NULL),
(87, '2020-04-05 16:03:39', 15, NULL, NULL, NULL, NULL, NULL, NULL),
(228, '2020-01-05 09:49:34', 11, NULL, NULL, NULL, NULL, NULL, NULL),
(229, '2020-01-05 09:53:38', 3, NULL, NULL, NULL, NULL, NULL, NULL),
(230, '2020-01-05 09:57:38', 15, NULL, NULL, NULL, NULL, NULL, NULL),
(231, '2020-01-05 10:01:38', 11, NULL, NULL, NULL, NULL, NULL, NULL),
(232, '2020-01-05 16:03:39', 9, NULL, NULL, NULL, NULL, NULL, NULL),
(233, '2020-01-05 10:05:41', 26, NULL, NULL, NULL, NULL, NULL, NULL),
(234, '2020-01-05 10:09:41', 10, NULL, NULL, NULL, NULL, NULL, NULL),
(235, '2020-01-05 10:13:41', 7, NULL, NULL, NULL, NULL, NULL, NULL),
(236, '2020-01-05 10:17:46', 4, NULL, NULL, NULL, NULL, NULL, NULL),
(237, '2020-01-05 10:21:46', 10, NULL, NULL, NULL, NULL, NULL, NULL),
(238, '2020-01-05 10:25:46', 14, NULL, NULL, NULL, NULL, NULL, NULL),
(239, '2020-01-05 10:29:50', 10, NULL, NULL, NULL, NULL, NULL, NULL),
(240, '2020-01-05 10:33:50', 9, NULL, NULL, NULL, NULL, NULL, NULL),
(241, '2020-01-05 10:37:50', 10, NULL, NULL, NULL, NULL, NULL, NULL),
(242, '2020-01-05 10:41:54', 14, NULL, NULL, NULL, NULL, NULL, NULL),
(243, '2020-01-05 10:45:54', 11, NULL, NULL, NULL, NULL, NULL, NULL),
(244, '2020-01-05 10:49:54', 6, NULL, NULL, NULL, NULL, NULL, NULL),
(245, '2020-01-05 10:53:58', 18, NULL, NULL, NULL, NULL, NULL, NULL),
(246, '2020-01-05 10:57:58', 13, NULL, NULL, NULL, NULL, NULL, NULL),
(247, '2020-01-05 11:01:58', 12, NULL, NULL, NULL, NULL, NULL, NULL),
(248, '2020-01-05 11:06:02', 11, NULL, NULL, NULL, NULL, NULL, NULL),
(249, '2020-01-05 11:10:02', 11, NULL, NULL, NULL, NULL, NULL, NULL),
(250, '2020-01-05 11:14:02', 3, NULL, NULL, NULL, NULL, NULL, NULL),
(251, '2020-01-05 11:18:06', 15, NULL, NULL, NULL, NULL, NULL, NULL),
(252, '2020-01-05 11:22:06', 14, NULL, NULL, NULL, NULL, NULL, NULL),
(253, '2020-01-05 11:26:06', 14, NULL, NULL, NULL, NULL, NULL, NULL),
(254, '2020-01-05 11:30:11', 6, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `eoliennes`
--

DROP TABLE IF EXISTS `eoliennes`;
CREATE TABLE IF NOT EXISTS `eoliennes` (
  `ideoliennes` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  `model` varchar(255) NOT NULL,
  `rayon` float NOT NULL,
  `vitesse_max` float NOT NULL,
  `vitesse_min` float NOT NULL,
  `prix` float NOT NULL,
  `puissance_nominale` float NOT NULL,
  `temps_de_reponse_a_un_echelon_montant` float NOT NULL,
  `temps_de_reponse_pour_pivoter_a_90` float NOT NULL,
  `temps_de_reponse_pour_pivoter_a_180` float NOT NULL,
  `useful_wind_speed` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ideoliennes`),
  UNIQUE KEY `ideoliennes_UNIQUE` (`ideoliennes`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `lieux`
--

DROP TABLE IF EXISTS `lieux`;
CREATE TABLE IF NOT EXISTS `lieux` (
  `idlieux` int(11) NOT NULL AUTO_INCREMENT,
  `id_pioupiou` int(11) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `lieux` varchar(45) NOT NULL,
  PRIMARY KEY (`idlieux`),
  UNIQUE KEY `id_pioupiou_UNIQUE` (`id_pioupiou`),
  UNIQUE KEY `idlieux_UNIQUE` (`idlieux`),
  UNIQUE KEY `lieux_UNIQUE` (`lieux`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `idutilisateurs` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(45) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`idutilisateurs`),
  UNIQUE KEY `user_UNIQUE` (`user`),
  UNIQUE KEY `mail_UNIQUE` (`mail`),
  UNIQUE KEY `password_UNIQUE` (`password`),
  UNIQUE KEY `idutilisateurs_UNIQUE` (`idutilisateurs`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `caracteristiques_de_transfert`
--
ALTER TABLE `caracteristiques_de_transfert`
  ADD CONSTRAINT `fk_caracteristiques_de_transfert_eoliennes1` FOREIGN KEY (`eoliennes_ideoliennes`) REFERENCES `eoliennes` (`ideoliennes`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `donnees_vent`
--
ALTER TABLE `donnees_vent`
  ADD CONSTRAINT `fk_donnees_vent_lieux` FOREIGN KEY (`lieux_idlieux`) REFERENCES `lieux` (`idlieux`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
