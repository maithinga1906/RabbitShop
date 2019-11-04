var p1 = {
    name: "Giày Yeezy V2 FULL TRẮNG",
    price: 399000,
    image: "p1.png"
}
var p2 = {
    name: "Giày Sneaker just do it",
    price: 615000,
    image: "p2.png"
}
var p3 = {
    name: "Giày Air MAX 97 đen full",
    price: 455000,
    image: "p3.png"
}
var p4 = {
    name: "Boots cổ cài cúc gót vuông",
    price: 495000,
    image: "p4.png"
}
var p5 = {
    name: "Giày Sneaker trắng filass",
    price: 268000,
    image: "p5.png"
}
var p6 = {
    name: "Giày cao gót quai ngang",
    price: 99000,
    image: "p6.png"
}
var p7 = {
    name: "Giày cao gót quai trong ",
    price: 119000,
    image: "p7.png"
}
var p8 = {
    name: "Cao gót Đinh Tán",
    price: 99000,
    image: "p8.png"
}
var p9 = {
    name: "Giày gót vuông mũi nhọn",
    price: 100000,
    image: "p9.png"
}
var p10 = {
    name: "Sandal Nữ Mẫu Mới",
    price: 179000,
    image: "p10.png"
}
var p11 = {
    name: "Sandal 3 quai dán nam nữ",
    price: 140000,
    image: "p11.png"
}
var p12 = {
    name: "Sandal nữ đế gấu quai chéo",
    price: 110000,
    image: "p12.png"
}

var product = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
var shoes = [p1, p2, p3, p5];
var high_heel = [p4, p6, p7, p8, p9];
var sandal = [p10, p11, p12];
var cart = new Array();
var arr = new Array();

localStorage.setItem("product", JSON.stringify(product));
product = JSON.parse(localStorage.getItem("product"));

localStorage.setItem("shoes", JSON.stringify(shoes));
shoes = JSON.parse(localStorage.getItem("shoes"));

localStorage.setItem("high_heel", JSON.stringify(high_heel));
high_heel = JSON.parse(localStorage.getItem("high_heel"));

localStorage.setItem("sandal", JSON.stringify(sandal));
sandal = JSON.parse(localStorage.getItem("sandal"));

cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);
document.getElementById("sl").innerHTML = cart.length;
