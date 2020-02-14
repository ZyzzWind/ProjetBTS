function afficher_selection(id_selection , nom_selection, valeur_selection)
{
	var selection = document.getElementById(nom_selection) ;
	var valeur_selection_tab = valeur_selection.split("_") ;
	
	// CODE POUR FIREFOX
	if(navigator.userAgent.indexOf('Firefox') > 0 || navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0)
	{
		if(id_selection == 1)
		{
			supprimer_rose_comparaison(document.getElementById('selection_comparer')) ;
			document.getElementById('2').innerHTML = '<option value="comparer" id="option_comparer">Comparer</option>' ;
			document.getElementById('2').innerHTML += '<option value="'+valeur_selection+'">1 '+valeur_selection_tab[2]+'</option>' ;
			if(valeur_selection == "auj")
			{
				modifier_periode_visualisation(id_selection, 0, 0, 0, 0, 0, 0) ;
				selection.innerHTML = "" ;
				document.getElementById('2').innerHTML = '<option value="comparer" id="option_comparer">Comparer</option>' ;
				document.getElementById('2').innerHTML += '<option value="date_,this.value, 0, 0, 0, 0, 0">1 jour</option>' ;
			}
			else if(valeur_selection_tab[0] == "date")
			{
				selection.innerHTML = '<form action="#rose_des_vents1"><input type="text" placeholder="aaaa-mm-jj" pattern="20[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" 	title="aaaa-mm-jj (ex: 2014-04-27)"  onchange="modifier_periode_visualisation_firefox('+id_selection+valeur_selection_tab[1]+')" maxlength="10" required="" /></form>' ;
			}
			else if(valeur_selection_tab[0] == "week")
			{
				selection.innerHTML = '<form action="#rose_des_vents1"><input type="text" placeholder="aaaa-sss" pattern="20[0-9]{2}-W(0[1-9]|[1-4][0-9]|50|51|52)$" 	title="aaaa-sss (ex: 2014-W05)"  onchange="modifier_periode_visualisation_firefox('+id_selection+valeur_selection_tab[1]+')" maxlength="8" required="" /></form>' ;
			}
			else if(valeur_selection_tab[0] == "month")
			{
				selection.innerHTML = '<form action="#rose_des_vents1"><input type="text" placeholder="aaaa-mm" pattern="20[0-9]{2}-(0[1-9]|1[0-2])" 	title="aaaa-mm (ex: 2014-06)"  onchange="modifier_periode_visualisation_firefox('+id_selection+valeur_selection_tab[1]+')" maxlength="7" required="" /></form>' ;
			}
			else if(valeur_selection_tab[0] == "number")
			{
				selection.innerHTML = '<form action="#rose_des_vents1"><input type="text" placeholder="aaaa" pattern="20[0-9]{2}" 	title="aaaa (ex: 2014)"  onchange="modifier_periode_visualisation_firefox('+id_selection+valeur_selection_tab[1]+')" maxlength="4" required="" /></form>' ;
			}
			else
			{
				selection.innerHTML = '<form action="#rose_des_vents1"> du <input type="text" id="perso1" placeholder="aaaa-mm-jj" pattern="20[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" title="aaaa-mm-jj (ex: 2014-04-27)" onchange="modifier_periode_visualisation_firefox(1, 0, 0, 0, 0, this.value, 0)" maxlength="10" required="" /><br/>au <input type="text" id="perso2" placeholder="aaaa-mm-jj" pattern="20[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" title="aaaa-mm-jj (ex: 2014-04-27)" onchange="modifier_periode_visualisation_firefox(1, 0, 0, 0, 0, 0, this.value)" maxlength="10" required=""/> </form>' ;
				document.getElementById('2').innerHTML = '<option value="comparer" id="option_comparer">Comparer</option>' ;
			}
		}
		else
		{	
			if(valeur_selection == "comparer")
			{
				supprimer_rose_comparaison(selection) ;
				document.getElementById('option_comparer').innerHTML = 'Comparer' ;
			}
			else
			{
				creer_rose_comparaison() ;
				document.getElementById('option_comparer').innerHTML = 'Annuler' ;
				if(valeur_selection_tab[0] == "date")
				{
					selection.innerHTML = '<form action="#rose_des_vents1"><input type="text" placeholder="aaaa-mm-jj" pattern="20[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" 	title="aaaa-mm-jj (ex: 2014-04-27)"  onchange="modifier_periode_visualisation_firefox('+id_selection+valeur_selection_tab[1]+')" maxlength="10" required="" /></form>' ;

				}
				else if(valeur_selection_tab[0] == "week")
				{
					selection.innerHTML = '<form action="#rose_des_vents1"><input type="text" placeholder="aaaa-sss" pattern="20[0-9]{2}-W(0[1-9]|[1-4][0-9]|50|51|52)" 	title="aaaa-sss (ex: 2014-W05)"  onchange="modifier_periode_visualisation_firefox('+id_selection+valeur_selection_tab[1]+')" maxlength="8" required="" /></form>' ;

				}
				else if(valeur_selection_tab[0] == "month")
				{
					selection.innerHTML = '<form action="#rose_des_vents1"><input type="text" placeholder="aaaa-mm" pattern="20[0-9]{2}-(0[1-9]|1[0-2])" 	title="aaaa-mm (ex: 2014-06)"  onchange="modifier_periode_visualisation_firefox('+id_selection+valeur_selection_tab[1]+')" maxlength="7" required="" /></form>' ;

				}
				else if(valeur_selection_tab[0] == "number")
				{
					selection.innerHTML = '<form action="#rose_des_vents1"><input type="text" placeholder="aaaa" pattern="20[0-9]{2}" 	title="aaaa (ex: 2014)"  onchange="modifier_periode_visualisation_firefox('+id_selection+valeur_selection_tab[1]+')" maxlength="4" required="" /></form>' ;

				}


			}
			
	
		}
	}
	else // CODE POUR LES AUTRES NAVIGATEURS
	{
		if(id_selection == 1)
		{
			supprimer_rose_comparaison(document.getElementById('selection_comparer')) ;
			document.getElementById('2').innerHTML = '<option value="comparer" id="option_comparer">Comparer</option>' ;
			document.getElementById('2').innerHTML += '<option value="'+valeur_selection+'">1 '+valeur_selection_tab[2]+'</option>' ;
			if(valeur_selection == "auj")
			{
				modifier_periode_visualisation(id_selection, 0, 0, 0, 0, 0, 0) ;
				selection.innerHTML = "" ;
				document.getElementById('2').innerHTML = '<option value="comparer" id="option_comparer">Comparer</option>' ;
				document.getElementById('2').innerHTML += '<option value="date_,this.value, 0, 0, 0, 0, 0">1 jour</option>' ;
			}
			else if(valeur_selection == "perso")
			{
				selection.innerHTML = 'du <input type="date" id="perso1" onchange="modifier_periode_visualisation(1, 0, 0, 0, 0, this.value, 0)" min="2014-01-01"/>' ;
				selection.innerHTML += '<br/>au <input type="date" id="perso2" onchange="modifier_periode_visualisation(1, 0, 0, 0, 0, 0, this.value)"/>' ;
				document.getElementById('2').innerHTML = '<option value="comparer" id="option_comparer">Comparer</option>' ;
			}
			else
			{
				selection.innerHTML = '<input type="'+valeur_selection_tab[0]+'" onchange="modifier_periode_visualisation('+id_selection+valeur_selection_tab[1]+')" />' ;
			}
		}
		else
		{	
			if(valeur_selection == "comparer")
			{
				supprimer_rose_comparaison(selection) ;
				document.getElementById('option_comparer').innerHTML = 'Comparer' ;
			}
			else
			{
				creer_rose_comparaison() ;
				selection.innerHTML = '<input type="'+valeur_selection_tab[0]+'" onchange="modifier_periode_visualisation('+id_selection+valeur_selection_tab[1]+')" />' ;
				document.getElementById('option_comparer').innerHTML = 'Annuler' ;
			}
		}
	}	
}
function supprimer_rose_comparaison(selection)
{
	document.getElementById('rose_des_vents2').style.display = 'none' ;
	document.getElementById('zone_info_barres2').innerHTML = '' ;
	document.getElementById('rose_des_vents1').style.zoom = '100%' ;
	document.getElementById('rose_des_vents1').style.MozTransform = 'scale(1)' ;
	document.getElementById('lignes_zones2').innerHTML = '' ;
	document.getElementById('barres2').innerHTML = '' ;
	selection.innerHTML = '' ;
	reponse_comparaison = 0 ;
	max_reponse_comparaison = 0 ;
}
function creer_rose_comparaison()
{
	if(navigator.userAgent.indexOf('Firefox') > -1 || navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0)
	{
		document.getElementById('rose_des_vents1').style.MozTransform = 'scale(0.75)' ;
		document.getElementById('rose_des_vents1').style.margin = '0 0 0 240px' ;
		document.getElementById('rose_des_vents1').style.zoom = '75%' ;
		document.getElementById('rose_des_vents2').setAttribute('style', 'position:absolute; zoom:75%; -moz-transform: scale(0.75); margin:0px 0px 0px 800px;padding-top:10px;') ;
	}
	else
	{
		document.getElementById('rose_des_vents1').style.zoom = '75%' ;
		document.getElementById('rose_des_vents2').setAttribute('style', 'zoom:75%; margin:0px 0px 0px 1100px; position:absolute; padding-top:10px;') ;

	}

	creer_zones('lignes_zones2', 'barres2', cercle_cx, cercle_cx) ;
}	