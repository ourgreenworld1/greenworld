const openButtons = document.querySelectorAll(".open-popup-button");
const popups = document.querySelectorAll(".popup-overlay");
const closeButtons = document.querySelectorAll(".popup-close");

openButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    popups[index].style.display = "block";
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popups.forEach((popup) => {
      popup.style.display = "none";
    });
  });
});