import { recipes } from "./recipes.js";
import getRecipes from "./getRecipes.js"
import searchRecipe from "./searchRecipe.js";
import showApplianceList from "./tag/showApplianceList.js"
import showIngredientsList from "./tag/showIngredientsList.js"
import showUstensilList from "./tag/showUstensilList.js"
import searchTag from "./tag/searchTag.js";
import inputTag from "./tag/inputTag.js";


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
const searchInput = document.getElementById("search");
const searchInputTag = document.querySelectorAll(".search-input");
const searchCard = document.querySelectorAll(".search-card"); // Search-cards Ingrédients, Appareil, Ustensiles
const ingredientsInput = document.getElementById("ingredients"); // Input de la search-card "Ingredients"
const applianceInput = document.getElementById("appareil");
const ustensilsInput = document.getElementById("ustensiles");
const ingredientsUl = document.getElementById("ingredients-ul");
const applianceUl = document.getElementById("appliances-ul");
const ustensilsUl = document.getElementById("ustensils-ul");
let recipesNumber = document.getElementsByClassName("recipes-number")[0];
let errorResult = document.getElementById("error-result");

searchInputTag.forEach((e) =>
  e.addEventListener("click", (e) => e.stopPropagation())
);

// Variables
let recipesData = {
  recipes: recipes,
  recipeDisplayed: recipes,
  selectedIngredients: [],
  selectedUstensils: [],
  selectedAppliances: []
};

searchCard[0].addEventListener("click", (e) => {
  showIngredientsList(searchCard[0], recipesData, e)
});
searchCard[1].addEventListener("click", (e) => {
  showApplianceList(searchCard[1], recipesData, e)
});
searchCard[2].addEventListener("click", (e) => {
  showUstensilList(searchCard[2], recipesData, e)
});

// FONCTIONS
recipesData = getRecipes(recipesData); // Affichage de toutes les recettes sur la page au chargement

// Bind the elements of the interface that react to a User event
searchInput.addEventListener("input", () => {
  pipeline();
});

ingredientsInput.addEventListener("keyup", (e) =>
  inputTag(
    e.target,
    recipesData.ingredientList,
    ingredientsUl,
    recipesData.selectedIngredients,
    "ingredients-filter"
  )
);
applianceInput.addEventListener("keyup", (e) =>
  inputTag(
    e.target,
    recipesData.applianceList,
    applianceUl,
    recipesData.selectedAppliances,
    "appliances-filter"
  )
);
ustensilsInput.addEventListener("keyup", (e) =>
  inputTag(
    e.target,
    recipesData.ustensilsList,
    ustensilsUl,
    recipesData.selectedUstensils,
    "ustensils-filter"
  )
);

export default function pipeline() {
  recipesData = searchRecipe(searchInput, recipesData);
  recipesData = searchTag(recipesData);
  if (recipesData.recipeDisplayed.length == 0) {
    recipesNumber.style.display = "none"
    // Display an error when there are no results
    errorResult.innerHTML = `<p class="no-value">« Aucune recette ne correspond à votre critère… vous pouvez
    chercher « tarte aux pommes », « poisson », etc.
     </p>`;
  }
}