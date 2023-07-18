const scrollDown = document.getElementById('hero__title_scroll_down');
const scrollStart = document.getElementById('hero__slider_item_start');
const scrollToFirst = document.getElementById('hero__slider_item_01');
const scrollToSecond = document.getElementById('hero__slider_item_02');
const scrollToThird = document.getElementById('hero__slider_item_03');
const stepFirst = document.getElementById('step__item_1');
const stepSecond = document.getElementById('step__item_2');
const stepThird = document.getElementById('step__item_3');
const active = document.getElementById('hero__slider_active');

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
    if (window.scrollY < stepFirst.offsetTop) {
        active.style.top = '0';
    };
    if (window.scrollY >= stepFirst.offsetTop - 200) {
        active.style.top = '60px';
    };
    if (window.scrollY >= stepSecond.offsetTop - 200) {
        active.style.top = '120px';
    };
    if (window.scrollY >= stepThird.offsetTop - 200) {
        active.style.top = '200px';
    };
};