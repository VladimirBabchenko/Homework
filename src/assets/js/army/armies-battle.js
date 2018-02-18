function BattleGround(squad, land) {
    this.battleField = [];
    if (squad) {
        this.addToBattleGround(squad);
    }
    this.addToDomField(land);
}

BattleGround.prototype = Object.create(Squad.prototype);
BattleGround.prototype.constructor = BattleGround;


BattleGround.prototype.addToDomField = function(field) {
    var self = this;
    var wrapper = document.getElementById("wrapper-military");
    wrapper.style.background = field;


    var teamsBlock = document.createElement("section");
    var fieldScoreWrapper = document.createElement("section");
    var fieldBattle = document.createElement("div");
    var scoreBoard = document.createElement("div");

    this.battleField.forEach(function(team) {
        var squadBlockWrapper = document.createElement("div");
        var squadBlock = document.createElement("ul");
        team["squadLength"] = document.createElement("span");

        team["squadLength"].innerHTML = team.squad.length;

        squadBlockWrapper.classList.add("score-team-wrapper");
        squadBlock.classList.add("score-board-team");
        team["squadLength"].classList.add("team-score");

        team.squad.forEach(function(resource) {
            var res = document.createElement("li");
            resource["scoreTitle"] = res;
            res.classList.add("score-board-warrior");
            res.innerHTML = resource.name;
            squadBlock.appendChild(res);
        });

        squadBlockWrapper.append(team["squadLength"], squadBlock);
        scoreBoard.appendChild(squadBlockWrapper);
    });

    for (var i = 0; i < 172*28; i += 172) {
        var fieldCell = document.createElement("div");
        fieldCell.classList.add("field-cell");
        fieldBattle.appendChild(fieldCell);
    }

    teamsBlock.classList.add("teamlist-block");
    fieldScoreWrapper.classList.add("field-wrapper");
    fieldBattle.classList.add("field");
    scoreBoard.classList.add("score-board");

    this.battleField.forEach(function(squad) {
        teamsBlock.appendChild(squad.teamBlock);
    });

    wrapper.append(teamsBlock, fieldScoreWrapper);
    fieldScoreWrapper.append(fieldBattle, scoreBoard);
};

BattleGround.prototype.addToBattleGround = function(squad) {
    if (!Array.isArray(squad)) return;
    this.battleField = this.battleField.concat(squad);
};


BattleGround.prototype.attacked = function() {
    var self = this;
    var team = this.defineWhichTeamAttack(self.battleField[0], self.battleField[1]);
    var attackingTeam = team["attacking"].squad;
    var defendingTeam = team["defending"].squad;
    if(attackingTeam.length === 0 || defendingTeam.length === 0) return;
    var attackingInd = this.defineWarriorIndex(attackingTeam.length);
    var defendingInd = this.defineWarriorIndex(defendingTeam.length);
    var attackingWarrior = attackingTeam[attackingInd];
    var defendingWarrior = defendingTeam[defendingInd];
    defendingWarrior.attackedBy(attackingWarrior);
    if(defendingWarrior.currentHealth <= 0) {
        defendingWarrior.warrior.parentNode.removeChild(defendingWarrior.warrior);
        defendingTeam.splice(defendingInd, 1);
        team["defending"].squadLength.innerHTML = defendingTeam.length;
        defendingWarrior.scoreTitle.insertAdjacentHTML("beforeEnd", " - was killed")
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


var battleTeams = new BattleGround([battleTeam1, battleTeam2], "url(assets/img/landscape.jpg)");
console.log(battleTeams);

battleTeams.fight();

























