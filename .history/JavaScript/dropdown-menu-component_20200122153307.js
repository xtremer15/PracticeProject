function myFunction() {
  const element = document.querySelector("#myDropdown");
  console.log(element);
  console.log(element.classList.toggle("show"));
}

function hideMenu(){
    const element = document.querySelector("#myDropdown");
    console.log(element);
    element.classList.remove("show");
}