var interval_barre1;
var interval_barre2;
var barre1			= 0 ;
var barre2			= 0 ;
var cligne_b1		= 0 ; 
var cligne_b2		= 0 ; 

function afficher_information_barre(evenement)
{
	// La propriété "target" de l'objet "evenement" renvoie l'élément qui a déclenché l'événement c-à-d l'élément survolé dans notre cas:
	// Récupère l'id du noeud parent du parent de l'élément survolé:
	var id_parent = evenement.target.parentNode.parentNode.id ;

	// Récupère l'élément correspondant à l'identifiant zone_info_barres1 ou zone_info_barres2:
	var zone_affichage = document.getElementById('zone_info_'+id_parent) ;
	
	// Récupère l'attribut "num" de l'element correspondant à l'id "num_barres1" ou "num_barres2"
	var num_barre = document.getElementById("num_"+id_parent).getAttribute('num') ;
	
	// Récupère l'attribut donné de l'élément survolé:
	var direction = evenement.target.getAttribute('direction') ;
	var vitesse = evenement.target.getAttribute('vitesse') ;
	var duree = evenement.target.getAttribute('duree') ;
	var couleur = evenement.target.getAttribute('fill') ;
	
	// Si la couleur de l'élément survolé est noire ou rouge foncée:
	if(couleur == 'darkred' || couleur == 'black')
	{
		// La couleur du texte dans la zone d'information est blanche:
		zone_affichage.style.color = 'white' ;
	}
	else
	{
		//Sinon la couleur du texte dans la zone d'information est noire:
		zone_affichage.style.color = 'black' ;
	}
	// Le fond de la zone d'information prend la couleur de l'élément survolé:
	zone_affichage.style.background = couleur ;
	
	
	// Définition du contenu de l'information:
	zone_affichage.innerHTML ='Zone: '+num_barre+'<br/>Direction: '+direction+'<br/>Vitesse: '+vitesse+' m/s ('+Math.round(vitesse*3.6)+' km/h)<br/>Durée: '+duree+' minutes' ;

	if(id_parent == 'barres1')
	{
		if(barre1!=0)
		{
			stop_clignoter_barre(id_parent) ;
		}
		barre1 = evenement.target.id ;
		
		// Lancement de la fonction clignoter_barre1() toutes les 0.5sec:
		interval_barre1 =  setInterval('clignoter_barre1()', 500) ;
	}
	else if(id_parent == 'barres2')
	{
		if(barre2 != 0)
		{
			stop_clignoter_barre(id_parent);
		}
		barre2 = evenement.target.id;
		interval_barre2 =  setInterval('clignoter_barre2()', 500) ;
	}
}

function sonID(objID) 
{ 
	return document.getElementById(objID) ; 
} 
function clignoter_barre1()
{ 
	cligne_b1++ ; 

	if(cligne_b1 == 1) 
	{ 
		sonID(barre1).style.visibility = 'hidden' ; 
		cligne_b1 = 1 ; 
	} 
	if( cligne_b1 == 2) 
	{	
		sonID(barre1).style.visibility = 'visible' ; 
		cligne_b1	=	0; 
	}	
}
function clignoter_barre2()
{ 
	cligne_b2++ ; 

	if(cligne_b2 == 1) 
	{ 
		sonID(barre2).style.visibility	= 'hidden' ; 
		cligne_b2 =	1 ; 
	} 
	if(cligne_b2 == 2) 
	{	
		sonID(barre2).style.visibility = 'visible' ; 
		cligne_b2 = 0 ; 
	}	
}


function stop_clignoter_barre(id_parent)
{
	if(id_parent == 'barres1')
	{
		sonID(barre1).style.visibility = 'visible';
		
		// Arrêt de l'exécution du traitement timer précédemment défini avec setInterval():
		clearInterval(interval_barre1) ;
	}	
	else if(id_parent == 'barres2')
	{
		sonID(barre2).style.visibility = 'visible' ;
		clearInterval(interval_barre2) ;
	}	
}