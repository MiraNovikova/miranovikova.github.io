const progress = document.getElementById('progress');

const btnA= document.getElementById('btn_a');
const btnH = document.getElementById('btn_h');


btnA.addEventListener('click', function(){
    progress.classList.toggle('active')
})

btnH.addEventListener('click', function(){
    progress.classList.toggle('hide')
})


input.onchange = function() {
    progress.innerHTML = input.value;
  };


input.addEventListener('change', function() {
     if (input.value == 0) {
        progress.style.backgroundColor = 'PaleTurquoise'
    } 
    if (input.value >= 1) {
        progress.style.backgroundColor = 'LightSteelBlue'
    } 
    if (input.value >= 10) {
        progress.style.backgroundColor = 'LightBlue'
    } 
    if (input.value >= 20) {
        progress.style.backgroundColor = 'Aquamarine'
    } 
    if (input.value >= 30) {
        progress.style.backgroundColor = 'LightSkyBlue'
    } 
    if (input.value >= 40) {
        progress.style.backgroundColor = 'DeepSkyBlue'
    } 
    if (input.value >= 50) {
        progress.style.backgroundColor = 'DodgerBlue'
    }
    if (input.value >= 60) {
        progress.style.backgroundColor = 'CornflowerBlue'
    }
    if (input.value >= 70) {
        progress.style.backgroundColor = 'MediumSlateBlue'
    }
    if (input.value >= 80) {
        progress.style.backgroundColor = 'RoyalBlue'
    }
    if (input.value >= 90) {
        progress.style.backgroundColor = 'MediumPurple'
    }
    if (input.value == 100) {
        progress.style.backgroundColor = 'MediumBlue'
    } 
})  



