const envelope = document.getElementById("envelope");

const envelopePage = document.getElementById("envelopePage");

const letterPage = document.getElementById("letterPage");

const typingText = document.getElementById("typingText");

const nextGallery = document.getElementById("nextGallery");

/* =========================
   ISI SURAT
========================= */

const message = `

Hai Sayang ❤️

Terima kasih sudah hadir dalam hidupku.

Aku bersyukur bisa mengenal seseorang yang begitu baik, perhatian, dan selalu membuat hariku lebih berwarna.

Mungkin aku tidak selalu sempurna.

Mungkin aku juga sering membuatmu kesal.

Tapi percayalah...

Setiap hari aku selalu berusaha menjadi seseorang yang pantas untukmu.

Terima kasih sudah bertahan sejauh ini.

Terima kasih sudah menjadi bagian terindah dalam hidupku.

Aku sayang kamu hari ini,
besok,
dan seterusnya.

❤️
`;

/* =========================
   OPEN ENVELOPE
========================= */

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    envelopePage.style.display = "none";

    letterPage.style.display = "flex";

    startTyping();
  }, 1500);
});

/* =========================
   TYPE WRITER
========================= */

let index = 0;

function startTyping() {
  typingText.innerHTML = "";

  typeEffect();
}

function typeEffect() {
  if (index < message.length) {
    typingText.innerHTML += message.charAt(index);

    index++;

    setTimeout(typeEffect, 40);
  }
}

/* =========================
   NEXT PAGE
========================= */

nextGallery.addEventListener("click", () => {
  window.location.href = "pages/gallery.html";
});
