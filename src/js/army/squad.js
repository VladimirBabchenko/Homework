import { isItMilitaryResource, checkExistingIndex, checkAvailablePos } from "../helpers";
import * as helpers from "../helpers";

// export default function Squad (completedResources, teamColor) {
//   this.squad = [];
//   if (completedResources) {
//     this.addResourcesToSquad(completedResources);
//   }
//   this.addToDomSquad(teamColor);
// }

export default class Squad {
  constructor(completedResources, teamColor) {
    this.squad = [];
    if (completedResources) this.addResourcesToSquad(completedResources);
    this.addToDomSquad(teamColor);
  }

  addResourcesToSquad(res) {
    if (!Array.isArray(res) && !helpers.isItMilitaryResource(res)) return;
      this.squad = this.squad.concat(res);
  };

  isResourcesReadyToMove(dist, ind) {
    return helpers.checkExistingIndex(ind) ? this.squad[ind].isReadyToCross(dist) :
    this.squad.every(resources => resources.availableDist >= dist)
  };

  isResourcesReadyToFight(damage, ind) {
    return helpers.checkExistingIndex(ind) ? this.squad[ind].isReadyToFight(damage) :
        this.squad.every(resources => resources.currentHealth > damage )
  };

  restoreSquad() {
    this.squad.forEach(resource => resource.restore())
  };

  getResourcesReadyToMove(dist) {
    return this.squad.filter(resource => resource.availableDist >= dist)
  };

  getResourcesReadyToFight(damage) {
    return this.squad.filter(resource => resource.currentHealth > damage)
  };

  replaceSquadUnits(pos1, pos2) {
    if (!helpers.checkAvailablePos.call(this, pos1, pos2)) return;
      var unit1 = this.squad[pos1], unit2 = this.squad[pos2];
      this.squad[pos1] = unit2;
      this.squad[pos2] = unit1;
  };

  cloneResources(ind) {
    return helpers.checkExistingIndex(ind) ? this.squad[ind].clone():
        new Squad(this.squad);
  };

  addToDomSquad(teamColor) {
    this.teamBlock = document.createElement("div");
  
    this.teamBlock.classList.add("team-block");
    this.teamBlock.style.backgroundColor = teamColor;
  
    this.squad.forEach(resource => this.teamBlock.appendChild(resource.warrior));
  };
}

// Squad.prototype.addResourcesToSquad = function(res) {
//   if (!Array.isArray(res) && !helpers.isItMilitaryResource(res)) return;
//     this.squad = this.squad.concat(res);
// };

// Squad.prototype.isResourcesReadyToMove = function(dist, ind) {
//   return helpers.checkExistingIndex(ind) ? this.squad[ind].isReadyToCross(dist) :
//   this.squad.every(function (resources) { return resources.availableDist >= dist; })
// };

// Squad.prototype.isResourcesReadyToFight = function (damage, ind) {
//   return helpers.checkExistingIndex(ind) ? this.squad[ind].isReadyToFight(damage) :
//       this.squad.every(function(resources) { return resources.currentHealth > damage })
// };

// Squad.prototype.restoreSquad = function() {
//   this.squad.forEach(function(resource) { resource.restore() })
// };

// Squad.prototype.getResourcesReadyToMove = function(dist) {
//   return this.squad.filter(function(resource) {
//     return resource.availableDist >= dist;
//   })
// };

// Squad.prototype.getResourcesReadyToFight = function(damage) {
//   return this.squad.filter(function(resource) {
//     return resource.currentHealth > damage;
//   })
// };

// Squad.prototype.replaceSquadUnits = function(pos1, pos2) {
//   if (!helpers.checkAvailablePos.call(this, pos1, pos2)) return;
//     var unit1 = this.squad[pos1], unit2 = this.squad[pos2];
//     this.squad[pos1] = unit2;
//     this.squad[pos2] = unit1;
// };

// Squad.prototype.cloneResources = function(ind) {
//   return helpers.checkExistingIndex(ind) ? this.squad[ind].clone():
//       new Squad(this.squad);
// };

// Squad.prototype.addToDomSquad = function(teamColor) {
//   this.teamBlock = document.createElement("div");

//   this.teamBlock.classList.add("team-block");
//   this.teamBlock.style.backgroundColor = teamColor;

//   this.squad.forEach(resource => this.teamBlock.appendChild(resource.warrior));
// };


// import {paladin, assasin, archer, knight, lich, vampire} from "./military-resource";
// var battleTeam1 = new Squad([assasin, lich, vampire], "grey");
// var battleTeam2 = new Squad([paladin, archer, knight], "gold");
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




