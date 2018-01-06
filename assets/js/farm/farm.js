function Farm (defaultResources) {
    this.farm = [];
    this.income = null;
    if (defaultResources) this.combineResources(defaultResources);
}

Farm.prototype.combineResources = function(res) {
    if (!Array.isArray(res)) return;
    this.farm = this.farm.concat(res);
};

// Farm.prototype.harvestAll = function(ind) {
//     var thisFarm = this;
//     return checkIndex(ind, thisFarm) ? this.farm[ind].harvest() :
//         this.farm.forEach(function(field) {
//             field.harvest();
//             // Resource.prototype.addToDom.apply(field);
//         })
//
// };

// Farm.prototype.harvest = function() {
//     return this.farm.filter(function(res) {
//         return res.durability <= 1;
//   }).forEach(function(res) { res.harvest() })
// };

Farm.prototype.getResource = function(index) {
    var thisFarm = this;
    if (checkIndex(index, thisFarm)) {
        showRes(this.farm[index]);
    }
};

Farm.prototype.sellProducts = function() {
    if (!products.length) return;
    this.income = products.map(function(product) { return product.quantity * product.price; }).reduce(function(price1, price2) { return price1 + price2 });
    products = [];
};


var farm1 = new Farm([field1, field2]);
var farm2 = new Farm([new Resource("field3", "orange", 2200, 0.5)]);
console.log(farm1, "\n", farm2);
// farm1.harvestAll(0);
// console.log(farm1);
// console.log(farm2.harvestAll());
// console.log(farm2);
farm1.getResource(2);
console.log(farm1);
