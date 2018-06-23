var input = document.getElementsByTagName('input')
var button = document.getElementsByTagName('button')
var result = document.getElementById('result')

button[0].addEventListener('click',function(){
    var inputName = input[0].value
    var inputValue = input[1].value
    changeStyle(result,inputName,inputValue)
})
button[1].addEventListener('click',function(){
    result.removeAttribute('style')
})

function changeStyle(elem,name,value){
    elem.style[name] = value
}
