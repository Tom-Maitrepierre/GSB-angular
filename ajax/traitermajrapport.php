<?php
session_start();
if(isset($_SESSION['visiteur'])){
    require_once '../data/pdogsbrapports.php'; 
    require_once '../data/pdogsbrapports.php'; 
    $idRapport = $_REQUEST['idRapport']; 
    $bilan = $_REQUEST['bilan']; 
    $motif = $_REQUEST['motif']; 
    $pdo = PdoGsbRapports::getPdo();
    $ret = $pdo->majRapport($idRapport,$bilan,$motif);
    echo $ret;
}
else{
    echo 0;
}
  
  
 ?>
