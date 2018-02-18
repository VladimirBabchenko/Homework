function MilitaryResource(name, damage, health, distance, url) {
  this.name = name;
  this.damage = damage;
  this.currentHealth = this.maxHealth = health;
  this.availableDist = this.maxDist = distance;
  this.addToDomRes(url);
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

MilitaryResource.prototype.addToDomRes = function(url) {
  this.warrior = document.createElement("div");
  this.warriorTitle = document.createElement("h2");
  this.warriorBody = document.createElement("img");

  this.warrior.classList.add("warrior");
    this.warriorBody.src = url;

  this.warriorTitle.innerHTML = this.name;

  this.warrior.appendChild(this.warriorTitle);
  this.warrior.appendChild(this.warriorBody);
};

var paladin = new MilitaryResource("paladin", 150, 800, 1500, "assets/img/paladin.png");
var assasin = new MilitaryResource("assasin", 300, 450, 1200, "assets/img/assasin.png");
var archer = new MilitaryResource("archer", 50, 350, 400, "assets/img/archer.png");
var knight = new MilitaryResource("knight", 120, 550, 1200, "assets/img/knight.png");
var lich = new MilitaryResource("lich", 200, 300, 450, "assets/img/lich.png");
var vampire = new MilitaryResource("vampire", 150, 550, 1500, "assets/img/vampire.png");
// console.log(archer, "\n", knight);
// console.log(archer.isReadyToCross("dsf"));
// console.log(knight.isReadyToFight(600));
// console.log(archer.currentHealth = 200);
// console.log(archer.restore());
// console.log(archer);
// console.log(archer.clone());
// console.log(archer.attackedBy(knight));
// console.log(archer);

