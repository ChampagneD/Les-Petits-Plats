import searchTag from "./searchTag.js"
import pipeline from "../index.js"

export default function clickOnTag(e, selectedTagList, prop) {
    let li = e.target;
    let selectedTag = document.createElement("div");
    selectedTag.classList.add(prop, "selectedTags");
    let p = document.createElement("p");
    p.innerText = li.textContent;
    selectedTag.appendChild(p);
    let i = document.createElement("i");
    i.classList.add("fa-solid", "fa-xmark", "fa-xs");
    selectedTag.appendChild(i);
    i.addEventListener("click", (e) => {
      const index = selectedTagList.indexOf(li.textContent);
      if (index > -1) {
        selectedTagList.splice(index, 1);
        selectedTag.remove();
        pipeline()
      }
    });
  
    selectedTags.appendChild(selectedTag);
    selectedTagList.push(li.textContent);
    pipeline();
  }