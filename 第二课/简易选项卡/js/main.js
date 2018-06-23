var h2 = document.getElementsByTagName('h2')
var xxx = document.getElementsByClassName('xxx')
// var first = document.getElementById('first')
// var second = document.getElementById('second')
// var third = document.getElementById('third')


for(var i = 0; i< h2.length; i++){
    h2[i].aaa = i
    h2[i].addEventListener('mouseover',function(){
        for(var j = 0; j < h2.length;j++){
            h2[j].className = ''
        }
        this.classList.add('active')

        for(var j = 0; j < xxx.length; j++){
            xxx[j].style.display = 'none';
        }
        xxx[this.aaa].style.display = 'block'
        console.log(this.aaa)

    })

    // h2[i].addEventListener('mouseout',function(){
    //     this.classList.remove('active')
    //     first.style.display = 'none'
    //     second.style.display = 'none'
    //     third.style.display = 'none'
    // })
}
