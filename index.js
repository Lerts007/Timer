const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let timer = setInterval(() => {
      let hour = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds - hour * 3600) / 60);
      let second = seconds % 60;

      hour = hour < 10 ? "0" + hour : hour;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      second = second < 10 ? "0" + second : second;

      timerEl.innerHTML = `${hour}:${minutes}:${second}`;

      if (seconds == 0) clearTimeout(timer);
      else seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
