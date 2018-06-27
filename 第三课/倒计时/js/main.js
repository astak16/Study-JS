
var span = document.getElementsByTagName('span')
var input = document.getElementsByTagName('input')
var id
input[0].addEventListener('click',function () {

    switch (this.value){
        case '启动':
            id = setInterval(updateTime,1000)
            this.value = '取消'
            break;
        case '取消':
            clearInterval(id)
            this.value = '启动'
            break;
        default:
            alert('错误');
    }
})

function format(a) {
    // console.log(a.toString().replace(/^(\d)$/,'$1'))
    return a.toString().replace(/^(\d)$/,'0$1')
}

function updateTime(){
    var spanText1 = span[0].innerHTML
    var spanText2 = span[1].innerHTML
    var remain = spanText1.replace(/^0/,'')*60 + parseInt(spanText2.replace(/^0/,''))

    if(remain <= 0){
        // console.log(remain)

        clearInterval(id)
        return
    }

    --remain;
    // console.log('--remain')
    // console.log(remain)
    span[0].innerHTML = format(parseInt(remain / 60));
    // console.log(span[0].innerHTML)
    remain %= 60;
    // console.log('remain%')
    // console.log(remain)

    span[1].innerHTML = format(parseInt(remain))
    // console.log(span[1].innerHTML)

}

