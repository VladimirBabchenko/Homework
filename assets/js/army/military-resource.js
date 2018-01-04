function MilitaryResource(name, damage, health, distance) {
  this.name = name;
  this.damage = damage;
  this.currentHealth = this.maxHealth = health;
  this.availableDist = this.maxDist = distance;
  this.addToDom();
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

MilitaryResource.prototype.addToDom = function() {
  this.warriorHealth = document.createElement("div");
  this.warriorMaxHealth = document.createElement("div");
  document.body.appendChild(this.warriorHealth);
  document.body.appendChild(this.warriorMaxHealth);
  this.warriorHealth.parentNode.style.cssText = "display: flex; align-items: flex-end; text-align:" +
      " center";
  this.warriorHealth.style.cssText = "width: 60px; background-color: rgba(110, 100," +
      " 100, 0.5);";
  this.warriorMaxHealth.style.cssText = "width: 60px; height: 40px; background-color:" +
      " rgba(124,110,80, 0.8);" +
      " margin-right: 25px;";
  this.warriorHealth.style.height = this.currentHealth/5 + "px";
    this.warriorMaxHealth.style.height = this.maxHealth/5 + "px";
  this.warriorHealth.innerHTML = this.name + " HP";
  this.warriorMaxHealth.innerHTML = this.name + " maxHP";
};

var archer = new MilitaryResource("archer", 50, 350, 800);
var knight = new MilitaryResource("knight", 120, 550, 400);
var lich = new MilitaryResource("lich", 200, 300, 450);
var vampire = new MilitaryResource("vampire", 150, 550, 1500);
// console.log(archer, "\n", knight);
// console.log(archer.isReadyToCross("dsf"));
// console.log(knight.isReadyToFight(600));
// console.log(archer.currentHealth = 200);
// console.log(archer.restore());
// console.log(archer);
// console.log(archer.clone());
// console.log(archer.attackedBy(knight));
// console.log(archer);

