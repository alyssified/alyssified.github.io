let redRose = "images/red.svg";
let whiteLily = "images/white.svg";
let yellowTulip = "images/yellow.svg";

const redRoseButton = document.getElementById("red");
	console.log(redRoseButton);
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


