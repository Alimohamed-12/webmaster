let hamburger_icon = document.querySelector(".menu");
let menu_bar = document.querySelector(".main-bar-menu");


hamburger_icon.addEventListener("click", function() {
    if(menu_bar.style.display == 'block') {
        menu_bar.style.display = 'none'
    } else {
        menu_bar.style.display = 'block'
    }   
});

