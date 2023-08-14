import getIngredients from "./getIngredients.js";
import sortByIngredients from "./tag/sortByIngredients.js"
import sortByAppliances from "./tag/sortByAppliances.js"
import sortByustensils from "./tag/sortByustensils.js"

const recipesContainer = document.getElementById("recipes-container"); // Container des recettes

//Affichage des recettes sur la page
export default function getRecipes({recipeDisplayed}) {
    let recipesNumber = document.getElementsByClassName("recipes-number")[0];
    let recipeHTMLString = "";
  
    recipesNumber.innerHTML = `<p>${recipeDisplayed.length} recettes</p>`;
  
    let recipeArray = recipeDisplayed.map((recipe) => {
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

    recipeArray.forEach((element) => {
      recipeHTMLString += element.html; // Insère l'HTML de la recette dans recipeHTMLString
    });
    recipesContainer.innerHTML = recipeHTMLString; // l'HTML de toutes les recettes figure dans recipesContainer
  
    return {...arguments[0], sortedByIngredients: sortByIngredients(recipeDisplayed), sortedByAppliances: sortByAppliances(recipeDisplayed), sortedByUstensils: sortByustensils(recipeDisplayed)};
  }