/* menu */
const menu = document.getElementById("menu"); 
const menuOpener = document.getElementById("firstView__topMenuButton");
const menuClose = document.getElementById("menu__close");

    function openMenu() {
        menu.style.height = '100vh';
        menuOpener.style.display = 'none';
        menuClose.style.display = 'block';
    }

    function closeMenu() {
        menu.style.height = '0vh';
        menuOpener.style.display = 'block';
        menuClose.style.display = 'none';
    }

    