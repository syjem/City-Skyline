
const button = document.querySelector('#myButton');
const sky = document.querySelector('#sky');
const bb1 = document.querySelector('.bb1-window');
let colors = false;





button.addEventListener('click', () => {

    if (colors) {
        sky.style.background = 'var(--sky-color)';
        bb1.style.background = 'linear-gradient(var(--building-color1), var(--window-color1))';
    }
    else {
        sky.style.background = 'var(--sky-color-dark)';
        bb1.style.background = 'linear-gradient(#000, #777)';
    }
    colors = !colors;
    
});