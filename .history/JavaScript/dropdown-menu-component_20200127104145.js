function addElement(elementToSelect){
  // const element = document.getElementById(elementToSelect);
  hide(elementToSelect,"hide")
}


function add(elementToSelect,classToAdd){
const element = document.getElementById(elementToSelect);
console.log(element);
element.classList.toggle(classToAdd);
}

function hideMenu(elementToSelect){
    // const element = document.getElementById(elementToSelect);
    hide(elementToSelect,"hide")
}
  

function hide(elementToSelect,classToRemove){
  const element = document.getElementById(elementToSelect);
  element.classList.remove(classToRemove);
}