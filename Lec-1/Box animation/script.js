// applyging GSAP

// to - default properties se specified properties pe aaja.
// from - specified properties se default properties pe aaja.

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

// here x means translate x property in CSS