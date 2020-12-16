// input giocatore

var giocatore = document.getElementById('dadoGiocatore').innerHTML = Math.floor(Math.random()*(6 - 1) + 1);

var computer = document.getElementById('dadoComputer').innerHTML = Math.floor(Math.random()*(6 - 1) + 1);

// condizioni 

if (giocatore > computer) {
    document.getElementById('vittoria').innerHTML = "hai vinto!";
} else if (giocatore < computer) {
    document.getElementById('vittoria').innerHTML = "hai perso!";
} else {
    document.getElementById('vittoria').innerHTML = "Pareggio!";
}