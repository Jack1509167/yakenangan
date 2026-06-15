const openBtn = document.getElementById("openBtn");

const bgMusic = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
  document.getElementById("welcome").style.display = "none";

  document.getElementById("envelopePage").style.display = "flex";

  bgMusic.play();
});

/* HEARTS */

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.animationDuration = Math.random() * 4 + 3 + "s";

  document.getElementById("heart-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);
