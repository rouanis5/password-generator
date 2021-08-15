let tabletWidth = "900px";
let questions = document.querySelectorAll(".faqs .question input");
let answers = document.querySelectorAll(".faqs li");

let profile = document.querySelector(".aboutUs .profile");
let profile_public = document.querySelector(".aboutUs .profile .public");

const themePasswordGenerator = localStorage.getItem("themePasswordGenerator");

let feature_card = document.querySelectorAll(".features .card");

let topnavLinks = document.querySelectorAll(".topnav .links a");

let settingsBtn = document.querySelectorAll(".settings ul li.button");

let pTop = 68;
//function to show or hide menu
function topnavDef() {
    if (window.matchMedia(`(max-width: ${tabletWidth})`).matches) {
        topnav.classList.toggle("active");
    } else {
        topnav.classList.remove("active");
    }
    popupForm.classList.remove("active");
}
//go to a location minus the top padding
function goLocation(link) {
    let id = link.getAttribute("data-id");
    let element = document.getElementById(id);
    window.scrollTo(0, element.offsetTop - pTop);
}
function faq_answer(i) {
    for (let j = 0; j < questions.length; j++) {
        if (j === i) continue;
        answers[j].classList.remove("active");
    }
    answers[i].classList.toggle("active");
}
function popupFormDef() {
    popupForm.classList.toggle("active");
}
function show_card(i) {
    for (let j = 0; j < feature_card.length; j++) {
        if (j === i) continue;
        feature_card[j].classList.remove("active");
    }
    feature_card[i].classList.toggle("active");
}
//change between themes and creating a local storage
function changeTheme() {
    if (document.body.classList.value == "light") {
        document.body.classList.value = "dark";
    } else {
        document.body.classList.value = "light";
    }
    localStorage.setItem("themePasswordGenerator", document.body.classList.value);
}
if (themePasswordGenerator) {
    document.body.classList.value = themePasswordGenerator;
}
switchTheme.onclick = changeTheme;
for (let i = 0; i < questions.length; i++) {
    questions[i].onclick = function () {
        faq_answer(i);
    };
}
profile_public.onclick = function () {
    profile.classList.toggle("active");
};

for (let i = 0; i < feature_card.length; i++) {
    feature_card[i].onclick = function () {
        show_card(i);
    };
}
menu.onclick = topnavDef;
for (let i = 0; i < topnavLinks.length; i++) {
    topnavLinks[i].onclick = function () {
        topnavDef();
        goLocation(this);
    };
}
emailButton.onclick = popupFormDef;
closePopupForm.onclick = popupFormDef;

//sticky navbar
window.onscroll = function () {
    if (popupForm.classList.value != "contactForm active") {
        topnav.classList.toggle("sticky", window.scrollY > 68);
    }
};

//settings functions
for (let i = 0; i < settingsBtn.length; i++) {
    settingsBtn[i].onclick = function () {
        settingsBtn[i].classList.toggle("active");
    };
}
showSettings.onclick = function () {
    // main.classList.value = "parent active";
    main.classList.toggle("active");
};
closeSettings.onclick = function () {
    main.classList.remove("active");
};
let minPlus = document.querySelectorAll(".settings .select button");
let passLength = document.getElementById("passLength");
for (let i = 0; i < minPlus.length; i++) {
    minPlus[i].onclick = function () {
        let op = minPlus[i].getAttribute("data-op");
        let num = passLength.textContent;
        let result = parseInt(num) + parseInt(op);
        if (result >= 6 && result <= 99) passLength.textContent = result;
    };
}
//footer navigation
let footerNavLinks = document.querySelectorAll("#footerNav a");
for (let i = 0; i < footerNavLinks.length; i++) {
    footerNavLinks[i].onclick = function () {
        goLocation(this);
    };
}
