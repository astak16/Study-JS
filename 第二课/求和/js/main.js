var input = document.getElementById('input')
var buttonSum = document.getElementById('buttonSum')
var sum = document.getElementById('sum')
var inputSum = document.getElementById('inputSum')

input.addEventListener('keyup',function(){
    this.value = this.value.replace(/[^(\d)|(,)]/,'')   //匹配输入的非法字符
})

buttonSum.addEventListener('click',function(){
    var sumText = 0
    var value = input.value.split(',')
    for(var i = 0; i < value.length;i++){
        console.log(typeof  value[i])
        sumText += parseInt(value[i])
    }
    inputSum.value = sumText;
    // sum.innerHTML = sumText
})
