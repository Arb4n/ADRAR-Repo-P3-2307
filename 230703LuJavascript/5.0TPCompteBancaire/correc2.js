/ TP Compte bancaire

class Titulaire{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.compte = null;
        this.compteEpargne = null;
    }

    identite(){
        console.log(le titulaire du compte s'appellle ${this.prenom} ${this.nom} );
    }

    creerCompte(montant){
        this.compte = new Compte(this, montant); // this fait référence au données instanciées dans le constructeur de la classe courante
    }

    creerCompteEpargne(montant, taux, rythme = 1000){
        this.compteEpargne = new CompteEpargne(this, montant, taux, rythme);
    }
}

class Compte{
    constructor(titulaire, solde){
        this.titulaire = titulaire;
        this.solde = solde;
    }

    crediter(montant){
        this.solde += montant
    }

    debiter(montant){
        this.solde -= montant;
    }

    afficherSolde(){
        return Le compte épargne présente un solde de ${this.solde} euros.
    }
}

class CompteEpargne extends Compte{
    constructor(titulaire, montant, taux, rythme){
        super(titulaire, montant);
        this.taux = taux;
        this.rythme = rythme;

        setInterval(() => {
            this.solde = this.taux;
            console.log(Le taux de ${this.taux} a été appliqué sur le compte de ${this.titulaire.prenom} ${this.titulaire.nom}. Nouveau solde: 
            ${this.solde} euros.);
        }, this.rythme)
    }
}

const titulaires = [
    new Titulaire("Poré", "Eva"),
    new Titulaire("Cover", "Harry"),
    new Titulaire("Kan", "Jerry")
]

for(let titulaire of titulaires){
    titulaire.identite();
    titulaire.creerCompte(100);
    titulaire.creerCompteEpargne(Math.random()`1000`, parseFloat(Math.random().toFixed(2)))
}

for(let titulaire of titulaires){
    console.log("--------------------");
    console.log(`Titulaire : ${titulaire.prenom} ${titulaire.nom}`);
    console.log("Compte:");
    console.log(titulaire.compte.afficherSolde());
    console.log("--------------------");
}