<?php
session_start();
if(isset($_SESSION['visiteur'])){
    require_once '../data/pdogsbrapports.php'; 
    $idMedecin = $_REQUEST['idMedecin']; 
    $bilan = $_REQUEST['bilan']; 
    $motif = $_REQUEST['motif']; 
    $date = $_REQUEST['date'];
    $idVisiteur = $_SESSION['visiteur']['id'];
    $lesMedicaments =  $_REQUEST['lesMedicaments'];
    $pdo = PdoGsbRapports::getPdo();
    $ret = $pdo->ajouterRapport($idMedecin,$idVisiteur, $bilan, $motif, $date, $lesMedicaments);
    echo $ret;
}
 else{
    echo 0;
}
        
?>