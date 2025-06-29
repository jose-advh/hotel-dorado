function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = imageSrc;
  modal.style.display = "block";

  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";

  document.body.style.overflow = "auto";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

document.documentElement.style.scrollBehavior = "smooth";
