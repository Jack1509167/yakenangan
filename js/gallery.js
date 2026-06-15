const images = [
  {
    src: "../assets/img/foto1.png",
    caption: "Awal perkenalan kita ❤️",
  },

  {
    src: "../assets/img/foto2.png",
    caption: "Momen yang tidak terlupakan ❤️",
  },

  {
    src: "../assets/img/foto3.png",
    caption: "Selalu bahagia bersamamu ❤️",
  },

  {
    src: "../assets/img/foto4.png",
    caption: "Kenangan terindah ❤️",
  },
];

let currentIndex = 0;

const image = document.getElementById("galleryImage");

const caption = document.getElementById("caption");

function showImage() {
  image.src = images[currentIndex].src;

  caption.innerHTML = images[currentIndex].caption;
}

function nextImage() {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage();
}

function prevImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage();
}

/* AUTO SLIDE */

setInterval(nextImage, 4000);
