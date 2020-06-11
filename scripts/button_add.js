function vent_add_1 () 
{
    if(navigator.userAgent.indexOf('Firefox') > -1 || navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0)
	{
		document.getElementById('rose_des_vents1').style.MozTransform = 'scale(0.75)' ;
		document.getElementById('rose_des_vents1').style.margin = '-300 -800 0 -240px' ;
		document.getElementById('rose_des_vents1').style.zoom = '75%' ;
        document.getElementById('rose_des_vents2').setAttribute('style', 'position:absolute; zoom:75%; -moz-transform: scale(0.75); margin:0px 0px 0px 800px;padding-top:10px;') ;
	}
	else
	{
        document.getElementById('rose_des_vents1').style.zoom = '75%' ;
        document.getElementById('rose_des_vents1').style.marginTop = '10%' ;
        document.getElementById('rose_des_vents1').style.marginRight = '50%' ;
		document.getElementById('rose_des_vents2').setAttribute('style', 'zoom:100%; margin:-35% 0% 0% 50%; position:absolute; padding-top:10px;') ;
    }
    creer_zones('lignes_zones2', 'barres2', cercle_cx, cercle_cx) ;
    document.getElementById('txt_periode_RDV_2').innerHTML = "Jusqu'à" ;
    document.getElementById('rose_2').style.display = "block" ;
    document.getElementById('boutton_RDV_1').style.display = "none" ;
    document.getElementById('boutton_RDV_2').style.display = "block" ;
    document.getElementById('rose_des_vents1').style.marginLeft = "-10%";
    document.getElementById('rose_des_vents2').style.marginLeft = "60%";
}

function vent_add_2 () 
{
    if(navigator.userAgent.indexOf('Firefox') > -1 || navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0)
	{
        document.getElementById('rose_des_vents3').setAttribute('style', 'position:absolute; zoom:75%; -moz-transform: scale(0.75); margin:0px 0px 0px 800px;padding-top:10px;') ;
	}
	else
	{
        document.getElementById('rose_des_vents3').setAttribute('style', 'zoom:100%; margin:-35% 0% 0% 50%; position:absolute; padding-top:10px;') ;
    }
    document.getElementById('rose_des_vents1').style.zoom = '65%' ;
    document.getElementById('boutton_RDV_2').style.display = "none" ;
    creer_zones('lignes_zones3', 'barres3', cercle_cx, cercle_cx) ;
    document.getElementById('txt_periode_RDV_3').innerHTML = "Jusqu'à" ;
    document.getElementById('rose_3').style.display = "block" ;
    document.getElementById('rose_des_vents1').setAttribute('style', 'zoom:60%; margin: 13% 0% 0% 0%; position:absolute; padding-top:10px;') ;
    
    document.getElementById('rose_des_vents2').style.marginTop = '-100%' ;
    document.getElementById('rose_des_vents2').style.marginLeft = '120%' ;

    document.getElementById('rose_des_vents3').style.marginTop = '-100%' ;
    document.getElementById('rose_des_vents3').style.marginLeft = '120%' ;

    document.getElementById('txt_periode_RDV_2').style.marginLeft = '-10%' ;

    document.getElementById('selectAnneeRDV_End_RDV_2').style.marginLeft = '-5%' ;
    document.getElementById('selectAnneeRDV_Start_RDV_2').style.marginLeft = '-5%' ;

    document.getElementById('selectMoisRDV_End_RDV_2').style.marginLeft = '-5%' ;
    document.getElementById('selectMoisRDV_Start_RDV_2').style.marginLeft = '-5%' ;

    document.getElementById('selectJoursRDV_End_RDV_2').style.marginLeft = '-5%' ;
    document.getElementById('selectJoursRDV_Start_RDV_2').style.marginLeft = '-5%' ;

    document.getElementById('selectPiouPiouRDV_2').style.marginLeft = '-5%' ;

    document.getElementById('txt_periode_RDV_1').style.marginLeft = '10%' ;
    
    document.getElementById('selectAnneeRDV_End_RDV_1').style.marginLeft = '5%' ;
    document.getElementById('selectAnneeRDV_Start_RDV_1').style.marginLeft = '5%' ;
    
    document.getElementById('selectMoisRDV_End_RDV_1').style.marginLeft = '5%' ;
    document.getElementById('selectMoisRDV_Start_RDV_1').style.marginLeft = '5%' ;
    
    document.getElementById('selectJoursRDV_End_RDV_1').style.marginLeft = '5%' ;
    document.getElementById('selectJoursRDV_Start_RDV_1').style.marginLeft = '5%' ;
    
    document.getElementById('selectPiouPiouRDV_1').style.marginLeft = '5%' ;
}

function eolienne_add_1() {
    document.getElementById('selectEolienneCPE3').style.visibility = "visible" ;
    document.getElementById('boutton_CPE_reset').style.display = "block" ;
    document.getElementById('boutton_CPE_1').style.display = "none" ;
    document.getElementById('boutton_CPE_2').style.display = "block" ;
    
    
    var select = document.getElementById('selectEolienneCPE3') ;
    
    var ID_Eolienne = new Option ("--- Eolienne 3 ---", "ID_Eolienne_3") ;

    select.appendChild(ID_Eolienne) ;

    var group_AH = document.createElement('optgroup') ;

    var Option_AH_1 = new Option ("ES 10", "ES_10") ;
    var Option_AH_2 = new Option ("Horizon_1_8", "Horizon 1.8") ;
    var Option_AH_3 = new Option ("R9000", "R9000") ;
    var Option_AH_4 = new Option ("Skystream_3_7", "Skystream_3_7") ;
    var Option_AH_5 = new Option ("Skystream_600", "Skystream 600") ;
    var Option_AH_6 = new Option ("Skystream_Hybrid_6", "Skystream Hybrid 6") ;
    var Option_AH_7 = new Option ("Whisper_100", "Whisper 100") ;
    var Option_AH_8 = new Option ("Whisper_200", "Whisper 200") ;
    var Option_AH_9 = new Option ("Whisper_500", "Whisper 500") ;
    var Option_AH_10 = new Option ("Windtronics_BTPS_6500", "Windtronics BTPS 6500") ;

    group_AH.label = "Axe Horizontale" ;
    group_AH.id = "Axe_Horizontale" ;

    group_AH.appendChild(Option_AH_1) ;
    group_AH.appendChild(Option_AH_2) ;
    group_AH.appendChild(Option_AH_3) ;
    group_AH.appendChild(Option_AH_4) ;
    group_AH.appendChild(Option_AH_5) ;
    group_AH.appendChild(Option_AH_6) ;
    group_AH.appendChild(Option_AH_7) ;
    group_AH.appendChild(Option_AH_8) ;
    group_AH.appendChild(Option_AH_9) ;
    group_AH.appendChild(Option_AH_10) ;

    select.appendChild(group_AH) ;

    var Option_AV_1 = new Option ("Nheowind_3D_50", "Nheowind 3D 50") ;
    var Option_AV_2 = new Option ("Nheowind_3D_100", "Nheowind 3D 100") ;
    var Option_AV_3 = new Option ("Eolienne_Philippe_Starck", "Eolienne Philippe Starck") ;
    var Option_AV_4 = new Option ("Windspire", "Windspire") ;

    var group_AV = document.createElement('optgroup') ;

    group_AV.label = "Axe Vertical" ;
    group_AV.id = "Axe_Vertical" ;

    group_AV.appendChild(Option_AV_1) ;
    group_AV.appendChild(Option_AV_2) ;
    group_AV.appendChild(Option_AV_3) ;
    group_AV.appendChild(Option_AV_4) ;

    select.appendChild(group_AV) ;

    var Option_T_1 = new Option ("AeoroCube", "AeoroCube") ;
    var Option_T_2 = new Option ("Elena", "Elena") ;

    var group_T = document.createElement('optgroup') ;

    group_T.label = "Turbolienne" ;
    group_T.id = "Turbolienne" ;

    group_T.appendChild(Option_T_1) ;
    group_T.appendChild(Option_T_2) ;

    select.appendChild(group_T) ;

    document.getElementById('selectEolienneCPE3').selectedIndex = 'ID_Eolienne_3' ;

}

