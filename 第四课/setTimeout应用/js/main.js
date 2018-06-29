let get = {
    byId:function(id){
        return document.getElementById(id);
    },
    byClass:function(sClass,oParent){
        let aClass = [];
        let reClass = new RegExp("(^| )" + sClass + "( |$)");
        // console.log(reClass)
        let aElem = this.byTagName("*",oParent);
        for(let i = 0; i < aElem.length; i++){
           var a = reClass.test(aElem[i].className)&&aClass.push(aElem[i])
            console.log('i')
            console.log(i)
            console.log('a')
            console.log(a)
            console.log('reClass')
            console.log(reClass)
            console.log('reClass.test(aElem[i].className)')
            console.log(reClass.test(aElem[i].className))

        }
        // console.log(reClass)
        return aClass;
    },
    byTagName:function(elem,obj){
        return (obj || document).getElementsByTagName(elem)
    }
}

let oNav = get.byId('nav')
let aLi = get.byTagName('li',oNav)
let aSubNav = get.byClass('navTwo',oNav)
let aEm = get.byClass('triangle',oNav);

var oSubNav= timer = null;
var oEm = null;
let i = 0;
for(i = 1; i < aLi.length; i++){
    aLi[i].addEventListener('mouseover',function(){
        for(i = 0; i < aSubNav.length;i++){
            aSubNav[i].style.display = 'none';
        }
        for(i = 0; i < aEm.length;i++){
            aEm[i].style.display = 'none';
        }

        oSubNav = get.byClass('navTwo',this)[0];
        oEm = get.byClass('triangle',this)[0];

        oSubNav.style.display = 'block';


        oEm.style.display = 'block';
        clearTimeout(timer)

        //阻止冒泡
        // oSubNav.addEventListener('click',function(event){
        //     (event||window.event).cancelBubble = true;
        //     clearTimeout(timer)
        // })
    })
    aLi[i].addEventListener('mouseout',function(){
        timer = setTimeout(function(){
            oSubNav.style.display = 'none';
            oEm.style.display = 'none';
        },300)
    })
}