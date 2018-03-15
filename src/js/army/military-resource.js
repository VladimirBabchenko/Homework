<<<<<<< HEAD
var root = require("../../../helpers/root");
// import checkArgsForNumber from "../helpers.js";
// var helpers = require("../helpers");
import {checkArgsForNumber} from "../helpers";
=======
import * as helpers from "../helpers";
>>>>>>> 268f9b87abe8246c5517d47b129c1b3ef7175300

export default class MilitaryResource {
  constructor(name, damage, health, distance, url) {
    this.name = name;
    this.damage = damage;
    this.currentHealth = this.maxHealth = health;
    this.availableDist = this.maxDist = distance
    this.addToDomRes(url);
  }

  isReadyToCross(dist) {
    if (helpers.checkArgsForNumber(dist)) return;
    return this.availableDist - dist >= 0;
  }

  isReadyToFight(damage) {
    if (checkArgsForNumber(damage)) return;
    return this.currentHealth - damage > 0;
  };

<<<<<<< HEAD
MilitaryResource.prototype.clone = function() {
  var newResourcePrototype = Object.create(MilitaryResource.prototype);
  return Object.assign(newResourcePrototype, this);
};
=======
  restore() {
    this.currentHealth = this.maxHealth;
    this.availableDist = this.maxDist;
  };
>>>>>>> 268f9b87abe8246c5517d47b129c1b3ef7175300

  clone () {
    var newResource = Object.create(MilitaryResource.prototype);
        return Object.assign(newResource, this);
  };

  attackedBy (resource) {
    if(!resource) return;
    this.currentHealth -= resource.damage;
  };

  addToDomRes (url) {
    this.warrior = document.createElement("div");
    this.warriorTitle = document.createElement("h2");
    this.warriorBody = document.createElement("img");
  
    this.warrior.classList.add("warrior");
    this.warriorBody.src = url;
  
    this.warriorTitle.innerHTML = this.name;
  
    this.warrior.append(this.warriorTitle, this.warriorBody);
  };
}

// var paladin = new MilitaryResource("paladin", 150, 800, 1500, "/src/img/paladin.png");
// var assasin = new MilitaryResource("assasin", 300, 450, 1200, "/src/img/assasin.png");
// var archer = new MilitaryResource("archer", 50, 350, 400, "/src/img/archer.png");
// var knight = new MilitaryResource("knight", 120, 550, 1200, "/src/img/knight.png");
// var lich = new MilitaryResource("lich", 200, 300, 450, "/src/img/lich.png");
// var vampire = new MilitaryResource("vampire", 150, 550, 1500, "/src/img/vampire.png");
// export {paladin, assasin, archer, knight, lich, vampire};

// console.log(archer, "\n", knight);
// console.log(archer.isReadyToCross("dsf"));
// console.log(knight.isReadyToFight(600));
// console.log(archer.currentHealth = 200);
// console.log(archer.restore());
// console.log(archer);
// console.log(archer.clone());
// console.log(archer.attackedBy(knight));
// console.log(archer);

