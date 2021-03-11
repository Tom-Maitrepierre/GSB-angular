

<div data-role = "page" id = "pagemedecins">
<?php
    include  "vues/entetepagemedecins.html";
?>
    <div data-role = "content"> 
        <div class="ui-field-contain"> 
            <label for="listeMedecins">Rechercher un médecin </label>
            <ul id="listeMedecins" data-role="listview"  data-filter-placeholder="Nom..." data-filter="true" >
                
            </ul>
<!--            <label for="medecin">Nom médecin</label>-->
            <input type="text"  id="medecin" value=""  class="required" />
            
        
        </div>  <!-- /fin ui-field-containt -->
      
    </div> <!-- /fin content -->
<?php    
    include "vues/piedpage.html";
?>
</div><!-- /fin page -->

