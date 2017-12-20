function Squad (completedResources) {
  this.squad = [];
  if (completedResources) {
    this.addResourceToSquad(completedResources);
  }
}

Squad.prototype.addResourceToSquad = function(res) {
  return this.squad.push(res);
};

Squad.prototype.isResourcesReadyToMove = function(dist){
  this.squad.every(function (iObj) { return iObj.availableDist >= dist})
};

var squad = new Squad(new MilitaryResources("archer", 300, 1500));
console.log(squad);
console.log(squad.isResourcesReadyToMove(1000));

