import { images } from "./images";
import "./styles.css";

function setActiveSlide(index) {
  state.activeIndex = index;
  renderSlides();
}

const state = {
  activeIndex: 0,
  images: images,
};

function renderCircle(index, isActive) {
  const circle = document.createElement("span");
  circle.classList.add("material-symbols-outlined");
  circle.classList.add("circle");
  circle.innerText = "fiber_manual_record";
  circle.addEventListener("click", () => setActiveSlide(index));
  if (isActive) {
    circle.classList.add("material-symbols-outlined-filled");
  }
  return circle;
}

function renderSlides() {
  const slides = document.getElementById("slides");
  const circles = document.getElementById("circles");
  slides.replaceChildren();
  circles.replaceChildren();
  state.images.map((image, index) => {
    const isActive = index == state.activeIndex;
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const title = document.createElement("h3");
    title.innerText = image.title;
    const img = document.createElement("img");
    img.src = image.source;
    img.alt = image.title;
    slide.appendChild(title);
    slide.appendChild(img);
    slides.appendChild(slide);

    if (!isActive) {
      slide.style.display = "none";
    }
    const circle = renderCircle(index, isActive);
    circles.appendChild(circle);
  });
}

function prev() {
  const prevIndex =
    state.activeIndex > 0 ? state.activeIndex - 1 : state.images.length - 1;
  state.activeIndex = prevIndex;
  renderSlides();
}
function next() {
  const nextIndex =
    state.activeIndex == state.images.length - 1 ? 0 : state.activeIndex + 1;
  state.activeIndex = nextIndex;
  renderSlides();
}

function initialRender() {
  renderSlides();
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  leftArrow.addEventListener("click", prev);
  rightArrow.addEventListener("click", next);
}

initialRender();

setInterval(next, 5000);
