var sizeWidth = document.getElementById('sizeWidth');
var sizeHeight = document.getElementById('sizeHeight')
var color = document.getElementById('color')
var hide = document.getElementById('hide')
var reset =document.getElementById('reset')

var rectangle = document.getElementById('rectangle');

//方法一
sizeWidth.addEventListener('click',function(){
    rectangle.classList.add("sizeWidthActive");

})

sizeHeight.addEventListener('click',function(){
    rectangle.classList.add("sizeHeightActive");

})

color.addEventListener('click',function(){
    rectangle.classList.add("colorActive");

})

hide.addEventListener('click',function(){
    rectangle.classList.add("hideActive");

})

reset.addEventListener('click',function(){
    rectangle.classList.remove("sizeWidthActive","sizeHeightActive","colorActive","hideActive");

})






//方法二,自己写 addClass 函数和 removeClass 函数,多了一个用正则判断的 hasClass 函数.

// sizeWidth.addEventListener('click',function(){
//     addClass(rectangle,'sizeWidthActive')
// })

// sizeHeight.addEventListener('click',function(){
//     addClass(rectangle,'sizeHeightActive')
// })
// color.addEventListener('click',function(){
//     addClass(rectangle,'colorActive')
// })
// hide.addEventListener('click',function(){
//     addClass(rectangle,'hideActive')
// })
// reset.addEventListener('click',function(){
//     removeClass(rectangle,'sizeWidthActive')
//     removeClass(rectangle,'sizeHeightActive')
//     removeClass(rectangle,'colorActive')
//     removeClass(rectangle,'hideActive')
// })
//
//
// function hasClass(element,cName){
//     return !!element.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
        // 用正则判断前后是否有空格,两个感叹号为转换为布尔值 以方便做判断
// }
//
// function addClass(element,cName){
//     if(!hasClass(element,cName)){   //如有有这个class就不用重复添加
//         element.className += ' ' + cName;
//     }
// }
//
// function removeClass(element,cName){
//     if(hasClass(element,cName)){
//         var a = new RegExp("(\\s|^)" + cName + "(\\s|$)")
//         console.log(a)
//         element.className = element.className.replace(a," ")
//     }
// }


