const btn = document.getElementById('btn');
const boxes = document.getElementById('boxes');

function createBoxes() {
  const big = boxes.classList.contains('big');
  const count = big ? 1 : 16;

  boxes.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const box = document.createElement('div');
    box.className = 'box';

    if (big) {
      box.style.backgroundPosition = '0px 0px';
    } else {
      const col = i % 4;
      const row = Math.floor(i / 4);
      box.style.backgroundPosition = `-${col * 150}px -${row * 150}px`;
    }

    boxes.appendChild(box);
  }
}

btn.addEventListener('click', () => {
  boxes.classList.toggle('big');
  createBoxes();
});

createBoxes();
