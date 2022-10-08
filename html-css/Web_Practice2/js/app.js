// Check if the element exist
const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element
  throw Error(`Check class names, there is no ${selector} class`)
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

// Show or Hide links
navBtnDOM.addEventListener('click', ()=> {
  links.classList.toggle('show-links')
})


// Date
const date = getElement('#date');
const currentYear = new Date().getFullYear;
date.textContext = currentYear;

