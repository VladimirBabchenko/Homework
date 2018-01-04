function Squad (completedResources) {
  this.squad = [];
  if (completedResources) {
    this.addResourcesToSquad(completedResources);
  }
}

Squad.prototype.addResourcesToSquad = function(res) {
  if (!Array.isArray(res)) return;
  this.squad = this.squad.concat(res);
  this.addToDom();
};

Squad.prototype.isResourcesReadyToMove = function(dist, ind) {
  return checkExistingIndex(ind) ? this.squad[ind].isReadyToCross(dist) :
  this.squad.every(function (resources) { return resources.availableDist >= dist; })
};

Squad.prototype.isResourcesReadyToFight = function (damage, ind) {
  return checkExistingIndex(ind) ? this.squad[ind].isReadyToFight(damage) :
      this.squad.every(function(resources) { return resources.currentHealth > damage })
};

Squad.prototype.restoreSquad = function() {
  this.squad.forEach(function(resource) { resource.restore() })
};

Squad.prototype.getResourcesReadyToMove = function(dist) {
  return this.squad.filter(function(resource) {
    return resource.availableDist >= dist;
  })
};

Squad.prototype.getResourcesReadyToFight = function(damage) {
  return this.squad.filter(function(resource) {
    return resource.currentHealth > damage;
  })
};

Squad.prototype.replaceSquadUnits = function(pos1, pos2) {
  if (!checkAvailablePos.call(this, pos1, pos2)) return;
  this.positionUnit1 = pos1;
  this.positionUnit2 = pos2;
  var unit2 = this.squad[this.positionUnit1];
  this.squad[this.positionUnit1] = this.squad[this.positionUnit2];
  this.squad[this.positionUnit2] = unit2;
};

Squad.prototype.cloneResources = function(ind) {
  return checkExistingIndex(ind) ? this.squad[ind].clone():
      new Squad(this.squad);
};

Squad.prototype.addToDom = function() {
  var newAddToDom = MilitaryResource.prototype.addToDom;
  this.squad.forEach(function(res) {
    newAddToDom.apply(res);
  })
};


// var squad = new Squad([new MilitaryResource("assasin", 300, 450, 1200), archer, knight]);
// var enemySquad = new Squad([new MilitaryResource("paladin", 150, 900, 1400), archer, knight]);
// console.log(squad);
// console.log(enemySquad);
// console.log(squad.isResourcesReadyToMove(400,2));
// console.log(squad.isResourcesReadyToFight(349));
// squad.squad[0].currentHealth = 10;
// console.log(squad);
// squad.restoreSquad();
// console.log(squad);
// console.log(squad.getResourcesReadyToMove(500));
// console.log(squad.getResourcesReadyToFight(500));
// console.log(squad.cloneResources());
// console.log(squad.cloneResources(1));
// console.log(squad);




