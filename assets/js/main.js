// Extra tasks
// Task 1 - Expand the exchangingCurrency

Number.prototype.toExchange = function () {
    var arrData = getData();
    var from = arrData[0];
    var to = arrData[1];
    var quantity = this.valueOf();
    return exchange(from, to, quantity);
};

function getData() {
    var from = prompt("Enter currency from");
    var to = prompt("Enter currency to");
    return [from, to]
}

const currency = {
    usd: { uah: 27.90, eur: 0.91, rub: 59.90 },
    uah: { usd: 0.03, eur: 30.90, rub: 2.5},
    eur: {usd: 1.1, uah: 31.50, rub: 65.70},
    rub: {usd: 0.55, uah: 0.40, eur: 0.42}
};

function checkCurrency(from, to) {
    return (from in currency) && (to in currency[from]);
}

function showNotification () {
    console.log("You are wrong");
}

function exchange(from, to, quantity) {
    if (!checkCurrency(from, to, quantity)) return showNotification();
    return currency[from][to] * quantity;
}
var d = 2;
console.log(d.toExchange());



// Task 2 - Expand the object method;
String.prototype.compareValue = function(value) {
    return this.toString() === value;
};


// var str = "bugaga";
// console.log(str.compareValue("bugaga"));


// Task 3 - Expand the array method;
Array.prototype.toNumber = function() {
    return this.map(function (value) {
        return isNaN(parseInt(value)) ? 0 : value
     });
};
var d = [1,2,"sdf", 5, "sdf"];
console.log(d.toNumber());




























