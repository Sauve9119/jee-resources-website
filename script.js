// Toggle show/hide subject resources
function toggleResources(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

// Filter resources using search input
function searchResources() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resources = document.querySelectorAll('.resources ul li');

  resources.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? 'list-item' : 'none';
  });
}

// Scroll to top button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById("darkModeBtn");
  btn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// Welcome message on first visit
window.onload = function () {
  if (!localStorage.getItem("visited")) {
    alert("🎓 Welcome to JEE Study Resources Website! All the best for your preparation! 🚀");
    localStorage.setItem("visited", "true");
  }
};
