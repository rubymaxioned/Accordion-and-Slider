var accordion = document.querySelectorAll('.accordion-head span')
var para = document.querySelectorAll('.accordion li p')
var images = document.querySelectorAll('.slider-images li');
var prev = document.querySelector('.left-arrow');
var next = document.querySelector('.right-arrow');


//accordion 
accordion.forEach(function(list,index){

    list.addEventListener('click',function(){
        list.classList.toggle('active');
        para[index].classList.toggle('show');
    })

})


//slider
var initial = 0;

function sliderFunction(num) {
    for(var i=0; i<images.length; i++){
    images[i].classList.remove('show');
    }

    images[num].classList.add("show");
}

sliderFunction(initial);

prev.addEventListener("click", function(){
    initial -= 1;
    if(initial < 0) {
        initial = images.length - 1
    }
    sliderFunction(initial);
})

next.addEventListener("click", function(){
    initial += 1;
    if(initial > images.length - 1) {
        initial = 0;
    }
    sliderFunction(initial);
})
