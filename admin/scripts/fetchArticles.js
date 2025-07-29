const SHEET_URL = "YOUR_DEPLOYED_SCRIPT_URL";

async function loadArticles(category) {
  const res = await fetch(SHEET_URL);
  const data = await res.json();
  const filtered = category ? data.filter(a => a.Category === category) : data;
  const container = document.getElementById("articles");
  container.innerHTML = filtered.map(article => `
    <div class="article-card">
      <img src="${article.ImageURL}" />
      <h3>${article.Title}</h3>
      <p>${article.Content.slice(0, 100)}...</p>
    </div>
  `).join("");
}
