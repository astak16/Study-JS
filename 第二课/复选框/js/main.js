var dd = document.getElementsByTagName('dd')[0].getElementsByTagName('div')[0]
var ddInput = dd.getElementsByTagName('input')[0]
var ddLabel = dd.getElementsByTagName('label')

var dt = document.getElementsByTagName('dt')[0]
var dtInput = dt.getElementsByTagName('input')
var dtLabel = dt.getElementsByTagName('label')

// var a = 0
// ddInput.addEventListener('click',function(){
//     if(a === 1){
//         for(var i = 0; i < dtInput.length; i++){
//                 dtInput[i].checked = false;
//                 ddLabel[0].innerHTML = '全选'
//             console.log(a)
//         }
//         a = 0
//     }else if(a === 0){
//         for(var i = 0; i < dtInput.length; i++){
//             dtInput[i].checked = true;
//             ddLabel[0].innerHTML = '全不选'
//         }
//         a = 1
//     }
// })
// ddLabel[1].addEventListener('click',function(){
//     for(var i = 0; i < dtInput.length; i++){
//         if(dtInput[i].checked === false){
//             dtInput[i].checked = true;
//             ddLabel[0].innerHTML = ddInput.checked ? '全选' :'全不选';
//
//
//
//         }else if(dtInput[i].checked === true){
//             dtInput[i].checked = false;
//             ddLabel[0].innerHTML = ddInput.checked ? '全选' :'全不选';
//         }
//
//     }
// })

function checkAll(){
    var i
    var n
    for( i = 0 ,n = 0; i < dtInput.length;i++){
         n++

    }

    ddInput.checked = n === dtInput.length


    ddLabel[0].innerHTML = ddInput.checked ? '全不选' :'全选';
}




    //全选/全不选
ddInput.onclick = function ()
    {
        for (var i = 0; i < dtInput.length; i++)
        {
            dtInput[i].checked = this.checked
        }
        checkAll()
    };
    //反选
    ddLabel[1].onclick = function ()
    {
        for (var i = 0; i < dtInput.length; i++)
        {
            dtInput[i].checked = !dtInput[i].checked
        }
        checkAll()
    };
    //根据复选个数更新全选框状态
    for (var i = 0; i < dtInput.length; i++)
    {
        dtInput[i].onclick = function ()
        {
            checkAll()
        }
    }


