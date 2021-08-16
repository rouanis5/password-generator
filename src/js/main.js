import { wordMap as words } from "./words";
let tabletWidth = "900px";
let questions = document.querySelectorAll(".faqs .question input");
let answers = document.querySelectorAll(".faqs li");

let profile = document.querySelector(".aboutUs .profile");
let profile_public = document.querySelector(".aboutUs .profile .public");

let themePasswordGenerator = localStorage.getItem("themePasswordGenerator");

let feature_card = document.querySelectorAll(".features .card");

let topnavLinks = document.querySelectorAll(".topnav .links a");

let settingsBtn = document.querySelectorAll(".settings ul li.button");
let pTop = 68;

let minPlus = document.querySelectorAll(".settings .select button");

let footerNavLinks = document.querySelectorAll("#footerNav a");

let screen = document.getElementById("screen");
let isAllowed = false;
let Is_changed = true;
let charList = "";

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

//function to copy to the clipboard
function copyTextDef(copyText) {
    if (isAllowed) {
        let tmp = copyText.value;
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99); // For mobile devices
        //Copy the text inside the text field
        document.execCommand("copy");
        //remove selection
        window.getSelection().removeAllRanges();
        //add a feedback message
        copyText.value = "copied successfully 💪💪";
        copyText.classList.toggle("copied");
        setTimeout(function () {
            copyText.value = tmp;
            copyText.classList.toggle("copied");
        }, 700);
    }
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
        Is_changed = true;
    };
}
showSettings.onclick = function () {
    // main.classList.value = "parent active";
    main.classList.toggle("active");
};
closeSettings.onclick = function () {
    main.classList.remove("active");
};
for (let i = 0; i < minPlus.length; i++) {
    minPlus[i].onclick = function () {
        let op = minPlus[i].getAttribute("data-op");
        let num = passLength.textContent;
        let result = parseInt(num) + parseInt(op);
        if (result >= 6 && result <= 99) passLength.textContent = result;
    };
}
//footer navigation
for (let i = 0; i < footerNavLinks.length; i++) {
    footerNavLinks[i].onclick = function () {
        goLocation(this);
    };
}

//generator
let password = "";
let passwordLength = 12;
let characters = [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "!@#$%^&*_-+=",
    "{}[]()/\\'\"`~,;:.<>",
];

generate.onclick = function () {
    password = "";
    passLengthInt = parseInt(passLength.textContent);
    if (Is_changed) {
        charList = "";
        for (let i = 0; i < settingsBtn.length; i++) {
            if (settingsBtn[i].classList.contains("active")) {
                charList += characters[i];
            }
        }
        Is_changed = false;
    }
    if (charList !== "") {
        for (let i = 0; i < passLengthInt; i++) {
            password += charList[Math.round(Math.random() * (charList.length - 1))];
        }
        isAllowed = true;
    } else {
        password = "Click the settings button below";
        isAllowed = false;
    }
    screen.value = password;
    if (isAllowed) {
        let sentence = "";
        let noLetters = true;
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
            remember.classList.remove("red");
            remember.value = sentence;
        } else {
            remember.classList.add("red");
            remember.value = "There is no letter in the password";
        }
    } else {
        remember.classList.remove("active");
    }
};
copyScreen.onclick = function () {
    copyTextDef(screen);
};
copySentence.onclick = function () {
    copyTextDef(remember);
};
