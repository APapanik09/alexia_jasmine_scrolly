gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const cta = document.querySelector(".cta");
const body = document.querySelector("body");
let minuteur;
const vagabond = document.getElementById('rue');
const byebye = document.getElementById('tomber');
const loin = document.getElementById('foretloin');
const marche = document.getElementById('foretmarche');
const rencontre = document.getElementById('rencontrechat');
const peche = document.getElementById('pechechat');
const etoile = document.getElementById('etoilechat');


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


/* ----- Animation Chapitre 2 -----*/

 gsap
 .timeline({scrollTrigger:{
    trigger: byebye,
    start: 'top',
    pin: true,
    scrub: true,
    
 }})
 .from(".spritefall", { bottom: '10vh', duration: 3, ease: 'in', repeat: -1 })
 .from(".boucle", { top:"20vh", ease:'in', duration: 3, opacity: '100%'}, 0.25)
 .from(".collier", { top:"33vh",ease:'in', duration: 3, opacity: '100%'}, 0.25);
 
  /* ----- Animation Chapitre 3 -----*/

 gsap.from('.vuedessus',{
    scrollTrigger: {
        trigger: vagabond,
        start: "top",
        pin: true,
        scrub: true,
      },
    top: '5vh',
    rotate: '90',
    left: '10vw',
    duration: 5,
    ease: 'in-out'
    

}) 

/* ----- Animation Chapitre 5 -----*/

gsap
.timeline({scrollTrigger:{
    trigger: marche,
    start: 'top',
    pin: true,
    scrub: true,
 }})
.from(".spritemarche", {left: '-90vw', ease: 'out', duration: 4})
.from(".treeback", {left: '-90vw', ease: 'out', duration: 8})
.from(".chatsaute", { rotation:"-10", ease:'out', duration: 2, right:'5vw', bottom: '55vh', opacity: '0'}, 3);

 /* ----- Animation Chapitre 6 -----*/

 gsap
 .timeline({scrollTrigger:{
    trigger: rencontre,
    start: 'top',
    pin: true,
    scrub: true,
 }})
 .from(".question_1", {y: '20px', yoyo: true, ease: 'in'})
 .from(".question_2", { rotation:"360", ease:'in', duration: 3, repeat: -1}, 0.25);



 /* ----- Animation Chapitre 7 -----*/

gsap.from('.etoileminou',{
    scrollTrigger: {
        trigger: etoile,
        start: "top",
        pin: true,
        scrub: true,
      },
    top: '-10vh',
    duration: 3,
    ease: 'out',
    opacity: '0'

})

/*-- svg pas fonctionner 

gsap.set("#starsvg",{drawSVG:"0% 0%"});

function anim() {
    gsap.fromTo(
      "#starsvg",
      { drawSVG: "0% 0%" },
      {
        drawSVG: "0% 100%",
        duration: 5,
      }
    );
  }

  anim(); --*/

