const hourElement = document.querySelector('#hour'),
      minutesElement = document.querySelector('#minutes'),
      secondsElement = document.querySelector('#seconds'),
      amPmElement = document.querySelector('#ampm');

function updateClock() {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let secondes = new Date().getSeconds();
  let amPm = 'AM'

  if (hour > 12) {
    hour = hour - 12;
    amPm = "PM";
  }

  hourElement.innerText = hour;
  minutesElement.innerText = minutes;
  secondsElement.innerText = secondes;
  amPmElement.innerText = amPm;
  setTimeout(() => {
    updateClock();
  }, 1000)
}

updateClock();