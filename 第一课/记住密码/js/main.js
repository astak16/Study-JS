var label = document.getElementById('label')
var p = document.getElementById('p')

label.addEventListener('mouseover',function(e){
    p.style.display = 'block'
})
label.addEventListener('mouseout',function(e){
    p.style.display = 'none'
})