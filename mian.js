const head = document.querySelector(".head");
const item3 = document.querySelector(".item-3");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");

window.onscroll = function () {
    if (this.scrollY >= 10) {
        head.classList.add("border");
        head.classList.remove("bord");
    }
    if (this.scrollY <= 10) {
        head.classList.remove("border");
        head.classList.add("bord");
    }
    if (this.scrollY >= 1000) {
        item3.classList.add("item3Show");
        item3.classList.remove("item-3");
    }
    if (this.scrollY <= 1000) {
        item3.classList.remove("item3Show");
        item3.classList.add("item-3");
    }

    if (this.scrollY >= 1000) {
        item1.classList.add("item1Show");
        item1.classList.remove("item-1");
    }
    if (this.scrollY <= 1000) {
        item1.classList.remove("item1Show");
        item1.classList.add("item-1");
    }

    if (this.scrollY >= 1000) {
        item2.classList.add("item2Show");
    }
    if (this.scrollY <= 1000) {
        item2.classList.remove("item2Show");
    }
};
