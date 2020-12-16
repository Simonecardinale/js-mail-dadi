// input giocatore
// var dadi = ["uno", "due", "tre", "quattro", "cinque", "sei"]

var inizia = document.getElementById("iniziaBottone");
inizia.addEventListener('click',
function() {
    var giocatore = document.getElementById('dadoGiocatore').innerHTML = Math.floor(Math.random()*(6 - 1) + 1);
    var computer = document.getElementById('dadoComputer').innerHTML = Math.floor(Math.random()*(6 - 1) + 1);
    var nascosto = document.getElementById('game');
    nascosto.classList.remove('hidden');

    // condizioni 

if (giocatore > computer) {
    document.getElementById('vittoria').innerHTML = "Hai vinto!";
} else if (giocatore < computer) {
    document.getElementById('vittoria').innerHTML = "Hai perso!";
} else {
    document.getElementById('vittoria').innerHTML = "Pareggio!";
}

var risultato = document.getElementById('ciao').innerHTML = dadi[giocatore];

}
);