function eolienne_add_2() {
    document.getElementById('selectEolienneCPE4').style.visibility = "visible" ;
    document.getElementById('boutton_CPE_2').style.display = "none" ;
    document.getElementById('boutton_CPE_3').style.display = "block" ;

    var select = document.getElementById('selectEolienneCPE4') ;

    var ID_Eolienne = new Option ("--- Eolienne 4 ---", "ID_Eolienne_4") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectEolienneCPE4').selectedIndex = 'ID_Eolienne_4' ;

    var group_AH = document.createElement('optgroup') ;

    var Option_AH_1 = new Option ("ES 10", "ES_10") ;
    var Option_AH_2 = new Option ("Horizon_1_8", "Horizon 1.8") ;
    var Option_AH_3 = new Option ("R9000", "R9000") ;
    var Option_AH_4 = new Option ("Skystream_3_7", "Skystream_3_7") ;
    var Option_AH_5 = new Option ("Skystream_600", "Skystream 600") ;
    var Option_AH_6 = new Option ("Skystream_Hybrid_6", "Skystream Hybrid 6") ;
    var Option_AH_7 = new Option ("Whisper_100", "Whisper 100") ;
    var Option_AH_8 = new Option ("Whisper_200", "Whisper 200") ;
    var Option_AH_9 = new Option ("Whisper_500", "Whisper 500") ;
    var Option_AH_10 = new Option ("Windtronics_BTPS_6500", "Windtronics BTPS 6500") ;

    group_AH.label = "Axe Horizontale" ;
    group_AH.id = "Axe_Horizontale" ;

    group_AH.appendChild(Option_AH_1) ;
    group_AH.appendChild(Option_AH_2) ;
    group_AH.appendChild(Option_AH_3) ;
    group_AH.appendChild(Option_AH_4) ;
    group_AH.appendChild(Option_AH_5) ;
    group_AH.appendChild(Option_AH_6) ;
    group_AH.appendChild(Option_AH_7) ;
    group_AH.appendChild(Option_AH_8) ;
    group_AH.appendChild(Option_AH_9) ;
    group_AH.appendChild(Option_AH_10) ;

    select.appendChild(group_AH) ;

    var Option_AV_1 = new Option ("Nheowind_3D_50", "Nheowind 3D 50") ;
    var Option_AV_2 = new Option ("Nheowind_3D_100", "Nheowind 3D 100") ;
    var Option_AV_3 = new Option ("Eolienne_Philippe_Starck", "Eolienne Philippe Starck") ;
    var Option_AV_4 = new Option ("Windspire", "Windspire") ;

    var group_AV = document.createElement('optgroup') ;

    group_AV.label = "Axe Vertical" ;
    group_AV.id = "Axe_Vertical" ;

    group_AV.appendChild(Option_AV_1) ;
    group_AV.appendChild(Option_AV_2) ;
    group_AV.appendChild(Option_AV_3) ;
    group_AV.appendChild(Option_AV_4) ;

    select.appendChild(group_AV) ;

    var Option_T_1 = new Option ("AeoroCube", "AeoroCube") ;
    var Option_T_2 = new Option ("Elena", "Elena") ;

    var group_T = document.createElement('optgroup') ;

    group_T.label = "Turbolienne" ;
    group_T.id = "Turbolienne" ;

    group_T.appendChild(Option_T_1) ;
    group_T.appendChild(Option_T_2) ;

    select.appendChild(group_T) ;

}

