const giftBox = document.getElementById("giftBox");

const surpriseContent = document.getElementById("surpriseContent");

giftBox.addEventListener("click", () => {
  giftBox.style.display = "none";

  surpriseContent.style.display = "block";

  startConfetti();
});
