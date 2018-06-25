
var img = document.getElementsByTagName('img')
var div = document.getElementsByTagName('div')


for(var i = 1; i < img.length; i++){
    img[i].addEventListener('mouseenter',function(){
        // var image = new Image()
        // image.src = img[0].src
        console.log(this)
        img[0].src = this.src.replace(/small/,'big')
        div[0].style.display = 'block'
        this.complete ? div[0].style.display = 'none' :(img[0].onload = function(){div[0].style.display = 'none'})

    })
}
