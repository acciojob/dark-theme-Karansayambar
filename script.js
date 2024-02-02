//your code here
document.addEventListener("DOMContentLoaded", function () {
  const appElement = document.getElementById("app");
  const swapButton = document.getElementById("swap");

  swapButton.addEventListener("click", swapTheme);

  function swapTheme() {
    appElement.classList.toggle("day");
    appElement.classList.toggle("night");
    
    swapButton.classList.toggle("button_day");
    swapButton.classList.toggle("button_night");
  }
});

