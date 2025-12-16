<?php
    session_start(); //bat dau session

    //kiem tra neu form dc gui di
    if ($_SERVER["REQUEST_METHOD"]== "POST"){
        $_SESSION["username"]= $_POST["username"]; //luu vao session

        header("Location: welcome.php"); //chuyen huong den trang chao mung
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dang nhap</title>
</head>
<body>
    <h2>Dang nhap</h2>
    <form action="" method="post">
        <label> nhap ten cua ban:</label>
        <input type="text" name=username required>
        <button type="submit">Dang nhap</button>
    </form>
</body>
</html>