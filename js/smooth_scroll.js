const scrollDown = document.getElementById('title__scroll__down');
const scrollStart = document.getElementById('slider__item__start');
const scrollToFirst = document.getElementById('slider__item__01');
const scrollToSecond = document.getElementById('slider__item__02');
const scrollToThird = document.getElementById('slider__item__03');
const stepFirst = document.getElementById('step__item__1');
const stepSecond = document.getElementById('step__item__2');
const stepThird = document.getElementById('step__item__3');
const active = document.getElementById('slider__active');

window.addEventListener('click', handleButtonClick);
window.addEventListener('scroll', handleScroll);

function handleButtonClick(event) {
    const { target } = event;
    if (target === scrollDown || target === scrollToFirst) {
        stepFirst.scrollIntoView({ block: "center", behavior: "smooth" });
        active.style.top = '60px';
    };
    if (target === scrollStart) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        active.style.top = '0';
    };
    if (target === scrollToSecond) {
        stepSecond.scrollIntoView({ block: "center", behavior: "smooth" });
        active.style.top = '120px';
    };
    if (target === scrollToThird) {
        stepThird.scrollIntoView({ block: "center", behavior: "smooth" });
        active.style.top = '200px';
    };
};

function handleScroll() {
    if (window.scrollY <= 835) {
        active.style.top = '0';
    };
    if (window.scrollY >= 835) {
        active.style.top = '60px';
    };
    if (window.scrollY >= 1670) {
        active.style.top = '120px';
    };
    if (window.scrollY >= 2505) {
        active.style.top = '200px';
    };
};