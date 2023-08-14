import openCard from "./openCard.js"
import toggleSearchTag from "./toggleSearchTag.js"
import inputTag from "./inputTag.js"

const applianceInput = document.getElementById("appareil");
const applianceUl = document.getElementById("appliances-ul");

export default function showApplianceList(searchCard,{sortedByAppliances, selectedAppliances}, e) {
    openCard(searchCard);
    if (searchCard.classList.contains("active")) {
      toggleSearchTag(e, 1);
    } else {
      toggleSearchTag(e, 0);
    }
    inputTag(
      applianceInput,
      sortedByAppliances,
      applianceUl,
      selectedAppliances,
      "appliances-filter"
    );
  }