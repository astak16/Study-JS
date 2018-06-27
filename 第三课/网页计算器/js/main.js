var show = document.getElementById('show')
var sum = document.getElementById('sum')
var li = document.getElementsByTagName('li')
var s = false

for(var i = 0; i < li.length; i++){
    li[i].addEventListener('focus',function(){
        this.blur()
    })

    li[i].addEventListener('click',function(){
        switch(this.innerHTML){
            case "c":
                show.value = 0;
                sum.value = "";
                break;
            case "%":
                count("%");
                break;
            case '÷':
                count('/');
                break;
            case "×":
                count("*");
                break;
            case "-":
                count("-");
                break;
            case "+":
                count("+");
                break;
            case "=":
                s || (sum.value += show.value);
                show.value = eval(sum.value.replace(/\%\/\*\-\+/,''));
                show.value = show.value.substr(0,10).replace('NaN',0)
                s = true;
                break;
            case ".":
                if(show.value.search(/[\.\%\/\*\-\+]/) !== -1)
                break;
            default:
                console.log(s)
                s && (show.value = 0,sum.value = "",s = false)
                console.log(1)
                show.value.length < 10 && (show.value = (show.value + this.innerHTML).replace(/^[0\%\/\*\-\+](\d)/,"$1"));
        }
    })
}

function count(a){
    if(s){
        sum.value = show.value + a
        show.value = a;
        s = false
    }else{
        /[\%\/\*\-\+]$/.test(show.value) || (sum.value += show.value)
        show.value = a;
        /[\%\/\*\-\+]$/.test(sum.value) || (sum.value += show.value)
        sum.value = sum.value.slice(-1) !== a ? sum.value.replace(/.$/,a):sum.value;
    }
}
