//let title = document.getElementById("navbarTitle");
document.getElementById("navbarTitle").setAttribute("type","button");
document.getElementById("navbarTitle").setAttribute("onclick","goWingman()");



function goWingman() { //Får en liten mann i wingsuit til å fly over siden når man trykker på Wingsuits
  
  let width = document.documentElement.clientWidth;

  var leftmargin = 0;
  var topmargin = 0;
  var wingman=document.getElementById("wingman");

  if (wingman.style.display != "block") {
    wingman.style.display= "block";
    var id = setInterval(frame , 7);
    }
    function frame() {
      if (leftmargin >= width) {
        clearInterval(id);
        wingman.style.display="none";
      } else {
        leftmargin = leftmargin + 2;
        topmargin = topmargin + 1;
        wingman.style.left = leftmargin + "px";
        wingman.style.top = topmargin + "px";
      }
  }
}
