let body = document.getElementsByTagName("BODY")[0];
let pageContent = document.getElementById("pageContent");

/* START NAVBAR */
let navbar = document.createElement('div');
navbar.id = "navbar";

let navbarTitle = document.createElement('div');
navbarTitle.id = "navbarTitle";
navbarTitle.innerHTML = "Wingsuits";

let menuButtonHolder = document.createElement('div');
menuButtonHolder.id = "menuButtonHolder";

let anchor = document.createElement('a');
let pluss = document.createElement('img');

pluss.id ="pluss";
pluss.src = "img/pluss.svg";
pluss.alt="Menu";


anchor.appendChild(pluss);
menuButtonHolder.appendChild(anchor);

navbar.appendChild(navbarTitle);
navbar.appendChild(menuButtonHolder);

document.body.insertBefore(navbar, body.childNodes[0]);
/* END NAVBAR */


/* START DROPDOWN */
let dropdown = document.createElement('div');
dropdown.id = "dropdown";
dropdown.classList.add("overlay");

let menu = document.createElement('div');
menu.id = "menu";
menu.classList.add("overlay-content");

let options = ["Home", "Music", "About", "Tour dates", "Merch", "Contact"];
for (let i = 0; i < options.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = options[i];
    menu.appendChild(button);
}

dropdown.appendChild(menu);

navbar.parentNode.insertBefore(dropdown, navbar.nextSibling); // adding the dropdown after the navbar

/* END DROPDOWN */

/* START FOOTER */

let footer = document.createElement("footer");
let footerText = document.createElement("p");
footerText.innerHTML = "Created by WingWeb";

footer.appendChild(footerText)
pageContent.appendChild(footer);

/* END FOOTER */



/* For reference, below is the base HTML for this dynamical JS insert 

    // navbar 
    <div id="navbar">
      <div id="navbarTitle">Wingsuits</div>
      <div id="menuButtonHolder">
        <a href="#">
          <img src="img/pluss.svg" id="pluss" alt="menu" height="65px" width="65px"">
        </a>
      </div>
    </div>
  
    // dropdown
    <div id="dropdown" class="overlay">
      <div id="menu" class="overlay-content">
        <button>Home</button>
        <button>Music</button>
        <button>About</button>
        <button>Tour dates</button>
        <button>Merch</button>
        <button>Contact</button>
      </div>
    </div>
  
    // footer
    <footer>
      <p> Created by WingWeb </p>
    </footer>

*/