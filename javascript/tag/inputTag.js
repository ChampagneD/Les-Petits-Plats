import addTags from "./addTags.js"

export default function inputTag(inputTags, array, uls, selectedTagList, prop) {
    const input = inputTags.value;
    let toRemove;
    let refinedResult;
  
    const refining = array.filter((item) => {
      return item.includes(input.toLowerCase());
    });
  
    if (selectedTagList.length != 0) {
      toRemove = new Set(selectedTagList);
      refinedResult = refining.filter((item) => {
        return !toRemove.has(item);
      });
    }
  
    const result = refinedResult || refining;
  
    if (result.length) {
      addTags(uls, result, selectedTagList, prop);
    } else {
      uls.innerHTML = "";
    }
  }