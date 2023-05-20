/*
Chevaux de course (CodinGame).
URL: https://www.codingame.com/ide/puzzle/horse-racing-duals
*/

// Stockage du nombre de chevaux.
let nombreDeChevauxN = readline();

// Tableau des puissances.
let tableauDesPuissancesPi = [];

// Stockage des puissances.
for (let i = 0; i < nombreDeChevauxN; i++) {
  tableauDesPuissancesPi[i] = readline();
}

// Classement des puissances dans l'ordre croissant.
let tableauEnOrdreCroissant = tableauDesPuissancesPi.sort((a, b) => a-b);

// Calcul de l'écart entre les puissances.
function ecartEntreLesPuissances(A) {
  return A.slice(1).map((n, i) => n - A[i]);
}

// Stockage de l'écart entre les puissances.
let tableauDesEcarts = ecartEntreLesPuissances(tableauEnOrdreCroissant);

// Affichage de l'écart de puissance le plus petit.
console.log(Math.min(...tableauDesEcarts));