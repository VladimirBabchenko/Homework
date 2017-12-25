function MilitaryResource(name, damage, health, distance) {
  this.name = name;
  this.damage = damage;
  this.currentHealth = this.maxHealth = health;
  this.availableDist = this.maxDist = distance;
}

MilitaryResource.prototype.isReadyToCross = function(dist) {
  if (checkArgsForNumber(dist)) return;
  return this.availableDist - dist >= 0;
};

MilitaryResource.prototype.isReadyToFight = function(damage) {
  if (checkArgsForNumber(damage)) return;
  return this.currentHealth - damage > 0;
};

MilitaryResource.prototype.restore = function() {
  this.currentHealth = this.maxHealth;
  this.availableDist = this.maxDist;
};

MilitaryResource.prototype.clone = function() {
  return Object.assign(this, {});
};

MilitaryResource.prototype.attackedBy = function(resource) {
  if(!resource) return;
  this.currentHealth -= resource.damage;
};

function checkArgsForNumber(distance) {
  return isNaN(parseInt(distance));
}

var archer = new MilitaryResource("archer", 50, 350, 800);
var knight = new MilitaryResource("knight", 120, 550, 400);
// console.log(archer, "\n", knight);
// console.log(archer.isReadyToCross("dsf"));
// console.log(knight.isReadyToFight(600));
// console.log(archer.currentHealth = 200);
// console.log(archer.restore());
// console.log(archer);
// console.log(archer.clone());
// console.log(archer.attackedBy(knight));
// console.log(archer);

