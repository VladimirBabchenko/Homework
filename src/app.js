import * as style from "./scss/styles.scss";
import MilitaryResource from "./js/army/military-resource";
import Squad from "./js/army/squad";
import BattleGround from "./js/army/armies-battle";
import symbolExample from "./js/symbols";

var paladin = new MilitaryResource("paladin", 150, 800, 1500, "/src/img/paladin.png");
var assasin = new MilitaryResource("assasin", 300, 450, 1200, "/src/img/assasin.png");
var archer = new MilitaryResource("archer", 50, 350, 400, "/src/img/archer.png");
var knight = new MilitaryResource("knight", 120, 650, 1200, "/src/img/knight.png");
var lich = new MilitaryResource("lich", 200, 300, 450, "/src/img/lich.png");
var vampire = new MilitaryResource("vampire", 150, 550, 1500, "/src/img/vampire.png");


// var battleTeam1 = new Squad([assasin, lich, vampire], "grey");
// var battleTeam2 = new Squad([paladin, archer, knight], "gold");
//
// var battleTeams = new BattleGround([battleTeam1, battleTeam2], "url(/src/img/landscape.jpg)");
// console.log(battleTeams);

// battleTeams.fight();

// battleTeams.fight();

console.log(symbolExample);