function eolienne_add_3() {
    document.getElementById('selectEolienneCPE5').style.visibility = "visible" ;
    document.getElementById('boutton_CPE_3').style.display = "none" ;
    document.getElementById('boutton_CPE_4').style.display = "block" ;

    var select = document.getElementById('selectEolienneCPE5') ;

    var ID_Eolienne = new Option ("--- Eolienne 5 ---", "ID_Eolienne_5") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectEolienneCPE5').selectedIndex = 'ID_Eolienne_5' ;

    var group_AH = document.createElement('optgroup') ;

    var Option_AH_1 = new Option ("ES 10", "ES_10") ;
    var Option_AH_2 = new Option ("Horizon_1_8", "Horizon 1.8") ;
    var Option_AH_3 = new Option ("R9000", "R9000") ;
    var Option_AH_4 = new Option ("Skystream_3_7", "Skystream_3_7") ;
    var Option_AH_5 = new Option ("Skystream_600", "Skystream 600") ;
    var Option_AH_6 = new Option ("Skystream_Hybrid_6", "Skystream Hybrid 6") ;
    var Option_AH_7 = new Option ("Whisper_100", "Whisper 100") ;
    var Option_AH_8 = new Option ("Whisper_200", "Whisper 200") ;
    var Option_AH_9 = new Option ("Whisper_500", "Whisper 500") ;
    var Option_AH_10 = new Option ("Windtronics_BTPS_6500", "Windtronics BTPS 6500") ;

    group_AH.label = "Axe Horizontale" ;
    group_AH.id = "Axe_Horizontale" ;

    group_AH.appendChild(Option_AH_1) ;
    group_AH.appendChild(Option_AH_2) ;
    group_AH.appendChild(Option_AH_3) ;
    group_AH.appendChild(Option_AH_4) ;
    group_AH.appendChild(Option_AH_5) ;
    group_AH.appendChild(Option_AH_6) ;
    group_AH.appendChild(Option_AH_7) ;
    group_AH.appendChild(Option_AH_8) ;
    group_AH.appendChild(Option_AH_9) ;
    group_AH.appendChild(Option_AH_10) ;

    select.appendChild(group_AH) ;

    var Option_AV_1 = new Option ("Nheowind_3D_50", "Nheowind 3D 50") ;
    var Option_AV_2 = new Option ("Nheowind_3D_100", "Nheowind 3D 100") ;
    var Option_AV_3 = new Option ("Eolienne_Philippe_Starck", "Eolienne Philippe Starck") ;
    var Option_AV_4 = new Option ("Windspire", "Windspire") ;

    var group_AV = document.createElement('optgroup') ;

    group_AV.label = "Axe Vertical" ;
    group_AV.id= "Axe_Vertical" ;

    group_AV.appendChild(Option_AV_1) ;
    group_AV.appendChild(Option_AV_2) ;
    group_AV.appendChild(Option_AV_3) ;
    group_AV.appendChild(Option_AV_4) ;

    select.appendChild(group_AV) ;

    var Option_T_1 = new Option ("AeoroCube", "AeoroCube") ;
    var Option_T_2 = new Option ("Elena", "Elena") ;

    var group_T = document.createElement('optgroup') ;

    group_T.label = "Turbolienne" ;
    group_T.id = "Turbolienne" ;

    group_T.appendChild(Option_T_1) ;
    group_T.appendChild(Option_T_2) ;

    select.appendChild(group_T) ;

}

function eolienne_add_4() {
    document.getElementById('selectEolienneCPE6').style.visibility = "visible" ;
    document.getElementById('boutton_CPE_4').style.display = "none" ;
    document.getElementById('boutton_CPE_5').style.display = "block" ;

    var select = document.getElementById('selectEolienneCPE6') ;

    var ID_Eolienne = new Option ("--- Eolienne 6 ---", "ID_Eolienne_6") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectEolienneCPE6').selectedIndex = 'ID_Eolienne_6' ;

    var group_AH = document.createElement('optgroup') ;

    var Option_AH_1 = new Option ("ES 10", "ES_10") ;
    var Option_AH_2 = new Option ("Horizon_1_8", "Horizon 1.8") ;
    var Option_AH_3 = new Option ("R9000", "R9000") ;
    var Option_AH_4 = new Option ("Skystream_3_7", "Skystream_3_7") ;
    var Option_AH_5 = new Option ("Skystream_600", "Skystream 600") ;
    var Option_AH_6 = new Option ("Skystream_Hybrid_6", "Skystream Hybrid 6") ;
    var Option_AH_7 = new Option ("Whisper_100", "Whisper 100") ;
    var Option_AH_8 = new Option ("Whisper_200", "Whisper 200") ;
    var Option_AH_9 = new Option ("Whisper_500", "Whisper 500") ;
    var Option_AH_10 = new Option ("Windtronics_BTPS_6500", "Windtronics BTPS 6500") ;

    group_AH.label = "Axe Horizontale" ;
    group_AH.id = "Axe_Horizontale" ;

    group_AH.appendChild(Option_AH_1) ;
    group_AH.appendChild(Option_AH_2) ;
    group_AH.appendChild(Option_AH_3) ;
    group_AH.appendChild(Option_AH_4) ;
    group_AH.appendChild(Option_AH_5) ;
    group_AH.appendChild(Option_AH_6) ;
    group_AH.appendChild(Option_AH_7) ;
    group_AH.appendChild(Option_AH_8) ;
    group_AH.appendChild(Option_AH_9) ;
    group_AH.appendChild(Option_AH_10) ;

    select.appendChild(group_AH) ;

    var Option_AV_1 = new Option ("Nheowind_3D_50", "Nheowind 3D 50") ;
    var Option_AV_2 = new Option ("Nheowind_3D_100", "Nheowind 3D 100") ;
    var Option_AV_3 = new Option ("Eolienne_Philippe_Starck", "Eolienne Philippe Starck") ;
    var Option_AV_4 = new Option ("Windspire", "Windspire") ;

    var group_AV = document.createElement('optgroup') ;

    group_AV.label = "Axe Vertical" ;
    group_AV.id = "Axe_Vertical" ;

    group_AV.appendChild(Option_AV_1) ;
    group_AV.appendChild(Option_AV_2) ;
    group_AV.appendChild(Option_AV_3) ;
    group_AV.appendChild(Option_AV_4) ;

    select.appendChild(group_AV) ;

    var Option_T_1 = new Option ("AeoroCube", "AeoroCube") ;
    var Option_T_2 = new Option ("Elena", "Elena") ;

    var group_T = document.createElement('optgroup') ;

    group_T.label = "Turbolienne" ;
    group_T.id = "Turbolienne" ;

    group_T.appendChild(Option_T_1) ;
    group_T.appendChild(Option_T_2) ;

    select.appendChild(group_T) ;

}

