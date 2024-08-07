function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input[type="number"]')
const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  // boxes.innerHTML = '';
  let size = 30
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div)
    //   boxes.appendChild(div);
    size += 10;
  }
  boxes.innerHTML = '';
  boxes.appendChild(fragment);
}


buttonCreate.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  else {
    alert('Введіть число від 1 до 100')
  }
  input.value = '';
});

buttonDestroy.addEventListener('click', () => {
  boxes.innerHTML = '';
});