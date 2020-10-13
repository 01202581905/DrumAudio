"use strict"
const playAudio = e => {
    let keyCode = e.keyCode;
    const keyElement = document.querySelector(`button[data-key="${keyCode}"]`);
    if (!keyElement) return;
    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();
};
window.addEventListener("keydown", playAudio);