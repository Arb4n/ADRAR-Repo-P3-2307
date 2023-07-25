const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/4519");
const buttons = document.getElementById("buyBtn");

buttons.forEach(buyBtn => {
  buyBtn.addEventListener("click", () => {
    audio.play();
  });
});