function eolienne_add_5() {
    document.getElementById('selectEolienneCPE7').style.visibility = "visible" ;
    document.getElementById('boutton_CPE_5').style.display = "none" ;
    document.getElementById('boutton_CPE_6').style.display = "block" ;

    var select = document.getElementById('selectEolienneCPE7') ;

    var ID_Eolienne = new Option ("--- Eolienne 7 ---", "ID_Eolienne_7") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectEolienneCPE7').selectedIndex = 'ID_Eolienne_7' ;

    var group_AH = document.createElement('optgroup') ;

    var Option_AH_1 = new Option ("ES 10", "ES_10") ;
    var Option_AH_2 = new Option ("Horizon_1_8", "Horizon 1.8") ;
    var Option_AH_3 = new Option ("R9000", "R9000") ;
    var Option_AH_4 = new Option ("Skystream_3_7", "Skystream_3_7") ;
    var Option_AH_5 = new Option ("Skystream_600", "Skystream 600") ;
    var Option_AH_6 = new Option ("Skystream_Hybrid_6", "Skystream Hybrid 6") ;
    var Option_AH_7 = new Option ("Whisper_100", "Whisper 100") ;
    var Option_AH_8 = new Option ("Whisper_200", "Whisper 200") ;
    var Option_AH_9 = new Option ("Whisper_500", "Whisper 500") ;
    var Option_AH_10 = new Option ("Windtronics_BTPS_6500", "Windtronics BTPS 6500") ;

    group_AH.label = "Axe Horizontale" ;
    group_AH.id = "Axe_Horizontale" ;

    group_AH.appendChild(Option_AH_1) ;
    group_AH.appendChild(Option_AH_2) ;
    group_AH.appendChild(Option_AH_3) ;
    group_AH.appendChild(Option_AH_4) ;
    group_AH.appendChild(Option_AH_5) ;
    group_AH.appendChild(Option_AH_6) ;
    group_AH.appendChild(Option_AH_7) ;
    group_AH.appendChild(Option_AH_8) ;
    group_AH.appendChild(Option_AH_9) ;
    group_AH.appendChild(Option_AH_10) ;

    select.appendChild(group_AH) ;

    var Option_AV_1 = new Option ("Nheowind_3D_50", "Nheowind 3D 50") ;
    var Option_AV_2 = new Option ("Nheowind_3D_100", "Nheowind 3D 100") ;
    var Option_AV_3 = new Option ("Eolienne_Philippe_Starck", "Eolienne Philippe Starck") ;
    var Option_AV_4 = new Option ("Windspire", "Windspire") ;

    var group_AV = document.createElement('optgroup') ;

    group_AV.label = "Axe Vertical" ;
    group_AV.id = "Axe_Vertical" ;

    group_AV.appendChild(Option_AV_1) ;
    group_AV.appendChild(Option_AV_2) ;
    group_AV.appendChild(Option_AV_3) ;
    group_AV.appendChild(Option_AV_4) ;

    select.appendChild(group_AV) ;

    var Option_T_1 = new Option ("AeoroCube", "AeoroCube") ;
    var Option_T_2 = new Option ("Elena", "Elena") ;

    var group_T = document.createElement('optgroup') ;

    group_T.label = "Turbolienne" ;
    group_T.id = "Turbolienne" ;

    group_T.appendChild(Option_T_1) ;
    group_T.appendChild(Option_T_2) ;

    select.appendChild(group_T) ;

}

function eolienne_add_6() {
    document.getElementById('selectEolienneCPE8').style.visibility = "visible" ;
    document.getElementById('boutton_CPE_6').style.display = "none" ;
    document.getElementById('boutton_CPE_7').style.display = "block" ;

    var select = document.getElementById('selectEolienneCPE8') ;

    var ID_Eolienne = new Option ("--- Eolienne 8 ---", "ID_Eolienne_8") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectEolienneCPE8').selectedIndex = 'ID_Eolienne_8' ;

    var group_AH = document.createElement('optgroup') ;

    var Option_AH_1 = new Option ("ES 10", "ES_10") ;
    var Option_AH_2 = new Option ("Horizon_1_8", "Horizon 1.8") ;
    var Option_AH_3 = new Option ("R9000", "R9000") ;
    var Option_AH_4 = new Option ("Skystream_3_7", "Skystream_3_7") ;
    var Option_AH_5 = new Option ("Skystream_600", "Skystream 600") ;
    var Option_AH_6 = new Option ("Skystream_Hybrid_6", "Skystream Hybrid 6") ;
    var Option_AH_7 = new Option ("Whisper_100", "Whisper 100") ;
    var Option_AH_8 = new Option ("Whisper_200", "Whisper 200") ;
    var Option_AH_9 = new Option ("Whisper_500", "Whisper 500") ;
    var Option_AH_10 = new Option ("Windtronics_BTPS_6500", "Windtronics BTPS 6500") ;

    group_AH.label = "Axe Horizontale" ;
    group_AH.id = "Axe_Horizontale" ;

    group_AH.appendChild(Option_AH_1) ;
    group_AH.appendChild(Option_AH_2) ;
    group_AH.appendChild(Option_AH_3) ;
    group_AH.appendChild(Option_AH_4) ;
    group_AH.appendChild(Option_AH_5) ;
    group_AH.appendChild(Option_AH_6) ;
    group_AH.appendChild(Option_AH_7) ;
    group_AH.appendChild(Option_AH_8) ;
    group_AH.appendChild(Option_AH_9) ;
    group_AH.appendChild(Option_AH_10) ;

    select.appendChild(group_AH) ;

    var Option_AV_1 = new Option ("Nheowind_3D_50", "Nheowind 3D 50") ;
    var Option_AV_2 = new Option ("Nheowind_3D_100", "Nheowind 3D 100") ;
    var Option_AV_3 = new Option ("Eolienne_Philippe_Starck", "Eolienne Philippe Starck") ;
    var Option_AV_4 = new Option ("Windspire", "Windspire") ;

    var group_AV = document.createElement('optgroup') ;

    group_AV.label = "Axe Vertical" ;
    group_AV.id= "Axe_Vertical" ;

    group_AV.appendChild(Option_AV_1) ;
    group_AV.appendChild(Option_AV_2) ;
    group_AV.appendChild(Option_AV_3) ;
    group_AV.appendChild(Option_AV_4) ;

    select.appendChild(group_AV) ;

    var Option_T_1 = new Option ("AeoroCube", "AeoroCube") ;
    var Option_T_2 = new Option ("Elena", "Elena") ;

    var group_T = document.createElement('optgroup') ;

    group_T.label = "Turbolienne" ;
    group_T.id = "Turbolienne" ;

    group_T.appendChild(Option_T_1) ;
    group_T.appendChild(Option_T_2) ;

    select.appendChild(group_T) ;

}

