import getRecipes from "../getRecipes.js";

export default function searchTag({recipeDisplayed, selectedAppliances, selectedIngredients, selectedUstensils}) {
    let filteredRecipes = recipeDisplayed.filter((element) => {
      let recipeIngredients = element.ingredients.map((ing) =>
        ing.ingredient.toLowerCase()
      );
      let recipeUstensils = element.ustensils.map((ing) => ing.toLowerCase());
      return (
        selectedAppliances.every((i) => element.appliance.toLowerCase() == i) &&
        selectedIngredients.every((i) => recipeIngredients.includes(i)) &&
        selectedUstensils.every((i) => recipeUstensils.includes(i))
      );
    });
    arguments[0].recipeDisplayed = filteredRecipes
    return getRecipes(arguments[0]);
  }