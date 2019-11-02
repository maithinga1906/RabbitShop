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
var shoes = [p1,p2,p3,p5];
var high_heel = [p4, p6, p7, p8, p9];
var sandal = [p10, p11, p12];

function shoe() {
    //document.getElementById("products").innerHTML = "";
    document.getElementById("giay").innerHTML = "";
    for (var i = 0; i < shoes.length; i++) {

        var products = document.getElementById("products");

        var line = document.createElement("div");
        var cen = document.createElement("center");

        var imgObj = document.createElement("img");
        imgObj.src = shoes[i].image;

        var nameObj = document.createElement("p");
        nameObj.innerText = shoes[i].name;

        var priceObj = document.createElement("p");
        priceObj.innerText = shoes[i].price + " VND";

        var btnAdd = document.createElement("button");
        btnAdd.innerText = "add to cart";
        line.className = "col-1";

        btnAdd.onclick = function(arg) {
            return function() {
                var iname = shoes[arg].name;
                var itontai = -1;
                for (var k = 0; k < cart.length; k++) {
                    if (cart[k].name == iname) {
                        itontai = k;
                    }
                }
                if (itontai != -1) {
                    cart[itontai].quantity += 1;
                } else {
                    cart.push({
                        name: shoes[arg].name,
                        price: shoes[arg].price,
                        image: shoes[arg].image,
                        quantity: 1
                    });
                }
                document.getElementById("carts").innerHTML = "";
            }
        }(i);
        cen.appendChild(imgObj);
        cen.appendChild(nameObj);
        cen.appendChild(priceObj);
        cen.appendChild(btnAdd);
        line.appendChild(cen);
        giay.appendChild(line);
    }
    document.getElementById("products").style.display = "none";
    document.getElementById("carts").style.display = "none";
    document.getElementById("giay").style.display = "grid";
    document.getElementById("highs").style.display = "none";
    document.getElementById("san").style.display = "none";
    document.getElementById("timkiem").style.display = "none";
}

function high() {
    //document.getElementById("products").innerHTML = "";
    document.getElementById("highs").innerHTML = "";
    for (var i = 0; i < high_heel.length; i++) {
        var products = document.getElementById("products");

        var line = document.createElement("div");
        var cen = document.createElement("center");

        var imgObj = document.createElement("img");
        imgObj.src = high_heel[i].image;

        var nameObj = document.createElement("p");
        nameObj.innerText = high_heel[i].name;

        var priceObj = document.createElement("p");
        priceObj.innerText = high_heel[i].price + " VND";

        var btnAdd = document.createElement("button");
        btnAdd.innerText = "add to cart";
        line.className = "col-1";

        btnAdd.onclick = function(arg) {
            return function() {
                var iname = high_heel[arg].name;
                var itontai = -1;
                for (var k = 0; k < cart.length; k++) {
                    if (cart[k].name == iname) {
                        itontai = k;
                    }
                }
                if (itontai != -1) {
                    cart[itontai].quantity += 1;
                } else {
                    cart.push({
                        name: high_heel[arg].name,
                        price: high_heel[arg].price,
                        image: high_heel[arg].image,
                        quantity: 1
                    });
                }
                document.getElementById("carts").innerHTML = "";
            }
        }(i);
        cen.appendChild(imgObj);
        cen.appendChild(nameObj);
        cen.appendChild(priceObj);
        cen.appendChild(btnAdd);
        line.appendChild(cen);
        highs.appendChild(line);
    }
    document.getElementById("products").style.display = "none";
    document.getElementById("carts").style.display = "none";
    document.getElementById("giay").style.display = "none";
    document.getElementById("highs").style.display = "grid";
    document.getElementById("san").style.display = "none";
    document.getElementById("timkiem").style.display = "none";
}

