
// Sample data fetch logic - Replace with actual Google Sheets fetch logic
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("news-container");

  const sampleArticles = [
    { title: "Operation Sindoor: India’s Bold Move", content: "External Affairs Minister S. Jaishankar announced...", category: "Politics", featured: "Yes", date: "2025-07-31" },
    { title: "Non-Featured News", content: "This won't show.", category: "Misc", featured: "No", date: "2025-07-30" }
  ];

  sampleArticles.forEach(article => {
    if (article.featured === "Yes") {
      const el = document.createElement("article");
      el.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p><small>${article.date}</small>`;
      container.appendChild(el);
    }
  });
});
