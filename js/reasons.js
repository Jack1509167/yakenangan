const reasons = [
  "❤️ Karena senyummu selalu membuat hariku lebih baik",

  "❤️ Karena kamu selalu ada saat aku membutuhkan",

  "❤️ Karena perhatian kecilmu berarti besar",

  "❤️ Karena kamu membuatku merasa dihargai",

  "❤️ Karena kamu selalu mendukung impianku",

  "❤️ Karena tawamu menular",

  "❤️ Karena kamu sabar menghadapi aku",

  "❤️ Karena kamu membuatku nyaman",

  "❤️ Karena kamu unik",

  "❤️ Karena kamu spesial",

  "❤️ Karena kamu selalu berusaha",

  "❤️ Karena kamu membuatku bahagia",

  "❤️ Karena kamu menerima kekuranganku",

  "❤️ Karena kamu pengertian",

  "❤️ Karena kamu baik hati",

  "❤️ Karena kamu lucu",

  "❤️ Karena kamu membuat hidupku berwarna",

  "❤️ Karena kamu selalu jujur",

  "❤️ Karena kamu tulus",

  "❤️ Karena kamu adalah kamu",
];

const reasonText = document.getElementById("reasonText");

const button = document.getElementById("showReason");

button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * reasons.length);

  reasonText.style.opacity = 0;

  setTimeout(() => {
    reasonText.innerHTML = reasons[random];

    reasonText.style.opacity = 1;
  }, 300);
});
