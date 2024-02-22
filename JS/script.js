let openMenu = document.getElementById("menu");
let closeMenu = document.getElementById("close");
let ul = document.querySelector("ul");

openMenu.addEventListener("click",function(){

    ul.style.top="0%"
openMenu.style.display="none";
closeMenu.style.display="block"
openMenu.style.transition="all ease 0.5s"


})
closeMenu.addEventListener("click",function(){

    ul.style.top="-650%"
openMenu.style.display="block";
closeMenu.style.display="none"
closeMenu.style.transition="all ease 0.5s"

})
console.log("script running...")

let blur =document.getElementById("crsr-blur")
let crsr = document.getElementById("cursor");
document.addEventListener("mousemove",function(e){
let x =e.clientX;
let y =e.clientY;
crsr.style.top=y+"px"
crsr.style.left=x+"px"

});
document.addEventListener("mousemove",function(e){
let x =e.clientX;
let y =e.clientY;
blur.style.top=y-125+"px"
blur.style.left=x-125+"px"

});

let navLiAll =document.querySelectorAll("#navbar li")
navLiAll.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    crsr.style.scale =3;
    crsr.style.border="1px solid white";
    crsr.style.backgroundColor="transparent"

})
elem.addEventListener("mouseleave",function(){
    crsr.style.scale =1;
    crsr.style.border="0px solid rgb(29, 224, 238)";
    crsr.style.backgroundColor="rgb(29, 224, 238)"
})
});

// gsap.to("#navbar",{
  //  backgroundColor :"black",
 //   duration:0.1,
   // height:"10px",
  //  scrollTrigger:{
    //    trigger:"#navbar",
  //      scroller:"body",
    //    start:"top -10",
    //    end:"top -11",
  //      scrub:1
    //}

//})

gsap.to(".bg-overlay",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".bg-overlay",
        scroller:"body",
        start:"top -20%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from("#second-container img, #about-us",{
    y:90,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#second-container",
        scroller:"body",
        start:"top 70%",
        end:"top 88%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.12,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 100%",
        end:"top 70%%",
        scrub:1,
        // markers:true
    }
})

gsap.from("#colon1",{
    y:-22,
    x:-22,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 35%",
        scrub:1
    }
})

gsap.from("#colon2",{
    y:22,
    x:22,
    duration:2,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 35%",
        scrub:1
    }
})

gsap.from("#fifth-container,.box",{
    y:90,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"fifth-container,.box",
        scroller:"body",
        // markers:true,
        start:"top 110%",
        end:"top 88%",
        scrub:1
    }
})



