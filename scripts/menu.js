/*
	
	CONSIDERATIONS:
	- update the 'css' attribute instead of 'style' if this is possible without jQuery. better practice?
		i.e. navbar.css('transition-delay', '0s') instead of navbar.style.transitionDelay = "0s"
	- transition duration and delays can ofc be changed

*/

let open = false;

let img = document.getElementById("pluss");
let mnu = document.getElementById("menu"); // naming this 'menu' collides with itemholder.js
let nav = document.getElementById("navbar");
let drop = document.getElementById("dropdown"); // naming this 'dropdown' collides with itemholder.js

img.addEventListener("click", displayMenu);

function displayMenu () {
	rotateMenuIcon();
	open ? openOverlay() : closeOverlay();
}

function rotateMenuIcon() {
	if (open == false) {
		img.setAttribute("style","transform:rotate(225deg); transition-duration:1s;");
		open = true;
	}
 	else if (open == true) {
		img.setAttribute("style","transform:rotate(0deg); transition-duration:1s;");
   		open = false;
 	}
}

function openOverlay() {
	nav.style.transitionDelay = "0s"
    nav.style.backgroundColor="rgba(0,0,0,0)";
    drop.style.height = "calc(100% - 100px)";
    mnu.style.overflow = "hidden"; /* make the menu scrollable if screen is to small */
}

function closeOverlay() {
    nav.style.transitionDelay = "0.5s"
	nav.style.backgroundColor="rgba(0,0,0,0)"; // transparent
    drop.style.height = "0";
    menu.style.overflow = "hidden"; /* hide the menu again */
}