// function displayDropdown(elementToSelect, classToToggle) {
//   const element = document.querySelector("elementToSelect");
//   element.classList.toggle("classToToggle");
// }
// displayDropdown("#myDropdown", "show");
function myFunction() {
  const element = document.querySelector("#myDropdown");
  console.log(element);
  console.log(element.classList.toggle("show"));
}
