<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Danh sách sản phẩm</title>
</head>
<body>
    <h2>Danh sách sản phẩm</h2>

<?php 
$conn = mysqli_connect("localhost", "root", "", "qlsp");

// Kiểm tra kết nối
if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}

// Truy vấn bảng SANPHAM
$sql = "SELECT MASP, TENSP, KICHTHUOC, MAUSAC FROM SANPHAM";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    echo "<table border='1' cellpadding='10' cellspacing='0'>";
    echo "<tr>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Kích Thước</th>
            <th>Màu Sắc</th>
          </tr>";

    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>{$row['MASP']}</td>";
        echo "<td>{$row['TENSP']}</td>";
        echo "<td>{$row['KICHTHUOC']}</td>";
        echo "<td>{$row['MAUSAC']}</td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "Không có sản phẩm nào!";
}

// Đóng kết nối
mysqli_close($conn);
?>
</body>
</html>
