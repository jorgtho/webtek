// let newDiv = document.createElement("div");
// let newLi = document.createElement("li");
// let string = "Hello World";
// newLi.appendChild(string);
// newDiv.appendChild(newLi);
//
// document.body.appendChild(newDiv);
insert = document.body;
let newDiv = document.createElement("div");
newDiv.className = "alert alert success!";
let newLi = document.createElement('li');
newLi.innerHTML = "Hello, world!";
newDiv.appendChild(newLi);

insert.appendChild(newDiv);

let dropdown2 = document.createElement("div");
dropdown2.id = "dropdown2";
dropdown2.className = "overlay";
let menu2 = document.createElement("div");
menu2.id = "menu2";
menu2.classname = "overlay-content";
let homeButton = document.createElement("button");
let musicButton = document.createElement("button");
let aboutButton = document.createElement("button");
let tourButton = document.createElement("button");
let merchButton = document.createElement("button");
let contactButton = document.createElement("button");

menu2.innerHTML = `<button id="homeButton">Home</button>
<button id = "musicButton">Music</button>
<button id = "aboutButton">About</button>
<button id = "tourButton">Tour dates</button>
<button id = "merchButton">Merch</button>
<button id = "contactButton">Contact</button>
`;
homeButton.id = "homeButton";
musicButton.id = "musicButton";
aboutButton.id = "aboutButton";
tourButton.id = "tourButton";
merchButton.id = "merchButton";
contactButton.id = "contactButton";

// menu2.appendChild("homeButton");
// menu2.appendChild("musicButton");
// menu2.appendChild("aboutButton");
// menu2.appendChild("tourButton");
// menu2.appendChild("merchButton");
// menu2.appendChild("contactButton");

dropdown2.appendChild(menu2);

insert.appendChild(dropdown2);
