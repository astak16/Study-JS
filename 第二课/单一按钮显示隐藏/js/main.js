var ul = document.getElementsByTagName('ul')[0]
var h2 = document.getElementsByTagName('h2')[0]

var a = 0;
h2.addEventListener('click',function(){
    if(a === 0){
        ul.classList.add('active')
        h2.classList.add('active')
        a=1
    }else{
        ul.classList.remove('active')
        h2.classList.remove('active')
        a=0
    }
})