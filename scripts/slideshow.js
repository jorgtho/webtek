var vpHeight = document.documentElement.clientWidth;
var imgIndex = 1;
var next = true;
var mobile;
if ((Math.max(document.documentElement.clientWidth, window.innerWidth)) > 480) {
  mobile = false;
}
else {
  mobile = true;
}
showImg()

function nextImg() {
  next = true;
  showImg(imgIndex += 1);
}
function prevImg(n) {
  next = false;
  showImg(imgIndex -= 1);
}


function showImg(n) {
  if ((Math.max(document.documentElement.clientWidth, window.innerWidth)) > 480) {
    mobile = false;
  }
  else {
    mobile = true;
  }
  var i;
  var images = document.getElementsByClassName("slideShowImg");
  if (n > images.length) {imgIndex = 1} 
  if (n < 1) {imgIndex = images.length}
  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none"; 
  }
  if (mobile) {
    images[imgIndex-1].classList.remove("slideLeft");
    images[imgIndex-1].classList.remove("slideRight");
    images[imgIndex-1].classList.add("fade");
  }
  else {
    if (!next) {
      images[imgIndex-1].classList.remove("fade");
      images[imgIndex-1].classList.remove("slideLeft");
      images[imgIndex-1].classList.add("slideRight");
    }
    else {
      images[imgIndex-1].classList.remove("fade");
      images[imgIndex-1].classList.remove("slideRight");
      images[imgIndex-1].classList.add("slideLeft");
    }

  }
  images[imgIndex-1].style.display = "block";
}