setTimeout(function(){ 
    gsap.from("#logo", {opacity:0,duration:.9});
    gsap.from(".center-title1", {opacity:0,duration:.7, y:100});
    gsap.from(".center-title2", {opacity:0,duration:.7, y:100, delay: 0.2});
    gsap.from("#bottom-right",{duration:.7, x:-100, delay:.1} )
    gsap.from("#l1", {opacity:0,duration:.8,x:-50});
    gsap.from("#l2", {opacity:0,duration:.8,x:-50});
    gsap.from("#l3", {opacity:0,duration:.8,x:-50});
    gsap.from("#l4", {opacity:0,duration:.8,x:-50});
    gsap.from("#l5", {opacity:0,duration:.8,x:-50});
    gsap.from("#l6", {opacity:0,duration:.8,x:-50});
    gsap.from("#l7", {opacity:0,duration:.8,x:-50});
    gsap.from(".nav-item", {opacity:0, y:100, duration: 1, stagger:.25})
    gsap.from("#name", {opacity:0, duration:1, delay:.2})
    gsap.from(".circle", {opacity:0, y:100, duration: 1, stagger:.25})
    gsap.from("#down-arrow",{duration:.8,y:-50})
    
}, 100);

setTimeout(function(){ 
var tl = gsap.timeline({repeat: -1, yoyo:true, repeatDelay:1})
tl.to("#down-arrow", {duration:.4,y:15})
}, 4500);

let str = "Welcome to this website's new redesign! Now supporting GSAP animations and Bootstrap.";
function type (val){
    if(val>=str.length)
        return;
    setTimeout( () => {
        console.log(val)
        document.getElementById("typing").innerHTML += str.charAt(val);
        type(val+1);
    },65);
    
}
type(0);