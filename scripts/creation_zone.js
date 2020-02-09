function creer_zones(id_lignes_zones, id_barres,  x, y)
{

	// Récupère l'élément correspondant à l'identifiant donné:
	var obj_ligne = document.getElementById(id_lignes_zones) ;
	var obj_barre = document.getElementById(id_barres) ;
	
	// indice de zone pour la boucle:
	var indice_de_zone ;
	
	// Définition de l'angle de départ (celui du Nord):
	var angle = (Math.PI/2) + (Math.PI/16) ;
	
	// Pour chaque zone:
	for(indice_de_zone = 0 ;
		indice_de_zone < 16 ;
		indice_de_zone++)
	{
		// Création d'un élément groupement:
		var zone = document.createElementNS(svgns, 'g') ;
		
		// Création d'un élément ligne:
		var ligne = document.createElementNS(svgns, 'line')
		
		// Définition des attributs pour l'élément 'zone':
		zone.setAttribute('id', tab_direction[indice_de_zone]+'_'+id_barres) ;
		zone.setAttribute('angle', angle) ;
		
		// Insertion du noeud enfant 'zone' pour l'élément 'obj_barre':
		obj_barre.appendChild(zone) ;
		
		// Définition des attributs pour l'élément 'ligne':
		ligne.setAttribute('x1', x) ;
		ligne.setAttribute('y1', y) ;
		ligne.setAttribute('x2', x+(Math.cos(angle)*x)) ;
		ligne.setAttribute('y2', y-(Math.sin(angle)*y)) ;
		
		// Insertion du noeud enfant 'ligne' pour l'élément 'obj_ligne':
		obj_ligne.appendChild(ligne) ;
		
		// Décrémentation de l'angle (on passe à la zone suivante):
		angle = angle - (Math.PI/8) ;
	}
}