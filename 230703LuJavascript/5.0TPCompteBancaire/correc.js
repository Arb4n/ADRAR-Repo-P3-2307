/** 
 * Classe titulaire = classe parent, compte & compte epargne = parent 
 * Compte Epargne devait chq sec augmenter taux.
 * 
 * 
 * */

class titulaire {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.compte = null;
        // Partic : comme il n'y ap as d'interaction entre le compte et le titulaire, :
        this.compteEpargne = null;
    }

    identite(){
        console.log(`le titulaire du compte s'appelle ${this.prenom} ${this.nom}`)
    }

    creerCompte(montant){
        this.compte = new Compte(this, montant); // Quel est le contexte ? = this est quoi ? : this fait ref aux données instanciées dans le constructeur de la classe courante.
    
   
    }
    creerCompteEpargne(montant, taux, rythme = 5000){
        this.compteEpargne = new CompteEpargne(this.montant, taux, rythme);
    }



}

class Compte {
    constructor(titulaire, solde){
        this.titulaire = titulaire;
        this.solde = solde; 
        }

        crediter(montant){
            this.solde += montant;
            }

        debiter(montant){
            this.solde -= montant;
        }

        afficherSolde(){
            return `Le compte épargne présente un solde de ${this.solde}`
        }
    }

    class CompteEpargne extends Compte {
        constructor (titulaire, montant, taux, rythme){
            super(titulaire, montant);
            this.taux = taux;
            this.rythme = rythme;

            setInterval(() => {
                this.solde *= taux;
                console.log(`Le taux de ${this.taux} a ét appliqué sur le compte de ${this.titulaire.nom }. Nouveau solde : ${this.solde} €`); // 'this.titulaire.nom pour récupérer le nom dans le tableau .NOM .NOM.NOM.NOM.NOM
            })
        }
    }



    // but : Creer un tab avec des titulaires dedans
    const titulaires = [
        new Titulaire("Pore", "Eva"),
        new Titulaire("Cover", "Üter"),
        new Titulaire("Kan", "Jerry"),
    ]

    for(let titulaire of titulaires){
        titulaire.identite();
        titulaire.creerCompte(100);
        titulaire.creerCompteEpargne(Math.random()1000, parseFloat(Math.random().toFixed(2)))
    }
    
    for(let titulaire of titulaires){
        console.log("--------------------");
        console.log(Titulaire : ${titulaire.prenom} ${titulaire.nom});
        console.log("Compte:");
        console.log(titulaire.compte.afficherSolde());
        console.log("--------------------");
    }
    
    