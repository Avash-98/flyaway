// Variables with global scopes

// The navbar container object
const navbarContainer = document.getElementById('navbar-container');

// let portrait = window.matchMedia("(orientation: portrait)");
let portrait = window.matchMedia("(max-width: 768px)");
const rightAlignedNavContent = document.querySelector(".navbar-right-col");

// Script to manage the right aligned elements of navbar
// Initial design when the page loads for the first time
if(portrait.matches){ 
	rightAlignedNavContent.classList.remove("col", "justify-content-end"); 
	rightAlignedNavContent.classList.add("mt-2", "p-2");
	rightAlignedNavContent.classList.add("border", "border-dark", "rounded");

	document.querySelector(".navbar-nav").style.width = "100%";
}
else{
	rightAlignedNavContent.classList.add("col", "justify-content-end");
	rightAlignedNavContent.classList.remove("mt-2", "p-2");
	rightAlignedNavContent.classList.remove("border", "border-dark", "rounded");
	
	document.querySelector(".navbar-nav").style.width = "auto";
}


// Afterwards, whenever the orientation of the page changes,
// the following changes take place too.
portrait.addEventListener("change", function(e) {
	if(e.matches) {
		// Portrait mode
		rightAlignedNavContent.classList.remove("col", "justify-content-end");
		rightAlignedNavContent.classList.add("mt-2", "p-2");
		rightAlignedNavContent.classList.add("border",  "border-dark", "rounded");

		document.querySelector(".navbar-nav").style.width = "100%";
	} else {
		// Landscape
		if(!navbarContainer.classList.contains("rounded-5")){
			navbarContainer.classList.add("rounded-5")
			document.querySelector(".navbar-collapse").classList.remove("show")
		}
	
		rightAlignedNavContent.classList.add("col", "justify-content-end");
		rightAlignedNavContent.classList.remove("mt-2", "p-2");
		rightAlignedNavContent.classList.remove("border",  "border-dark", "rounded");

		document.querySelector(".navbar-nav").style.width = "auto";
	}
});

document.querySelector(".navbar-toggler").onclick = 
function toggleNavOnClick(){
	
	// When the navbar expands, we reduce the border-radius to 3 bootstrap unit
	if(navbarContainer.classList.contains('rounded-5')===true){
		navbarContainer.classList.remove('rounded-5');
		navbarContainer.classList.add('rounded-3');
	}
	
	// When the navbar collapses, we increase the border-radius to 5 bootstrap unit
	else{
		navbarContainer.classList.remove('rounded-3');
		navbarContainer.classList.add('rounded-5');
	}
};
	
// Script for custom navbar toggle button shadow
function togglerColorChangeClickListener() {
	const navbarToggleButton = document.querySelector(".navbar-toggler");
	
	navbarToggleButton.onfocus
	= function navbarTogglerOnFocus(event) {
		navbarToggleButton.style.boxShadow = 
			`var(--flyaway-color-medium1) 0px 1px 4px, 
			var(--flyaway-color-medium1) 0px 0px 1px 3px`;
	};
	
	navbarToggleButton.onblur 
	= function navbarTogglerOnBlur(event) {
		navbarToggleButton.style.boxShadow = 
			`var(--bs-purple) 0px 0px 0px, 
			var(--bs-purple) 0px 0px 0px 0px`;
	}
}

window.onload = (event) => {
	togglerColorChangeClickListener()
}