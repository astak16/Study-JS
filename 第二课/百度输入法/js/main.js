var input = document.getElementById('input');
var close = document.getElementById('close')
var float = document.getElementById('float')

var clickOn = 0
input.addEventListener('click',function(){

    if(clickOn === 1){
        float.style.display = 'none';
        clickOn = 0
    }else{
        float.style.display = 'block';
        clickOn = 1;
    }
})
close.addEventListener('click',function(){
    if(clickOn === 1){
        float.style.display = 'none';
        clickOn = 0
    }
})
