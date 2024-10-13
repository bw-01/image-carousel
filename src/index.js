import "./styles.css";

let xPos = 0;
let slideCount = 4;
const slideWidth = 200;

function next() {
  const slidesDiv = document.querySelector(".slides");
  xPos -= 200;
  if (xPos <= -(slideCount * slideWidth)) {
    xPos = 0;
  }
  slidesDiv.style.transform = `translateX(${xPos}px)`;
}

function previous() {
  const slidesDiv = document.querySelector(".slides");
  xPos += 200;
  if (xPos > 0) {
    xPos = -(slideWidth * (slideCount - 1));
  }
  slidesDiv.style.transform = `translateX(${xPos}px)`;
}

const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

leftButton.addEventListener("click", () => {
  previous();
});

rightButton.addEventListener("click", () => {
  next();
});
