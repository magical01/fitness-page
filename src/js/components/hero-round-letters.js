function initRoundedLetters() {
  let $container = document.querySelector(".round__text");
  let letters = String($container.textContent.trim() + "   ")
    .repeat(3)
    .split("");
  let output = "";
  const minAngle = 360 / letters.length;
  letters.forEach((letter, id) => {
    let angle = Math.trunc(minAngle * id);
    output += `<div class="hero__letter" style="transform: rotate(${angle}deg);">${letter}</div>`;
  });
  $container.innerHTML = output;
}

initRoundedLetters();
