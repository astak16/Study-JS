var div = document.getElementsByClassName('red')
var button = document.getElementById('button')
button.addEventListener('click',function(){
    for(var i = 0; i < div.length; i++){
        div[i].classList.add('redActive')
    }
})