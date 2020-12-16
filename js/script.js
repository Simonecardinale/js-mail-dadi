// input giocatore

var inizia = document.getElementById("iniziaBottone");
inizia.addEventListener('click',
function() {
    var giocatore = document.getElementById('dadoGiocatore').innerHTML = Math.floor(Math.random()*(6 - 1) + 1);
    // var giocatore = document.getElementById('dadoGiocatore').innerHTML = 1;
    var computer = document.getElementById('dadoComputer').innerHTML = Math.floor(Math.random()*(6 - 1) + 1);

    // condizioni 

if (giocatore > computer) {
    document.getElementById('vittoria').innerHTML = "Hai vinto!";
} else if (giocatore < computer) {
    document.getElementById('vittoria').innerHTML = "Hai perso!";
} else {
    document.getElementById('vittoria').innerHTML = "Pareggio!";
}

if (giocatore == 1) {
    var element = document.getElementById("unoGiocatore");
    element.classList.remove("hidden");
} else if (giocatore == 2) {
    var element = document.getElementById("dueGiocatore");
    element.classList.remove("hidden");
} else if (giocatore == 3) {
    var element = document.getElementById("treGiocatore"); element.classList.remove("hidden");
} else if (giocatore == 4) {
    var element = document.getElementById("quattroGiocatore"); element.classList.remove("hidden");
} else if (giocatore == 5) {
    var element = document.getElementById("cinqueGiocatore"); element.classList.remove("hidden");
} else if (giocatore == 6) {
    var element = document.getElementById("seiGiocatore"); element.classList.remove("hidden");
}

}
);

var reset = document.getElementById("resetBottone");
reset.addEventListener('click',
function() {
    var giocatore = document.getElementById('dadoGiocatore').innerHTML = "";
    var computer = document.getElementById('dadoComputer').innerHTML = "";
    var nascosto = document.getElementById('unoGiocatore');nascosto.classList.add("hidden");
    var nascosto = document.getElementById('dueGiocatore');nascosto.classList.add("hidden");
    var nascosto = document.getElementById('treGiocatore');nascosto.classList.add("hidden");
    var nascosto = document.getElementById('quattroGiocatore');nascosto.classList.add("hidden");
    var nascosto = document.getElementById('cinqueGiocatore');nascosto.classList.add("hidden");
    var nascosto = document.getElementById('seiGiocatore');nascosto.classList.add("hidden");
}
);
