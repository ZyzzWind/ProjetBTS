-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 13 mars 2020 à 13:09
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

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
-- Structure de la table `donnees_vent`
--

DROP TABLE IF EXISTS `donnees_vent`;
CREATE TABLE IF NOT EXISTS `donnees_vent` (
  `iddonnees_vent` int(11) NOT NULL AUTO_INCREMENT,
  `annee` int(11) NOT NULL,
  `mois` int(11) NOT NULL,
  `jour` int(11) NOT NULL,
  `heure` int(11) NOT NULL,
  `minute` int(11) NOT NULL,
  `seconde` int(11) NOT NULL,
  `wind_speed_avg` float NOT NULL,
  `wind_heading` float NOT NULL,
  `lieux_idlieux` int(11) NOT NULL,
  PRIMARY KEY (`iddonnees_vent`),
  KEY `fk_donnees_vent_lieux_idx` (`lieux_idlieux`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `donnees_vent`
--

INSERT INTO `donnees_vent` (`iddonnees_vent`, `annee`, `mois`, `jour`, `heure`, `minute`, `seconde`, `wind_speed_avg`, `wind_heading`, `lieux_idlieux`) VALUES
(2, 2020, 1, 21, 8, 40, 27, 9, 135, 2);

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
  `temps_de_reponse` float NOT NULL,
  PRIMARY KEY (`ideoliennes`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
  PRIMARY KEY (`idlieux`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lieux`
--

INSERT INTO `lieux` (`idlieux`, `id_pioupiou`, `latitude`, `longitude`) VALUES
(1, 2, 45.273475, 5.640863);

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
  PRIMARY KEY (`idutilisateurs`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
