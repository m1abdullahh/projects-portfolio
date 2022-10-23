const articles = document.getElementsByTagName("article");
const cursor = document.getElementById("custom-cursor");
const iTags = document.getElementsByTagName("i");
const aTags = document.getElementsByTagName("a");
var activeIndex = 0;

function moveLeft() {
    // var currentActive = document.querySelector(`[data-index="${activeIndex}"]`);
    var nextIndex =
        activeIndex - 1 >= 0 ? activeIndex - 1 : articles.length - 1;

    var currentCard = document.querySelector(`[data-index="${activeIndex}"]`);
    var nextCard = document.querySelector(`[data-index="${nextIndex}"]`);

    currentCard.dataset.status = "after";

    nextCard.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextCard.dataset.status = "active";
    });

    activeIndex = nextIndex;
}
function moveRight() {
    // var currentActive = document.querySelector(`[data-index="${activeIndex}"]`);
    var nextIndex =
        activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 : 0;

    var currentCard = document.querySelector(`[data-index="${activeIndex}"]`);
    var nextCard = document.querySelector(`[data-index="${nextIndex}"]`);

    currentCard.dataset.status = "before";

    nextCard.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextCard.dataset.status = "active";
    });

    activeIndex = nextIndex;
}

function enlargenCursor() {
    cursor.style.setProperty("--cursor-dims", "2rem");
}

// window.addEventListener("keyup", (ev) => {
//     ev.key === "ArrowRight" ? moveRight() : {};
//     ev.key === "ArrowLeft" ? moveLeft() : {};
//     return;
// });
window.addEventListener("mousemove", (e) => {
    cursor.style.setProperty("--cursor-top", `${e.clientY}px`);
    cursor.style.setProperty("--cursor-left", `${e.clientX}px`);
});
for (const a of aTags) {
    a.addEventListener("mouseover", () => {
        cursor.style.setProperty("--cursor-dims", "2rem");
    });
    a.addEventListener("mouseleave", () => {
        cursor.style.setProperty("--cursor-dims", "1rem");
    });
}
for (const i of iTags) {
    i.addEventListener("mouseover", () => {
        cursor.style.setProperty("--cursor-dims", "2rem");
    });
    i.addEventListener("mouseleave", () => {
        cursor.style.setProperty("--cursor-dims", "1rem");
    });
}