function eolienne_add_7() {
    document.getElementById('selectEolienneCPE9').style.visibility = "visible" ;
    document.getElementById('boutton_CPE_7').style.display = "none" ;
    document.getElementById('boutton_CPE_8').style.display = "block" ;

    var select = document.getElementById('selectEolienneCPE9') ;

    var ID_Eolienne = new Option ("--- Eolienne 9 ---", "ID_Eolienne_9") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectEolienneCPE9').selectedIndex = 'ID_Eolienne_9' ;

    var group_AH = document.createElement('optgroup') ;

    var Option_AH_1 = new Option ("ES 10", "ES_10") ;
    var Option_AH_2 = new Option ("Horizon_1_8", "Horizon 1.8") ;
    var Option_AH_3 = new Option ("R9000", "R9000") ;
    var Option_AH_4 = new Option ("Skystream_3_7", "Skystream_3_7") ;
    var Option_AH_5 = new Option ("Skystream_600", "Skystream 600") ;
    var Option_AH_6 = new Option ("Skystream_Hybrid_6", "Skystream Hybrid 6") ;
    var Option_AH_7 = new Option ("Whisper_100", "Whisper 100") ;
    var Option_AH_8 = new Option ("Whisper_200", "Whisper 200") ;
    var Option_AH_9 = new Option ("Whisper_500", "Whisper 500") ;
    var Option_AH_10 = new Option ("Windtronics_BTPS_6500", "Windtronics BTPS 6500") ;

    group_AH.label = "Axe Horizontale" ;
    group_AH.id = "Axe_Horizontale" ;

    group_AH.appendChild(Option_AH_1) ;
    group_AH.appendChild(Option_AH_2) ;
    group_AH.appendChild(Option_AH_3) ;
    group_AH.appendChild(Option_AH_4) ;
    group_AH.appendChild(Option_AH_5) ;
    group_AH.appendChild(Option_AH_6) ;
    group_AH.appendChild(Option_AH_7) ;
    group_AH.appendChild(Option_AH_8) ;
    group_AH.appendChild(Option_AH_9) ;
    group_AH.appendChild(Option_AH_10) ;

    select.appendChild(group_AH) ;

    var Option_AV_1 = new Option ("Nheowind_3D_50", "Nheowind 3D 50") ;
    var Option_AV_2 = new Option ("Nheowind_3D_100", "Nheowind 3D 100") ;
    var Option_AV_3 = new Option ("Eolienne_Philippe_Starck", "Eolienne Philippe Starck") ;
    var Option_AV_4 = new Option ("Windspire", "Windspire") ;

    var group_AV = document.createElement('optgroup') ;

    group_AV.label = "Axe Vertical" ;
    group_AV.id = "Axe_Vertical" ;

    group_AV.appendChild(Option_AV_1) ;
    group_AV.appendChild(Option_AV_2) ;
    group_AV.appendChild(Option_AV_3) ;
    group_AV.appendChild(Option_AV_4) ;

    select.appendChild(group_AV) ;

    var Option_T_1 = new Option ("AeoroCube", "AeoroCube") ;
    var Option_T_2 = new Option ("Elena", "Elena") ;

    var group_T = document.createElement('optgroup') ;

    group_T.label = "Turbolienne" ;
    group_T.id = "Turbolienne" ;

    group_T.appendChild(Option_T_1) ;
    group_T.appendChild(Option_T_2) ;

    select.appendChild(group_T) ;

}

function eolienne_add_8() {
    document.getElementById('selectEolienneCPE10').style.visibility = "visible" ;
    document.getElementById('boutton_CPE_8').style.display = "none" ;
    document.getElementById('boutton_CPE_9').style.display = "block" ;

    var select = document.getElementById('selectEolienneCPE10') ;

    var ID_Eolienne = new Option ("--- Eolienne 10 ---", "ID_Eolienne_10") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectEolienneCPE10').selectedIndex = 'ID_Eolienne_10' ;

    var group_AH = document.createElement('optgroup') ;

    var Option_AH_1 = new Option ("ES 10", "ES_10") ;
    var Option_AH_2 = new Option ("Horizon_1_8", "Horizon 1.8") ;
    var Option_AH_3 = new Option ("R9000", "R9000") ;
    var Option_AH_4 = new Option ("Skystream_3_7", "Skystream_3_7") ;
    var Option_AH_5 = new Option ("Skystream_600", "Skystream 600") ;
    var Option_AH_6 = new Option ("Skystream_Hybrid_6", "Skystream Hybrid 6") ;
    var Option_AH_7 = new Option ("Whisper_100", "Whisper 100") ;
    var Option_AH_8 = new Option ("Whisper_200", "Whisper 200") ;
    var Option_AH_9 = new Option ("Whisper_500", "Whisper 500") ;
    var Option_AH_10 = new Option ("Windtronics_BTPS_6500", "Windtronics BTPS 6500") ;

    group_AH.label = "Axe Horizontale" ;
    group_AH.id = "Axe_Horizontale" ;

    group_AH.appendChild(Option_AH_1) ;
    group_AH.appendChild(Option_AH_2) ;
    group_AH.appendChild(Option_AH_3) ;
    group_AH.appendChild(Option_AH_4) ;
    group_AH.appendChild(Option_AH_5) ;
    group_AH.appendChild(Option_AH_6) ;
    group_AH.appendChild(Option_AH_7) ;
    group_AH.appendChild(Option_AH_8) ;
    group_AH.appendChild(Option_AH_9) ;
    group_AH.appendChild(Option_AH_10) ;

    select.appendChild(group_AH) ;

    var Option_AV_1 = new Option ("Nheowind_3D_50", "Nheowind 3D 50") ;
    var Option_AV_2 = new Option ("Nheowind_3D_100", "Nheowind 3D 100") ;
    var Option_AV_3 = new Option ("Eolienne_Philippe_Starck", "Eolienne Philippe Starck") ;
    var Option_AV_4 = new Option ("Windspire", "Windspire") ;

    var group_AV = document.createElement('optgroup') ;

    group_AV.label = "Axe Vertical" ;
    group_AV.id = "Axe_Vertical" ;

    group_AV.appendChild(Option_AV_1) ;
    group_AV.appendChild(Option_AV_2) ;
    group_AV.appendChild(Option_AV_3) ;
    group_AV.appendChild(Option_AV_4) ;

    select.appendChild(group_AV) ;

    var Option_T_1 = new Option ("AeoroCube", "AeoroCube") ;
    var Option_T_2 = new Option ("Elena", "Elena") ;

    var group_T = document.createElement('optgroup') ;

    group_T.label = "Turbolienne" ;
    group_T.id = "Turbolienne" ;

    group_T.appendChild(Option_T_1) ;
    group_T.appendChild(Option_T_2) ;

    select.appendChild(group_T) ;

}

