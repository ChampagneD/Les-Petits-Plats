export default function sortByIngredients(recipeDisplayed) {
    let ingredients = [];
  
    for (const property of recipeDisplayed) {
      for (const prop of property.ingredients) {
        if (!ingredients.includes(prop.ingredient.toLowerCase())) {
          /*evite doublon includes*/
          ingredients.push(prop.ingredient.toLowerCase());
        }
      }
    }
    return ingredients;
  }