// store elements
const BURGERMENU = document.querySelector(".burgermenu")
const BURGERMENU_HIDDEN = document.querySelector(".hidden")
const BURGERMENU_NAVBAR_LIST_CONTAINER = document.querySelector(".burgermenu__navbar__list__container")

// events
BURGERMENU.addEventListener("click", () => {
    BURGERMENU_NAVBAR_LIST_CONTAINER.classList.toggle("burgermenu__navbar__list__container--hidden")
})