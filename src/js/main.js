// add particles effect for the background
import "particles.js"
import particlesJson from "./particles.json"
particlesJS("particles-js", particlesJson)

// use external file for svg sprite
import "svgxuse"

//  web fonts
import WebFont from "webfontloader"
WebFont.load({
  google: {
    families: ["Montserrat:900", "Nunito Sans:200,400,700&&display=swap"]
  }
})

// apply parallax effect on intro section
import Parallax from "parallax-js"
const scene = document.querySelector(".intro__content")
const parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  pointerEvents: true
})
removeStyles()

function removeStyles() {
  // remove added unecessary styles from parallax-js
  const parallaxSection = document.querySelectorAll(".parallax-section")
  for (const section of parallaxSection) {
    section.style.removeProperty("display")
    section.style.removeProperty("top")
    section.style.removeProperty("left")
    section.style.removeProperty("position")
  }
}

// projects slider
import EmblaCarousel from "embla-carousel"
import { setupPrevNextBtns, disablePrevNextBtns } from "./prevAndNextButton"

const wrap = document.querySelector(".embla")
const viewPort = wrap.querySelector(".embla__viewport")
const prevBtn = wrap.querySelector(".embla__button--prev")
const nextBtn = wrap.querySelector(".embla__button--next")
const emblaOptions = { loop: true, startIndex: 1 }
const embla = EmblaCarousel(viewPort, emblaOptions)

const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla)
setupPrevNextBtns(prevBtn, nextBtn, embla)
embla.on("init", disablePrevAndNextBtns)
embla.on("select", disablePrevAndNextBtns)
