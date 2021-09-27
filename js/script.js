// Nav Menu //

const menu1Button = document.getElementById('menu-1-button');
const menu2Button = document.getElementById('menu-2-button');
const menu3Button = document.getElementById('menu-3-button');

const menu1Drop = document.getElementById('menu-1');
const menu2Drop = document.getElementById('menu-2');
const menu3Drop = document.getElementById('menu-3');

menu1Button.addEventListener('mouseover', displayMenu1);
menu2Button.addEventListener('mouseover', displayMenu2);
menu3Button.addEventListener('mouseover', displayMenu3);

menu1Button.addEventListener('mouseleave', hideMenus);
menu2Button.addEventListener('mouseleave', hideMenus);
menu3Button.addEventListener('mouseleave', hideMenus);

function displayMenu1() {
  menu1Drop.classList.add('show');
  menu2Drop.classList.remove('show');
  menu3Drop.classList.remove('show');
}

function displayMenu2 () {
  menu2Drop.classList.add('show');
  menu1Drop.classList.remove('show');
  menu3Drop.classList.remove('show');
}

function displayMenu3 () {
  menu3Drop.classList.add('show');
  menu1Drop.classList.remove('show');
  menu2Drop.classList.remove('show');
}

function hideMenus() {
  menu1Drop.classList.remove('show');
  menu2Drop.classList.remove('show');
  menu3Drop.classList.remove('show');
}





// Bouquet Builder and Color Selector//

let redRose = "images/red.svg";
let whiteLily = "images/white.svg";
let yellowTulip = "images/yellow.svg";

const redRoseButton = document.getElementById("red");
const whiteLilyButton = document.getElementById("white");
const yellowTulipButton = document.getElementById("yellow")

const bouquetDisplay = document.querySelector(".bouquet-selection");

redRoseButton.addEventListener("click", changeColor);
whiteLilyButton.addEventListener("click", changeColor);
yellowTulipButton.addEventListener("click", changeColor);

function changeColor(event){
	console.log(event);

	let text = event.target.innerText;

	let showBouquet;
	if (text === 'Red'){
		showBouquet = redRose;
		// bouquetDisplay.setAttribute("width", "100%");
		// bouquetDisplay.classList.add("shift-right");
	}
	else if (text === 'White'){
		showBouquet = whiteLily;
		// bouquetDisplay.setAttribute("width", "200%");
		// bouquetDisplay.classList.remove("shift-right");
	}
	else if (text === 'Yellow'){
		showBouquet = yellowTulip;
		// bouquetDisplay.setAttribute("width", "200%");
		// bouquetDisplay.classList.remove("shift-right");
	}

bouquetDisplay.setAttribute("src", showBouquet);
}


// Form Validation // 

const form = document.querySelector("#recipient-info");
const errorsList = document.querySelector("#errors");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  // prevent page refresh
  event.preventDefault();
  
  // clear out any previous errors
  errorsList.innerHTML = "";
  
  // validate first name
  let firstName = document.querySelector("#first-name").value;
  if (firstName.length < 2) {
    // create separate function to add `li` element to `errors` ul - shortens the code
    addError("First name must be at least 2 characters");
  }
  
function addError(error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}
}