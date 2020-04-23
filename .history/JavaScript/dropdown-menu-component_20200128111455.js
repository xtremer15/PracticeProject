
function addElement(elementToSelect) {
  add(elementToSelect, "hide")
}

function add(elementToSelect, classToAdd) {
  const element = document.getElementById(elementToSelect);
  element.classList.add(classToAdd);
 
}

function hideMenu(elementToSelect) {
  hide(elementToSelect, "hide");
}

function hide(elementToSelect, classToRemove) {
  const element = document.getElementById(elementToSelect);
  element.classList.remove(classToRemove);
  
}
