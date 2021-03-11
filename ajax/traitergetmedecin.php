<?php
session_start();
if(isset($_SESSION['visiteur'])){
    require_once '../data/pdogsbrapports.php'; 
    $idMedecin = $_REQUEST['idMedecin']; 
    $pdo = PdoGsbRapports::getPdo();
    $medecin = $pdo->getLeMedecin($idMedecin);
    echo json_encode( $medecin);
}
else{
    echo 0;
}
?>