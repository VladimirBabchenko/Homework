function MilitaryResources(name, health, distance) {
  this.name = name;
  this.currentHealth = this.maxHealth = health;
  this.availableDist = this.maxDist = distance;
}

MilitaryResources.prototype.onReadyToCross = function(dist) {
  if (checkArgsForNumber(dist)) return;
  return dist <= this.maxDist;
};

MilitaryResources.prototype.onReadyToFight = function(damage) {
  if (checkArgsForNumber(damage)) return;
  return damage <= this.maxHealth;
};

MilitaryResources.prototype.restoreHealth = function() {
  this.currentHealth = this.maxHealth;
  return this.currentHealth;
};

MilitaryResources.prototype.clone = function() {
  return Object.assign(this, {});
};

function checkArgsForNumber(distance) {
  return isNaN(parseInt(distance));
}


//
// var archer = new MilitaryResources("archer", 300, 1500);
// var knight = new MilitaryResources("knight", 500, 900)
// console.log(archer, "\n", knight);
// console.log(archer.onReadyToCross(1000));
// console.log(archer.onReadyToFight(200));
// console.log(archer.clone());