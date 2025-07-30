console.log('CoreIndia JS loaded');
<script>
  function updateDateTime() {
    const now = new Date();
    const dateTimeStr = now.toLocaleString("en-IN", {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    document.getElementById("datetime").textContent = dateTimeStr;
  }
  setInterval(updateDateTime, 1000);
  updateDateTime();
</script>
fetch("https://script.google.com/macros/s/AKfycby7D2_-U3sB49iKTvfh13WUhwTdX39_Y4AT7wPNg6VhcbF-KVFv3j7H63TbrNiaRu2t/exec")
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector(".main-content");
    data.forEach(article => {
      const div = document.createElement("div");
      div.classList.add("headline-card");
      div.innerHTML = `
        <img src="${article[3]}" alt="">
        <h2>${article[1]}</h2>
        <p>${article[4].substring(0, 100)}...</p>
      `;
      container.appendChild(div);
    });
  });
