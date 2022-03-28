const menuBtn = document.getElementById("menu-icon")
const menu = document.getElementById("header-menu")


menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ?
    "none" :
    "block"
})