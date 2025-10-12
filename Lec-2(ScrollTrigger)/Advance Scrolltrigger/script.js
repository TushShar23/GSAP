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

// when we use pin we trigger the parent.matlab jaise woh animation hoti hai na ki hum pura scroll karne pe hi next page pe jaa paate hai tabtak same page hi pin rehta hai hmaare view pe.aur isme starting point top 0% hota hai.User ko same pe rokte hai aur parent pe trigger hoti hai pin.Hume parent ko pin karke rakhna hai till the point jab tak animation ho rahi hai scrolling basis pe.end hum kisi bhi limit pe kar sakte -100% 150% ...