<?php
if($_POST){

    $pdo = new PDO("mysql:localhost=8889;dbname=portefolio", "root", "root", [PDO::ATTR_ERRMODE => PDO::ERRMODE_SILENT ]);
    
    $texteRequete = "INSERT INTO contact (prenom, nom, email, message) VALUES (:prenom, :nom, :email, :message)";
    $pdostatement = $pdo->prepare($texteRequete);
    
    $pdostatement->bindValue(":prenom", $_POST['prenom']);
    $pdostatement->bindValue(":nom", $_POST['name']);
    $pdostatement->bindValue(":email", $_POST['email']);
    $pdostatement->bindValue(":message", $_POST['message']);
    
    
    $pdostatement->execute();
}


?>