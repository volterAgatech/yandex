//catalog mainslider2
const windowSize = document.documentElement.clientWidth;
let slideToShowBig = 3;
let slideToScrollBig = 3;
let itemLeftBig;
if (windowSize <= 480) {
    slideToShowBig = 1;
    slideToScrollBig = 1;
}
let positonBig = 0;
let currentCount = 1;
const inerNumber = document.querySelectorAll(".current-slide");
const cotainerBig = document.querySelector(".participants__slider");
const trackBig = document.querySelector(".participants__wrapper");

const btnPrevBig = document.querySelectorAll(".prev-btn");
const btnNextBig = document.querySelectorAll(".next-btn");
const itemsBig = document.querySelectorAll(".participants__slide");
const itemCountBig = itemsBig.length;
const itemWidthBig = cotainerBig.clientWidth / slideToShowBig;
const movePostitonBig = slideToScrollBig * itemWidthBig;

const setPositionBig = () => {
    trackBig.style.transform = `translateX(${positonBig}px)`;
};
const checkBtnsBig = () => {
    btnPrevBig.disable = positonBig === 0;
    btnNextBig.disable =
        positonBig <= -(itemCountBig - slideToShowBig) * itemWidthBig;
};
itemsBig.forEach((element) => {
    element.style.minWidth = `${itemWidthBig}px`;
});

btnNextBig.forEach((element) => {
    element.addEventListener("click", () => {
        itemLeftBig =
            itemCountBig -
            (Math.abs(positonBig) + slideToShowBig * itemWidthBig) /
                itemWidthBig;
        positonBig -=
            itemLeftBig >= slideToScrollBig
                ? movePostitonBig
                : itemLeftBig * itemWidthBig;

        inerNumber.forEach((element) => {
            if (itemLeftBig > 0) {
                element.innerHTML = Number(element.innerHTML) + slideToShowBig;
            }
        });
        setPositionBig();
        checkBtnsBig();
    });
});
btnPrevBig.forEach((element) => {
    element.addEventListener("click", () => {
        itemLeftBig = Math.abs(positonBig) / itemWidthBig;
        positonBig +=
            itemLeftBig >= slideToScrollBig
                ? movePostitonBig
                : itemLeftBig * itemWidthBig;
        inerNumber.forEach((element) => {
            if (itemLeftBig > 0) {
                element.innerHTML = Number(element.innerHTML) - slideToShowBig;
            }
        });
        setPositionBig();
        checkBtnsBig();
    });
});

checkBtnsBig();
setInterval(() => {
    btnNextBig[0].click();
    console.log(itemLeftBig);
    if (itemLeftBig <= 0) {
        setTimeout(() => {
            inerNumber.forEach((element) => {
                element.innerHTML = slideToShowBig;
            });
            positonBig = itemWidth * 0;
            trackBig.style.transform = `translateX(${positonBig}px)`;
        }, 4000);
    }
}, 4000);
