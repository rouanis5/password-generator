import { appearOptions, testObserver} from "./scrollAnim";
const statsNum = document.querySelectorAll("[data-goal]");
const increaseOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        setInterval(() => {
            if (parseInt(entry.target.textContent, 10) < parseInt(entry.target.getAttribute("data-goal"), 10)) {
                entry.target.textContent = parseInt(entry.target.textContent, 10) + 1;
            } else {
                clearInterval();
            }
        }, 20);
        increaseOnScroll.unobserve(entry.target);
    });
}, appearOptions);

statsNum.forEach((num) => {
    increaseOnScroll.observe(num);
});