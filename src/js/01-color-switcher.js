
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', changeBackgroundColor);
btnStop.addEventListener('click', stopChangingColor);


function changeBackgroundColor() {
   intervalId = setInterval(()=>{
    document.body.style.backgroundColor = getRandomHexColor();
   }, 1000);
   btnStart.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function stopChangingColor() {
    clearInterval(intervalId);
    btnStart.disabled = false;
  }


