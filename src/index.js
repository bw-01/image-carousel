import "./styles.css";

const imageWidthStyle = getComputedStyle(document.documentElement).getPropertyValue(
  "--image-width"
);
const slideWidth = parseInt(imageWidthStyle, 10);
let xPos = 0;
let slideCount = 4;
const interval = 5000;
let intervalID = setInterval(next, 5000);

function next() {
  xPos -= slideWidth;
  if (xPos <= -(slideCount * slideWidth)) {
    xPos = 0;
  }
  slidesDiv.style.transform = `translateX(${xPos}px)`;
  updateNavButton();
}

function previous() {
  xPos += slideWidth;
  if (xPos > 0) {
    xPos = -(slideWidth * (slideCount - 1));
  }
  slidesDiv.style.transform = `translateX(${xPos}px)`;
  updateNavButton();
}

function updateNavButton() {
  let index = Math.abs(xPos / slideWidth);

  navButtons.forEach((button) => button.classList.remove("active"));

  const activeButton = document.querySelector(`#btn${index + 1}`);
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

function resetInterval() {
  clearInterval(intervalID);
  intervalID = setInterval(next, interval);
}

const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

leftButton.addEventListener("click", () => {
  previous();
  resetInterval();
});

rightButton.addEventListener("click", () => {
  next();
  resetInterval();
});

const navButtons = document.querySelectorAll(".slider button");
const slidesDiv = document.querySelector(".slides");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {    
    const buttonID = button.id;
    const index = parseInt(buttonID.replace("btn", "")) - 1;

    xPos = -(slideWidth * index);
    slidesDiv.style.transform = `translateX(${xPos}px)`;

    updateNavButton();
    resetInterval();
  });
});

updateNavButton();

