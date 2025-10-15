let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");

// when mouse is move anywhere in the main/on the site then cursor effect should move.

main.addEventListener("mousemove",(event)=>{
    // because we need to move cursor from initial to specified position.

    gsap.to(cursor,{
        x:event.x,
        y:event.y,
        duration:0.3,
        // ease:"back.out(1.7)"
    })

    // if we have selected that element using DOM then we can use its name/variable name in which we have selected directly in the GSAP selector place
})