const cakes = [
  "Screenshot 2026-11-11 211350.png",
  "Screenshot 2026-11-11 211426.png",
  "Screenshot 2026-11-11 211450.png",
  "Screenshot 2026-11-11 211506.png",
  "Screenshot 2026-11-11 211537.png",
  "Screenshot 2026-11-11 211600.png",
  "Screenshot 2026-11-11 211613.png",
  "Screenshot 2026-11-11 211629.png",
  "Screenshot 2026-11-11 211701.png",
  "Screenshot 2026-11-11 211718.png",
  "Screenshot 2026-11-11 211742.png",
];
document.querySelectorAll(".photos img").forEach((photo, index) =>
  photo.animate(
    [
      { opacity: 0, transform: "translateY(45px)" },
      { opacity: 1, transform: "none" },
    ],
    { duration: 650, delay: index * 180, fill: "forwards", easing: "ease-out" },
  ),
);
document.body.insertAdjacentHTML(
  "beforeend",
  `<section class="cake-diary"><p>EL DIARIO DE PASTELES — CADA HORNEADO TIENE UNA HISTORIA</p><div>${cakes.map((image, i) => `<button data-image="${image}"><img src="assets/${image}" alt="Pastel de Dayi's Sweet ${i + 1}"><span>♡</span></button>`).join("")}</div></section><dialog><button class="close">×</button><p class="tag">TIENES MUY BUEN GUSTO</p><h2>Hagamos tu pastel.</h2><p>Comparte tu ocasión, sabor y fecha con Dayi's Sweet por Instagram.</p><a href="https://www.instagram.com/cakes_bydayi/" target="_blank">MENSAJE A DAYI'S SWEET ↗</a></dialog>`,
);
const orderButton = document.querySelector("main button");
orderButton.addEventListener("mouseenter", () => {
  orderButton.textContent = "¡HAGÁMOSLO DULCE!";
});
orderButton.addEventListener("mouseleave", () => {
  orderButton.textContent = "COMIENZA TU PEDIDO →";
});
orderButton.addEventListener("click", () =>
  document.querySelector("dialog").showModal(),
);
document
  .querySelector(".close")
  .addEventListener("click", () => document.querySelector("dialog").close());
document.querySelectorAll(".cake-diary button").forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelector(".p2").src = `assets/${button.dataset.image}`;
    document.querySelector("main").scrollIntoView({ behavior: "smooth" });
  }),
);
