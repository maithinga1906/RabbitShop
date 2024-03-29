function research() {
    document.getElementById("timkiem").innerHTML = "";
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
    document.getElementById("order").style.display = "none";
}
