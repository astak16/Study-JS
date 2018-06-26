var div = document.getElementsByTagName('div')[0]

var a = 0
div.innerHTML = a
window.onload = function(){
    setInterval(()=>{
        a++
        div.innerHTML = a
    },1000)
}
