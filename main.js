

// gsap.to("#white-screen", {opacity:.3,duration:.1, y:'-100vh'})
setTimeout(function(){ 

    gsap.from("#logo", {opacity:.7,duration:2});
    gsap.from(".center-title1", {opacity:0,duration:1.5, y:100});
    gsap.from(".center-title2", {opacity:0,duration:1.5, y:100, delay: 0.2});
}, 800);


