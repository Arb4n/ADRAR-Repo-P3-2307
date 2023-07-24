let taches = ["nettoyer", "balayer", "", "astiquer", "travailler"];
let listeTaches = document.createElement('table');
document.body.appendChild(listeTaches);

for (let tache of taches) {
  let tachesRow = document.createElement('tr');
  let tachesCell = document.createElement('td');

    tachesCell.setAttribute("class", "card");
    let card = tachesCell .getAttribute("class");

console.log(card);

  tachesCell.textContent = tache;
  tachesRow.appendChild(tachesCell);
  listeTaches.appendChild(tachesRow);

}

document.getElementById("myButton").addEventListener("click", handleClick);

function handleClick() {
  console.log("Button clicked");
}


document.getElementById("addButton").addEventListener("click", function() {
  // Récupérer le texte saisi dans la zone de saisie
  let input = document.getElementById("inputText");
  let text = input.value;

  if (text) {
    // Créer une nouvelle cellule et ajouter le texte saisi
    let cell = document.createElement("td");
    cell.textContent = text;

    // Ajouter la nouvelle cellule à la dernière ligne du tableau
    let table = document.getElementById("myTable");
    let lastRow = table.rows[table.rows.length - 1];
    lastRow.appendChild(cell);

    // Réinitialiser le contenu de la zone de saisie
    input.value = "";
  }
});


/* Réaliser une To Do list


Crée un tableau de tâches
Parcourir ce tableau et afficher sous forme de carte les tâches
Crée un bouton "ajouter", qui affiche un champ de saisie avec un boutons "valider"
Au clique du bouton valider, ajouter la nouvelle tâche au tableau 
Ajouter dans les cartes un bouton supprimer qui efface la carte et modifier qui permet de changer
le texte de la tâche. 
*/

