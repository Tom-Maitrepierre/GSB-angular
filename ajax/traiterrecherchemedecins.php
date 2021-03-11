<?php
session_start();
if(isset($_SESSION['visiteur'])){
    require_once '../data/pdogsbrapports.php';   
    $pdo = PdoGsbRapports::getPdo();
    $nom = $_REQUEST['nom'];
    $lesNoms = $pdo->getLesMedecins($nom);
    echo json_encode( $lesNoms);
}
else{
    echo 0;
}
?>

