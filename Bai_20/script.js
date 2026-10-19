const flower = document.getElementById("flower");
const buttons = document.querySelectorAll(".controls button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        flower.style.filter = "";
        flower.style.transform = "";
        flower.style.opacity = "1";

        const effect = button.dataset.effect;

        if (effect.includes("scaleX") || effect.includes("scaleY")) {
            flower.style.transform = effect;
        } else if (effect.includes("opacity")) {
            flower.style.opacity = effect.match(/[0-9.]+/)[0];
        } else {
            flower.style.filter = effect;
        }

        buttons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
    });
});
