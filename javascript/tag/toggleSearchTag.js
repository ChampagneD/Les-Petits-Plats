export default function toggleSearchTag(e, scale) {
    let el = e.target;
    el = el.closest(".search-card");
    let listContainer = el.querySelectorAll(".list-container")[0];
    listContainer.style.transform = `scale(${scale})`;
}