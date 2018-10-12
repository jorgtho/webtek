var rotated = 0;

function rotate() {
 if (rotated == 0) {
   let img = document.getElementById("pluss");
   img.setAttribute("style","transform:rotate(225deg); transition-duration:1s;");
   rotated = 1;
 }
 else if (rotated == 1) {
   let img = document.getElementById("pluss");
   img.setAttribute("style","transform:rotate(0deg); transition-duration:1s;");
   rotated = 0;
 }
}