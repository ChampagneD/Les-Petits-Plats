import { recipes } from "./recipes.js";
import { sortByIngredients, sortByAppliances, sortByustensils } from "./tag.js";

// Retournement du chevron des cards au clic
const chevron = document.querySelectorAll(".fa-chevron-down");
for (let i = 0; i < chevron.length; i++) {
  const element = chevron[i];
  element.addEventListener("click", dropdown);
  function dropdown() {
    if (element.style.transform == "rotate(180deg)") {
      element.style.transform = "";
    } else {
      element.style.transform = "rotate(180deg)";
    }
  }
}

// DOM
const recipesContainer = document.getElementById("recipes-container"); // Container des recettes
const searchInput = document.getElementById("search");
/* const chevron = document.querySelectorAll(".fa-chevron-down"); // Chevrons des boutons
 */
// Variables
let recipeArray = []; // Tableau contenant toutes les recettes
let recipeHTMLString = ""; // Contenu de la liste des recettes
let errorResult = document.getElementById("error-result");
let lastTags = [];
let recipeDisplayed = [];

// FONCTIONS
getRecipes(recipes); // Affichage de toutes les recettes sur la page au chargement

//Affichage des recettes sur la page
export function getRecipes(recipesToDisplay) {
  let recipesNumber = document.getElementsByClassName("recipes-number")[0];

  recipesNumber.innerHTML = `<p>${recipesToDisplay.length} recettes</p>`;

  recipeArray = recipesToDisplay.map((recipe) => {
    // Remplit recipeArray avec toutes les données nécessaires
    return {
      html: `
        <div class="recipe-card" data-id="${recipe.id}">
            <div class="recipe-img">
              <img src="assets/${recipe.image}"/>
              <span class="time"> ${recipe.time} min</span>
            </div>
            <div class="recipe-content">
              <div class="recipe-head">
                <h3>${recipe.name}</h3>
              </div>
              <div class="recipe-text">
                  <div class="recipe-instructions">
                    <h4>recette</h4>
                    <article class="description">
                      <p>
                        ${recipe.description.substring(0, 200)}${
        recipe.description.length > 200 ? "..." : ""
      }
                      </p>
                    </article>
                  </div>
                  <div>
                    <h4>ingrédients</h4>
                    <aside class="recipe-ingredients">${recipe.ingredients
                      .map(getIngredients)
                      .join(" ")}</aside> 
                  </div>
              </div>
            </div>   
        </div>
        `,
    };
  });

  recipeHTMLString = "";
  recipeArray.forEach((element) => {
    recipeHTMLString += element.html; // Insère l'HTML de la recette dans recipeHTMLString
  });
  recipesContainer.innerHTML = recipeHTMLString; // l'HTML de toutes les recettes figure dans recipesContainer
  recipeDisplayed = recipesToDisplay;

  sortByIngredients(recipeDisplayed);
  sortByAppliances(recipeDisplayed);
  sortByustensils(recipeDisplayed);
}

// Affichage chaque ingrédient dans recipe.ingredient
function ingredientConstructor(item) {
  return `${item.ingredient}`;
}

// Affichage des ingrédients dans la card recette
function getIngredients(item) {
  return `<div> 
            <span class="ingredient">${item.ingredient}</span>
            <span class="units">${item.quantity || ""} ${item.unit || ""}</span>
          </div> `;
}

// ALGO SEARCH 1
export function search(query) {
  let filteredRecipes = recipes.filter((element) => {
    let recipeIngredients = element.ingredients.map((ing) =>
      ing.ingredient.toLowerCase()
    );
    return (
      element.name.toLowerCase().includes(query) ||
      recipeIngredients.includes(query) ||
      element.description.toLowerCase().includes(query)
    );
  });
  // Modify UI
  if (filteredRecipes.length == 0) {
    // Display an error when there are no results
    errorResult.innerHTML = `<p class="no-value">« Aucune recette ne correspond à votre critère… vous pouvez
    chercher « tarte aux pommes », « poisson », etc.
     </p>`;
  } else {
    errorResult.innerHTML = "";
    // Display in the DOM, the filtered recipes
    getRecipes(filteredRecipes);
  }
}
/*
// ALGO SEARCH 2
export function searchTest(query) {
  console.debug("searching");
  let newArray = recipes;
  let sortArray = [];
  for (let i = 0; i < newArray.length; i++) {
    if (
      newArray[i].name.toLowerCase().includes(query.toLowerCase()) ||
      newArray[i].description.toLowerCase().includes(query.toLowerCase())
    ) {
      sortArray.push(newArray[i]);
    } else {
      for (let j = 0; j < newArray[i].ingredients.length; j++) {
        if (
          newArray[i].ingredients[j].ingredient
            .toLowerCase()
            .includes(query.toLowerCase())
        ) {
          sortArray.push(newArray[i]);
          break;
        }
      }
    }
  }
  // Modify UI
  if (sortArray.length == 0) {
    // Display an error when there are no results
    errorResult.innerHTML = `<p class="no-value">« Aucune recette ne correspond à votre critère… vous pouvez
    chercher « tarte aux pommes », « poisson », etc.
     </p>`;
  } else {
    errorResult.innerHTML = "";
    // Display in the DOM, the filtered recipes
    getRecipes(sortArray);
  }
}
*/
// Fonction appelée à la saisie de plus ou égal à 3 caractères dans la barre de recherche principale.
// Si le nouveau tableau est égal à 0, alors un message d'erreur s'affiche, s'il ne se passe rien, le tableau ne change pas

function searchRecipe(e) {
  if (searchInput.value.length >= 3) {
    recipesContainer.innerHTML = "";
    search(searchInput.value.toLowerCase());
  } else {
    search("");
  }
}
// Bind the elements of the interface that react to a User event
searchInput.addEventListener("input", (e) => {
  console.log("hello");
  // testInput(e);
  searchRecipe(e);
});
