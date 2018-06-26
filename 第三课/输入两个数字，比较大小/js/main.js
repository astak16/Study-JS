var input = document.getElementsByTagName('input')
var span = document.getElementsByTagName('span')[1]

for(var i = 0; i < input.length - 1; i++){
    input[i].addEventListener('keyup',function(){
        this.value = this.value.replace(/[^\d]/,'')
    })
}

input[2].addEventListener('click',function(){
    var value1 = input[0].value
    var value2 = input[1].value

    if(parseInt(value1) > parseInt(value2)){
        span.innerHTML = value1
    }else if(parseInt(value1) < parseInt(value2)){
        span.innerHTML = value2
    }else if(parseInt(value1) === parseInt(value2)){
        span.innerHTML = value2
    }
})