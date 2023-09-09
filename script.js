
// script.js
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('results');

searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value;
    
    // action de recherche 
    // on peut afficher les résultats dans la div "resultsContainer".
    resultsContainer.innerHTML = `Vous avez recherché : ${searchTerm}`;
});
