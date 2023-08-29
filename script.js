// Add this JavaScript code to your existing script

document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll(".open-popup-button");
    const popupOverlays = document.querySelectorAll(".popup-overlay");
    const closeButtons = document.querySelectorAll(".popup-close");
  
    openButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        popupOverlays[index].classList.add("active");
      });
    });
  
    popupOverlays.forEach((overlay, index) => {
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
          overlay.classList.remove("active");
        }
      });
  
      closeButtons[index].addEventListener("click", () => {
        overlay.classList.remove("active");
      });
    });
  });
  