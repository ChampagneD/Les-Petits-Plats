import openCard from "./openCard.js"
import toggleSearchTag from "./toggleSearchTag.js"
import inputTag from "./inputTag.js"

const ustensilsInput = document.getElementById("ustensiles");
const ustensilsUl = document.getElementById("ustensils-ul");

export default function showUstensilList(searchCard, {sortedByUstensils, selectedUstensils}, e) {
    openCard(searchCard);
    if (searchCard.classList.contains("active")) {
      toggleSearchTag(e, 1);
    } else {
      toggleSearchTag(e, 0);
    }
    inputTag(
      ustensilsInput,
      sortedByUstensils,
      ustensilsUl,
      selectedUstensils,
      "ustensils-filter"
    );
  }