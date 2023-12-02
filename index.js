burger = document.querySelector('.burger')
header = document.querySelector('.header')
headlist = document.querySelector('.head-list')
content2 = document.querySelector('.content2')


burger.addEventListener('click',()=>{
    content2.classList.toggle('v-class');
    headlist.classList.toggle('v-class');
    header.classList.toggle('h-nav');


})


