const number = document.querySelector("#number");
const color = document.querySelector("#color");
const list = document.querySelector(".output__list");

number.addEventListener('input', () => {
  console.log(number.value);
  list.textContent = '';
  if (number.value != 0) {
    
    
    for (i=1; i<=number.value; i++) {
      var item = document.createElement('li');
      item.className = "output__item";
      item.id = i;
      item.textContent = i;
      list.appendChild(item);
  }
}

});

const isOdd = (value) => {
  if ((value%2) == 0) {console.log('true');return true} else {console.log('false'); return false};
};

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
};

let changed = false;

color.addEventListener('input', () => {
  const colorValue = color.value
  const items = document.querySelectorAll(".output__item");

  changed = !changed;

  items.forEach((currentValue,currentIndex) => {
  if (changed) {
    colorToApply = isOdd(currentIndex)? colorValue : '#fff';
  } else {
    colorToApply = !isOdd(currentIndex)? colorValue : '#fff';
  }

  colorTheBlock(currentValue, colorToApply);
});

  
});