function eolienne_add_9() {
    document.getElementById('selectEolienneCPE11').style.visibility = "visible" ;
    document.getElementById('boutton_CPE_9').style.display = "none" ;

    var select = document.getElementById('selectEolienneCPE11') ;

    var ID_Eolienne = new Option ("--- Eolienne 11 ---", "ID_Eolienne_11") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectEolienneCPE11').selectedIndex = 'ID_Eolienne_11' ;

    var group_AH = document.createElement('optgroup') ;

    var Option_AH_1 = new Option ("ES 10", "ES_10") ;
    var Option_AH_2 = new Option ("Horizon_1_8", "Horizon 1.8") ;
    var Option_AH_3 = new Option ("R9000", "R9000") ;
    var Option_AH_4 = new Option ("Skystream_3_7", "Skystream_3_7") ;
    var Option_AH_5 = new Option ("Skystream_600", "Skystream 600") ;
    var Option_AH_6 = new Option ("Skystream_Hybrid_6", "Skystream Hybrid 6") ;
    var Option_AH_7 = new Option ("Whisper_100", "Whisper 100") ;
    var Option_AH_8 = new Option ("Whisper_200", "Whisper 200") ;
    var Option_AH_9 = new Option ("Whisper_500", "Whisper 500") ;
    var Option_AH_10 = new Option ("Windtronics_BTPS_6500", "Windtronics BTPS 6500") ;

    group_AH.label = "Axe Horizontale" ;
    group_AH.id = "Axe_Horizontale" ;

    group_AH.appendChild(Option_AH_1) ;
    group_AH.appendChild(Option_AH_2) ;
    group_AH.appendChild(Option_AH_3) ;
    group_AH.appendChild(Option_AH_4) ;
    group_AH.appendChild(Option_AH_5) ;
    group_AH.appendChild(Option_AH_6) ;
    group_AH.appendChild(Option_AH_7) ;
    group_AH.appendChild(Option_AH_8) ;
    group_AH.appendChild(Option_AH_9) ;
    group_AH.appendChild(Option_AH_10) ;

    select.appendChild(group_AH) ;

    var Option_AV_1 = new Option ("Nheowind_3D_50", "Nheowind 3D 50") ;
    var Option_AV_2 = new Option ("Nheowind_3D_100", "Nheowind 3D 100") ;
    var Option_AV_3 = new Option ("Eolienne_Philippe_Starck", "Eolienne Philippe Starck") ;
    var Option_AV_4 = new Option ("Windspire", "Windspire") ;

    var group_AV = document.createElement('optgroup') ;

    group_AV.label = "Axe Vertical" ;
    group_AV.id = "Axe_Vertical" ;

    group_AV.appendChild(Option_AV_1) ;
    group_AV.appendChild(Option_AV_2) ;
    group_AV.appendChild(Option_AV_3) ;
    group_AV.appendChild(Option_AV_4) ;

    select.appendChild(group_AV) ;

    var Option_T_1 = new Option ("AeoroCube", "AeoroCube") ;
    var Option_T_2 = new Option ("Elena", "Elena") ;

    var group_T = document.createElement('optgroup') ;

    group_T.label = "Turbolienne" ;
    group_T.id = "Turbolienne" ;

    group_T.appendChild(Option_T_1) ;
    group_T.appendChild(Option_T_2) ;

    select.appendChild(group_T) ;

}

function eolienne_reset_select() {
    document.getElementById('selectEolienneCPE11').style.visibility = "hidden" ;
    document.getElementById('selectEolienneCPE10').style.visibility = "hidden" ;
    document.getElementById('selectEolienneCPE9').style.visibility = "hidden" ;
    document.getElementById('selectEolienneCPE8').style.visibility = "hidden" ;
    document.getElementById('selectEolienneCPE7').style.visibility = "hidden" ;
    document.getElementById('selectEolienneCPE6').style.visibility = "hidden" ;
    document.getElementById('selectEolienneCPE5').style.visibility = "hidden" ;
    document.getElementById('selectEolienneCPE4').style.visibility = "hidden" ;
    document.getElementById('selectEolienneCPE3').style.visibility = "hidden" ;

    document.getElementById('boutton_CPE_reset').style.display = "none" ;
    
    document.getElementById('boutton_CPE_1').style.display = "block" ;
    document.getElementById('boutton_CPE_2').style.display = "none" ;
    document.getElementById('boutton_CPE_3').style.display = "none" ;
    document.getElementById('boutton_CPE_4').style.display = "none" ;
    document.getElementById('boutton_CPE_5').style.display = "none" ;
    document.getElementById('boutton_CPE_6').style.display = "none" ;
    document.getElementById('boutton_CPE_7').style.display = "none" ;
    document.getElementById('boutton_CPE_8').style.display = "none" ;
    document.getElementById('boutton_CPE_9').style.display = "none" ;

    document.getElementById('selectEolienneCPE1').selectedIndex = 'ID_Eolienne_1' ;
    document.getElementById('selectEolienneCPE2').selectedIndex = 'ID_Eolienne_2' ;
    
    var sel = document.getElementById('selectEolienneCPE3') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectEolienneCPE4') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectEolienneCPE5') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectEolienneCPE6') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectEolienneCPE7') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectEolienneCPE8') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectEolienneCPE9') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectEolienneCPE10') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectEolienneCPE11') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
}

function pioupiou_add_1() {
    document.getElementById('selectPiouPiouCPS3').style.visibility = "visible" ;
    document.getElementById('boutton_CPS_reset').style.display = "block" ;
    document.getElementById('boutton_CPS_1').style.display = "none" ;
    document.getElementById('boutton_CPS_2').style.display = "block" ;

    var select = document.getElementById('selectPiouPiouCPS3') ;

    var ID_Eolienne = new Option ("--- ID du PiouPiou 3 ---", "ID_PiouPiou_3") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectPiouPiouCPS3').selectedIndex = 'ID_PiouPiou_3' ;

    var Option_1 = new Option ("001", "001") ;
    var Option_2 = new Option ("002", "002") ;
    var Option_3 = new Option ("003", "003") ;
    var Option_4 = new Option ("004", "004") ;
    var Option_5 = new Option ("005", "005") ;
    var Option_6 = new Option ("006", "006") ;
    var Option_7 = new Option ("007", "007") ;
    var Option_8 = new Option ("008", "008") ;
    var Option_9 = new Option ("009", "009") ;
    var Option_10 = new Option ("010", "010") ;

    select.appendChild(Option_1) ;
    select.appendChild(Option_2) ;
    select.appendChild(Option_3) ;
    select.appendChild(Option_4) ;
    select.appendChild(Option_5) ;
    select.appendChild(Option_6) ;
    select.appendChild(Option_7) ;
    select.appendChild(Option_8) ;
    select.appendChild(Option_9) ;
    select.appendChild(Option_10) ;
}

