// 🕒 Show current date and time
function updateDateTime() {
  const now = new Date();
  const dateTimeStr = now.toLocaleString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("dateTime").textContent = dateTimeStr;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// 🌤️ Placeholder Weather
document.getElementById("weather").textContent = "☀️ 34°C, New Delhi";

// ☰ Toggle menu
document.querySelector(".menu-icon").addEventListener("click", () => {
  const menu = document.getElementById("menuDropdown");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// 🗂️ Beat filter
const beatButtons = document.querySelectorAll(".beats button");
const articleCards = document.querySelectorAll(".article-card");

beatButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const beat = button.getAttribute("data-beat");

    articleCards.forEach((card) => {
      if (beat === "all" || card.getAttribute("data-beat") === beat) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
