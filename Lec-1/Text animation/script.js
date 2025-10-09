// for this text animation to() is not the appropriate method to create an effect
gsap.to(".first",{
    y: 30,
    duration: 1.5,
    delay: 1,
    opacity: 0,
    color: "blue"
})

gsap.from(".second",{
    y: 30,
    duration: 1.5,
    delay: 1,
    opacity: 0,
    color: "yellow"
})

// from is the perfect method for creating the animation we want
gsap.from(".first3",{
    y:20,
    duration: 2,
    delay: 1,
    opacity: 0,
    color:"red" ,// color will be default from red
})


gsap.from(".last3",{
    y:20,
    duration:2,
    delay:1,
    opacity:0,
    color:"crimson", // color will be default from red
    repeat: 2 ,// repeat 2 means it will repeat 3 times coz 1 time by default and then 2 times repeat and "-1" for infinite
    stagger:1, // -1 for reverse
})

gsap.from(".last",{
    y:20,
    duration:2,
    delay:1,
    opacity:0,
    color:"crimson", // color will be default from red
    repeat: 2 ,// repeat 2 means it will repeat 3 times coz 1 time by default and then 2 times repeat and "-1" for infinite
    stagger:-1, // -1 for reverse
})

gsap.to(".box",{
    x:1200,
    duration:2,
    delay:1,
    borderRadius:"50%",
    color:"blue",
    repeat:-1,
    yoyo:true
    // without repeat yoyo won't work coz if animation is not going forward or not changing what is the point to coming back to the initial state.
})




