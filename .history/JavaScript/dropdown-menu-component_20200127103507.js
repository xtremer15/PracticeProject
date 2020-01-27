function hideMenu(elementToSelect){
    // const element = document.getElementById(elementToSelect);
    hide('#'+elementToSelect,"show")
}
  

function hide(elementToSelect,classToRemove){
  const element = document.get(elementToSelect);
  element.classList.remove(classToRemove);
}