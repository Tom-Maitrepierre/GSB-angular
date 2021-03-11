<?php
session_start();
if(isset($_SESSION['visiteur'])){
    require_once '../data/pdogsbrapports.php'; 
    $idMedecin = $_REQUEST['idMedecin']; 
    $pdo = PdoGsbRapports::getPdo();
    $lesRapports = $pdo->getLesRapports($idMedecin);
    echo json_encode($lesRapports);
}
else {
    echo 0;
}

?>

