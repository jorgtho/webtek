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
let pg = document.getElementById("pageContent");

img.addEventListener("click", displayMenu);

function displayMenu () {
	rotateMenuIcon(); //rotate the menu icon when opening/closing menu
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
	pg.style.opacity = "0.2";
	pg.style.transitionDelay = "0s";
	nav.style.transitionDelay = "0s"
    nav.style.backgroundColor="rgba(0,0,0,0)";
    drop.style.height = "calc(100% - 100px)";
    mnu.style.overflow = "hidden";
    drop.style.overflow = "scroll";
}

function closeOverlay() {
	pg.style.opacity = "1";
	pg.style.transitionDelay = "0.3s";
    nav.style.transitionDelay = "0.5s"
	nav.style.backgroundColor="rgba(0,0,0,0)"; // transparent
    drop.style.height = "0";
    menu.style.overflow = "hidden"; /* hide the menu again */
    drop.style.overflow = "hidden";
}