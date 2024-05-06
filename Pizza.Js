let t = document.getElementsByName("toppings");
let total = 0;
function calc() {
    receipt.innerHTML = " Price Breakdown: <br> Size:"
    let s = document.getElementsByName("size");
    let total = 0;
    let t = document.getElementsByName("toppings");
    if (s[0].checked) {
        total = total + 7.99
        receipt.innerHTML += "<br> * Small Pizza + $7.99 <br> Toppings:"
    }
    if (s[1].checked) {
        total = total + 9.99
        receipt.innerHTML += "<br> * Medium Pizza + $9.99 <br> Toppings:"
    }
    if (s[2].checked) {
        total = total + 11.99
        receipt.innerHTML += "<br> * Large Pizza + $11.99 <br> Toppings:"
    }
    if (t[0].checked) {
        total = total + 2
        document.getElementById("pepperoni").style.opacity = "1"
        receipt.innerHTML += "<br> * Pepperoni + $2.00"
    }
    if (t[1].checked) {
        total = total + 2
        document.getElementById("ham").style.opacity = "1"
        receipt.innerHTML += "<br> * Ham + $2.00"
    }
    if (t[2].checked) {
        total = total + 2
        document.getElementById("bacon").style.opacity = "1"
        receipt.innerHTML += "<br> * Bacon + $2.00"
    }
    if (t[3].checked) {
        total = total + 1
        document.getElementById("olives").style.opacity = "1"
        receipt.innerHTML += "<br> * Olives + $1.00"
    }
    if (t[4].checked) {
        total = total + 1
        document.getElementById("hotpep").style.opacity = "1"
        receipt.innerHTML += "<br> * Hot Peppers + $1.00"
    }
    if (t[5].checked) {
        total = total + 1
        document.getElementById("onions").style.opacity = "1"
        receipt.innerHTML += "<br> * Onions + $1.00"
    }
    if (t[6].checked) {
        total = total + 1
        document.getElementById("mushrooms").style.opacity = "1"
        receipt.innerHTML += "<br> * Mushrooms + $1.00"
    }
    total = Math.round(total * 100) / 100
    out1.innerHTML = "$" + total;
}

function reset() {
    document.getElementById("bacon").style.opacity = "0"
    document.getElementById("pepperoni").style.opacity = "0"
    document.getElementById("ham").style.opacity = "0"
    document.getElementById("olives").style.opacity = "0"
    document.getElementById("hotpep").style.opacity = "0"
    document.getElementById("onions").style.opacity = "0"
    document.getElementById("mushrooms").style.opacity = "0"
    t[0].checked = false
    t[1].checked = false
    t[2].checked = false
    t[3].checked = false
    t[4].checked = false
    t[5].checked = false
    t[6].checked = false
    receipt.innerHTML = "Price Breakdown: <br> Size:"
    out1.innerHTML = ""
}