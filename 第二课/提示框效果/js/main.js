var li = document.getElementsByTagName('li')
var img = document.getElementsByTagName('img')

for(var i = 0; i < li.length; i++){
    li[i].aaa = i
    li[i].addEventListener('mouseover',function(){
        img[this.aaa].style.display = 'block';
        img[this.aaa].classList.add('active')

    })
    li[i].addEventListener('mouseout',function(){
        img[this.aaa].style.display = 'none';
        img[this.aaa].classList.remove('active')

    })
}
