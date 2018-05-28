<?php
    include('./../config.php');
    include('./../connect.php');
    include ('./constants.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'POST') {
        $details = $_POST['details'];
//        var_dump($details);
        $name = $details['name'];
        $email = $details['email'];
        $phone = $details['phone'];
        $pin = $details['pin'];
        $weight = $details['weight'];
        $height = $details['height'];
        $activityLevel = $details['activityLevel'];

        $query = "insert into ".$userTable."(".$userName." , ".$userEmail." , ".$userPhone." , ".$userPin." , ".$userHeight." , ".$userWeight." , ".$userActivityLevel.") values(".
            "'".$name."' , '".$email."', '".$phone."' , '".$pin."','".$weight."','".$height."','".$activityLevel."')";
        echo $query;
        $res = mysqli_query($con,$query);
        var_dump($res);
    }
?>