const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `\u00A0${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}`
};

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();