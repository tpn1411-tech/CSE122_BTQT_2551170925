const toggleButton = document.getElementById("theme-toggle");
const statusText = document.getElementById("status");

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        statusText.textContent = "Đây là giao diện ở chế độ TỐI (đang bật).";
    } else {
        statusText.textContent = "Đây là giao diện ở chế độ SÁNG (đang bật).";
    }
});
