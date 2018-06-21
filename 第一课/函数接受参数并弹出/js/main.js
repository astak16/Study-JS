var input = document.getElementsByTagName('input')
var button = document.getElementsByTagName('button')[0]
console.log(input[0])
console.log(button)
button.addEventListener('click',function(){
    xxx(input[0],input[1])
})
function xxx(a,b){
    alert(a.value)
    alert(b.value)
}
document.getEl