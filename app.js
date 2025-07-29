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
