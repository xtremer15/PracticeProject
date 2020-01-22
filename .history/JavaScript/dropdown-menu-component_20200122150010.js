// function displayDropdown(elementToSelect, classToToggle) {
//   document.getElementById("elementToSelect").classList.toggle("classToToggle");
// }
// displayDropdown("myDropdown", "show");
function myFunction() {
  const element = document.querySelector("myDropdown");
  console.log("Hello" + element);
  element.classList.toggle("show");
  console.log(element.classList.toggle("show"));
  
}


