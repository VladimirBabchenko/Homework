function Squad (completedResources) {
  this.squad = [];
  if (completedResources) {
    this.addResourceToSquad(completedResources);
  }
}

Squad.prototype.addResourceToSquad = function(res) {
  this.squad = this.squad.concat(res);
  return this.squad;
};

Squad.prototype.isSquadReadyToMove = function(dist){
  return this.squad.every(function (iObject) { return iObject.availableDist >= dist; })
};

Squad.prototype.isSquadReadyToFight = function (damage) {
    return this.squad.every(function (iObject) { return iObject.currentHealth > damage; })
};

Squad.prototype.restoreSquadHP = function() {
  return this.squad.forEach(function(iObject) { return iObject.currentHealth = iObject.maxHealth;})
};

Squad.prototype.restoreSquadEndurance = function() {
  return this.squad.forEach(function(iObject) { return iObject.availableDist = iObject.maxDist; })
};

Squad.prototype.replaceSquadUnits = function(pos1, pos2) {

  if (!checkAvailablePos.call(this, pos1, pos2)) return;
  this.positionUnit1 = pos1;
  this.positionUnit2 = pos2;
  var unit2 = this.squad[this.positionUnit1];
  this.squad[this.positionUnit1] = this.squad[this.positionUnit2];
  this.squad[this.positionUnit2] = unit2;
};

Squad.prototype.cloneSquad = function() {
  return Object.assign(this, {});
};

function checkAvailablePos(pos1, pos2) {
  return pos1 <= this.squad.length && pos2 <= this.squad.length&& pos1 >=0 && pos2 >=0
}

// var newSquad = new Squad([archer, knight]);
//
// console.log(newSquad.squad[0], newSquad.squad[1]);
// console.log(newSquad);
// console.log(newSquad.isSquadReadyToMove(900));
// console.log(newSquad.isSquadReadyToFight(200));
// console.log(newSquad.restoreSquadHP());
// console.log(newSquad);
// console.log(newSquad.restoreSquadEndurance());
// console.log(newSquad.cloneSquad());
// debugger;
// console.log(newSquad.replaceSquadUnits(0, 1));



