import getRecipes from "./getRecipes.js";

// ALGO SEARCH 1
export default function search(query, recipesData) {
  let errorResult = document.getElementById("error-result");
  let recipesNumber = document.getElementsByClassName("recipes-number")[0];

  let filteredRecipes = recipesData.recipes.filter((element) => {
    let recipeIngredients = element.ingredients.map((ing) =>
      ing.ingredient.toLowerCase()
    );
    return (
      element.name.toLowerCase().includes(query) ||
      recipeIngredients.includes(query) ||
      element.description.toLowerCase().includes(query)
    );
  });
  recipesData.recipeDisplayed = filteredRecipes;
  // Modify UI
  if (filteredRecipes.length == 0) {
    return recipesData;
  } else {
    errorResult.innerHTML = "";
    recipesNumber.style.display = "flex"
    // Display in the DOM, the filtered recipes
    return getRecipes(recipesData);
  }
}