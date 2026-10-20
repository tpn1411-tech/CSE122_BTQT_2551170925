
const form = document.getElementById("register-form");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent = "Đăng ký thành công!";
    message.style.color = "green";
});

form.addEventListener("reset", function () {
    message.textContent = "";
});
