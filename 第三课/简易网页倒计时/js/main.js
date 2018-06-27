

window.onload = function () {
    var span = document.getElementsByTagName('span')

    setInterval(function () {
        var date = new Date();
        var date1 = [date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getDay()];
        for(var i in date1){
            // console.log(i)
            if(i === '1'){
                var b = date1[i]+1
                console.log(b)
                span[i].innerHTML = time(b)

            }else if(i === '6'){
                console.log(date1[i])
                    switch (date1[i]){
                        case 0:
                            span[i].innerHTML = '星期日';
                            break;
                        case 1:
                            span[i].innerHTML = '星期一';
                            break;
                        case 2:
                            span[i].innerHTML = '星期二';
                            break;
                        case 3:
                            span[i].innerHTML = '星期三';
                            break;
                        case 4:
                            span[i].innerHTML = '星期四';
                            break;
                        case 5:
                            span[i].innerHTML = '星期五';
                            break;
                        case 6:
                            span[i].innerHTML = '星期六';
                            break;
                        default:
                            alert('时间错误');
                    }
            }else{
                span[i].innerHTML = time(date1[i])
            }
        }
    },1000)
    // getTime()
    // function getTime() {
    //
    // }

    function time(a){
        return a.toString().replace(/^(\d)$/,'0$1')     //如果是个位数，在前面加上一个0
    }
}