const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
var video = document.querySelector(".video-con")
var play = document.querySelector(".play")
var page2 =document.querySelector(".page2")
video.addEventListener("mouseenter", function(){
    gsap.to(play , {
        scale : 1,
        opacity : 1
    })
})
video.addEventListener("mouseleave", function(){
    gsap.to(play,{
        scale:0, 
        opacity:0

    })
})
video.addEventListener("mousemove", function(dets){ 
    gsap.to(play,{
        left: dets.x -80,
        top: dets.y -80,
       }) 
})
gsap.from(".page1 h1", {
    y: 130,
    delay : 0.4,
    duration : 0.4,
    stagger: 0.2,
    opacity:0
})
gsap.from(".page1 .video-con", {
    opacity :0,
    delay : 0.8,
    duration :0.6,
    scale : 0.7
})

gsap.from(".nav-part1 h1, .nav-part2 span, .menubar, .shop-cart", {
    y : -20,
    opacity:0,
    delay:0.2,
    duration: 1,
})
//Page3 img cursor animation
var image1 =document.querySelector(".image1");
image1.addEventListener("mouseenter", function(){
    gsap.to(".page3-circle",{
        opacity:1,
        transform: "translate(-50%,-50%) scale(1.2)"
    })
    document.querySelector(".page3-circle").style.backgroundColor="#d4d0d3"
})
image1.addEventListener("mousemove", function(dets){
    gsap.to(".page3-circle",{
        left: dets.x ,
        top: dets.y ,
        transform :"scale(2.5)"
    })
})
image1.addEventListener("mouseleave", function(){
    gsap.to(".page3-circle",{
        opacity:0,
        transform: "translate(-50%,-50%) scale(0)"
    })
})
var image2 =document.querySelector(".image2");
image2.addEventListener("mouseenter", function(){
    gsap.to(".page3-circle",{
        opacity:1,
        transform: "translate(-50%,-50%) scale(2.5)"
    })
    document.querySelector(".page3-circle").style.backgroundColor ="#e6dfd7"
})
image2.addEventListener("mousemove", function(dets){
    gsap.to(".page3-circle",{
        left: dets.x ,
        top: dets.y ,
        transform :"scale(2.5)"
    })
})
image2.addEventListener("mouseleave", function(){
    gsap.to(".page3-circle",{
        opacity:0,
        transform: "translate(-50%,-50%) scale(0)"
    })
})
var image3 =document.querySelector(".image3");
image3.addEventListener("mouseenter", function(){
    gsap.to(".page3-circle",{
        opacity:1,
        transform: "translate(-50%,-50%) scale(2.5)"
    })
    document.querySelector(".page3-circle").style.backgroundColor ="#e5e5e5"
})
image3.addEventListener("mousemove", function(dets){
    gsap.to(".page3-circle",{
        left: dets.x ,
        top: dets.y ,
        transform :"scale(2.5)"
    })
})
image3.addEventListener("mouseleave", function(){
    gsap.to(".page3-circle",{
        opacity:0,
        transform: "translate(-50%,-50%) scale(0)"
    })
})
var image4 =document.querySelector(".image4");
image4.addEventListener("mouseenter", function(){
    gsap.to(".page3-circle",{
        opacity:1,
        transform: "translate(-50%,-50%) scale(2.5)"
    })
    document.querySelector(".page3-circle").style.backgroundColor ="#ffeadf"
})
image4.addEventListener("mousemove", function(dets){
    gsap.to(".page3-circle",{
        left: dets.x ,
        top: dets.y ,
        transform :"scale(2.5)"
    })
})
image4.addEventListener("mouseleave", function(){
    gsap.to(".page3-circle",{
        opacity:0,
        transform: "translate(-50%,-50%) scale(0)"
    })
})

//Logo animation 
var page4 =document.querySelector(".page4") 
var circle1= document.querySelector(".circle1")
page4.addEventListener("mouseenter", function(){
    gsap.to(".circle1", {
        opacity:1,
        stagger:0.1,
        rotate:"0deg",
        duration:0.2,
        scale:1
    })
    gsap.to(".x-mark", {
        opacity:1,
        rotate:"0deg",
        stagger:0.1,
        delay:0.3,
        duration:0.4
    })
    gsap.to(".page4-para", {
        opacity:1,
        delay:0.4
    })
})
