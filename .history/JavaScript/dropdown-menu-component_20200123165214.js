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


 <button onclick="hide(\"#myDrodpwn\",\"show\")" class="btn">Developers</ button>
<button onclick="hide(\"#myDrodpwn-3\",\"show\")" class="btn">Solutions</button>
<button onclick="hide1(\"myDrodpwn-3\")" class="btn">Solutions</button>

function hideMenu(elementToSelect){
    // const element = document.getElementById(elementToSelect);
    hide('#'+elementToSelect,"show")
}
  

function hide(elementToSelect,classToRemove){
  const element = document.querySelector(elementToSelect);
  element.classList.remove(classToRemove);
}