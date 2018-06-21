var pageOuter = document.getElementById('pageOuter')
var red = document.getElementById('red')
var green = document.getElementById('green')
var black = document.getElementById('black')
var ul = document.getElementById('ul')

// red.addEventListener('click',function(){
//     ul.classList.add('ulRedActive')
//     ul.classList.remove('ulGreenActive')
//     ul.classList.remove('ulBlackActive')
//     pageOuter.classList.add('pageOuterRedActive')
//     pageOuter.classList.remove('pageOuterGreenActive')
//     pageOuter.classList.remove('pageOuterBlackActive')
//     red.classList.add('redActive')
//     green.classList.remove('greenActive')
//     black.classList.remove('blackActive')
//
// })
// green.addEventListener('click',function(){
//     ul.classList.add('ulGreenActive')
//     ul.classList.remove('ulRedActive')
//     ul.classList.remove('ulBlackActive')
//     pageOuter.classList.add('pageOuterGreenActive')
//     pageOuter.classList.remove('pageOuterRedActive')
//     pageOuter.classList.remove('pageOuterBlackActive')
//     green.classList.add('greenActive')
//     black.classList.remove('blackActive')
//     red.classList.remove('redActive');
// })
// black.addEventListener('click',function(){
//     ul.classList.add('ulBlackActive')
//     ul.classList.remove('ulGreenActive')
//     ul.classList.remove('ulRedActive')
//     pageOuter.classList.add('pageOuterBlackActive')
//     pageOuter.classList.remove('pageOuterGreenActive')
//     pageOuter.classList.remove('pageOuterRedActive')
//     black.classList.add('blackActive')
//     green.classList.remove('greenActive')
//     red.classList.remove('redActive');
// })


red.addEventListener('click',function(){
    addClass(ul,'ulRedActive')
    removeClass(ul,'ulGreenActive')
    removeClass(ul,'ulBlackActive')

    addClass(pageOuter,'pageOuterRedActive')
    removeClass(pageOuter,'pageOuterGreenActive')
    removeClass(pageOuter,'pageOuterBlackActive')

    addClass(red,'redActive')
    removeClass(green,'greenActive')
    removeClass(black,'blackActive')
})
green.addEventListener('click',function(){
    addClass(ul,'ulGreenActive')
    removeClass(ul,'ulRedActive')
    removeClass(ul,'ulBlackActive')

    addClass(pageOuter,'pageOuterGreenActive')
    removeClass(pageOuter,'pageOuterRedActive')
    removeClass(pageOuter,'pageOuterBlackActive')

    addClass(green,'greenActive')
    removeClass(red,'redActive')
    removeClass(black,'blackActive')
})
black.addEventListener('click',function(){
    addClass(ul,'ulBlackActive')
    removeClass(ul,'ulRedActive')
    removeClass(ul,'ulGreenActive')

    addClass(pageOuter,'pageOuterBlackActive')
    removeClass(pageOuter,'pageOuterGreenActive')
    removeClass(pageOuter,'pageOuterRedActive')

    addClass(black,'blackActive')
    removeClass(red,'redActive')
    removeClass(green,'greenActive')
})

function addClass(element,cName){
    element.classList.add(cName)
}
function removeClass(element,cName){
    element.classList.remove(cName)
}

