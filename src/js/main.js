// add .babelrc config to solve parcel&browserlist problem with async/await;
import { wordMap as words } from "./words";
let tabletWidth = "900px";
let questions = document.querySelectorAll(".faqs .question");
let answers = document.querySelectorAll(".faqs li");
let parents = document.querySelectorAll(".parent");
let page = 0;
let trans = 700; export {trans};
let ScrollingSpeed = 750 / 1000; //750px per second
let lastKey;
let scrollAnimation;
let onScrolling;

let dataId = document.querySelectorAll("[data-id]");
let profile = document.querySelector(".aboutUs .profile");
let profile_public = document.querySelector(".aboutUs .profile .public");

let themePasswordGenerator = localStorage.getItem("themePasswordGenerator");
let shortcutsPasswordGenerator = localStorage.getItem("shortcutsPasswordGenerator");

let feature_card = document.querySelectorAll(".features .card");

let topnavLinks = document.querySelectorAll(".topnav .links a");

let settingsBtn = document.querySelectorAll(".settings ul li.button");
let settingsLi = document.querySelectorAll(".settings ul li");
let settingsUl = document.querySelector(".settings ul");
let topnavH = 64, topnavOffsetTop , lastScrollTop = 0; //topnav variables

let minPlus = document.querySelectorAll(".settings .select button");

let footer = document.querySelector(".footer__main");

let isAllowed = false;
let Is_changed = true;
let noLetters = true;
let charList = "";
let password = "";
let passwordLength = 12;
let characters = [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "!@#$%^&*_-+=",
    "{}[]()/\\'\"`~,;:.<>",
];

//add id
let main = document.getElementById("main");
let topnav = document.getElementById("topnav");
let popupForm = document.getElementById("popupForm");
let switchTheme = document.getElementById("switchTheme");
let menu = document.getElementById("menu");
let emailButton = document.getElementById("emailButton");
let closePopupForm = document.getElementById("closePopupForm");
let showSettings = document.getElementById("showSettings");
let closeSettings = document.getElementById("closeSettings");
let passLength = document.getElementById("passLength");
let generate = document.getElementById("generate");
let screen = document.getElementById("screen");
let remember = document.getElementById("remember");
let copyScreen = document.getElementById("copyScreen");
let copySentence = document.getElementById("copySentence");
let reSentence = document.getElementById("reSentence");

let shortcutPopBtn = document.querySelectorAll(".shortcutPop button");
let shortcutPop = document.getElementById("shortcutPop");
let shortcuts = document.getElementById("shortcuts");
let shortcutsClose = document.getElementById("shortcutsClose");
let sections = document.querySelectorAll(".shortcuts .main .column");
let sectionsBtn = document.querySelectorAll(".shortcuts .title button");

let contactUs = document.querySelector(".contactUs");

//setting h3 pr...
let settingsH3 = document.querySelector(".settings h3");
let settingsH3Data = settingsH3.innerHTML;
let settingsH3Clr = getComputedStyle(settingsH3).color;

