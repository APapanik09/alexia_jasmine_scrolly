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

 