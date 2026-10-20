
const buttons = document.querySelectorAll(".detail-btn");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        modalTitle.textContent = button.dataset.title;
        modalDescription.textContent = button.dataset.description;
    });
});
