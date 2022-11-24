var accordion = document.querySelectorAll('.accordion-head span')
var para = document.querySelectorAll('.accordion li p')
var images = document.querySelectorAll('.slider-images li');
var arrow = document.querySelectorAll('.arrow li');

// console.log(arrow);

accordion.forEach(function(list,index){
    list.addEventListener('click',function(){
        list.classList.toggle('active');
        para[index].classList.toggle('show');
        console.log(para[index]);
    })
})

arrow.forEach(function(btn){
    btn.addEventListener('click',function(){
        images[1].classList.add('show');
    })
})