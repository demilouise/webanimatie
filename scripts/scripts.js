const audioLight = document.querySelector('#light');
const audioDark = document.querySelector('#dark');
const checkbox = document.querySelector('#switch');

setTimeout(() => audioDark.volume = 0.1, 0);

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        audioLight.pause();
        audioDark.play();
    } else {
        audioDark.pause();
        audioLight.play();
    }
});
