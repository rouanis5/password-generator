let questions = document.querySelectorAll(".faqs .question input");
let answers = document.querySelectorAll(".faqs li");

let profile = document.querySelector(".aboutUs .profile");
let profile_public = document.querySelector(".aboutUs .profile .public");

let feature_card = document.querySelectorAll(".features .card");

function faq_answer(i) {
    for (let j = 0; j < questions.length; j++) {
        if (j === i) continue;
        answers[j].classList.remove("active");
    }
    answers[i].classList.toggle("active");
}
for (let i = 0; i < questions.length; i++) {
    questions[i].onclick = function () {
        faq_answer(i);
    };
}
profile_public.onclick = function () {
    profile.classList.toggle("active");
};

function show_card(i) {
    for (let j = 0; j < feature_card.length; j++) {
        if (j === i) continue;
        feature_card[j].classList.remove("active");
    }
    feature_card[i].classList.toggle("active");
}
for (let i = 0; i < feature_card.length; i++) {
    feature_card[i].onclick = function () {
        show_card(i);
    };
}
