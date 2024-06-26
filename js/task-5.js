function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const body = document.querySelector('body');
  const button = document.querySelector('button.change-color');
  const spanCol = document.querySelector('span.color');

  
  button.addEventListener("click", (event) => {
    let value = getRandomHexColor();
    spanCol.textContent = value;
    body.style.backgroundColor = value;
  });