
function addClass(elementToSelect) {
  add('#' + elementToSelect, "hide")
}

function add(elementToSelect, classToAdd) {
  const element = document.querySelector(elementToSelect);
  element.classList.add(classToAdd);
  console.log(element);
  
}

function showMenu(elementToSelect) {
  hide('#' + elementToSelect.id, "hide")
}


function hide(elementToSelect, classToRemove) {
  const element = document.querySelector(elementToSelect);
  element.classList.remove(classToRemove);
}