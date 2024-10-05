// # ------------------------ Setting Up Character's Data ------------------------ #
const hero = {
    name : "Rukia Kuchiki",
    image : "https://ulises-justo-saucedo.github.io/combat-sample-for-swordboundsouls/img/hero/rukia.jpg",
    //image : "../img/hero/rukia.jpg",
    hp : 250,
    atk  : 10,
    def  : 10
}

const hollow = {
    name : "Hollow",
    image : "https://ulises-justo-saucedo.github.io/combat-sample-for-swordboundsouls/img/hollow/hollow.jpg",
    //image : "../img/hollow/hollow.jpg",
    hp : 150,
    atk  : 5,
    def  : 20
}

// # ------------------------ UI Related Functions ------------------------ #
function loadInfoInHTML(){
    loadHeroInfoInHTML();
    loadHollowInfoInHTML();
}

function loadHeroInfoInHTML(){
    document.getElementById("heroName").innerHTML = hero.name;
    document.getElementById("heroImage").src = hero.image;
    document.getElementById("heroHp").innerHTML = hero.hp;
    document.getElementById("heroAtk").innerHTML = hero.atk;
    document.getElementById("heroDef").innerHTML = hero.def;
}

function loadHollowInfoInHTML(){
    document.getElementById("hollowName").innerHTML = hollow.name;
    document.getElementById("hollowImage").src = hollow.image;
    document.getElementById("hollowHp").innerHTML = hollow.hp;
    document.getElementById("hollowAtk").innerHTML = hollow.atk;
    document.getElementById("hollowDef").innerHTML = hollow.def;
}

function hideButtons(){
    document.getElementById('btnAttack').style.visibility = 'hidden';
}

function combatLog(information){
    document.getElementById('combatLog').innerHTML = information;
}

// # ------------------------ Combat Related Functions ------------------------ #
function heroAttack(){
    hollow.hp -= (hollow.def - hero.atk);
}

function hollowAttack(){
    hero.hp -= (hero.def - hollow.atk);
}

function checkCombatStatus(){
    if(hollow.hp <= 0 && hero.hp <= 0){
        alert("It's a draw O_____o");
        hideButtons();
        return;
    }

    if(hollow.hp <= 0){
        alert(hero.name + " wins :)");
        hideButtons();
        return;
    }

    if(hero.hp <= 0){
        alert(hollow.name + " wins :(");
        hideButtons();
        return;
    }
}

function btnAttack(){
    heroAttack();
    hollowAttack();

    combatLog(hero.name + " hits " + hollow.name + " dealing " + (hollow.def - hero.atk) + " points of damage! " + hollow.name + " hits back dealing " + (hero.def - hollow.atk) + " points of damage!");

    checkCombatStatus();

    loadInfoInHTML();
}

// # ------------------------ Main Execution ------------------------ #
loadInfoInHTML();

document.getElementById("btnAttack").onclick = btnAttack;