function pioupiou_add_2() {
    document.getElementById('selectPiouPiouCPS4').style.visibility = "visible" ;
    document.getElementById('boutton_CPS_2').style.display = "none" ;
    document.getElementById('boutton_CPS_3').style.display = "block" ;

    var select = document.getElementById('selectPiouPiouCPS4') ;

    var ID_Eolienne = new Option ("--- ID du PiouPiou 4 ---", "ID_PiouPiou_4") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectPiouPiouCPS4').selectedIndex = 'ID_PiouPiou_4' ;

    var Option_1 = new Option ("001", "001") ;
    var Option_2 = new Option ("002", "002") ;
    var Option_3 = new Option ("003", "003") ;
    var Option_4 = new Option ("004", "004") ;
    var Option_5 = new Option ("005", "005") ;
    var Option_6 = new Option ("006", "006") ;
    var Option_7 = new Option ("007", "007") ;
    var Option_8 = new Option ("008", "008") ;
    var Option_9 = new Option ("009", "009") ;
    var Option_10 = new Option ("010", "010") ;

    select.appendChild(Option_1) ;
    select.appendChild(Option_2) ;
    select.appendChild(Option_3) ;
    select.appendChild(Option_4) ;
    select.appendChild(Option_5) ;
    select.appendChild(Option_6) ;
    select.appendChild(Option_7) ;
    select.appendChild(Option_8) ;
    select.appendChild(Option_9) ;
    select.appendChild(Option_10) ;
}

function pioupiou_add_3() {
    document.getElementById('selectPiouPiouCPS5').style.visibility = "visible" ;
    document.getElementById('boutton_CPS_3').style.display = "none" ;
    document.getElementById('boutton_CPS_4').style.display = "block" ;

    var select = document.getElementById('selectPiouPiouCPS5') ;

    var ID_Eolienne = new Option ("--- ID du PiouPiou 5 ---", "ID_PiouPiou_5") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectPiouPiouCPS5').selectedIndex = 'ID_PiouPiou_5' ;

    var Option_1 = new Option ("001", "001") ;
    var Option_2 = new Option ("002", "002") ;
    var Option_3 = new Option ("003", "003") ;
    var Option_4 = new Option ("004", "004") ;
    var Option_5 = new Option ("005", "005") ;
    var Option_6 = new Option ("006", "006") ;
    var Option_7 = new Option ("007", "007") ;
    var Option_8 = new Option ("008", "008") ;
    var Option_9 = new Option ("009", "009") ;
    var Option_10 = new Option ("010", "010") ;

    select.appendChild(Option_1) ;
    select.appendChild(Option_2) ;
    select.appendChild(Option_3) ;
    select.appendChild(Option_4) ;
    select.appendChild(Option_5) ;
    select.appendChild(Option_6) ;
    select.appendChild(Option_7) ;
    select.appendChild(Option_8) ;
    select.appendChild(Option_9) ;
    select.appendChild(Option_10) ;
}

function pioupiou_add_4() {
    document.getElementById('selectPiouPiouCPS6').style.visibility = "visible" ;
    document.getElementById('boutton_CPS_4').style.display = "none" ;
    document.getElementById('boutton_CPS_5').style.display = "block" ;

    var select = document.getElementById('selectPiouPiouCPS6') ;

    var ID_Eolienne = new Option ("--- ID du PiouPiou 6 ---", "ID_PiouPiou_6") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectPiouPiouCPS6').selectedIndex = 'ID_PiouPiou_6' ;

    var Option_1 = new Option ("001", "001") ;
    var Option_2 = new Option ("002", "002") ;
    var Option_3 = new Option ("003", "003") ;
    var Option_4 = new Option ("004", "004") ;
    var Option_5 = new Option ("005", "005") ;
    var Option_6 = new Option ("006", "006") ;
    var Option_7 = new Option ("007", "007") ;
    var Option_8 = new Option ("008", "008") ;
    var Option_9 = new Option ("009", "009") ;
    var Option_10 = new Option ("010", "010") ;

    select.appendChild(Option_1) ;
    select.appendChild(Option_2) ;
    select.appendChild(Option_3) ;
    select.appendChild(Option_4) ;
    select.appendChild(Option_5) ;
    select.appendChild(Option_6) ;
    select.appendChild(Option_7) ;
    select.appendChild(Option_8) ;
    select.appendChild(Option_9) ;
    select.appendChild(Option_10) ;
}

function pioupiou_add_5() {
    document.getElementById('selectPiouPiouCPS7').style.visibility = "visible" ;
    document.getElementById('boutton_CPS_5').style.display = "none" ;
    document.getElementById('boutton_CPS_6').style.display = "block" ;

    var select = document.getElementById('selectPiouPiouCPS7') ;

    var ID_Eolienne = new Option ("--- ID du PiouPiou 7 ---", "ID_PiouPiou_7") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectPiouPiouCPS7').selectedIndex = 'ID_PiouPiou_7' ;

    var Option_1 = new Option ("001", "001") ;
    var Option_2 = new Option ("002", "002") ;
    var Option_3 = new Option ("003", "003") ;
    var Option_4 = new Option ("004", "004") ;
    var Option_5 = new Option ("005", "005") ;
    var Option_6 = new Option ("006", "006") ;
    var Option_7 = new Option ("007", "007") ;
    var Option_8 = new Option ("008", "008") ;
    var Option_9 = new Option ("009", "009") ;
    var Option_10 = new Option ("010", "010") ;

    select.appendChild(Option_1) ;
    select.appendChild(Option_2) ;
    select.appendChild(Option_3) ;
    select.appendChild(Option_4) ;
    select.appendChild(Option_5) ;
    select.appendChild(Option_6) ;
    select.appendChild(Option_7) ;
    select.appendChild(Option_8) ;
    select.appendChild(Option_9) ;
    select.appendChild(Option_10) ;
}

function pioupiou_add_6() {
    document.getElementById('selectPiouPiouCPS8').style.visibility = "visible" ;
    document.getElementById('boutton_CPS_6').style.display = "none" ;
    document.getElementById('boutton_CPS_7').style.display = "block" ;

    var select = document.getElementById('selectPiouPiouCPS8') ;

    var ID_Eolienne = new Option ("--- ID du PiouPiou 8 ---", "ID_PiouPiou_8") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectPiouPiouCPS8').selectedIndex = 'ID_PiouPiou_8' ;

    var Option_1 = new Option ("001", "001") ;
    var Option_2 = new Option ("002", "002") ;
    var Option_3 = new Option ("003", "003") ;
    var Option_4 = new Option ("004", "004") ;
    var Option_5 = new Option ("005", "005") ;
    var Option_6 = new Option ("006", "006") ;
    var Option_7 = new Option ("007", "007") ;
    var Option_8 = new Option ("008", "008") ;
    var Option_9 = new Option ("009", "009") ;
    var Option_10 = new Option ("010", "010") ;

    select.appendChild(Option_1) ;
    select.appendChild(Option_2) ;
    select.appendChild(Option_3) ;
    select.appendChild(Option_4) ;
    select.appendChild(Option_5) ;
    select.appendChild(Option_6) ;
    select.appendChild(Option_7) ;
    select.appendChild(Option_8) ;
    select.appendChild(Option_9) ;
    select.appendChild(Option_10) ;
}

