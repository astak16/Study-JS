var buttonPopUps= document.getElementById('buttonPopUps')
var background = document.getElementById('background')
var popUpsFloat = document.getElementById('popUpsFloat')
var spanX = document.getElementById('spanX')

buttonPopUps.addEventListener('click',function(){
    background.style.display = 'block';
    popUpsFloat.style.display = 'block';
})

spanX.addEventListener('click',function(){
    background.style.display = 'none';
    popUpsFloat.style.display = 'none';

})
