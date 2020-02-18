var bouton_login = document.getElementById('button_login');

    bouton_login.onclick = function()
    {   
        
        menu_log = document.getElementById('login_div');
        if(menu_log.style.display == 'block')
        { 
            menu_log.style.display = 'none';
        }
        else
        {
            menu_log.style.display = 'block';
        }
    };

    


 
     
