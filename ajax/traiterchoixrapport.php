<?php
session_start();
if(isset($_SESSION['visiteur'])){
    require_once '../data/pdogsbrapports.php';   
    $pdo = PdoGsbRapports::getPdo();
    $idRapport = $_REQUEST['idRapport'];
    $leRapport = $pdo->getLeRapport($idRapport);
    echo json_encode( $leRapport);
}
else {
    echo 0;
}
?>
