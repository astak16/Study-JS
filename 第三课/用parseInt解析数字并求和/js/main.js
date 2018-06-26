var input = document.getElementsByTagName('input')
var span = document.getElementsByTagName('span')[2]



for(var i = 0; i <input.length - 1; i++){
    input[i].addEventListener('keyup',function(){
        this.value = this.value.replace(/[^\d]/,'')
    })
}

input[2].addEventListener('click',function(){
    var value1 = input[0].value
    var value2 = input[1].value
    var sum = 0;


    if(value1 === '' || value2 === ''){
        alert('请输入数字')
    }
    else{
        sum = parseInt(value1) + parseInt(value2)
        span.innerHTML = sum
    }
})