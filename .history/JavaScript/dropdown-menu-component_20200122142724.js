// function displayDropdown(elementToSelect, classToToggle) {
//   document.getElementById("elementToSelect").classList.toggle("classToToggle");
// }

function myFunction() {
  const element = document.getElementById("myDropdown");
  console.log("Hello" + element);
  element.classList.toggle("show");
  console.log(element.classList.toggle("show"));
  
}

// displayDropdown("myDropdown", "show");
