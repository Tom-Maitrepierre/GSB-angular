<div data-role = "page" id = "pageajouterrapport">
<?php
    include "vues/entetepageavecboutons.html";
?>
    
    
    <div data-role = "content"> 
        <h3>Ajouter un rapport</h3>
        
        <label for="listeMedecins">Rechercher le médecin </label>
        <!-- retiré data-inset="true"-->
        <ul id="listeMedecins" data-role="listview" data-filter-theme="a" data-filter-placeholder="Nom..." data-filter="true" ></ul>

     <div class="ui-field-contain"> 
        <label for="medecin">Nom médecin</label>
        <input type="text"  id="medecin" value=""  class="required" />
        <label for="motif">Motif </label>
        <textarea  id="motif" value=""  class="required" ></textarea>
        <label for="bilan">Bilan</label>
        <textarea id="bilan" value="" class="required"></textarea>
        <label for="date">Date</label>
        <input type="date"  id="date" value="" class="required"/>
        <label for="lblmedicament">Médicaments offerts</label>
        
        <a href = "#" data-role = "button" id = "btnajoutmedicament" data-inline="true"  > Nouveau médicament</a>
            <div id="lesListesMedicaments" class="ui-field-contain"> 
            
            </div> <!-- /fin ui-field-containt les listes médicaments-->
        
     </div>  <!-- /fin ui-field-containt -->
         <a href = "#" data-role = "button" id = "btnenregistrerrapport" data-inline="true"  > Enregistrer</a>
    </div> <!-- /fin content -->
<?php    
    include "vues/piedpage.html";
?>
</div><!-- /fin page -->
