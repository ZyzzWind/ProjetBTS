function zoomer(selection_zoom)
{
	// Récupère l'élément correspondant à l'identifiant donné:
	var zoom_defaut = document.getElementById('zoom_defaut') ; 
	
	// Définition du contenu de l'élément zoom_info avec la valeur du zoom récupérée:
	document.getElementById('valeur_zoom').innerHTML = selection_zoom ;
	
	// Si le zoom selectionné est différent de 100%:
	if(selection_zoom!=100)
	{	
		// On affiche un bouton avec lequel le zoom pourra être remis à 100%:
		zoom_defaut.innerHTML = '<input type="button" value="Rétablir le zoom par défaut" class="bouton" onclick="zoomer(100)"/>' ;
	}
	else
	{
		// Sinon on affiche rien et on met le curseur du zoom à la valeur 100:
		zoom_defaut.innerHTML = '' ;
		document.getElementById('zoom').value = 100 ;
	}

	// Pour chaque direction on appelle la fonction "creer_barres(...)":
	for(var i = 0 ; i < tab_direction.length ; i++)
	{
		// Si la réponse de la rose de comparaison n'est pas vide:
		if(reponse_comparaison!=0)
		{

			// On appelle la fonction "creer_barres(...)" pour les 2 roses	
			creer_barres(tab_direction[i], 
						reponse_principale.barre[tab_direction[i]]['vitesse'], 
						reponse_principale.barre[tab_direction[i]]['duree'], 
						selection_zoom, 
						echelle,
						"barres1"
						) ;
			creer_barres(tab_direction[i], 
						reponse_comparaison.barre[tab_direction[i]]['vitesse'], 
						reponse_comparaison.barre[tab_direction[i]]['duree'], 
						selection_zoom, 
						echelle,
						"barres2"
						) ;
		}	
		else
		{
			// Sinon uniquement pour la rose principale
			creer_barres(tab_direction[i], 
					reponse_principale.barre[tab_direction[i]]['vitesse'], 
					reponse_principale.barre[tab_direction[i]]['duree'], 
					selection_zoom, 
					echelle,
					"barres1"
					) ;

		}
	}
}

function zoomer_molette(evenement)
{
	// Récupère l'élément correspondant à l'identifiant "zoom":
	var zoom = document.getElementById('zoom');

	// SI le navigateur est FIREFOX
	if(navigator.userAgent.indexOf('Firefox') > -1)
	{
		// Définition de l'attribut "valeur" de l'objet "zoom":
		zoom.value = parseInt(zoom.value) - evenement.detail ;
	}
	else
	{
		zoom.value = parseInt(zoom.value) + evenement.wheelDelta/24 ;
	}
	
	// Appel de la fonction "zoomer":
 	zoomer(zoom.value) ;
	
	// Désactive le scroll par défaut de la page:
	if (evenement.preventDefault)
	{
        evenement.preventDefault() ;
	}	
    else
	{
        return false ;
	}	
}