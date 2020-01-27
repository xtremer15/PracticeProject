

function hideMenu(elementToSelect){
    // const element = document.getElementById(elementToSelect);
    hide('#'+elementToSelect,"show")
}
  

function hide(elementToSelect,classToRemove){
  const element = document.querySelector(elementToSelect);
  element.classList.remove(classToRemove);
}