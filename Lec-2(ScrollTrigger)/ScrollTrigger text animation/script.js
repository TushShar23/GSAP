gsap.from("#page1 h1",{
    x:300,
    opacity:0,
    duration:1,
    delay:1
})
gsap.from("#page1 h3",{
    x:-300,
    opacity:0,
    duration:1,
    delay:1
})

gsap.from("#page2 h1",{
    x:300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        start:"top 50%",
        markers:true
    }
})
gsap.from("#page2 h3",{
    x:-300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 h3",
        scroller:"body",
        start:"top 50%",
        markers:true
    }
})

gsap.from("#page3 h1",{
    x:300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        start:"top 50%",
        markers:true
    }
})
gsap.from("#page3 h3",{
    x:-300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 h3",
        scroller:"body",
        markers:true,
    }
})