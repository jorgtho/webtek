//Youtube Api player from https://developers.google.com/youtube/iframe_api_reference


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('musicVideo', {
    videoId: 'iNyRTw1-BGQ',
    playerVars: {'rel': 0},
    height: "100",
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
    console.log("ready");
    event.target.mute();
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    console.log("state changed");
}

function muteButton() { //function for muting/unmuting the video
  if (player.isMuted()) {
    player.unMute();
    console.log("mute")
    document.getElementById("mute").src = "img/volume.svg";
  } else {
    player.mute();
    console.log("unmute");
    document.getElementById("mute").src = "img/mute.svg";
    }
}
