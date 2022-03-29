const menuBtn = document.getElementById("menu-icon")
const menu = document.getElementById("header-menu")

// menu is opened or closed when button is clicked

menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ?
    "none" :
    "block"
})

// menu disappears when user clicks away from it

document.addEventListener("click", event => {
    if ( !menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.style.display = "none"
    }
})