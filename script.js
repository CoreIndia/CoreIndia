// 1. Date and Time (IST)
function updateDateTime() {
  const now = new Date();
  const datetimeElem = document.getElementById('datetime');
  datetimeElem.textContent = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
setInterval(updateDateTime, 1000);
updateDateTime();

// 2. Placeholder Weather for New Delhi
document.getElementById('weather').textContent = '🌤️ 34°C, New Delhi';

// 3. Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// 4. Filter Articles by Beat
const beatButtons = document.querySelectorAll('.beats button');
beatButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const beat = btn.dataset.beat;
    const articles = document.querySelectorAll('.article-box');
    articles.forEach(article => {
      if (beat === 'all' || article.dataset.beat === beat) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  });
});

// 5. Example: Load Latest News (You can replace with CMS-fetch later)
const latestNews = [
  { title: 'Government Approves New Bill', beat: 'Politics' },
  { title: 'Bollywood Star’s Movie Breaks Records', beat: 'Entertainment' },
  { title: 'India Wins Test Match', beat: 'Sports' },
  { title: 'Tech Startup Gets $50M Funding', beat: 'Technology' },
];

const newsContainer = document.getElementById('latestNews');
latestNews.forEach(news => {
  const box = document.createElement('div');
  box.className = 'article-box';
  box.dataset.beat = news.beat;
  box.innerHTML = `<h3>${news.title}</h3><small>${news.beat}</small>`;
  newsContainer.appendChild(box);
});

// 6. Headlines Example
const headlines = [
  'PM Visits Disaster-Hit State',
  'Stock Market Sees Record High',
  'Actor Reveals New Web Series',
  'Global Tech Conference Kicks Off in Delhi'
];
const headlinesList = document.getElementById('headlinesList');
headlines.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  headlinesList.appendChild(li);
});

// 7. Load Videos (example)
const videos = [
  'https://www.youtube.com/embed/6v2L2UGZJAM',
  'https://www.youtube.com/embed/nqye02H_H6I',
  'https://www.youtube.com/embed/O6Xo21L0ybE'
];
const videoGrid = document.getElementById('videoGrid');
videos.forEach(src => {
  const iframe = document.createElement('iframe');
  iframe.src = src;
  videoGrid.appendChild(iframe);
});

// 8. Subscription form (you can wire it to Google Sheets later)
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.email.value;
  alert(`Subscribed with ${email}`);
  this.reset();
});

// 9. Comments form
document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value;
  const message = this.message.value;
  alert(`Thanks for your comment, ${name}!\n\n"${message}"`);
  this.reset();
});
