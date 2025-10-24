const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imagediv = document.querySelector("#imagediv")



main.addEventListener("mousemove",(event)=>{
    // because we need to move cursor from initial to specified position.

    gsap.to(cursor,{
        x:event.x,
        y:event.y,
        duration:0.3,
        // ease:"back.out(1.7)"
    })

})

// i need that whenever cursor comes into the image div its size will increase

imagediv.addEventListener("mousemove",(event)=>{
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:2
    })
})
//when comes outside the imagediv size will become default
imagediv.addEventListener("mouseleave",(event)=>{
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1
    })
})