/* menu */
const menu = document.getElementById("menu"); 
const menuOpener = document.getElementById("firstView__topMenuButton");
const menuClose = document.getElementById("menu__close");
const menuList = document.getElementById("menu__itemsList");

    function openMenu() {
        menu.style.height = '100vh';
        menuOpener.style.display = 'none';
        menuClose.style.display = 'block';

        setTimeout(() => {
            menuList.style.opacity = '1';
        }, 500);
    }

    function closeMenu() {
        menu.style.height = '0vh';
        menuOpener.style.display = 'block';
        menuClose.style.display = 'none';
        menuList.style.opacity = '0';
    }

    