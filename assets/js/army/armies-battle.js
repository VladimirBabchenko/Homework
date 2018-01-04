function BattleGround(squad) {
    this.battleField = [];
    this.battleField.push(squad);
}

BattleGround.prototype = Object.create(Squad.prototype);
BattleGround.prototype.constructor = BattleGround;


BattleGround.prototype.attacked = function(team2) {
    var self = this;
    var team = this.defineWhichTeamAttack(self, team2);
    var attackingTeam = team["attacking"].battleField[0];
    var defendingTeam = team["defending"].battleField[0];
    if(attackingTeam.length === 0 || defendingTeam.length === 0) return;
    var attackingInd = this.defineWarriorIndex(attackingTeam.length);
    var defendingInd = this.defineWarriorIndex(defendingTeam.length);
    var attackingWarrior = attackingTeam[attackingInd];
    var defendingWarrior = defendingTeam[defendingInd];
    defendingWarrior.attackedBy(attackingWarrior);
    if(defendingWarrior.currentHealth <= 0) {
        defendingTeam.splice(defendingInd, 1);
        throw new Error (showKilling(defendingWarrior));
    }
    this.showResults(attackingWarrior, defendingWarrior);

};

BattleGround.prototype.showResults = function(attacker, defender) {
    console.log(attacker, "\n", defender);
};

BattleGround.prototype.fight = function(team2) {
    var self = this;
    setTimeout(function callback() {
        try {
            self.attacked(team2);
        } catch (e) {
            console.log(e.message);
        } finally {
            setTimeout(callback, getFightingInterval());
        }
    }, 1000)

};

BattleGround.prototype.defineWarriorIndex = function(num) {
  return Math.floor(Math.random() * num);
};

BattleGround.prototype.defineWhichTeamAttack = function(team1, team2) {
    var result = Math.floor(Math.random() * (arguments.length)) + 1;
    return result === 1 ? {attacking: team1, defending: team2} :
                          {attacking: team2, defending: team1};
};

var battleTeam1 = new BattleGround([new MilitaryResource("assasin", 300, 450, 1200), lich, vampire]);
var battleTeam2 = new BattleGround([new MilitaryResource("paladin", 150, 900, 1400), archer, knight]);
console.log(battleTeam1, battleTeam2);

// battleTeam1.fight(battleTeam2);

// function defineWhichSquadAttack(squad, enemy) {
//     var chance = Math.round(Math.random()*100);
//     return chance < 50 ? {attackingSquad: squad, defendingSquad: enemy} :
//                          {attackingSquad: enemy, defendingSquad: squad};
// }
//
// function whichResourcesFight(squadLength) {
//     return Math.round(Math.random() * (squadLength-1));
// }
// function getFightingInterval() {
//     return Math.round(Math.random() *1000);
// }

// setTimeout(function callback() {
//     try {
//         var fightingSquads = defineWhichSquadAttack(squad, enemySquad);
//         var attackingSquad = fightingSquads.attackingSquad.squad;
//         var defendingSquad = fightingSquads.defendingSquad.squad;
//         var attackingResource = whichResourcesFight(attackingSquad.length);
//         var defendingResource = whichResourcesFight(defendingSquad.length);
//         if (defendingSquad.length === 0 || attackingSquad.length === 0) return;
//         defendingSquad[defendingResource].attackedBy(attackingSquad[attackingResource]);
//         showInfo(defendingSquad, defendingResource, attackingSquad, attackingResource);
//         if (defendingSquad[defendingResource].currentHealth < 0) {
//             defendingSquad.splice(defendingResource, 1);
//             throw new Error( defendingSquad[defendingResource].name + " was" +
//                 " killed");
//         }
//     } catch (e) {
//         console.log(e.name, e.message);
//     } finally {
//         setTimeout(callback, getFightingInterval());
//     }
// }, 1000);
//
// function showInfo (defSquad, indDef, attSquad, indAtt) {
//     console.log(defSquad.forEach(function (res) {console.log(res.name, res.currentHealth)}) + "\n" + defSquad[indDef].name + ": currentHealth" +
//         " = " + defSquad[indDef].currentHealth + " receivedDamage: " + attSquad[indAtt].damage + " from " + attSquad[indAtt].name);
// }
























