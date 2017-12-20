function Squad (completedResources) {
  this.squad = [];
  if (completedResources) {
    this.squad.addResourceToSquad(completedResources);
  }
}

Squad.prototype.addResourceToSquad = function(res) {
  return this.squad.push(res);
};

Squad.prototype.isResourcesReadyToMove = function(dist){
  this.squad.every(function (iObj) { return iObj.availableDist >= dist})
};

var squad = new Squad([archer, knight]);
console.log(squad);
console.log(squad.isResourcesReadyToMove(1000));

