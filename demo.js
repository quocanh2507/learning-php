alert("Hello World!");
onclick = function (xc) 
{
    alert("Xin chao Viet Nam");
};



//ham thong thuong
function test1(n) 
{
    let sum = 0;
    for (let i = 0; i < n; i++) 
    {
        if (i % 2 == 0) 
        {
            continue;
        }
        else 
        {
            sum += i;
        }
    }
    return sum;
}
console.log(test1(10));

//ham an danh
var test2 = function (a,b)
{
    return a-b;
}
console.log(test2(2,3));

//ham mui ten
const xinchao = (name) =>
{
    console.log("Xin chao " + name);
}
xinchao("Viet Nam");

//ham goi lai
function test3(n, callback)
{
    for(let i=n; i>0; i--)
    {
        console.log("Giá trị: " + i);
        callback();
    }
}
function done()
{
    console.log("done");
}
test3(3,done)

//ham de quy
function test4(n)
{
    if(n==0) return 1;
    return n+test4(n-1);
}
console.log(test4(5));

//if
let score = 8;
if(score >=9)
{
    console.log("Xuat sac");
}
else if(score >=8)
{
    console.log("Gioi");
}
else if(score >=7)
{
    console.log("Kha");
}
else if(score >=5)
{
    console.log("Trung binh");
}
else
{
    console.log("Yeu");
}

//switch
let month=3;
switch(month)
{
    case 2: console.log("Thang" +month+ " co 28 hoac 29 ngay"); break;
    case 4: case 6: case 9: case 11:
        console.log("Thang" +month+ " co 30 ngay"); break;
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("Thang" +month+ " co 31 ngay"); break;
    default: console.log("Khong hop le"); break;
}

//for
for(let i=0; i<3; i++)
{
    console.log("Gia tri i: " + i);
}

// for ... in
let person = {name:"Manh", age:25, job:"Dev"};
for(let key in person)
{
    console.log(key + ": " + person[key]);
}

//while
let i=1;
while(i<=3)
{
    console.log(i);
    i++;
}

//do...while
let x=1;
do
{
    console.log(x);
    x++;
}
while(i<=3);

//khai bao chuoi
let text = "Qua tot roi";

//do dai
console.log(text.length);
//lay ki tu
console.log(text.charAt(0));
console.log("Ma ASCII: " + text.charCodeAt(0));
console.log("Cu phap: " + text[0]);
//cat chuoi
console.log("slice(2,5): " + text.slice(2,5));
console.log("substring(2,5): " + text.substring(2,5));
console.log("substr(2,5): " + text.substr(2,5));
//noi chuoi
let str1 = "Tôi là";
let str2 = "Mạnh";
console.log(str1.concat(" ", str2));
//chu hoa chu thuong
console.log(text.toUpperCase());
console.log(text.toLowerCase());
//loai khoang trang
console.log("Chuỗi sau khi trim():", text.trim());
console.log("Chuỗi sau khi trimStart():", text.trimStart());
console.log("Chuỗi sau khi trimEnd():", text.trimEnd());
//tim kiem
console.log("Vị trí đầu tiên của 't':", text.indexOf("a"));
console.log("Vị trí cuối cùng của 't':", text.lastIndexOf("a"));
console.log("Vị trí của 'tot':", text.search("tot"));
//tach chuoi
let words = "Quốc, Bách, Mạnh, Kiên, Meme";
console.log("Tách chuỗi thành mảng:", words.split(", "));
//template literals
let name = "Mạnh";
let age = 25;
let learn = "JavaScript";
let message = `Tên: ${name}, Tuổi: ${age}, Đang học: ${learn}`;
console.log("Template Literals:", message);

//date
let date0 = new Date();
//lay ngay thang nam gio phut giay
console.log("Ngày: " + date0.getDate());
console.log("Tháng: " + (date0.getMonth()+1));
console.log("Năm: " + date0.getFullYear());
console.log("Giờ: " + date0.getHours());
console.log("Phút: " + date0.getMinutes());
console.log("Giây: " + date0.getSeconds());

//tinh khoang cach 2 ngay
let date1 = new Date("2025-01-01");
let date2 = new Date("2025-12-03");
let diffTime = date2-date1;
//cong ngay
let date3 = new Date();
date3.setDate(date3.getDate()+7);
console.log("Ngày sau 1 tuần: " + date3);

//math
console.log("PI: " + Math.PI);
console.log("Làm tròn lên 6.6:", Math.round(6.6));
console.log("Số Euler (e):", Math.E);
console.log("Lấy giá trị tuyệt đối của -5:", Math.abs(-5));
console.log("2^3 =", Math.pow(2, 3));
console.log("Căn bậc hai của 16:", Math.sqrt(16));
console.log("Số lớn nhất trong (15, 29, 7, 3):", Math.max(15,29,7,3));
console.log("Số nhỏ nhất trong (15, 29, 7, 3):", Math.min(15, 29, 7, 3));
console.log("Số ngẫu nhiên từ 1 đến 100:", Math.floor(Math.random() * 100) + 1);
console.log("Logarit tự nhiên của 10:", Math.log(10));
console.log("Logarit cơ số 10 của 100:", Math.log10(100));

//mang
let arr = ["Vàng", "Bạc", "Đồng"];
console.log("Mảng ban đầu:", arr);
console.log("Độ dài mảng:", arr.length);
arr.push("Sắt");
console.log("Mảng sau khi thêm phần tử:", arr);
arr.pop();
console.log("Mảng sau khi xóa phần tử cuối:", arr);
arr.shift();
console.log("Mảng sau khi xóa phần tử đầu:", arr);
arr.unshift("Bạch kim");
console.log("Mảng sau khi thêm phần tử đầu:", arr);
let arr2 = arr.concat(["Platinum", "Titanium"]);
console.log("Mảng sau khi nối:", arr2);
let index = arr2.indexOf("Đồng");
console.log("Vị trí của 'Đồng':", index);
arr2.reverse();
console.log("Mảng sau khi đảo ngược:", arr2);
let filterarr = arr2.filter(arr2 => arr2.length > 4);
console.log("Mảng sau khi lọc (độ dài >4):", filterarr);
let numbers = [1,2,3,4];