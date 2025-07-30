const quill = new Quill('#editor', {
  theme: 'snow'
});

// Preview Function
function previewArticle() {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const content = quill.root.innerHTML;

  document.getElementById("previewTitle").innerText = title;
  document.getElementById("previewCategory").innerText = category;
  document.getElementById("previewImage").src = imageUrl;
  document.getElementById("previewContent").innerHTML = content;
  document.getElementById("preview").style.display = "block";
}

// Submit Function
function submitArticle() {
  const title = document.getElementById("title").value.trim();
  const category = document.getElementById("category").value.trim();
  const imageUrl = document.getElementById("imageUrl").value.trim();
  const content = quill.root.innerHTML.trim();

  // Validate fields
  if (!title || !category || !imageUrl || !content) {
    alert("⚠️ Please fill in all fields before publishing.");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycby9Q82zbJoPT6h2GtoISRB-qOzxuE-7CACTc2I4cquplF-bHBdr3JeXg1-1WykZ1oIzIQ/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      category,
      imageUrl,
      content,
    }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === "Success") {
      alert("✅ Article Published Successfully!");
      window.location.reload();
    } else {
      alert("❌ Failed to publish. Server Error.");
      console.error(data.message || data);
    }
  })
  .catch(error => {
    alert("❌ Network Error. Could not submit article.");
    console.error("Error:", error);
  });
}