let loading = document.querySelector(".loading");
//onload
window.addEventListener("load",()=>{
    //contactUs if the browser dont support Grid
    if (typeof settingsUl.style.grid !== "string") {
        contactUs.classList.remove("allow");
        footer.classList.add("ie");
    }
    if (!shortcutsPasswordGenerator) {
        setTimeout(() => {
            if (!shortcuts.classList.contains("active")) {
                shortcutPop.classList.add("active");
            }
        }, 15000);
    }
    loading.classList.add("fade-in");
    setTimeout(() => {
        loading.classList.add("hide");
    }, trans);
});
//function that wait 2s
function timer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 1200);
    });
}
//function that generate the password
function generateDef() {
    password = "";
    let passLengthInt = parseInt(passLength.value);
    if (Is_changed) {
        charList = "";
        for (let i = 0; i < settingsBtn.length; i++) {
            if (settingsBtn[i].classList.contains("active")) {
                charList += characters[i];
            }
        }
        Is_changed = false;
        screen.classList.remove("red");
    }
    if (charList !== "") {
        for (let i = 0; i < passLengthInt; i++) {
            password += charList[Math.round(Math.random() * (charList.length - 1))];
        }
        isAllowed = true;
    } else {
        if (main.classList.contains("active")) {
            password = "Enable at least one option";
        } else {
            password = "Click the settings button below";
        }
        screen.classList.add("red");
        isAllowed = false;
    }
    screen.value = password;
    clipboardDef();
}
//create a clipboard function
function clipboardDef() {
    if (isAllowed) {
        let sentence = "";
        noLetters = true;
        password = screen.value;
        for (let i = 0; i < password.length; i++) {
            let is_letter = false;
            for (let j = 0; j < characters[1].length; j++) {
                if (password[i].toLowerCase() === characters[1][j]) {
                    if (password[i] === password[i].toLowerCase()) {
                        sentence +=
                            words[j][Math.round(Math.random() * (words[j].length - 1))] +
                            " ";
                    } else {
                        sentence +=
                            words[j][
                                Math.round(Math.random() * (words[j].length - 1))
                            ].toUpperCase() + " ";
                    }
                    is_letter = true;
                    noLetters = false;
                    break;
                }
            }
            if (!is_letter) {
                sentence += password[i] + " ";
            }
        }
        remember.classList.add("active");
        if (!noLetters) {
            remember.classList.remove("yellow");
            remember.value = sentence;
        } else {
            remember.classList.add("yellow");
            remember.value = "⚠ There is no letter in the password";
        }
    } else {
        remember.classList.remove("active");
    }
}
//function to remove shortcutpopup and toggle shortcuts
function shortcutDef(t) {
    shortcutPop.classList.remove("active");
    setTimeout(() => {
        shortcuts.classList.toggle("active");
    }, t);
}
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
function goLocation(target, duration = null) {
    cancelAnimationFrame(scrollAnimation);
    onScrolling = true;
    let targetPos = target.offsetTop;
    let startPos = window.pageYOffset;
    let is_topnav = targetPos > startPos ? 0 : -topnavH; 
    //check if the topnav will activated or not
    //if the targetPos is higher than the startPos, so we're descending --> disactivated
    let distance = targetPos - startPos + is_topnav;
    let startTime = null;
    if (duration === null) {
        duration = Math.abs(distance) / ScrollingSpeed;
        if (duration < 100) {
            duration = 500;
        }
    }
    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        let timeElapsed = currentTime - startTime;
        let run = linear(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            scrollAnimation = requestAnimationFrame(animation);
        }
    }
    function easeInOut(t, b, c, d) {
        //the problem was the division by zero when the duration is 0
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    function linear(t, b, c, d) {
        return (c * t) / d + b;
    }
    scrollAnimation = requestAnimationFrame(animation);
}
///
function faq_answer(i) {
    for (let j = 0; j < questions.length; j++) {
        if (j === i) continue;
        answers[j].classList.remove("active");
    }
    answers[i].classList.toggle("active");
}
function popupFormDef() {
    popupForm.classList.toggle("active");
    topnav.classList.remove("scrolling-down");
}
function show_card(i) {
    for (let j = 0; j < feature_card.length; j++) {
        if (j === i) continue;
        feature_card[j].classList.remove("active");
    }
    feature_card[i].classList.toggle("active");
}

//function to copy to the clipboard
function copyTextDef(copyText) {
    let message = "copied successfully 💪💪";
    if (copyText.value !== message) {
        let tmp = copyText.value;
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, tmp.length); // For mobile devices
        //Copy the text inside the text field
        document.execCommand("copy");
        //remove selection
        window.getSelection().removeAllRanges();
        //add a feedback message
        copyText.value = message;
        copyText.classList.toggle("copied");
        setTimeout(function () {
            copyText.value = tmp;
            copyText.classList.toggle("copied");
        }, 700);
    }
}
//set page index
page = 0;
function setPage() {
    //set the first positive number the min num
    for (let i = 0; i < parents.length; i++) {
        if (parents[i].getBoundingClientRect().top + topnavH >= 0) {
            page = i;
            break;
        }
    }
    return page;
}
//change between themes and creating a local storage
function changeTheme() {
    document.body.classList.toggle("dark");
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
    topnavLinks[i].addEventListener("click", topnavDef);
}
emailButton.onclick = popupFormDef;
closePopupForm.onclick = popupFormDef;
window.onscroll = function () {
    let is_topnav_active = topnav.classList.contains("active") ? 0 : topnavH;
    if (!topnav.classList.contains("sticky")) {
        topnavOffsetTop = topnav.offsetTop + is_topnav_active;
    }
    if (!popupForm.classList.contains("active")) {
        if (window.scrollY > topnavOffsetTop) {
            topnav.classList.add("sticky");
        } else {
            topnav.classList.remove("sticky");
        }
        //hide the topnav on scrolling-down
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (!topnav.classList.contains("active")) {
            if (scrollTop < lastScrollTop) {
                topnav.classList.add("scrolling-up");
            } else{
                topnav.classList.remove("scrolling-up");
            }
        }
        lastScrollTop = scrollTop;
    }
};
//settings functions

