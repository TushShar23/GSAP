// applyging GSAP

gsap.to("#box1",{
    x: 1200,
    duration: 2,
    delay: 1,
    // duration is the time taken to reach the final position.
    // delay is the after which the animation starts.

    // we can add css properties too
    rotate: "360",
    borderRadius: "50%",
    backgroundColor: "blue"
})