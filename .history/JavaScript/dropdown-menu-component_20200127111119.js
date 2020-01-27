function addElement(elementToSelect) {
  const hide = 
  hide("#" + elementToSelect, "hide");
}

function add(elementToSelect, classToAdd) {
  const element = document.querySelector(elementToSelect);
  console.log(" Element to select is " + element);
  element.classList.toggle(classToAdd);
  console.log("Class to add at the element is " + classToAdd);
}

// function hideMenu(elementToSelect) {
//   hide("#" + elementToSelect, "hide");
// }

// function hide(elementToSelect, classToRemove) {
//   const element = document.querySelector(elementToSelect);
//   console.log("Element to select is " + element);
//   element.classList.remove(classToRemove);
//   console.log("Class to remove from the element is " + classToRemove);
// }