for (let i = 0; i < settingsBtn.length; i++) {
    settingsBtn[i].onclick = function () {
        settingsBtn[i].classList.toggle("active");
        Is_changed = true;
    };
}
for (let i = 0; i < settingsLi.length; i++) {
    settingsLi[i].onmouseover = function () {
        settingsH3.innerHTML = settingsLi[i].getAttribute("data-onhover");
        settingsH3.style.color = getComputedStyle(settingsLi[i]).backgroundColor;
    };
    settingsLi[i].onmouseout = function () {
        settingsH3.innerHTML = settingsH3Data;
        settingsH3.style.color = settingsH3Clr;
    };
}
showSettings.onclick = function () {
    main.classList.toggle("active");
};
closeSettings.onclick = function () {
    main.classList.remove("active");
};
for (let i = 0; i < minPlus.length; i++) {
    minPlus[i].onclick = function () {
        let num = parseInt(passLength.value);
        let min = parseInt(passLength.min);
        let max = parseInt(passLength.max);
        let op = minPlus[i].getAttribute("data-op");
        let result = num + parseInt(op);
        if (result >= min && result <= max) {
            passLength.value = result;
        } else if (result > max) {
            passLength.value = min;
        } else {
            passLength.value = max;
        }
    };
}
passLength.addEventListener("input", async function () {
    const result = await timer();
    let min = parseInt(passLength.min);
    let max = parseInt(passLength.max);
    let num = parseInt(passLength.value);
    if (num > max) {
        passLength.value = max;
    } else if (num < min) {
        passLength.value = min;
    } else if (isNaN(num)) {
        passLength.value = min;
    }
});
//data-id navigation
for (let i = 0; i < dataId.length; i++) {
    dataId[i].addEventListener("click", () => {
        let id = dataId[i].getAttribute("data-id");
        let link = document.getElementById(id);
        goLocation(link);
    });
}
//generator
generate.onclick = generateDef;
///regenerate the sentence
reSentence.onclick = clipboardDef;

copyScreen.onclick = function () {
    if (isAllowed) {
        copyTextDef(screen);
    }
};
copySentence.onclick = function () {
    if (!noLetters) {
        copyTextDef(remember);
    }
};
window.addEventListener(
    "keydown",
    function (e) {
        if (!e.target.form) {
            if (e.code.includes("Arrow")) {
                e.preventDefault();
                page = setPage();
                if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && page !== 0) {
                    goLocation(parents[--page]);
                } else if (
                    (e.code === "ArrowDown" || e.code === "ArrowRight") &&
                    page !== parents.length - 1
                ) {
                    goLocation(parents[++page]);
                }
            } else if (e.code === "Space") {
                if (onScrolling) {
                    e.preventDefault();
                    cancelAnimationFrame(scrollAnimation);
                    onScrolling = false;
                }
            } else if (e.code === "KeyT") {
                e.preventDefault();
                changeTheme();
            } else if (e.code === "KeyM") {
                e.preventDefault();
                goLocation(main, 1000);
            } else if (lastKey === "Control") {
                if (e.key === "/") {
                    e.preventDefault();
                    let t = 0;
                    if (shortcutPop.classList.contains("active")) {
                        t = trans;
                    }
                    shortcutDef(t);
                }
            } else {
                let xywh = main.getBoundingClientRect();
                //function work only if the user in the main page
                if (Math.abs(xywh.y) + topnavH < xywh.height) {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        generateDef();
                    } else if (e.code === "Tab") {
                        e.preventDefault();
                        main.classList.toggle("active");
                    } else {
                        let settingsBtnLetters = "nlusa";
                        for (let i = 0; i < settingsBtnLetters.length; i++) {
                            if (e.key.toLowerCase() === settingsBtnLetters[i]) {
                                main.classList.add("active");
                                settingsBtn[i].click();
                                break;
                            }
                        }
                    }
                }
            }
            lastKey = e.key;
        }
    },
    false
);
shortcutsClose.onclick = function () {
    shortcuts.classList.remove("active");
};
//add a shortcut session when you click [i got it]
for (let i = 0; i < shortcutPopBtn.length; i++) {
    shortcutPopBtn[i].onclick = function () {
        shortcutDef(trans);
        if (i === 1) {
            localStorage.setItem("shortcutsPasswordGenerator", true);
        }
    };
}
//change between shortcuts sections
for (let i = 0; i < sectionsBtn.length; i++) {
    sectionsBtn[i].onclick = function () {
        sectionsBtn[i].classList.add("active");
        sections[i].classList.add("active");
        for (let j = 0; j < sectionsBtn.length; j++) {
            if (j !== i) {
                sectionsBtn[j].classList.remove("active");
                sections[j].classList.remove("active");
            }
        }
    };
}
