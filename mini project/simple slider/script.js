
const sliderElements = document.querySelectorAll(".slider-eliment");

let countElement = 1;

setInterval(() => {
    countElement++;

    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if (countElement > sliderElements.length)
    {
        sliderElements[0].classList.add("current");
        countElement = 1;
    }
    currentElement.nextElementSibling.classList.add("current");
}, 2000);