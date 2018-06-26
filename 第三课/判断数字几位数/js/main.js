var input = document.getElementsByTagName('input')

input[1].addEventListener('click',function(){
    var value = input[0].value.toString().length
    if(value === 0){
        alert("请输入数字")
    }else if(value !== 2){
        alert("这不是两位数，是 " + value + " 位数！")
    }else if(value === 2){
        alert("这是两位数")
    }



})