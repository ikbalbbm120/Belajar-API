<?php 

// $mahasiswa = [
//     [
//     "nama" => "ikbal",
//     "umur" => 20
//     ],
//     [
//         "nama" => "kontol",
//         "umur" => 20
//         ],
//     ];

$dbh = new PDO('mysql:host=localhost;dbname=contoh aja karena tidak ada db nya', 'root', '');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;

?>