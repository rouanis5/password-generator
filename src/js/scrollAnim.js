import {trans} from "./main";
let faders = document.querySelectorAll(".fade-in");
let sliders = document.querySelectorAll(".slide-in");
let testObserver = document.getElementById("testObserver");
window.addEventListener("load",()=>{
    //test if the IntersectionObserver is working
    setTimeout(() => {
        if (!testObserver.classList.contains("appear")) {
            for (let i = 0; i < faders.length; i++) {
                faders[i].classList.add("appear");
            }
            for (let i = 0; i < sliders.length; i++) {
                sliders[i].classList.add("appear");
            }
        }
    }, trans);
})
//create fade-in animation
const appearOptions = {
    threshold: 0.5,
    // rootMargin: "0px 0px 45px 0px",
};
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});
sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
});

//test if IntersectionObserver is working
appearOnScroll.observe(testObserver);
/////////////////////////////////////////////
export {testObserver, appearOptions};