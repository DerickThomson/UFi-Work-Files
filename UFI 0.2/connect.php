<?php
    $con = mysqli_connect($mysql_host,$mysql_user,$mysql_password, $mysql_database);
//    echo($con);
    // Check connection
    if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

?>