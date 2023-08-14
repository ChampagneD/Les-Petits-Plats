import search from "./search.js"
// Fonction appelée à la saisie de plus ou égal à 3 caractères dans la barre de recherche principale.
// Si le nouveau tableau est égal à 0, alors un message d'erreur s'affiche, s'il ne se passe rien, le tableau ne change pas
const recipesContainer = document.getElementById("recipes-container"); // Container des recettes

export default function searchRecipe(e, recipesData) {
    if (e.value.trim().length >= 3) {
      recipesContainer.innerHTML = "";
      return search(e.value.trim().toLowerCase(), recipesData);
    } else {
      return search("", recipesData);
    }
  }