// we are going to use gsap timeline.It is used for controlling multiple animations together.

const tl = gsap.timeline()
// now we can animate multiple tweens without calculating the time reqd to complete the tweens.

tl.from("h2",{
    y:-20,
    duration:0.5,
    delay:1,
    opacity:0

})

tl.from("h4",{
    y:-20,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.3
    // -0.3 will show the btns from reverse order
    // stagger will take care of the order and we give the time in sec,
})

tl.from("h1",{
    y:20,
    duration:0.7,
    opacity:0
})


