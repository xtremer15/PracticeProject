function addE(elementToSelect){
  // const element = document.getElementById(elementToSelect);
  hide(elementToSelect,"hide")
}


function hide(elementToSelect,classToRemove){
const element = document.getElementById(elementToSelect);
element.classList.remove(classToRemove);
}

function hideMenu(elementToSelect){
    // const element = document.getElementById(elementToSelect);
    hide(elementToSelect,"hide")
}
  

function hide(elementToSelect,classToRemove){
  const element = document.getElementById(elementToSelect);
  element.classList.remove(classToRemove);
}