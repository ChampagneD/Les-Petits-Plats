import getRecipes from "./getRecipes.js";

// ALGO SEARCH 2
let errorResult = document.getElementById("error-result");
let recipesNumber = document.getElementsByClassName("recipes-number")[0];

export default function search(query, recipesData) {
  
    let newArray = recipesData.recipes;
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
    recipesData.recipeDisplayed = sortArray;
    // Modify UI
    if (sortArray.length == 0) {
       return recipesData;
    } else {
      errorResult.innerHTML = "";
      recipesNumber.style.display = "flex"
      // Display in the DOM, the filtered recipes
      return getRecipes(recipesData);
    }
  }