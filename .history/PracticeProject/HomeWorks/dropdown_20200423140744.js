const DORPDOWN_ELEMENTS = [
  {
    elementToDisplayOnNavBar: "Developers",
    submenuForElement: [
      {
        subOpt1: ["Install", "Tutorial", "Doc"],
        subOpt2: ["FAQ", "Forum", "Showcase"],
      },
    ],
  },
  {
    elementToDisplayOnNavBar: "Hosting",
    submenuForElement: [
      {
        subOpt: ["Pricing", "Plans", "More..."],
      },
    ],
  },
  {
    elementToDisplayOnNavBar: "Company",
    submenuForElement: [
      {
        subOpt: ["Carrera", "Culture", "Partners", "Blog"],
      },
    ],
  },
  {
    elementToDisplayOnNavBar: "Sign Up",
  },
];

function attachElement(elementToBechanged, elementToChangeTo) {
  elementToBechanged.innerHTML = elementToChangeTo;
}

function createElement(elementToCreate, attributeToAdd, nameOfAttribute) {
  const element = document.createElement(elementToCreate);
  element.setAttribute(attributeToAdd, nameOfAttribute);
  return element;
}

const arrElems = [];
for (elem of DORPDOWN_ELEMENTS) {
  arrElems.push(elem.elementToDisplayOnNavBar);
}

let subMenuDevelopers = [];
let subMenuHosting = [];
let subMenuCompany = [];

const RENDERED_JS_DOM_ELEMENTS = {
  a: createElement("a", "class", "attribute"),
};

const DOM_SELECTED_ELEMENTS = {
  nav: document.querySelector(".navigation--bar"),
  ul: document.querySelector(".navigation--bar__list"),
  ali: document.querySelector(".a"),
  bli: document.querySelector(".b"),
  cli: document.querySelector(".c"),
  dli: document.querySelector(".d"),
};

let a = attachElement(DOM_SELECTED_ELEMENTS.ali, arrElems[0]);
const b = attachElement(DOM_SELECTED_ELEMENTS.bli, arrElems[1]);
const c = attachElement(DOM_SELECTED_ELEMENTS.cli, arrElems[2]);
const d = attachElement(DOM_SELECTED_ELEMENTS.dli, arrElems[3]);

subMenuDevelopers = DORPDOWN_ELEMENTS[0].submenuForElement[0].subOpt1.concat(
  DORPDOWN_ELEMENTS[0].submenuForElement[0].subOpt2
);
subMenuHosting = DORPDOWN_ELEMENTS[1].submenuForElement[0].subOpt;
subMenuCompany = DORPDOWN_ELEMENTS[2].submenuForElement[0].subOpt;

console.log(subMenuDevelopers);
console.log(subMenuHosting);
console.log(subMenuCompany);


let li = createElement("li", "class", "dropdown");
let ul = createElement("ul", "class", "container");
for (elem in subMenuDevelopers) {
  console.log(subMenuDevelopers[elem]);
  li.innerHTML = subMenuDevelopers[elem];
  ul.appendChild(li);
  
}
