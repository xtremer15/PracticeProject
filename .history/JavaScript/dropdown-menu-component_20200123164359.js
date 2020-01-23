// Developers Section
function developerSection() {
  const element = document.querySelector("#myDropdown");
  // console.log(element);
  element.classList.toggle("show");
}

function hideMenu() {
  const element = document.querySelector("#myDropdown");
  // console.log(element);
  element.classList.remove("show");
}

// Solutions Section
function solutionSection() {
  const element = document.querySelector("#myDropdown3");
  // console.log(element);
  element.classList.toggle("show");
}

function hideMe() {
  const element = document.querySelector("#myDropdown3");
  element.classList.remove("show");
}


 < onclick="hide(\"#myDrodpwn\",\".show\")" class="btn">Developers</button>
<button onclick="hide(\"#myDrodpwn-3\",\".show-3\")" class="btn">Solutions</button>

function hide(elementToSelect,classToRemove){
  const element = document.querySelector(elementToSelect);
  element.classList.remove(classToRemove);
}