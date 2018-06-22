var content = document.getElementById('content')
var p = content.getElementsByTagName('p')
console.log(p)
for(var i = 0; i <p.length; i++){
    p[i].onclick = function(){

        alert(this.innerText)
    }
}

// var content = document.getElementById('content')
// var p = content.children
// console.log(p)
// for(var i = 0; i <p.length; i++){
//     p[i].addEventListener('click',function(){
//         alert(this.textContent) //这里可以用innerText innerHTML
//     })
// }