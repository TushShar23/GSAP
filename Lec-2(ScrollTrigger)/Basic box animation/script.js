gsap.from("#page1 #box",{
    scale:0,
    duration:1.5,
    delay:1,
    rotate:"360"
})

// here we need scrolltrigger coz when user scroll on to another page then animation should start not when the page is started/reloaded.Animation should start according to the users scrolling time.Scrolltrigger is an extension/plugin of gsap
gsap.from("#page2 #box",{
    scale:0,
    duration:1.5,
    delay:1,
    rotate:"360",
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        start:"top 60%"
    }
    // scrolltrigger is a plugin.trigger is a property which tells which DOM element is triggering the animation(WHAT to watch)/the element that triggers the animation,scroller tells the element whose scroll position controls the animation(Who is scrolling)
})
gsap.from("#page3 #box",{
    scale:0,
    duration:1.5,
    delay:1,
    rotate:"360",
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        start:"top 60%",
        markers:true
    }
    // scrolltrigger is a plugin.trigger is a property which tells which DOM element is triggering the animation(WHAT to watch)/the element that triggers the animation,scroller tells the element whose scroll position controls the animation(Who is scrolling),markers are just helping hands
})