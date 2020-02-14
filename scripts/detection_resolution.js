function detecter_resolution()
{
	// Définition du zoom selon la largueur et la hauteur de la résolution:
	var zoom = (screen.width + screen.height)/23 ;
	
	// Arrondi à l'unité:
	zoom = Math.round(zoom) ;

	// Définition du zoom de l'élément "contenu" avec le zoom calculé:
	document.getElementById('contenu').style.zoom = zoom+'%' ;
	document.getElementById('contenu').style.MozTransform = 'scale('+zoom/100+')' ;
	document.getElementById('contenu').style.MozTransformOrigin = '0 0 0' ;
}	