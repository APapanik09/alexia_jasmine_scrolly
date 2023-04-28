gsap.registerPlugin(ScrollTrigger);

const cta = document.querySelector(".cta");
const body = document.querySelector("body");
let minuteur;

window.addEventListener("scroll",(minuteur)=>{
    clearTimeout(minuteur);
    body.classList.add("is-scrolling");
    minuteur = setTimeout(function(){
        body.classList.remove("is-scrolling");

    }, 100)
})

gsap.from('.cta',{
    repeat: -1,
    y: '20px',
    yoyo: true,

})


//repeat mis pour montrer l'animation avant l'étape du scrolltrigger

 gsap
 .timeline()
 .from(".spritefall", { bottom: '10vh', duration: 3, ease: 'in', repeat: -1 })
 .from(".boucle", { top:"20vh", ease:'in', repeat: -1, duration: 3, opacity: '100%'}, 0.25)
 .from(".collier", { top:"33vh",ease:'in', repeat: -1, duration: 3, opacity: '100%'}, 0.25);

 gsap
 .timeline()
 .from(".question_1", {y: '20px', yoyo:true, ease: 'in', repeat: -1 })
 .from(".question_2", { rotation:"360", ease:'in', repeat: -1, duration: 3}, 0.25);

 gsap.from('.vuedessus',{
    repeat: -1,
    top: '5vh',
    rotate: '90',
    left: '10vw',
    duration: 5,
    ease: 'in-out'
    

})

gsap
.timeline()
.from(".spritemarche", {left: '-90vw', ease: 'out', repeat: -1, duration: 4})
.from(".chatsaute", { rotation:"-10", ease:'out', repeat: -1, duration: 2, right:'5vw', bottom: '55vh', opacity: '0'}, 3);

gsap.from('.etoileminou',{
    repeat: -1,
    top: '-10vh',
    duration: 3,
    ease: 'out',
    opacity: '0'

})