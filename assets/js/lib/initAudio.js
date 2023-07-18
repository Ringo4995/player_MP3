const initAudio = (playlist, track) => {
    console.log("hello audio");
    const playPause = document.querySelector("#playPause");


    const audio = new Audio(playlist[track].audio);
    audio.isPlaying = false;
    console.dir(audio);
    
    playPause.addEventListener("click", () => {
        document.querySelector("#playPause i").classList.toggle("fa-play")
        document.querySelector("#playPause i").classList.toggle("fa-pause")
        if (audio.isPlaying) {
            audio.isPlaying = false;
            audio.pause();
        } else {
            audio.isPlaying = true;
            audio.play();
        }
    })
}

export { initAudio }