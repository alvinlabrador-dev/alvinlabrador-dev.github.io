// add particles effect for the background
import "particles.js";
import particlesJson from "./particles.json";
particlesJS("particles-js", particlesJson);

// use external file for svg sprite
import "svgxuse";

//  web fonts
import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: ["Montserrat:900", "Nunito Sans:200,400,700&&display=swap"],
  },
});

// apply parallax effect on intro section
import Parallax from "parallax-js";
const scene = document.querySelector(".intro__content");
const parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  pointerEvents: true,
});
removeStyles();

function removeStyles() {
  // remove added unecessary styles from parallax-js
  const parallaxSection = document.querySelectorAll(".parallax-section");
  for (const section of parallaxSection) {
    section.style.removeProperty("display");
    section.style.removeProperty("top");
    section.style.removeProperty("left");
    section.style.removeProperty("position");
  }
}

// add glidejs for project's slider
import Glide from "@glidejs/glide";
const glide = new Glide(".glide");
glide.mount();
