<?php
session_start();
if(isset($_SESSION['visiteur'])){
    require_once '../data/pdogsbrapports.php';   
    $mdp = $_SESSION['visiteur']['mdp'];
    $login = $_SESSION['visiteur']['login'];
    $date = $_REQUEST['date'];
    $pdo = PdoGsbRapports::getPdo();
    $lesVisites = $pdo->getLesVisitesUneDate($login, $mdp, $date);// retourne les visites
    echo json_encode($lesVisites);
}
else{
    echo 0;    
}
 ?>
