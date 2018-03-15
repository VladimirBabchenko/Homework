<<<<<<< HEAD
function checkArgsForNumber(distance) {
  return isNaN(parseInt(distance));
}

function checkAvailablePos(pos1, pos2) {
  return pos1 <= this.squad.length && pos2 <= this.squad.length && pos1 >= 0 && pos2 >= 0
}

function checkExistingIndex(index) {
  return index >= 0;
}

function checkIndex(ind, currentFarm) {
  return Number.isFinite(parseInt(ind)) && currentFarm.farm.length > ind && ind >= 0;
}

function showRes(data) {
  console.log(data);
}

function randomColor() {
  return Math.floor(Math.random() * 10);
}

function getFightingInterval() {
  return Math.round(Math.random() * 1000);
}

function showKilling(warrior) {
  return warrior.name + " was killed";
}

// module.exports = {
//   checkArgsForNumber: checkArgsForNumber,
//   getFightingInterval: getFightingInterval
// }

export { checkArgsForNumber, checkAvailablePos, checkExistingIndex, checkIndex, showRes, randomColor, getFightingInterval, showKilling }
=======
import MilitaryResource from "./army/military-resource";

export function checkArgsForNumber(distance) {
    return isNaN(parseInt(distance));
}

export function checkAvailablePos(pos1, pos2) {
    return pos1 <= this.squad.length && pos2 <= this.squad.length&& pos1 >=0 && pos2 >=0
}

export function checkExistingIndex(index) {
    return index >= 0;
}

export function checkIndex(ind, currentFarm) {
    return Number.isFinite(parseInt(ind)) && currentFarm.farm.length > ind && ind >= 0;
}

export function showRes(data) {
    console.log(data);
}

export function randomColor() {
    return Math.floor(Math.random() * 10);
}

export function getFightingInterval() {
    return Math.round(Math.random() *1000);
}

export function showKilling(warrior) {
    return warrior.name + " was killed";
}

export function isItMilitaryResource(resources) {
    switch (Array.isArray(resources)) {
        case true:
            return resources.every(function(resource) {
                return resource instanceof MilitaryResource;
            });
        default:
            return resources instanceof MilitaryResource;
    }
}

>>>>>>> 268f9b87abe8246c5517d47b129c1b3ef7175300
