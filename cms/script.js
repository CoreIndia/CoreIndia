document.getElementById("articleForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    title: document.getElementById("title").value,
    beat: document.getElementById("beat").value,
    video: document.getElementById("video").value,
    slug: document.getElementById("slug").value,
    headline: document.getElementById("headline").value,
    content: document.getElementById("content").value,
    date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };

  fetch("AKfycby9Q82zbJoPT6h2GtoISRB-qOzxuE-7CACTc2I4cquplF-bHBdr3JeXg1-1WykZ1oIzIQ", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(() => {
    alert("Article submitted successfully!");
    document.getElementById("articleForm").reset();
  })
  .catch((error) => {
    console.error("Error:", error);
    alert("Failed to submit article. Please try again.");
  });
});
