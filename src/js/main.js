questions = document.querySelectorAll(".faqs .question input");
answers = document.querySelectorAll(".faqs li");

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
