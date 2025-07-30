
const quill = new Quill('#editor', {
  theme: 'snow'
});

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

function submitArticle() {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const content = quill.root.innerHTML;

  fetch("https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec", {
    method: "POST",
    body: JSON.stringify({ title, category, imageUrl, content }),
    headers: { "Content-Type": "application/json" },
  })
  .then(res => res.json())
  .then(res => {
    alert("✅ Article Published Successfully!");
    window.location.reload();
  })
  .catch(err => {
    alert("❌ Failed to submit article");
    console.error(err);
  });
}