function sandals() {
    //document.getElementById("products").innerHTML = "";
    document.getElementById("san").innerHTML = "";
    for (var i = 0; i < sandal.length; i++) {
    	
        var products = document.getElementById("products");

        var line = document.createElement("div");
        var cen = document.createElement("center");

        var imgObj = document.createElement("img");
        imgObj.src = sandal[i].image;

        var nameObj = document.createElement("p");
        nameObj.innerText = sandal[i].name;

        var priceObj = document.createElement("p");
        priceObj.innerText = sandal[i].price + " VND";

        var btnAdd = document.createElement("button");
        btnAdd.innerText = "add to cart";
        line.className = "col-1";

        btnAdd.onclick = function(arg) {
            return function() {
                var iname = sandal[arg].name;
                var itontai = -1;
                for (var k = 0; k < cart.length; k++) {
                    if (cart[k].name == iname) {
                        itontai = k;
                    }
                }
                if (itontai != -1) {
                    cart[itontai].quantity += 1;
                } else {
                    cart.push({
                        name: sandal[arg].name,
                        price: sandal[arg].price,
                        image: sandal[arg].image,
                        quantity: 1
                    });
                }
                document.getElementById("carts").innerHTML = "";
            }
        }(i);
        cen.appendChild(imgObj);
        cen.appendChild(nameObj);
        cen.appendChild(priceObj);
        cen.appendChild(btnAdd);
        line.appendChild(cen);
        san.appendChild(line);
    }
    document.getElementById("products").style.display = "none";
    document.getElementById("carts").style.display = "none";
    document.getElementById("giay").style.display = "none";
    document.getElementById("highs").style.display = "none";
    document.getElementById("san").style.display = "grid";
    document.getElementById("timkiem").style.display = "none";
}

var cart = [];
for (var i = 0; i < product.length; i++) {
    var products = document.getElementById("products");

    var line = document.createElement("div");
    var cen = document.createElement("center");

    var imgObj = document.createElement("img");
    imgObj.src = product[i].image;

    var nameObj = document.createElement("p");
    nameObj.innerText = product[i].name;

    var priceObj = document.createElement("p");
    priceObj.innerText = product[i].price + " VND";

    var btnAdd = document.createElement("button");
    btnAdd.innerText = "add to cart";
    line.className = "col-1";

    btnAdd.onclick = function(arg) {
        return function() {
            var iname = product[arg].name;
            var itontai = -1;
            for (var k = 0; k < cart.length; k++) {
                if (cart[k].name == iname) {
                    itontai = k;
                }
            }
            if (itontai != -1) {
                cart[itontai].quantity += 1;
            } else {
                cart.push({
                    name: product[arg].name,
                    price: product[arg].price,
                    image: product[arg].image,
                    quantity: 1
                });
            }
            document.getElementById("carts").innerHTML = "";
        }
    }(i);

    cen.appendChild(imgObj);
    cen.appendChild(nameObj);
    cen.appendChild(priceObj);
    cen.appendChild(btnAdd);
    line.appendChild(cen);
    products.appendChild(line);
}

