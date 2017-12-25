function defineWhichSquadAttack(squad, enemy) {
    var chance = Math.round(Math.random()*100);
    return chance < 50 ? {attackingSquad: squad, defendingSquad: enemy} :
                         {attackingSquad: enemy, defendingSquad: squad};
}

function whichResourcesFight(squadLength) {
    return Math.round(Math.random() * (squadLength-1));
}
function getFightingInterval() {
    return Math.round(Math.random() *1000);
}

setTimeout(function callback() {
    try {
        var fightingSquads = defineWhichSquadAttack(squad, enemySquad);
        var attackingSquad = fightingSquads.attackingSquad.squad;
        var defendingSquad = fightingSquads.defendingSquad.squad;
        var attackingResource = whichResourcesFight(attackingSquad.length);
        var defendingResource = whichResourcesFight(defendingSquad.length);
        if (defendingSquad.length === 0 || attackingSquad.length === 0) return;
        defendingSquad[defendingResource].attackedBy(attackingSquad[attackingResource]);
        showInfo(defendingSquad, defendingResource, attackingSquad, attackingResource);
        if (defendingSquad[defendingResource].currentHealth < 0) {
            defendingSquad.splice(defendingResource, 1);
            throw new Error( defendingSquad[defendingResource].name + " was" +
                " killed");
        }
    } catch (e) {
        console.log(e.name, e.message);
    } finally {
        setTimeout(callback, getFightingInterval());
    }
}, 1000);

function showInfo (defSquad, indDef, attSquad, indAtt) {
    console.log(defSquad.forEach(function (res) {console.log(res.name, res.currentHealth)}) + "\n" + defSquad[indDef].name + ": currentHealth" +
        " = " + defSquad[indDef].currentHealth + " receivedDamage: " + attSquad[indAtt].damage + " from " + attSquad[indAtt].name);
}
























