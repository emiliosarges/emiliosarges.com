document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const toggle = document.createElement("button");
    
    toggle.innerHTML = "&#9776;";
    toggle.id = "menu-toggle";
    toggle.style.background = "none";
    toggle.style.border = "none";
    toggle.style.color = "white";
    toggle.style.fontSize = "2rem";
    toggle.style.cursor = "pointer";
    toggle.style.margin = "10px auto";
    toggle.style.display = "none";
    toggle.style.textAlign = "center";
    
    menu.parentNode.insertBefore(toggle, menu);
    menu.style.textAlign = "center";
    
    toggle.addEventListener("click", function () {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "flex";
            menu.style.flexDirection = "column";
            menu.style.gap = "2px";
        } else {
            menu.style.display = "none";
        }
    });

    function ajustarMenu() {
        if (window.innerWidth <= 768) {
            menu.style.display = "none";
            toggle.style.display = "block";
        } else {
            menu.style.display = "flex";
            menu.style.flexDirection = "row";
            menu.style.gap = "0px";
            toggle.style.display = "none";
        }
    }
    
    ajustarMenu();
    window.addEventListener("resize", ajustarMenu);
});
