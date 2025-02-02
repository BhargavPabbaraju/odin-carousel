import { images } from "./images";
import "./styles.css";

function setActiveSlide(slideId) {
  renderSlides(slideId);
}

function renderCircle(slideId, isActive) {
  const circle = document.createElement("span");
  circle.classList.add("material-symbols-outlined");
  circle.classList.add("circle");
  circle.innerText = "fiber_manual_record";
  circle.addEventListener("click", () => setActiveSlide(slideId));
  if (isActive) {
    circle.classList.add("material-symbols-outlined-filled");
  }
  return circle;
}

function renderSlides(activeSlide = images[0].id) {
  const slides = document.getElementById("slides");
  const circles = document.getElementById("circles");
  slides.replaceChildren();
  circles.replaceChildren();
  images.map((image) => {
    const isActive = image.id == activeSlide;
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
    const circle = renderCircle(image.id, isActive);
    circles.appendChild(circle);
  });
}

renderSlides();
