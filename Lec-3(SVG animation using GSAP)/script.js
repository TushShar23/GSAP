// we need to hit and try different centre point to see different movement there is no hardcode value we need to try and not to remember

let path = `M 10 100 Q 500 100 1000 100`;
const finalPath = `M 10 100 Q 500 100 1000 100`;
const cont = document.querySelector("#container");


// FOR HANDLING INSIDE THE DIV
cont.addEventListener("mousemove",(event)=>{
    // event is an object
    // console.log(event)

    path = `M 10 100 Q ${event.x} ${event.y} 990 100` // we have put the centre point y point as event.y means in y direction where the cursor goes in container element move in that direction.

    // now we need to put this path in the path "d" attribute.We will do this using GSAP and we use some effect like ease and all...
    gsap.to("svg path",{
        attr: { d: path },
        // attr is a property which lets you change the attribute and animate the element
        duration: 0.3,
        ease:"power3.out"
    })
})




// Our stringing effect is working but it is not coming to the initial position when i left the container/go outside the container.Following is the solution

// FOR PUTTING BACK TO THE INITIAL POSITION
cont.addEventListener("mouseleave",(event)=>{
    gsap.to("svg path",{
        attr: { d: finalPath },
        duration: 1.5,
        ease:"elastic.out(1.8,0.2)"
    })
})

// ease in ,ease out , ease are effects you can find on GSAP ease documentation.Easing is the primary way to change the timing of your tweens(animation)

// you always manipulate the CENTRE COORDINATE