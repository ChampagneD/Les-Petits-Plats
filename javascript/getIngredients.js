// Affichage des ingrédients dans la card recette
export default function getIngredients(item) {
    return `<div> 
              <span class="ingredient">${item.ingredient}</span>
              <span class="units">${item.quantity || ""} ${item.unit || ""}</span>
            </div> `;
  }