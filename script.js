// * Items fade-in animations.
let headingArea = document.querySelector("header");
gsap.fromTo(headingArea,{
    opacity:0,
    fontSize: "8rem"
},{
    opacity:1,
    top: "10px",
    duration: 2.5,
    fontSize: "2rem",
    ease: "power2.out"
})
let contents = document.querySelectorAll(".content");
contents.forEach((content, iVal) => {
    gsap.fromTo(content,{
        opacity: 0,
        top: "20px"
    },{
        delay:0.5+(iVal*1.25),
        opacity: 1,
        top: 0,
        ease: "power3.out"
    })
})

// * Button animations.

let btn1 = document.querySelector("#content1 > button");
let btn2 = document.querySelector("#content2 > button");
let btn3 = document.querySelector("#content3 > button");

btn1.addEventListener("click",(e)=>{
    let greenRect = document.querySelector("#greenRect");
    gsap.fromTo(greenRect,{
        height: "100px",
        width: "200px",
        backgroundColor: "#00ffaa",
        marginLeft: "0px"
    },{
        width: "150px",
        height: "150px",
        marginLeft: "50px",
        opacity: "60%",
        duration: 1,
        ease: "back.out(1.7)"
    })
});
btn2.addEventListener("click", (e)=>{
    let memeImg = document.querySelector("#meme>img");
    gsap.fromTo(memeImg,{
        opacity: 0,
        marginLeft: "100px"
    },
    {
        opacity: 1,
        marginLeft: "0px",
        duration: 1.5, 
        ease: "circ.out"
    })
})

btn3.addEventListener("click",(e)=>{
    let blueCirc = document.querySelector("#blueCirc");
    let circ_tl = new gsap.timeline();
    // Forward
    circ_tl.to(blueCirc,{ left: "220px", top: "50px", duration:.200, ease: "expo.out"})
    .to(blueCirc,{ left: "520px", top: "20px", duration:.2, ease:"expo.out"})
    .to(blueCirc,{ left: "520px", top: "50px", duration:.2, ease:"expo.out"})
    .to(blueCirc,{ left: "820px", top: "20px", duration:.2, ease:"expo.out"})
    .to(blueCirc,{ left: "820px", top: "50px", duration:.2, ease:"expo.out"})

    // Reverse
    .to(blueCirc,{ left: "820px", top: "20px", duration:.2, ease:"expo.out"})
    .to(blueCirc,{ left: "520px", top: "50px", duration:.2, ease:"expo.out"})
    .to(blueCirc,{ left: "520px", top: "20px", duration:.2, ease:"expo.out"})
    .to(blueCirc,{ left: "220px", top: "50px", duration:.2, ease:"expo.out"})
    .to(blueCirc,{ left: "220px", top: "20px", duration:.2, ease:"expo.out"})
})