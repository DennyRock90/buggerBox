const hamburger = document.querySelector('.hamburger'); //Blocco su cui rimaniamo in ascolto
let divMenu = document.querySelector(".header__menu"); //Selezioniamo il div con classe menu

let existOpenMenu = "";

function manageMenu(exist){
    if(exist === false){
        divMenu.classList.add("menu--open");
        document.querySelector("body").classList.add("noScrollY");
    }else if (exist === true) {
        divMenu.classList.remove("menu--open");
        document.querySelector("body").classList.remove("noScrollY");
    }
}

// Event handler una callback che si occuperà di effettuare le operazioni di gestione richiamando la funzione hamburger()
hamburger.addEventListener('click', () => {
    existOpenMenu = divMenu.classList.contains('menu--open');
    manageMenu(existOpenMenu);
});
