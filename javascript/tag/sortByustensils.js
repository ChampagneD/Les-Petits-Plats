export default function sortByustensils(recipeDisplayed) {
    let ustensils = [];
  
    for (const property of recipeDisplayed) {
      for (const prop of property.ustensils) {
        if (!ustensils.includes(prop.toLowerCase())) {
          /*evite doublon includes*/
          ustensils.push(prop.toLowerCase());
        }
      }
    }
    return ustensils;
  }