<script>

    var année_Select = document.getElementById('selectAnneePPE');
    var pioupiou_Select = document.getElementById('selectPiouPiouPPE');
    var éolienne_Select = document.getElementById('selectEoliennePPE');

    var tableau_Données = [];


        année_Select.onChange = function()
        {
            tableau_Données[0] = année_Select.selectedIndex; 
        };

        pioupiou_Select.onChange = function()
        {
            tableau_Données[1] = pioupiou_Select.selectedIndex;
        };

        éolienne_Select.onChange = function()
        {
            tableau_Données[2] = éolienne_Select.selectedIndex;
        };

        if(tableau_Données[0])
        {
            console.log("cc");
        }
</script>

