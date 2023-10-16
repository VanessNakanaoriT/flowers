onload = () =>{
        document.body.classList.remove("container");
};

window.addEventListener('load', function() {
        var audio = document.querySelector('audio');
        audio.play(); });

        var audio = document.getElementById('myAudio');
        var playButton = document.getElementById('customPlayButton');
        var pauseButton = document.getElementById('customPauseButton');
        
        playButton.addEventListener('click', function() {
            audio.play();
        });
        
        pauseButton.addEventListener('click', function() {
            audio.pause();
        });