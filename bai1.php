<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>In dãy số 1-100</title>
</head>
<body>

<div style="text-align:center; font-size:20px; line-height:35px;">

<?php
for ($i = 1; $i <= 100; $i++) {

    // In số theo yêu cầu
    if ($i % 2 == 0) {
        echo "<span style='color:red; font-weight:bold;'>$i</span> ";
    } else {
        echo "<span style='color:green; font-weight:bold; font-style:italic;'>$i</span> ";
    }

    // Xuống dòng sau mỗi 10 số
    if ($i % 10 == 0) {
        echo "<br>";
    }
}
?>

</div>

</body>
</html>
