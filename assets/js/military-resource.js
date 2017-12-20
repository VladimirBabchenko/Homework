
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
};

function checkArgsForNumber(distance) {
  return isNaN(parseInt(distance));
}

function checkCorrectArg(arg) {
  if (arg.length !== 1) return;
}

var archer = new MilitaryResources("archer", 300, 1500);
var knight = new MilitaryResources("knight", 500, 900)
console.log(archer, "\n", knight);
console.log(archer.onReadyToCross(1000));
console.log(archer.onReadyToFight(200));