<div data-role = "page" id = "pagemajmedecin">
<?php
    include  "vues/entetepagemajmedecin.html";
   
?>
    <div data-role = "content"> 
    
        <div class = "ui-field-contain"> 
            <label id ="nomprenommedecin" > </label> 
            <label for = "adresse">Adresse </label>
            <input type=text  name = "adresse" id = "adresse"  />
            <label for="tel">Téléphone</label>
            <input type="tel" name="tel" id="tel"  />
            <label for="specialite">Spécialité complémentaire</label>
            <input type="text" name="specialite" id="specialite"  />
            <a href = "#" data-role = "button" id = "btnEnregistrerMajMedecin" data-inline="true"  > Valider </a>
        </div>
    </div>  <!-- /fin content -->
    
    
<?php    
    include "vues/piedpage.html";
?>
</div><!-- /fin page -->