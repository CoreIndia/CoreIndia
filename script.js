document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  document.getElementById("datetime").textContent = now.toLocaleString();
  // Weather is placeholder
  document.getElementById("weather").textContent = "☀️ 32°C New Delhi";
});
