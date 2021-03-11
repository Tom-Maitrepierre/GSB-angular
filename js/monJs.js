
$(function(){
      window.nomprenommedecin ="" ;
      window.nbMedicaments = 0;
      window.lesMedicaments =0;
      window.idMedecin = 0;
   /*----------------------------Toutes les pages-------------------------- */
   $(document).on( "pageinit", function(e ) {
            var page = window.location.hash.substr(1);// récupère la partie après #
            if(page!=""){
               $.get("ajax/traiterdemandepage.php",
                foncRetourConnecte );
            }
   });
   function foncRetourConnecte(data){
      if(data!=1)
           $.mobile.changePage("#");
    
   }
   /*-----------------------Page connexion----------------------------------*/
    $('#pageconnexion #btnconnexion').bind("click", function(e) {
            e.preventDefault();
            var mdp = $("#pageconnexion #mdp").val(); 
            var login = $("#pageconnexion #login").val();
            $.post("ajax/traiterconnexion.php",{
                        "mdp" : mdp,        
                        "login" : login },
                        foncRetourConnexion,"json" );
    });

    function foncRetourConnexion(data){
            if(data != null){
                $.mobile.changePage("#pageaccueil");
             }
             else{
                $("#pageconnexion #message").css({color:'red'});
                $("#pageconnexion #message").html("erreur de login et/ou mdp");
             }
    }
      /* -----------------------------page medecins-----------------------------*/
       $("#pagemedecins #listeMedecins").on( "filterablebeforefilter", function (e, data ){
                var nom = data.input.val();// on récupère la saisie
                if(nom && nom.length >=1){
                   $.post("ajax/traiterrecherchemedecins.php",{
                        "nom" : nom        
                  }, foncRetourRechercheMedecinPageMedecins,"json" );
              }
        });
        function foncRetourRechercheMedecinPageMedecins(data){
            var html ="";
            for(i=0; i < data.length;i++){
                 var medecin = data[i];
                 var id = medecin['id'];
                 var nom = medecin['nom'];
                 var prenom = medecin['prenom'];
                 var adresse = medecin['adresse'];
                 var tel = medecin['tel'];
                 html +="<li id=" + id +"><input type='hidden' value ="+tel+"><a href ='#' >" + nom + "  " + prenom + "  " + adresse ;
                 html +="</a></li>";
            }
             
                $("#pagemedecins #listeMedecins").html( html );
                $("#pagemedecins #listeMedecins").listview( "refresh" );
          

        }  
    
         // pour abonner un élément HTML générer dynamiquement, il faut utiliser cette syntaxe et on
         $("#pagemedecins #listeMedecins").on("click","li", function(e) { 
             var idMedecin = $(this).prop('id'); // attr déprécié
             window.idMedecin = idMedecin;
             // l'usage veut que les variables de type sélecteur commence par $
             var $medecin =  $("#pagemedecins #medecin");
             $medecin.val($(this).text());
             var numeroTel = $(this).find("input:hidden").val() ;
             $("#pagemajmedecin #tel").prop("href","tel:"+numeroTel);
             $("#pagevoirlesrapports #tel").prop("href","tel:"+numeroTel);
        
              $("#pagemedecins #listeMedecins").empty();
           
         });
    
        $("#pagemedecins").on( "pagebeforeshow", function (event, ui) {
            $("#pagemedecins #medecin").val(""); 
            $("#pagemedecins #listeMedecins").val(""); 
         } );
 /*----------------------Page mise à jour médecin-------------------*/  
         $("#pagemedecins #btnMajMedecin,#pagevoirlesrapports #btnMajMedecin ").on("click", function (e) {
            if($("#pagemedecins #medecin").val()==""){
                alert("Vous devez sélectionner un médecin");
                e.preventDefault();
            }
            else{
                $.post("ajax/traitergetmedecin.php",{
                        "idMedecin" : window.idMedecin       
                  }, foncRetourGetMedecin,"json" ); 
                
            }
             
         });
         function foncRetourGetMedecin(data){
             var nom = data['nom'];
             var prenom = data['prenom'];
             var adresse = data["adresse"];
             var tel = data["tel"];
             var specialite = data["specialitecomplementaire"];
             $("#pagemajmedecin #nomprenommedecin").text(nom + " " +prenom);
             $("#pagemajmedecin #adresse").val(adresse);
             $("#pagemajmedecin #specialite").val(specialite);
             $("#pagemajmedecin #tel").val(tel);
         }
         
     
         $("#pagemajmedecin #btnEnregistrerMajMedecin").bind("click",function(){
             var adresse = $("#pagemajmedecin #adresse").val();
             var tel = $("#pagemajmedecin #tel").val();
             var specialite =  $("#pagemajmedecin #specialite").val();
             $.post("ajax/traitermajmedecin.php",{
                        "idMedecin" : window.idMedecin,
                        "adresse" : adresse,
                        "tel" : tel,
                        "specialite" : specialite
                  }, foncRetourMajMedecin,"json" ); 
         });
         function foncRetourMajMedecin(data){
             
            
             if(data == 1)
                alert("Mise à jour effectuée");
         }
      /*----------------------------page  voir les rapports ------------------*/
       $("#pagemedecins #btnVoirRapports, #pagemajmedecin #btnVoirRapports").on( "click", function (e) {
            if($("#pagemedecins #medecin").val()==""){
                alert("Vous devez sélectionner un médecin");
                e.preventDefault();
            }
            else{
        
               $.post("ajax/traitergetlesrapports.php",{
                        "idMedecin" : window.idMedecin       
                  }, foncRetourGetLesRapports,"json" ); 
            }
       });
      function foncRetourGetLesRapports(data){
          var lesRapports = data;
          var html ="";
          for(i = 0; i<lesRapports.length ; i++ ){
              var unRapport = lesRapports[i];
              var motif = unRapport['motif'];
              var bilan = unRapport['bilan'];
              var date = unRapport['date'];
              var nomprenom = unRapport['nom'] + "  " + unRapport['prenom'] ;
              
              html+="<tr><td>" + date + "</td><td>" + motif + "</td><td>";
              html += bilan + "</td><td>" + nomprenom + "</td></tr>";
              
          }
          $("#pagevoirlesrapports #listeRapports").html(html);
          $("#pagevoirlesrapports #tabRapports").table("refresh");
      }
      
   
 /*----------------------------page  ajouter rapport ------------------*/              
            



      $("#pageajouterrapport").bind("pagebeforeshow",function(){
          
          $("#pageajouterrapport #medecin").val("");
          $("#pageajouterrapport #motif").val("");
          $("#pageajouterrapport #bilan").val("");
          window.nbMedicaments = 0;
      });
      
        $("#pageajouterrapport #listeMedecins").on( "filterablebeforefilter", function (e, data ){
            
               var nom = data.input.val();// on récupère la saisie
                if(nom && nom.length >=1){
                   $.post("ajax/traiterrecherchemedecins.php",{
                        "nom" : nom        
                  }, foncRetourRechercheMedecins,"json" );
              }
        });
        function foncRetourRechercheMedecins(data){
            var html ="";
            for(i=0; i < data.length;i++){
                 var medecin = data[i];
                 var id = medecin['id'];
                 var nom = medecin['nom'];
                 var prenom = medecin['prenom'];
                 var adresse = medecin['adresse'];
                 html +="<li id=" + id +"><a href ='#' >" + nom + "  " + prenom + "  " + adresse + "</a></li>";
            }
             
                $("#pageajouterrapport #listeMedecins").html( html );
                $("#pageajouterrapport #listeMedecins").listview( "refresh" );
            

        }
        // pour abonner un élément HTML générer dynamiquement, il faut utiliser cette syntaxe et on
         $("#pageajouterrapport #listeMedecins").on("click","li", function(e) { 
             var idMedecin = $(this).prop('id'); // attr déprécié
             window.idMedecin = idMedecin;
             // l'usage veut que les variables de type sélecteur commence par $
             var $medecin =  $("#pageajouterrapport #medecin");
             $medecin.val($(this).text());
              $("#pageajouterrapport #listeMedecins").empty();
              
         });
         
         $("#pageajouterrapport #btnajoutmedicament" ).bind("click",function(){
             window.nbMedicaments ++ ;
             var i = window.nbMedicaments;
             var html ="<div class=ui-field-contain>";
             html += "<ul id=listeMedicaments" + i + " data-role=listview ";
             html += " data-filter-theme=a data-filter-placeholder=Nom médicament... ";
             html += " data-filter=true data-inset=true></ul>";
             html += "<input id=medicament" + i + " type='text' name='' value=''/>";
             html += "<label for=nb >Indiquer le nombre d'exemplaires offerts :</label> ";
             html += " <input  id=qte" + i + " type='range' min=0 max=5 value=0 data-highlight=true /> </div> ";
            $("#pageajouterrapport #lesListesMedicaments").append(html);
            $("#pageajouterrapport #lesListesMedicaments").trigger( "create");
        //    $("#pageajouterrapport #lesListesMedicaments").trigger( "updatelayout");// peut-etre pas nécessaire
             
         });
           $("#pageajouterrapport #lesListesMedicaments").on( "filterablebeforefilter","ul", function (e, data ){
                var idul =  e.currentTarget.id; // on récupere l'id de l'ul grace à la classe event (e) 
                window.ul = idul;               // on stocke cet id pour être utilisé dans la fonction de retour
                var nommedicament = data.input.val();// on récupère la saisie
                if(nommedicament && nommedicament.length >=1){
                    $.post("ajax/traiterrechermedicaments.php",{
                        "nommedicament" : nommedicament      
                    }, foncRetourRechercheMedicaments,"json" );
                }
           });

           function foncRetourRechercheMedicaments(data){
               var html ="";
                for(i=0; i < data.length;i++){
                    var medicament = data[i];
                    var id = medicament['id'];
                    var nom = medicament['nomCommercial'];
                    html +="<li id=" + id +"><a href ='#' >" + nom + "</a></li>";
                }
                var idul = window.ul;// on récupère l'id de l'ul qui a généré la demande
                $("#pageajouterrapport #" + idul).html( html );
                $("#pageajouterrapport #" + idul).listview( "refresh" );
            }
         
         $("#pageajouterrapport #lesListesMedicaments").on("click","li", function(e,data) { 
             
            // On récupère l'id du li courant et le texte
             var idMedicament =  $(this).prop('id');
             var  medicament =  $(this).text();
             // on récupère l'element input text par rapport au li : son cousin!!
             var $input = $(this).parent().next().children();
             // on affecte à cet l'input le  nom du médicament sélectionné
             $input.val(medicament);
           // on affecte à l'input pour sa propriété name l'id du médicament sélectionné 
            $input.prop('name',idMedicament);
              $(this).parent().empty();
         });
         
          $("#pageajouterrapport #btnenregistrerrapport").bind("click",function(){
             var lesMedicaments = [];
              var idMedecin = window.idMedecin;
              var bilan = $("#pageajouterrapport #bilan").val();
              var motif = $("#pageajouterrapport #motif").val();
              var date = $("#pageajouterrapport #date").val();
              
              if(window.nbMedicaments >=1){
                     for(i= 1; i<= window.nbMedicaments; i++){
                            var idMedicament =   $("#pageajouterrapport #medicament" + i).prop("name");
                            var qte =  $("#pageajouterrapport #qte" + i).val();
                            if(idMedicament && qte !=0){
                                var medicament = {id:idMedicament,qte:qte };
                                lesMedicaments.push(medicament);
                            }
                    }
                }
             $.post("ajax/traiterajouterrapport.php",{
                    "idMedecin" : idMedecin,
                    "motif" : motif,
                    "bilan" : bilan,
                    "date" : date,
                    "lesMedicaments" : lesMedicaments,
                     },
                     foncRetourAjouterRapport,"json" );
              
          });
          
          function foncRetourAjouterRapport(data){
              
              if(data==1)alert("Votre rapport a bien été enregistré");
              else alert("Veuillez renouveler ultérieurement");
          }
   /*-----------------------------page choisir rapport à modifier----------------------------*/ 
        
       $("#pagechoisirrapportamodifier #date").bind("change",function(){
            var date = $("#pagechoisirrapportamodifier #date").val();
            var legende = "Visites effectuées le : " + date + " chez les médecins : ";
            $("#pagechoisirrapportamodifier #lgddate").html(legende) ;
            $.post("ajax/traiterlesvisitesaunedate.php",{
                        "date" : date        
                    }, foncRetourListeRapports,"json" );
        });
        function foncRetourListeRapports(data){
           $("#pagechoisirrapportamodifier #listerapports").empty();
           for( i = 0; i < data.length; i++){
                var unRapport = data[i];
                var idRapport = unRapport['idRapport'];
                var nomMedecin = unRapport['nomMedecin'] ;
                var prenomMedecin = unRapport['prenomMedecin'] ; 
                var html = "<li id =" + idRapport + "><a href='#' >" + nomMedecin + " " + prenomMedecin +"</a></li>";
                $("#pagechoisirrapportamodifier #listerapports").append(html);
            } 
            $("#pagechoisirrapportamodifier #listerapports").listview('refresh');
        }
       /* bug si on utilise .bind*/
        $("#pagechoisirrapportamodifier #listerapports").on("click","li", function(e) {  
              var idRapport = $(this).prop("id");
              window.idRapport = idRapport;
              var nomprenommedecin  = $(this).text();
              window.nomprenommedecin = nomprenommedecin;
              $.post("ajax/traiterchoixrapport.php",{
                    "idRapport" : idRapport
                     },
                     foncRetourChoixRapport,"json" );
          });
          function foncRetourChoixRapport(data){
            
               $.mobile.changePage("#pagerapportamodifier");
               $("#pagerapportamodifier #lblmedecin").html("Médecin : " + window.nomprenommedecin);
               var bilan = data['bilan'];
               var motif = data['motif'];
               $("#pagerapportamodifier #bilan").text(bilan); // l'attribut value n'est pas reconnu par un textarea
               $("#pagerapportamodifier #motif").text(motif);
           }
      /*-----------------------------page rapport à modifier----------------------------*/ 
       
        $("#pagerapportamodifier #btnmajrapport").bind("click",function(e){
            var motif = $("#pagerapportamodifier #motif").text();
            var bilan = $("#pagerapportamodifier #bilan").text();
            $.post("ajax/traitermajrapport.php",{
                    "idRapport" : window.idRapport,
                    "motif" : motif,
                    "bilan" : bilan
                     },
                     foncRetourMajRapport,"json" );
        });
        function foncRetourMajRapport(data){
           var message = "Votre mise à jour a bien été enregistrée";
           if(data != 1) 
               message = " Un incident nous empèche de traiter votre demande, veuillez recommencer ultérieurement"
           alert(message); 
           $.mobile.changePage("#pageaccueil");
        }
   
});     // Fin fonction principale

