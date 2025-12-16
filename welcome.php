<?php
    session_start();

    if (!isset($_SESSION["username"])) {
        // header("Location: login.php");
        echo "chua co session";
        exit();
    }
    else {
            echo "da co session" .$_SESSION["username"];
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chao mung</title>
</head>
<body>
    <h2>Xin chao, <?php echo $_SESSION["username"];?>!</h2>
    <p>Chao mung m da dang nhap.</p>
    <a href="logout.php">Dang xuat</a>
</body>
</html>