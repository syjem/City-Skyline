
const button = document.querySelector('#myButton');
const sky = document.querySelector('#sky');
const bb1 = document.querySelector('.bb1-window');
const bb1d = document.querySelector('.bb1d');
const bb2a = document.querySelector('.bb2a');
const bb2b = document.querySelector('.bb2b ');
let colors = false;





button.addEventListener('click', () => {

    if (colors) {
        sky.style.background = 'var(--sky-color)';
        bb1.style.background = 'linear-gradient(var(--building-color1), var(--window-color1))';
        bb1d.style.background = 'linear-gradient(var(--building-color1) 50%, var(--window-color1))';
        bb2a.style.borderBottom = '5vh solid var(--building-color2)';
        bb2b.style.background = 'repeating-linear-gradient(var(--building-color2),var(--building-color2) 6%,var(--window-color2) 6%,var(--window-color2) 9%)';
        
    }
    else {
        sky.style.background = 'var(--sky-color-dark)';
        bb1.style.background = 'linear-gradient(#000, #777)';
        bb1d.style.background = 'linear-gradient(#000 50%, #777)';
        bb2a.style.borderBottom = '5vh solid #000';
        bb2b.style.background = 'repeating-linear-gradient(#000, #000 6%, #777 6%, #777 9%)';

    }
    colors = !colors;
    
});