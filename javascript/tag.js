import { recipes } from "./recipes.js";
import getRecipes from "./getRecipes.js";
import search from "./search.js"

let ingredientList = [];
let ustensilsList = [];
let applianceList = [];
let selectedIngredients = [];
let selectedUstensils = [];
let selectedAppliances = [];


 // Ouverture de la searchCard
/*
function searchTag() {
  let sortArray = [];
  let applianceBool = false;
  let ustensilsBool = false;
  let ingredientsBool = false;
  for (let i = 0; i < recipes.length; i++) {
    if (selectedIngredients.length > 0) {
      for (let m = 0; m < selectedIngredients.length; m++) {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          if (
            recipes[i].ingredients[j].ingredient
              .toLowerCase()
              .includes(selectedIngredients[m].toLowerCase())
          ) {
            ingredientsBool = true;
            break;
          } else {
            ingredientsBool = false;
          }
        }
      }
    } else ingredientsBool = true;
    if (selectedUstensils.length > 0) {
      for (let m = 0; m < selectedUstensils.length; m++) {
        for (let j = 0; j < recipes[i].ustensils.length; j++) {
          if (
            recipes[i].ustensils[j]
              .toLowerCase()
              .includes(selectedUstensils[m].toLowerCase())
          ) {
            ustensilsBool = true;
            break;
          } else {
            ustensilsBool = false;
          }
        }
      }
    } else ustensilsBool = true;
    if (selectedAppliances.length > 0) {
      for (let j = 0; j < selectedAppliances.length; j++) {
        if (
          recipes[i].appliance[j]
            .toLowerCase()
            .includes(selectedAppliances[j].toLowerCase())
        ) {
          applianceBool = true;
          break;
        } else {
          applianceBool = false;
        }
      }
    } else applianceBool = true;
    if (applianceBool && ustensilsBool && ingredientsBool) {
      sortArray.push(recipes[i]);
    }
  }

  getRecipes(sortArray);
}
*/

searchCard[0].addEventListener("click", showIngredientsList);
searchCard[1].addEventListener("click", showApplianceList);
searchCard[2].addEventListener("click", showUstensilList);

