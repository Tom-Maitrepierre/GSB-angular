<?php
session_start();
if(isset($_SESSION['visiteur'])){
    require_once '../data/pdogsbrapports.php';   
    $pdo = PdoGsbRapports::getPdo();
    $nomMedicament = $_REQUEST['nommedicament'];
    $lesMedicaments = $pdo->getLesMedicaments($nomMedicament);
    echo json_encode( $lesMedicaments);
}
 else {
     echo 0;
}
?>

