import clickOnTag from "./clickOnTag.js"

export default function addTags(elementDOM, tableau, selectedTagList, prop) {
    elementDOM.innerHTML = "";
    for (let i = 0; i < tableau.length; i++) {
      let li = document.createElement("li");
      li.textContent = tableau[i];
      li.addEventListener("click", (e) => clickOnTag(e, selectedTagList, prop));
      elementDOM.appendChild(li);
    }
  }