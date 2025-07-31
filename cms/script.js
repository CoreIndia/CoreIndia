document.getElementById('cmsForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const title = formData.get('title');
  const beat = formData.get('beat');
  const videoUrl = formData.get('videoUrl');
  const slug = formData.get('slug');
  const imageUrlInput = formData.get('imageUrl');
  const content = formData.get('content');
  const imageFile = formData.get('imageUpload');

  let finalImageUrl = imageUrlInput;

  // If file uploaded, upload to Apps Script
  if (imageFile && imageFile.name) {
    const uploadForm = new FormData();
    uploadForm.append('imageUpload', imageFile);

    try {
      const uploadRes = await fetch('YOUR_DEPLOYED_WEB_APP_URL', {
        method: 'POST',
        body: uploadForm
      });

      const uploadData = await uploadRes.json();
      if (uploadData.imageUrl) {
        finalImageUrl = uploadData.imageUrl;
      } else {
        alert('Image upload failed.');
        return;
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading image.');
      return;
    }
  }

  // Send final article data
  const articleData = {
    title,
    beat,
    videoUrl,
    slug,
    imageUrl: finalImageUrl,
    content
  };

  try {
    const response = await fetch('AKfycby9Q82zbJoPT6h2GtoISRB-qOzxuE-7CACTc2I4cquplF-bHBdr3JeXg1-1WykZ1oIzIQ', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(articleData)
    });

    const result = await response.json();
    if (result.success) {
      alert('✅ Article published successfully!');
      form.reset();
    } else {
      alert('❌ Failed to publish article.');
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong!');
  }
});
