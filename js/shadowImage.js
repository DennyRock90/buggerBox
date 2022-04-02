const rows = document.querySelectorAll("[data-row-num]");
const img = document.querySelectorAll('.route__img');
const text = document.querySelectorAll('.route__text');

let routeCorrente  = 0; /*Inizzializzato la pagina corrente con 1*/

rows.forEach(p => {
  p.addEventListener("mouseover", goToRoute);
})

function goToRoute (e) {
    let newRoute = e.target.dataset.rowNum;
    rows[routeCorrente].classList.remove('route__label-row');
    rows[newRoute].classList.add('route__label-row');
    img[routeCorrente].classList.remove('route__label-img');
    img[newRoute].classList.add('route__label-img');
    text[routeCorrente].classList.remove('route__label-text');
    text[newRoute].classList.add('route__label-text');
    routeCorrente = newRoute;
}
