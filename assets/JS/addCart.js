let str = "";
function getCartData() {
    let getCartStorage = JSON.parse(localStorage.getItem("cartStorage"));
    for (i = 0; i < getCartStorage.length; i++) {
        str += "<div class='cartProduct'><div class='cartProductDetails'><h1 style='text-align: center'>"+getCartStorage[i].itemName+"</h1><table class='cartTable'><tr><th scope='col'>Usage/Applications</th><td>"+getCartStorage[i].itemusage+"</td></tr><tr><th scope='col'>Color</th><td>"+getCartStorage[i].itemColor+"</td></tr><tr><th scope='col'>Appearance</th><td>"+getCartStorage[i].itemappearance+"</td></tr><tr><td>&#x20b9;"+getCartStorage[i].itemPrice+"</td></tr></table><button class='order-btn'>Place Order</button></div></div>";
    }
    return str;
}
let callingCartData = getCartData();
document.getElementById("addedProduct").innerHTML = callingCartData;