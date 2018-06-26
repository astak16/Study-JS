var input = document.getElementsByTagName('input')[0]

input.addEventListener('click',function(){
    var add = ++this.value
    alert(add)
    this.value.innerHTML = add
})