function pioupiou_add_7() {
    document.getElementById('selectPiouPiouCPS9').style.visibility = "visible" ;
    document.getElementById('boutton_CPS_7').style.display = "none" ;
    document.getElementById('boutton_CPS_8').style.display = "block" ;

    var select = document.getElementById('selectPiouPiouCPS9') ;

    var ID_Eolienne = new Option ("--- ID du PiouPiou 9 ---", "ID_PiouPiou_9") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectPiouPiouCPS9').selectedIndex = 'ID_PiouPiou_9' ;

    var Option_1 = new Option ("001", "001") ;
    var Option_2 = new Option ("002", "002") ;
    var Option_3 = new Option ("003", "003") ;
    var Option_4 = new Option ("004", "004") ;
    var Option_5 = new Option ("005", "005") ;
    var Option_6 = new Option ("006", "006") ;
    var Option_7 = new Option ("007", "007") ;
    var Option_8 = new Option ("008", "008") ;
    var Option_9 = new Option ("009", "009") ;
    var Option_10 = new Option ("010", "010") ;

    select.appendChild(Option_1) ;
    select.appendChild(Option_2) ;
    select.appendChild(Option_3) ;
    select.appendChild(Option_4) ;
    select.appendChild(Option_5) ;
    select.appendChild(Option_6) ;
    select.appendChild(Option_7) ;
    select.appendChild(Option_8) ;
    select.appendChild(Option_9) ;
    select.appendChild(Option_10) ;
}

function pioupiou_add_8() {
    document.getElementById('selectPiouPiouCPS10').style.visibility = "visible" ;
    document.getElementById('boutton_CPS_8').style.display = "none" ;
    document.getElementById('boutton_CPS_9').style.display = "block" ;

    var select = document.getElementById('selectPiouPiouCPS10') ;

    var ID_Eolienne = new Option ("--- ID du PiouPiou 10 ---", "ID_PiouPiou_10") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectPiouPiouCPS10').selectedIndex = 'ID_PiouPiou_10' ;

    var Option_1 = new Option ("001", "001") ;
    var Option_2 = new Option ("002", "002") ;
    var Option_3 = new Option ("003", "003") ;
    var Option_4 = new Option ("004", "004") ;
    var Option_5 = new Option ("005", "005") ;
    var Option_6 = new Option ("006", "006") ;
    var Option_7 = new Option ("007", "007") ;
    var Option_8 = new Option ("008", "008") ;
    var Option_9 = new Option ("009", "009") ;
    var Option_10 = new Option ("010", "010") ;

    select.appendChild(Option_1) ;
    select.appendChild(Option_2) ;
    select.appendChild(Option_3) ;
    select.appendChild(Option_4) ;
    select.appendChild(Option_5) ;
    select.appendChild(Option_6) ;
    select.appendChild(Option_7) ;
    select.appendChild(Option_8) ;
    select.appendChild(Option_9) ;
    select.appendChild(Option_10) ;
}

function pioupiou_add_9() {
    document.getElementById('selectPiouPiouCPS11').style.visibility = "visible" ;
    document.getElementById('boutton_CPS_9').style.display = "none" ;

    var select = document.getElementById('selectPiouPiouCPS11') ;

    var ID_Eolienne = new Option ("--- ID du PiouPiou 11 ---", "ID_PiouPiou_11") ;
    select.appendChild(ID_Eolienne) ;
    document.getElementById('selectPiouPiouCPS11').selectedIndex = 'ID_PiouPiou_11' ;

    var Option_1 = new Option ("001", "001") ;
    var Option_2 = new Option ("002", "002") ;
    var Option_3 = new Option ("003", "003") ;
    var Option_4 = new Option ("004", "004") ;
    var Option_5 = new Option ("005", "005") ;
    var Option_6 = new Option ("006", "006") ;
    var Option_7 = new Option ("007", "007") ;
    var Option_8 = new Option ("008", "008") ;
    var Option_9 = new Option ("009", "009") ;
    var Option_10 = new Option ("010", "010") ;

    select.appendChild(Option_1) ;
    select.appendChild(Option_2) ;
    select.appendChild(Option_3) ;
    select.appendChild(Option_4) ;
    select.appendChild(Option_5) ;
    select.appendChild(Option_6) ;
    select.appendChild(Option_7) ;
    select.appendChild(Option_8) ;
    select.appendChild(Option_9) ;
    select.appendChild(Option_10) ;
}

function pioupiou_reset_select() {
    document.getElementById('selectPiouPiouCPS11').style.visibility = "hidden" ;
    document.getElementById('selectPiouPiouCPS10').style.visibility = "hidden" ;
    document.getElementById('selectPiouPiouCPS9').style.visibility = "hidden" ;
    document.getElementById('selectPiouPiouCPS8').style.visibility = "hidden" ;
    document.getElementById('selectPiouPiouCPS7').style.visibility = "hidden" ;
    document.getElementById('selectPiouPiouCPS6').style.visibility = "hidden" ;
    document.getElementById('selectPiouPiouCPS5').style.visibility = "hidden" ;
    document.getElementById('selectPiouPiouCPS4').style.visibility = "hidden" ;
    document.getElementById('selectPiouPiouCPS3').style.visibility = "hidden" ;

    document.getElementById('boutton_CPS_reset').style.display = "none" ;
    
    document.getElementById('boutton_CPS_1').style.display = "block" ;
    document.getElementById('boutton_CPS_2').style.display = "none" ;
    document.getElementById('boutton_CPS_3').style.display = "none" ;
    document.getElementById('boutton_CPS_4').style.display = "none" ;
    document.getElementById('boutton_CPS_5').style.display = "none" ;
    document.getElementById('boutton_CPS_6').style.display = "none" ;
    document.getElementById('boutton_CPS_7').style.display = "none" ;
    document.getElementById('boutton_CPS_8').style.display = "none" ;
    document.getElementById('boutton_CPS_9').style.display = "none" ;

    document.getElementById('selectPiouPiouCPS1').selectedIndex = 'ID_pioupiou_1' ;
    document.getElementById('selectPiouPiouCPS2').selectedIndex = 'ID_pioupiou_2' ;
    
    var sel = document.getElementById('selectPiouPiouCPS3') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectPiouPiouCPS4') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectPiouPiouCPS5') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectPiouPiouCPS6') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectPiouPiouCPS7') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectPiouPiouCPS8') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectPiouPiouCPS9') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectPiouPiouCPS10') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
    
    var sel = document.getElementById('selectPiouPiouCPS11') ;
    while (sel.firstChild) {
        sel.removeChild(sel.firstChild) ;
    }
}