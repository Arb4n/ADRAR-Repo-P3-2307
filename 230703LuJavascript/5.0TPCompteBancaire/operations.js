/* 
TP compte bancaire
1: Réaliser 3 classes, Titulaire, Compte et CompteEpargne.

2: CompteEpargne hérite de Compte.

3: Titulaire prend en paramètre un nom et un prenom

4: Compte prend en paramètre le Titulaire et le montant

5: CompteEpargne prend en paramètre le Titulaire, le montant, 
le taux et temps(en seconde) que le taux met
à actualiser le montant.

6: Compte à 3 méthodes, créditer, débiter 
et afficherSolde. Et CompteEpargne à une fonction d'interval
qui multiplie le taux au montant toutes les secondes
saisie dans la variable temps.

7: Dans un tableau, stocker plusieurs instance de Titulaire.

8: Parcourez le tableau et faite en sorte de pouvoir 
saisir le montant à créditer et à débiter pour chaque
Titulaire ainsi que d'afficher son solde.

9: Le solde doit pouvoir s'actualiser toutes les X secondes en fonction de la variable temps et afficher
dans la console le nouveau montant
*/

setInterval(() => {
    //fais quelque chose
}, /* Interval de temps: 1000milliseconde (1sec)*/)



/* 
TP compte bancaire
1: Réaliser 3 classes, Titulaire, Compte et CompteEpargne. */





// le taux et temps(en seconde) que le taux met
// à actualiser le montant.




// TITULAIRE
// 3: Titulaire prend en paramètre un nom et un prenom
class Titulaire {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;

    }
    afficher(){
        console.log(this);
    }

}
let titulaire = new Titulaire ("Cage", "Lucas");
titulaire.afficher();

// COMPTE
// 4: Compte prend en paramètre le Titulaire et le montant // Question à gpt : "faire en sorte qu'une classe intègre une autre classe"
// 6.0: Compte a 3 méthodes = créditer, débiter 
// et afficherSolde. 
class Compte{
        constructor(titulaire, montant) {
        this.titulaire = new Titulaire();
        this.montant = montant;
        
    }
    crediter(montant){
        this.montant+=montant;
        
    }
    debiter(montant){
        if(this.montant >= montant) {
            this.montant -= montant;
        } else {
            console.log("Solde Insuffisant");
        }

    }

    afficherSolde(){
        console.log(`Solde du compte : ${this.montant} €`)
    }
}

// COMPTE EPARGNE
// 2: CompteEpargne hérite de Compte.
// 5: CompteEpargne prend en paramètre le Titulaire, le montant, 
// 6.1 Et CompteEpargne a une fonction d'interval
// qui multiplie le taux au montant toutes les secondes
// saisies dans la variable temps.
class CompteEpargne extends Compte {
    constructor(titulaire, montant, taux, temps) {
        super(titulaire, montant);
        this.titulaire = new Titulaire();
        this.montant = montant;
        this.taux = taux;
        this.temps = temps;

    }
    interval(){
        let temps = (this.taux*this.montant)*this.temps;
        return temps

    }
}

let ope = new CompteEpargne ("Page", "Larry", 139033, 3, 10 );
console.log(ope.interval());

// 7: Dans un tableau, stocker plusieurs instances de Titulaire.
const clientele = [ // je crée un tableau qui regroupe des objets(des instances).
    new Titulaire("Cassidy", "Butch"),
    new Titulaire("Shanana", "Anna"),
    new Titulaire("Tom", "Tom"),
    new Titulaire("Noiret", "Soraya"),
];
// !!!! Pour afficher: parcourir, banane !!! → for 

for(let i = 0; i < clientele.length; i++){
    const titulaire = clientele[i];
    console.log("Nom: ", titulaire.nom, "Prenom: ", titulaire.prenom);
}

// 8: Parcourez le tableau et faites en sorte de pouvoir 
// saisir le montant à créditer et à débiter pour chaque
// Titulaire ainsi que d'afficher son solde.

let credit = prompt("Montant à créditer");
 credit = credit.toLowerCase();
let debit = prompt("Montant à débiter");
 debit = debit.toLowerCase();

// const searchMovies = (items, search) => {
//     return items.filter(item => item.toLowerCase().includes(search));
// }
// const searchMovies2 = function(items, search) {
//     return items.filter(item => item.toLowerCase().includes(search));
// }
// console.log(searchMovies(films, term));


/*


9: Le solde doit pouvoir s'actualiser toutes les X secondes en fonction de la variable temps et afficher
dans la console le nouveau montant
*/

setInterval(() => {
    //fais quelque chose  → 'montant* taux ?' 
}, /* Interval de temps: 1000milliseconde (1sec)*/)















