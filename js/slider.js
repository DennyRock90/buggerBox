const dotPage       = document.getElementById('dot-page');//Recuperato il wrapper delle etichette //Daniele Guarracino 20/02/2022 no dots
const arrowRight    = document.getElementById('slider__btn-right');
const arrowLeft     = document.getElementById('slider__btn-left');
const labels        = document.querySelectorAll('#dot-page > label'); //Daniele Guarracino 20/02/2022 no dots
const pages        = document.querySelectorAll('#pagine > input');
const pagine        = document.getElementById('pagine');
const radioBtn      = document.querySelectorAll('#pagine > input[type=radio]'); /*Recupero gli elementi di tipo radio (tocco, ecc)*/
let toccoInizioX    = 0;
let toccoFineX      = 0;
let paginaCorrente  = 0; /*Inizzializzato la pagina corrente con 1*/

arrowRight.myParam  = "right";
arrowLeft.myParam   = "left";

/*Aggiunto un Listener per il wrapper delle etichette in ascolto dell'evento click*/
dotPage.addEventListener('click', changePage); //Daniele Guarracino 20/02/2022 no dots
arrowRight.addEventListener('click', touchArrow);
arrowLeft.addEventListener('click', touchArrow);

pagine.addEventListener('mousedown', clickStart, {passive: true});
pagine.addEventListener('mouseup', clickEnd, {passive: true});

pagine.addEventListener('touchstart', touchStart, {passive: true});
pagine.addEventListener('touchend', touchEnd, {passive: true});

function changePage(e){ //Daniele Guarracino 20/02/2022 no dots
    if(e.target.nodeName === 'LABEL'){ //Se è stato fatto un click sull'etichetta è stato richiesto il cambio pagina
    goToPage(e.target.dataset.page - 1);
    }
}

function clickStart(e){
    toccoInizioX=e.offsetX;
}

function clickEnd(e){
    toccoFineX=e.offsetX;
    toccoFineX < toccoInizioX ? moveTo('next') : moveTo('prev'); /* Sarebbe l'if/else */
}

function touchStart(e){
    toccoInizioX=e.changedTouches[0].screenX;
}

function touchEnd(e){
    toccoFineX=e.changedTouches[0].screenX;
    toccoFineX < toccoInizioX ? moveTo('next') : moveTo('prev'); /* Sarebbe l'if/else */
}

function touchArrow(e){
    e.currentTarget.myParam === "right" ? moveTo('next') : moveTo('prev');
}

function moveTo(direction){
    if (direction === 'next' && paginaCorrente < pages.length - 1){
        goToPage(paginaCorrente + 1);
    }
    else if (direction === 'prev' && paginaCorrente > 0){
        goToPage(paginaCorrente - 1);
    }
}

function goToPage(newPage){
    labels[paginaCorrente].classList.remove('lab-sel');//Daniele Guarracino 20/02/2022 no dots
    labels[newPage].classList.add('lab-sel');//Daniele Guarracino 20/02/2022 no dots
    radioBtn[newPage].checked = true;
    paginaCorrente = newPage;
}