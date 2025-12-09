
document.getElementById("formDK")
    .addEventListener("submit", function (event) {

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let pword = document.getElementById("pword").value;

        let gender = "";
        if (document.getElementById("gtnam").checked) {
            gender = "Nam";
        } else if (document.getElementById("gtnu").checked) {
            gender = "Nữ";
        }

        let location = document.getElementById("location").value;

        console.log("Họ tên:", name);
        console.log("Email:", email);
        console.log("Mật khẩu:", pword);
        console.log("Giới tính:", gender);
        console.log("Địa chỉ:", location);
        event.preventDefault(); 
    });

