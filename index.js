function shoe(){
    document.getElementById("giay").innerHTML = "";
    for (var i = 0; i < shoes.length; i++){

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

        btnAdd.onclick = function(arg){
            return function(){
                var kt = -1;
                if (cart != null){
                    arr = cart;
                    for (var i = 0; i < cart.length; i++){
                        if (cart[i].name == shoes[arg].name){
                            console.log(cart[i]);
                            console.log(shoes[arg].name);
                            var quan;
                            cart[i].quantity = cart[i].quantity + 1;
                            localStorage.setItem('cart', JSON.stringify(cart));
                            kt = 1;
                        }
                    }
                }
                if (kt == -1){
                    if (kt == -1) {
                        for (var i = 0; i < shoes.length; i++){
                            if (i == arg){
                                arr.push({
                                    name: shoes[arg].name,
                                    price: shoes[arg].price,
                                    image: shoes[arg].image,
                                    quantity: 1
                                });
                                localStorage.setItem('cart', JSON.stringify(cart));
                                console.log(cart);
                            }
                        }
                    }
                }
                document.getElementById("carts").innerHTML = "";
                document.getElementById("sl").innerHTML = arr.length;
                cart = arr
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
    document.getElementById("ordered").style.display = "none";
}

function high(){
    //document.getElementById("products").innerHTML = "";
    document.getElementById("highs").innerHTML = "";
    for (var i = 0; i < high_heel.length; i++){
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

        btnAdd.onclick = function(arg){
            return function(){
                //var iname = product[arg].name;
                var kt = -1;
                if (cart != null){
                    arr = cart;
                    for (var i = 0; i < cart.length; i++){
                        if (cart[i].name == high_heel[arg].name){
                            console.log(cart[i]);
                            console.log(high_heel[arg].name);
                            var quan;
                            cart[i].quantity = cart[i].quantity + 1;
                            localStorage.setItem('cart', JSON.stringify(cart));
                            kt = 1;
                        }
                    }
                }
                if (kt == -1) {
                    if (kt == -1) {
                        for (var i = 0; i < shoes.length; i++){
                            if (i == arg){
                                arr.push({
                                    name: high_heel[arg].name,
                                    price: high_heel[arg].price,
                                    image: high_heel[arg].image,
                                    quantity: 1
                                });
                                localStorage.setItem('cart', JSON.stringify(cart));
                                console.log(cart);
                            }
                        }
                    }
                }
                document.getElementById("carts").innerHTML = "";
                document.getElementById("sl").innerHTML = arr.length;
                cart = arr
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
    document.getElementById("ordered").style.display = "none";
}

function sandals(){
    //document.getElementById("products").innerHTML = "";
    document.getElementById("san").innerHTML = "";
    for (var i = 0; i < sandal.length; i++){

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

        btnAdd.onclick = function(arg){
            return function(){
                //var iname = product[arg].name;
                var kt = -1;
                if (cart != null){
                    arr = cart;
                    for (var i = 0; i < sandal.length; i++){
                        if (cart[i].name == shoes[arg].name){
                            console.log(cart[i]);
                            console.log(sandal[arg].name);
                            var quan;
                            cart[i].quantity = cart[i].quantity + 1;
                            localStorage.setItem('cart', JSON.stringify(cart));
                            kt = 1;
                        }
                    }
                }
                if (kt == -1){
                    if (kt == -1){
                        for (var i = 0; i < sandal.length; i++){
                            if (i == arg){
                                arr.push({
                                    name: sandal[arg].name,
                                    price: sandal[arg].price,
                                    image: sandal[arg].image,
                                    quantity: 1
                                });
                                localStorage.setItem('cart', JSON.stringify(cart));
                                console.log(cart);
                            }
                        }
                    }
                }
                document.getElementById("carts").innerHTML = "";
                document.getElementById("sl").innerHTML = arr.length;
                cart = arr
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
    document.getElementById("ordered").style.display = "none";
}

for (var i = 0; i < product.length; i++){
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

    btnAdd.onclick = function(arg){
        return function(){
            //var iname = product[arg].name;
            var kt = -1;
            if (cart != null){
                arr = cart;
                for (var i = 0; i < cart.length; i++){
                    if (cart[i].name == product[arg].name){
                        console.log(cart[i]);
                        console.log(product[arg].name);
                        var quan;
                        cart[i].quantity = cart[i].quantity + 1;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        kt = 1;
                    }
                }
            }
            if (kt == -1){
                if (kt == -1){
                    for (var i = 0; i < product.length; i++){
                        if (i == arg){
                            arr.push({
                                name: product[arg].name,
                                price: product[arg].price,
                                image: product[arg].image,
                                quantity: 1
                            });
                            localStorage.setItem('cart', JSON.stringify(cart));
                            console.log(cart);
                        }
                    }
                }
            }
            document.getElementById("carts").innerHTML = "";
            document.getElementById("sl").innerHTML = arr.length;
            cart = arr
        }
    }(i);

    cen.appendChild(imgObj);
    cen.appendChild(nameObj);
    cen.appendChild(priceObj);
    cen.appendChild(btnAdd);
    line.appendChild(cen);
    products.appendChild(line);
}

function displayProduct(){
    document.getElementById("products").style.display = "grid";
    document.getElementById("carts").style.display = "none";
    document.getElementById("giay").style.display = "none";
    document.getElementById("highs").style.display = "none";
    document.getElementById("san").style.display = "none";
    document.getElementById("timkiem").style.display = "none";
    document.getElementById("ordered").style.display = "none";
}

var img = ["s1.png", "s2.png", "s4.jfif", "s5.jfif"]
var position = 0;
setInterval(function(){
    document.getElementById('myImage').src = img[position];
    position++;
    if (position == 4){
        position = 0;
    }
}, 2000);
