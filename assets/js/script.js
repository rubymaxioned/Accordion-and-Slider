var accordion = document.querySelectorAll('.accordion-head span')
var para = document.querySelectorAll('.accordion li p')
// console.log(para[2]);

accordion.forEach(function(list,index){
    list.addEventListener('click',function(){
        list.classList.toggle('active');
        para[index].classList.toggle('show');
        console.log(para[index]);
    })
})