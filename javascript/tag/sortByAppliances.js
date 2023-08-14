export default function sortByAppliances(recipeDisplayed) {
    let appliances = [];
  
    for (const property of recipeDisplayed) {
      if (!appliances.includes(property.appliance.toLowerCase())) {
        /*evite doublon includes*/
        appliances.push(property.appliance.toLowerCase());
      }
    }
    return appliances;
  }