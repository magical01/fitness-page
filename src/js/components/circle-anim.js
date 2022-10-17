let circle;
let radius;
let circumference;

document.addEventListener("DOMContentLoaded", () => {
  circle = document?.querySelector(".reviews__progressbar");
  radius = circle?.r.baseVal.value;
  circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  setProgress(0);
});

export function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}
