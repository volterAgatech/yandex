//catalog mainslider2
let positon = 0;
const slideToShow = 1;
const slideToScroll = 1;
const cotainer = document.querySelector(".mobil-container");
const track = document.querySelector(".mobil-tracker");

const btnPrev = document.querySelector(".simpleprev-btn");
const btnNext = document.querySelector(".simplenext-btn");
const items = document.querySelectorAll(".mobil-tracker li");
const itemCount = items.length;
const itemWidth = cotainer.clientWidth / slideToShow;
const movePostiton = slideToScroll * itemWidth;

const simpleButtons = document.querySelectorAll(".point-btn");
let positonTemp = 0;
//кнопки маленького простого слайдера
simpleButtons.forEach((e, i) => {
    e.addEventListener("click", () => {
        simpleButtons.forEach((e) => {
            e.classList.remove("active-point");
        });
        e.classList.add("active-point");
        positon = itemWidth * -i;
        track.style.transform = `translateX(${positon}px)`;
        positonTemp = itemWidth * i;
        checkBtns();
    });
});

items.forEach((element) => {
    element.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", () => {
    const itemLeft =
        itemCount - (Math.abs(positon) + slideToShow * itemWidth) / itemWidth;
    positon -= itemLeft >= slideToScroll ? movePostiton : itemLeft * itemWidth;

    simpleButtons.forEach((e) => {
        e.classList.remove("active-point");
    });
    if (itemLeft > 0) {
        simpleButtons[5 - itemLeft].classList.add("active-point");
    } else {
        simpleButtons[simpleButtons.length - 1].classList.add("active-point");
    }

    setPosition();
    checkBtns();
});
btnPrev.addEventListener("click", () => {
    const itemLeft = Math.abs(positon) / itemWidth;
    positon += itemLeft >= slideToScroll ? movePostiton : itemLeft * itemWidth;

    simpleButtons.forEach((e) => {
        e.classList.remove("active-point");
    });
    if (itemLeft > 0) {
        simpleButtons[itemLeft -1].classList.add("active-point");
    } else {
        simpleButtons[0].classList.add("active-point");
    }
    setPosition();
    checkBtns();
});
const setPosition = () => {
    track.style.transform = `translateX(${positon}px)`;
   
};
const checkBtns = () => {
    btnPrev.disable = positon === 0;
    btnPrev.disable ? btnPrev.classList.add('disable') : btnPrev.classList.remove('disable');
    btnNext.disable = positon <= -(itemCount - slideToShow) * itemWidth;
    btnNext.disable ? btnNext.classList.add('disable') : btnNext.classList.remove('disable');

};
checkBtns();
