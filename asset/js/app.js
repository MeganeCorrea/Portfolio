"use strcit"

// Récupérer les éléments HTML
const carrousel = document.querySelector(".carrousel");
const carrouselImages = document.querySelector(".carrousel-images");
const prevBtn = document.querySelector(".carrousel-prev");
const nextBtn = document.querySelector(".carrousel-next");

// Définir les variables
let position = 0;
const images = document.querySelectorAll(".carrousel-images img");
const imageWidth = images[0].clientWidth;

// Ajouter un événement de clic sur le bouton Précédent
prevBtn.addEventListener("click", () => {
  position += imageWidth;
  position = Math.min(position, 0);
  carrouselImages.style.transform = `translateX(${position}px)`;
});

// Ajouter un événement de clic sur le bouton Suivant
nextBtn.addEventListener("click", () => {
  position -= imageWidth;
  position = Math.max(position, -imageWidth * (images.length - 1));
  carrouselImages.style.transform = `translateX(${position}px)`;
});

