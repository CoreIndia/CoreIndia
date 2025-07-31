// Toggle Sidebar (Hamburger Menu)
document.getElementById('menu-icon').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
});

// Toggle Beat Submenu
document.getElementById('beats-link').addEventListener('click', function () {
  const beatSubMenu = document.getElementById('beat-submenu');
  beatSubMenu.style.display = beatSubMenu.style.display === 'block' ? 'none' : 'block';
});

// Social Media Redirects
document.getElementById('twitter-link').addEventListener('click', () => {
  window.open('https://twitter.com/coreindia', '_blank');
});
document.getElementById('youtube-link').addEventListener('click', () => {
  window.open('https://youtube.com/coreindia', '_blank');
});
document.getElementById('facebook-link').addEventListener('click', () => {
  window.open('https://facebook.com/coreindia', '_blank');
});
document.getElementById('instagram-link').addEventListener('click', () => {
  window.open('https://instagram.com/coreindia', '_blank');
});

// Show Date and Time
function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString('en-IN', {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
  });
  const time = now.toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
  document.getElementById('date-time').textContent = `${date} | ${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Fetch Weather (New Delhi - You’ll need a real API key for production)
async function fetchWeather() {
  try {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m');
    const data = await res.json();
    const temp = data?.current?.temperature_2m;
    document.getElementById('weather').textContent = temp ? `${temp}°C, New Delhi` : 'Weather unavailable';
  } catch (e) {
    document.getElementById('weather').textContent = 'Weather unavailable';
  }
}
fetchWeather();
