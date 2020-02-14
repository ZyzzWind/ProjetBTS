function detecter_souris()
{
	// Récupère l'élément correspondant à l'identifiant donné:
	var barres1 = document.getElementById('barres1') ;
	var barres2 = document.getElementById('barres2') ;
	var rdv1 = document.getElementById('rose_des_vents1') ;
	var rdv2 = document.getElementById('rose_des_vents2') ;
	
	// Enregistre un gestionnaire pour un type d'évènement particulier sur l'élément:
	// barre1: quand on va passer la souris sur l'élément barres1, on va exécuter la fonction afficher_information_barre:
	barres1.addEventListener('mouseover', afficher_information_barre, false) ;
	barres2.addEventListener('mouseover', afficher_information_barre, false) ;
	
	
	if(navigator.userAgent.indexOf('Firefox') > -1)
	{
		// CODE POUR FIREFOX
		rdv1.addEventListener('DOMMouseScroll', zoomer_molette, false) ;
		rdv2.addEventListener('DOMMouseScroll', zoomer_molette, false) ;
	}
	else
	{
		rdv1.addEventListener('mousewheel', zoomer_molette, false) ;
		rdv2.addEventListener('mousewheel', zoomer_molette, false) ;
	}	
}