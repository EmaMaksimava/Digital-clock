const hourElement = document.querySelector('#hour'),
      minutesElement = document.querySelector('#minutes'),
      secondsElement = document.querySelector('#seconds'),
      amPmElement = document.querySelector('#ampm');

const backgroundURL = document.querySelector('.digital-clock');

let index = 0;

const backgroundImages = ['https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
'https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'];

backgroundURL.style.background = `url(${backgroundImages[index]})`;
console.log(backgroundImages.length - 1);

function changeBanner(images, index) {
  if (index === (images.length -1)) {
    index = 0;
    backgroundURL.style.background = `url(${backgroundImages[index]})`
  }
  backgroundURL.style.background = `url(${images[index + 1]}`;
  index = index +1;
  console.log(index);
  setTimeout(() => {
    changeBanner(backgroundImages, index)
  }, 10000);

}

function updateClock() {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let secondes = new Date().getSeconds();
  let amPm = 'AM'

  if (hour > 12) {
    hour = hour - 12;
    amPm = "PM";
  }

  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  secondes = secondes < 10 ? '0' + secondes : secondes;

  hourElement.innerText = hour;
  minutesElement.innerText = minutes;
  secondsElement.innerText = secondes;
  amPmElement.innerText = amPm;
  setTimeout(() => {
    updateClock();
  }, 1000);

}

updateClock();
changeBanner(backgroundImages, index);