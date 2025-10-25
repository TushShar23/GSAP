const tl = gsap.timeline();
const menu = document.querySelector("#nav i");
const close = document.querySelector("#fullnav i");

tl.to("#fullnav",{
    right:"0",
    duration:0.8
})
tl.from("#fullnav h4",{
    x:150,
    stagger:0.3,
    duration:0.7,
    opacity:"0"
})
tl.from("#fullnav i",{
    opacity:"0"
})

tl.pause() 
// tl.pause() will pause the timeline till the time we want.We want when we click on button then menu will come and when click on cross it goes

menu.addEventListener("click",(e)=>{
    tl.play();
})

close.addEventListener("click",(e)=>{
    tl.reverse();
})



// every timeline object returns few methods tl.to().tl.from().tl.play().tl.pause() and more and we have used those methods for running/playing our animation according to us.