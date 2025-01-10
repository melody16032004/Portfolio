document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');
    const audioPlayer = document.getElementById('audioPlayer');
    let isPlaying = true;

    circle.addEventListener('click', () => {
        if (isPlaying) {
            circle.style.animationPlayState = 'paused';
            audioPlayer.pause();
        } else {
            circle.style.animationPlayState = 'running';
            audioPlayer.play();
        }
        isPlaying = !isPlaying;
    });
});
