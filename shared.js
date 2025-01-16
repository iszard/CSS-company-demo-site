var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButton = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", () => {
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
  });
}

var closeModal = () => {
  modal?.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
};

backdrop.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  closeModal();
});

modalNoButton?.addEventListener("click", closeModal);

toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});
