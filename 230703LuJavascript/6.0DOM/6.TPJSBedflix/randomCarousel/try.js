// Étape 1: Faire une requête à l'API Betaseries avec fetch
var apiUrl = 'https://api.betaseries.com/shows/random?key=7e358fd2b4b6';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Étape 2: Extraire l'URL de l'image de la réponse JSON
    var imageUrl = data.show.images.poster;

    // Étape 3: Créer un élément d'image
    var imgElement = document.createElement('img');

    // Étape 4: Définir l'attribut src avec l'URL de l'image
    imgElement.src = imageUrl;

    // Étape 5: Ajouter l'élément d'image à la page HTML
    document.body.appendChild(imgElement);
  })
  .catch(error => {
    console.log('Une erreur s\'est produite:', error);
  });

  /** 
Ce code utilise la méthode fetch pour envoyer une requête 
GET à l'API Betaseries et récupérer les données JSON. 
Ensuite, il extrait l'URL de l'image de la réponse JSON 
et crée un élément <img> avec cette URL. Finalement,
 l'élément d'image est ajouté au corps (<body>) de la page HTML.

N'oubliez pas d'inclure ce code dans votre page HTML, 
soit dans une balise <script> dans l'en-tête (<head>)
 ou avant la fermeture de la balise <body>, pour vous assurer 
 qu'il s'exécute lorsque la page est chargée.

*/