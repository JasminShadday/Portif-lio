let bar = document.querySelector(".bars .fa-bars");
let menu = document.querySelector(".menu");
bar.addEventListener("click", function(){
    menu.classList.togle("show_menu");
});
AOS.init()
var typed = new typed('.text', {
    String: ['Designer', 'Devloper','Plakson'],
typespeed: 100,
backspped : 80,
showcursor: false,
loop:true,
loopcount:Infinity
})