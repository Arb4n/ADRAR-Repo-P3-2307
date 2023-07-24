class Titulaire {
    constructor(nom, prenom) {
      this.nom = nom;
      this.prenom = prenom;
    }
  }
  
  class Compte {
    constructor(titulaire, montant) {
      this.titulaire = titulaire;
      this.montant = montant;
    }
  
    crediter(montant) {
      this.montant += montant;
    }
  
    debiter(montant) {
      if (this.montant >= montant) {
        this.montant -= montant;
      } else {
        console.log("Solde Insuffisant");
      }
    }
  
    afficherSolde() {
      console.log(`Solde du compte : ${this.montant} €`);
    }
  }
  
  class CompteEpargne extends Compte {
    constructor(titulaire, montant, taux, temps) {
      super(titulaire, montant);
      this.taux = taux;
      this.temps = temps;
      this.intervalId = null;
    }
  
    interval() {
      this.intervalId = setInterval(() => {
        this.montant += this.montant * this.taux;
        console.log(`Nouveau montant : ${this.montant} €`);
      }, this.temps * 1000);
    }
  
    arreterInterval() {
      clearInterval(this.intervalId);
    }
  }
  
  const clientele = [
    new Titulaire("Cassidy", "Butch"),
    new Titulaire("Shanana", "Anna"),
    new Titulaire("Tom", "Tom"),
    new Titulaire("Noiret", "Soraya")
  ];
  
  for (let i = 0; i < clientele.length; i++) {
    const titulaire = clientele[i];
    const compte = new Compte(titulaire, 0);
  
    let credit = prompt(`Montant à créditer pour ${titulaire.prenom} ${titulaire.nom}`);
    credit = parseFloat(credit);
    compte.crediter(credit);
  
    let debit = prompt(`Montant à débiter pour ${titulaire.prenom} ${titulaire.nom}`);
    debit = parseFloat(debit);
    compte.debiter(debit);
  
    compte.afficherSolde();
  }
  
  // Exemple d'utilisation pour un compte épargne
  const titulaireEpargne = new Titulaire("Page", "Larry");
  const compteEpargne = new CompteEpargne(titulaireEpargne, 0, 0.05, 3);
  compteEpargne.interval();