// Developers Section
function developerSection() {
  const element = document.querySelector("#myDropdown");
  console.log(element);
  element.classList.toggle("show");
}

function hideMenu() {
  const element = document.querySelector("#myDropdown");
  console.log(element);
  element.classList.remove("show");
}

// Solutions Section
function solutionSection() {
  const element = document.querySelector("#myDropdown3");
  console.log(element);
  element.classList.toggle("show-3");
}

function hideMe() {
  const element = document.querySelector("#myDropdown3");
  element.classList.remove("show-3");
}

function hide("\")