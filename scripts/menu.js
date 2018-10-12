/*
	
	CONSIDERATIONS:
	- update the 'css' attribute instead of 'style' if this is possible without jQuery. better practice?
		i.e. navbar.css('transition-delay', '0s') instead of navbar.style.transitionDelay = "0s"
	- transition duration and delays can ofc be changed

*/

let open = false;

let img = document.getElementById("pluss");
let navbar = document.getElementById("navbar");
let dropdown = document.getElementById("dropdown");

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
	navbar.style.transitionDelay = "0s"
    //navbar.style.backgroundColor="rgba(0,0,0,0.2)";
    dropdown.style.height = "100%";

}

function closeOverlay() {
    navbar.style.transitionDelay = "0.5s"
	//navbar.style.backgroundColor="rgba(0,0,0,0)"; // transparent
    dropdown.style.height = "0%";

}