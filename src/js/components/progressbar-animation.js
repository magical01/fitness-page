import * as circleAnimModule from "./circle-anim.js";

const selector = "[data-scroll=progressbar-animation]";
const MARGIN = 200;

function getElementOffset(element) {
  if (typeof element === "string") element = document.querySelector(element);
  const box = element.getBoundingClientRect();
  const body = document.body;
  const docEl = document.documentElement;
  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const clientTop = docEl.clientTop || body.clientTop || 0;
  const top = Math.round(box.top + scrollTop - clientTop);
  return top;
}

function getScroll() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function runAnimation() {
  const top = getElementOffset(selector);
  const scroll = getScroll();
  if (scroll > top - MARGIN) {
    // remove event listener
    removeEventListener("scroll", runAnimation);
    // run animation
    circleAnimModule.setProgress(100);
  }
}

export default function main() {
  window.addEventListener("scroll", runAnimation);
}
