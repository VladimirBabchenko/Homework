function checkArgsForNumber(distance) {
    return isNaN(parseInt(distance));
}

function checkAvailablePos(pos1, pos2) {
    return pos1 <= this.squad.length && pos2 <= this.squad.length&& pos1 >=0 && pos2 >=0
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
    return Math.round(Math.random() *1000);
}

function showKilling(warrior) {
    return warrior.name + " was killed";
}