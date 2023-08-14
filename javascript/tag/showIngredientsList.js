import openCard from "./openCard.js"
import toggleSearchTag from "./toggleSearchTag.js"
import inputTag from "./inputTag.js"

const ingredientsInput = document.getElementById("ingredients"); // Input de la search-card "Ingredients"
const ingredientsUl = document.getElementById("ingredients-ul");

export default function showIngredientsList(searchCard, {sortedByIngredients, selectedIngredients} ,e) {
  openCard(searchCard);
  if (searchCard.classList.contains("active")) {
    toggleSearchTag(e, 1);
  } else {
    toggleSearchTag(e, 0);
  }
  inputTag(
    ingredientsInput,
    sortedByIngredients,
    ingredientsUl,
    selectedIngredients,
    "ingredients-filter"
  );
}