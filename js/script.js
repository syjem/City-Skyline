
const button = document.querySelector('#myButton');
const sky = document.querySelector('#sky');
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