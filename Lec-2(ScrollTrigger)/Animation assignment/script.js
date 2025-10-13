// when we use pin we trigger the parent.matlab jaise woh animation hoti hai na ki hum pura scroll karne pe hi next page pe jaa paate hai tabtak same page hi pin rehta hai hmaare view pe.aur isme starting point top 0% hota hai.User ko same pe rokte hai aur parent pe trigger hoti hai pin.Hume parent ko pin karke rakhna hai till the point jab tak animation ho rahi hai scrolling basis pe.end hum kisi bhi limit pe kar sakte -100% 150% ...

gsap.to("#page2 h1",{
    transform:"translateX(-170%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -180%",
        scrub:2,
        pin:true // pin will stop/pin the parent where we have applied animation.
    }
})

// start "top 0%" is nothing but saying that when page 2 reaches 0% from top then start the animation and ends the animation when page2 is -180 from the top.Why page2 coz it is the parent where we have applied the animation.
