function Resource(name, product, income, durability) {
    this.name = name;
    this.product = product;
    this.income = income;
    this.durability =durability;
}

Resource.prototype.isReadyForPlanting = function() {
  return this.durability < 1
};

Resource.prototype.harvest = function() {
    products.push(new Product(this.product, this.income,  1800));
    this.product = null;
    this.income = null;
    this.durability += 0.25;
};

Resource.prototype.restore = function() {
    this.durability = 0;
};

Resource.prototype.plant = function(product, income) {
    this.product = product;
    this.income = income;

};

Resource.prototype.clone = function() {
    return new Resource(this.name, this.product, this.income, this.durability);
};

var field1 = new Resource("field-1", "popcorn", 1200, 0.5);
var field2 = new Resource("field-2", "wheat", 1000, 0.1);
console.log(field1, field2);
console.log(field1.isReadyForPlanting());
// console.log(field1.restore());
// console.log(field1.plant("apples", 2500));
// console.log(field1, field2);
// console.log(field1.clone());
// console.log(field2.harvest());

