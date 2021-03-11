<div data-role = "page" id = "pagevoirlesrapports">
<?php
    include  "vues/entetepagevoirlesrapports.html";
   //  include  "vues/entetepagemedecins.html";
?>
    <div data-role = "content"> 
    
       
        <table class="table-stripe" id="tabRapports" data-role="table" data-mode="columntoggle"  data-column-btn-text="Colonnes à afficher..." >
                 <thead>
                   <tr >
                     <th>Date</th>
                     <th data-priority="2">Motif</th>
                     <th data-priority="3">Bilan</th>
                     <th data-priority="4">Visiteur</th>
                   </tr>
                 </thead>
                 <tbody id="listeRapports">
                     
                     
                 </tbody>
            </table>
           
            
            
        
    </div>  <!-- /fin content -->
    
    
<?php    
    include "vues/piedpage.html";
?>
</div><!-- /fin page -->
