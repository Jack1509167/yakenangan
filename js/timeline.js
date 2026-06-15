const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;

        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.2,
  },
);

items.forEach((item) => {
  item.style.opacity = 0;

  item.style.transform = "translateY(50px)";

  item.style.transition = ".8s";

  observer.observe(item);
});
