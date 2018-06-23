var li = document.getElementsByTagName('li')

for(var i = 0; i < li.length; i++){
    li[i].addEventListener('mouseenter',function(){
        this.classList.add('active')
    })
    li[i].addEventListener('mouseleave',function(){
        this.classList.remove('active')
    })
}
