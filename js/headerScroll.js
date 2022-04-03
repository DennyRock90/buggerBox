//Header Scroll 
let currentScrollPosition = 0;
let tempScrollPosition = 0;
let deltaPos = 0;
let noScrollY;
const minPos = 80;

const header = document.querySelector('.header');

function headerScrollOrNot() {
  noScrollY = document.querySelector('.noScrollY');
  // Salviamo il valore dello scroll corrente
  currentScrollPosition = window.scrollY;
  
  // Calcoliamo la differenza tra lo scroll corrente e quello immediamente precedente
  deltaPos = currentScrollPosition - tempScrollPosition;
  
  // Aggiungiamo o togliamo le classi per far comparire il menù
  if (deltaPos < 0 && currentScrollPosition > minPos) {
    header.classList.add('is-open');    
  } else if (deltaPos > 0 && currentScrollPosition > minPos && noScrollY == null){
    header.classList.remove('is-open');
  } else if (currentScrollPosition < minPos){
    header.classList.add('is-open');
  }

  // Salviamo il valore dello scroll corrente
  tempScrollPosition = currentScrollPosition;
}

// Associamo la funzione sia all'evento scroll che all'evento touch
document.addEventListener("touchmove", headerScrollOrNot, false);
document.addEventListener("scroll", headerScrollOrNot, false);