function addElement(elementToSelect){
  // const element = document.getElementById(elementToSelect);
  hide(elementToSelect,"hide")
}


function add(elementToSelect,classToAdd){
const element = document.getElementById(elementToSelect);
console.log("Class to add is " + element);
element.classList.toggle(classToAdd);
}

function hideMenu(elementToSelect){
    // const element = document.getElementById(elementToSelect);
    hide(elementToSelect,"hide")
}
  

function hide(elementToSelect,classToRemove){
  const element = document.q(elementToSelect);
  console.log("Class to remove is " + element);
  element.classList.remove(classToRemove);
}