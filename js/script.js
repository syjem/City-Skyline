
const button = document.querySelector('#myButton');
const sky = document.querySelector('#sky');
const bb1 = document.querySelector('.bb1-window');
const bb1d = document.querySelector('.bb1d');
const bb2a = document.querySelector('.bb2a');
const bb2b = document.querySelector('.bb2b ');
const bb3 = document.querySelector('.bb3');
const bb4a = document.querySelector('.bb4a');
const bb4b = document.querySelector('.bb4b');
const bb4c = document.querySelector('.bb4c');
const bb4Window = document.querySelector('.bb4-window');
let colors = false;





button.addEventListener('click', () => {

    if (colors) {
        sky.style.background = 'var(--sky-color)';
    }
    else {
        sky.style.background = 'var(--sky-color-dark)';
    }
    colors = !colors;
    
});