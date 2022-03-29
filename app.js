gsap;

let mainAnimation = gsap.timeline({ delay: 0.5 });
let box1 = document.querySelectorAll(".square")[0];
let box2 = document.querySelectorAll(".square")[1];
mainAnimation.to(box1, { top: "-50%", ease: "back" });
mainAnimation.to(box2, { top: "-50%", ease: "back" });
