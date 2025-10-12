// scrub,spin

gsap.from("#page1 #box",{
    duration:1,
    opacity:0,
    delay:1,
    rotate:720,
})

gsap.from("#page2 #box",{
    duration:1,
    opacity:0,
    delay:1,
    rotate:720,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        start:"top 50%",
        scrub:3, // scrub property is used for controlling the animation by scrolling.The scrolling of user tells how much animation should be perform.(sync animation with scroll ).We can give scrub in numbers too from 1 to 5
        pin:true // this property is like position:fixed.It fixed the element on the page like it is stuck 
    }
})

