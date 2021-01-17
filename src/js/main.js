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

// contact section
const form = document.getElementById("contact-form")
const button = document.getElementById("contact_form_btn")
const status = document.getElementById("contact_form_status")
const btnText = "Send Message"

function success() {
  form.reset()
  button.disabled = true
  status.innerHTML = "Message Sent!"
  button.classList.remove("contact__form--btn--loading")
  button.innerHTML = btnText
}

function error() {
  status.innerHTML = "Oops! There was a problem."
  button.classList.remove("contact__form--btn--loading")
  button.innerHTML = btnText
}

form.addEventListener("submit", function (ev) {
  ev.preventDefault()
  const data = new FormData(form)
  button.classList.add("contact__form--btn--loading")
  button.innerHTML = "Loading..."
  status.innerHTML = ""
  ajax(form.method, form.action, data, success, error)
})

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.setRequestHeader("Accept", "application/json")
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType)
    } else {
      error(xhr.status, xhr.response, xhr.responseType)
    }
  }
  xhr.send(data)
}
