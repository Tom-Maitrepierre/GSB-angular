<?php
session_start();
if(isset($_SESSION['visiteur'])){
    require_once '../data/pdogsbrapports.php'; 
    $id = $_REQUEST['idMedecin']; 
    $adresse = $_REQUEST['adresse']; 
    $tel = $_REQUEST['tel']; 
    $specialite = $_REQUEST['specialite']; 
    $pdo = PdoGsbRapports::getPdo();
    $ret = $pdo->majMedecin($id ,$adresse ,$tel ,$specialite);
    echo $ret;
}
else{
    echo 0;
}
  
 ?>
