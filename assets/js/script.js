var accordion = document.querySelectorAll('.accordion-head span')
var para = document.querySelectorAll('.accordion li p')
var images = document.querySelectorAll('.slider-images li');
var arrow = document.querySelectorAll('.arrow li');

var count = 0;

// console.log(arrow);

accordion.forEach(function(list,index){
    list.addEventListener('click',function(){
        list.classList.toggle('active');
        para[index].classList.toggle('show');
        console.log(para[index]);
    })
})

arrow.forEach(function(btn,index){
    btn.addEventListener('click',function(){
        console.log(index);
        if(index == 1){
            console.log(count);
            count += 1;
            images[count].classList.add('show');
        }
    })
})