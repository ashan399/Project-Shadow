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
        document.getElementById("typing").innerHTML += str.charAt(val);
        type(val+1);
    },60);
    
}
type(0);


// page 2

var tl = new TimelineMax();
const controller = new ScrollMagic.Controller();
tl.from("#box", 1, {opacity: 0, scale: 0});
tl.to("#box", .5, {left: "40%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})
const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote"
  })
    .setTween(tl)
          .addTo(controller);

var tl2 = new TimelineMax();
const controller2 = new ScrollMagic.Controller();
tl2.from("#about", 1, {opacity: 0, scale: 0});
tl.to("#box", .5, {left: "40%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})
const scene3 = new ScrollMagic.Scene({
    triggerElement: "blockquote"
  })
    .setTween(tl)
          .addTo(controller2);
