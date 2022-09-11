function initRoundedLetters(mainSelector, count, selector) {
  let $container = document.querySelector(`.${mainSelector}`);
  let letters = String($container.textContent.trim() + "   ").repeat(count).split("");
  let output = "";
  const minAngle = 360 / letters.length;
  letters.forEach((letter, id) => {
    let angle = Math.trunc(minAngle * id);
    output += `<span class="${selector}" style="transform: rotate(${angle}deg);">${letter}</span>`;
  });
  $container.innerHTML = output;
}

initRoundedLetters('round__text', 3, 'hero__letter');
initRoundedLetters('free__letters', 2, 'free__letter');
initRoundedLetters('trial__letters', 2, 'trial__letter');

function initTrainersRoundedLetters() {
  let container = document.querySelectorAll('.trainers__letters');
    container.forEach((elem, i) => {
    let letters = String(elem.textContent.trim() + "   ").repeat(2).split("");
    let output = "";
    const minAngle = 360 / letters.length;
    letters.forEach((letter, id) => {
    let angle = Math.trunc(minAngle * id);
    output += `<span class="trainers__letter" style="transform: rotate(${angle}deg);">${letter}</span>`;
  });
  container[i].innerHTML = output;
  });
}

initTrainersRoundedLetters();


