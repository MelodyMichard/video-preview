
function playMuted() { 
    // find the video element and save it to a variable
    let myVideo = document.getElementById("abcd");
    myVideo.muted = true;
    myVideo.play();
}

function paused() {
    // find video
    let myVideo = document.getElementById("abcd");
    myVideo.pause();

}