function displayCart() {
    document.getElementById("carts").innerHTML = "";
    for (var i = 0; i < cart.length; i++) {
        // var cart = document.getElementById("cart");
        var name2 = document.createElement("p");
        var price2 = document.createElement("p");
        var image2 = document.createElement("img");
        var quantity2 = document.createElement("p");
        var butDel = document.createElement("button");
        var butOrd = document.createElement("button");
        var line = document.createElement("div");

        name2.innerText = cart[i].name;
        price2.innerText = cart[i].price + " VND";
        image2.src = cart[i].image;
        quantity2.innerText = "Quantity: " + cart[i].quantity;
        butDel.innerText = "Delete";
        butOrd.innerText = "Order";

        butDel.className = "butDel";
        line.className = "col-2";

        butDel.onclick = function(ar) {
            return function() {
                cart.splice(ar, 1);
                displayCart();
            }
        }(i);

        butOrd.onclick = function(ar) {
            return function() {
                document.getElementById("carts").innerHTML = '';
                var cus_name = document.createElement("p");
                var inputName = document.createElement("input");

                var cus_address = document.createElement("p");
                var inputAddress = document.createElement("input");

                var cus_phone = document.createElement("p");
                var inputPhone = document.createElement("input");

                var div = document.createElement("div");
                var div1 = document.createElement("div");
                var div2 = document.createElement("div");
                var div3 = document.createElement("div");

                var pro_name = document.createElement("p");
                var quantity1 = document.createElement("p");
                var total = document.createElement("p");

                var but = document.createElement("button");

                cus_name.innerText = "Tên khách hàng: ";
                cus_phone.innerText = "Số điện thoại: ";
                cus_address.innerText = "Địa chỉ giao hàng";
                but.innerText = "Mua ngay";

                pro_name.innerText = "Tên sản phẩm: " + cart[ar].name;
                quantity1.innerHTML = "Số lượng:" +  cart[ar].quantity;
                total.innerText = "Tổng tiền: " + (cart[ar].quantity * cart[ar].price);

                but.onclick = function(ars) {
                    return function() {
                        if (inputPhone.value == "" || inputName.value == "" || inputAddress.value == "") {
                            alert("Vui lòng điền đầy đủ thông tin");
                        } else {
                            alert("Đặt hàng thành công");
                            cart.splice(ars, 1);
                            displayCart();
                        }
                    }
                }(ar);

                div.appendChild(div1);
                div.appendChild(div2);
                div.appendChild(div3);
                div1.appendChild(cus_name);
                div1.appendChild(inputName);
                div2.appendChild(cus_phone);
                div2.appendChild(inputPhone);
                div3.appendChild(cus_address);
                div3.appendChild(inputAddress);
                div.appendChild(pro_name);
                div.appendChild(quantity1);
                div.appendChild(total);
                div.appendChild(but);
                carts.appendChild(div);
            }
        }(i);

        carts.appendChild(line);
        line.appendChild(image2);
        line.appendChild(name2);
        line.appendChild(price2);
        line.appendChild(quantity2);
        line.appendChild(butDel);
        line.appendChild(butOrd);
    }
    document.getElementById("products").style.display = "none";
    document.getElementById("carts").style.display = "block";
    document.getElementById("giay").style.display = "none";
    document.getElementById("highs").style.display = "none";
    document.getElementById("san").style.display = "none";
    document.getElementById("timkiem").style.display = "none";
}
console.log(cart);

function displayProduct() {
    document.getElementById("products").style.display = "grid";
    document.getElementById("carts").style.display = "none";
    document.getElementById("giay").style.display = "none";
    document.getElementById("highs").style.display = "none";
    document.getElementById("san").style.display = "none";
    document.getElementById("timkiem").style.display = "none";
}

function research() {
    var search = document.getElementById('search').value;
    for (var i = 0; i < product.length; i++) {
        if (search == product[i].name) {
            
            console.log(product[i]);

            var div = document.createElement("div");
            var imgObj = document.createElement("img");
            imgObj.src = product[i].image;

            var nameObj = document.createElement("p");
            nameObj.innerText = product[i].name;

            var priceObj = document.createElement("p");
            priceObj.innerText = product[i].price;

            var btnAdd = document.createElement("button");
            btnAdd.innerText = "add to cart";

            btnAdd.onclick = function(item) {
                return function() {
                    cart.push(product[item]);
                    console.log(cart);
                    order();
                }
            }(i);
            div.append(imgObj);
            div.append(nameObj);
            div.append(priceObj);
            div.append(btnAdd);
            timkiem.appendChild(div);
            break;
        }
    }
    document.getElementById("timkiem").style.display = "grid";
    document.getElementById("products").style.display = "none";
    document.getElementById("carts").style.display = "none";
    document.getElementById("giay").style.display = "none";
    document.getElementById("highs").style.display = "none";
    document.getElementById("san").style.display = "none";
}
var img = ["s1.png", "s2.png", "s4.jfif", "s5.jfif"]
		var position = 0;
		setInterval(function(){
			document.getElementById('myImage').src = img[position]; 
				position++;
				if (position == 4) {
					position = 0;
				}
		},2000);

