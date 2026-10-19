const dateForm = document.getElementById("date-form");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const displayDay = document.getElementById("display-day");
const displayMonth = document.getElementById("display-month");
const displayYear = document.getElementById("display-year");
const displayWeekday = document.getElementById("display-weekday");
const greeting = document.getElementById("greeting");
const errorMessage = document.getElementById("error-message");

function printCalendar() {
    const day = Number(dayInput.value);
    const month = Number(monthInput.value);
    const year = Number(yearInput.value);

    if (!dayInput.value || !monthInput.value || !yearInput.value ||
        day < 1 || month < 1 || month > 12 || year < 1) {
        errorMessage.textContent = "Vui lòng nhập ngày tháng năm hợp lệ!";
        return;
    }

    const date = new Date(year, month - 1, day);

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        errorMessage.textContent = "Ngày tháng năm không hợp lệ!";
        return;
    }

    const weekdays = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];

    displayYear.textContent = year;
    displayMonth.textContent = "Tháng " + month;
    displayDay.textContent = day;
    displayWeekday.textContent = weekdays[date.getDay()];

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        greeting.textContent = "Chào buổi sáng!";
    } else if (hour >= 12 && hour < 18) {
        greeting.textContent = "Chào buổi chiều!";
    } else {
        greeting.textContent = "Chào buổi tối!";
    }
    errorMessage.textContent = "";
}

dateForm.addEventListener("submit", function(event) {
    event.preventDefault();
    printCalendar();
});

printCalendar();
