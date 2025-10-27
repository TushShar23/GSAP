
const h1 = document.querySelector("h1");
const h1text = h1.textContent;
console.log(h1text);

function breakTheText(){
    let splittedText = h1text.split("");
    let halflength = (splittedText.length)/2;
    let clutter = ""

    splittedText.forEach((elem,idx)=>{
        if(idx<halflength){
            clutter = clutter + `<span class="firsthalf">${elem}</span>`
        }
        else{
            clutter = clutter + `<span class="secondhalf">${elem}</span>`
        }
    })

    h1.innerHTML = clutter
    
    console.log(h1);
}

breakTheText()

gsap.from("h1 .firsthalf",{
    y:70,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15 ,
})

gsap.from("h1 .secondhalf",{
    y:-70,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.15,
})