WINDMETER

Ce projet est un site permettant d'étudier les données du vents
sur la période choisie et le lieu choisi. De plus il permet une 
étude de la production énergétique des éoliennes.

Pré-requis

- Une machine sous OS GNU/Linux
- Installation de Crontab
- Un serveur web

Installation

- Mettre le site sur votre serveur web.
- Installer la base de données présente dans le dossier.
- Installer la sauvegarde de la base de données "savebdd.sql"
- Installer Crontab
- Modifier le fichier Crontab en ajoutant la ligne "0 0 * * * 'chemin vers le fichier recup.sh dans le dossier script'"

Utilisation spécifique

- Pour remplir la base de données executer le programme "remplir_base_de_donnees"

Réalisé avec

- Visual Studio Code - Editeur de textes
- Firefox/Chrome/Opera - Navigateur web
- VirtualBox - Logiciel de virtualisation
- MySQL Workbench -  logiciel de gestion et d'administration de bases de données MySQL
