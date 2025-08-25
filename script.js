// Charger les articles depuis data.json
async function loadArticles() {
  const res = await fetch("data.json");
  const articles = await res.json();
  displayArticles(articles);

  // Filtres
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      if (category === "all") {
        displayArticles(articles);
      } else {
        const filtered = articles.filter(a => a.category === category);
        displayArticles(filtered);
      }
    });
  });
}

// Affichage des articles
function displayArticles(list) {
  const container = document.getElementById("articles");
  container.innerHTML = "";
  list.forEach(article => {
    container.innerHTML += `
      <article class="post ${article.category}">
        <h2>${article.title}</h2>
        <p class="meta">${article.date} • ${article.views} vues</p>
        <p>${article.excerpt}</p>
        <a href="#">Lire la suite</a>
      </article>
    `;
  });
}

// Newsletter
document.getElementById("newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("newsletterMsg").textContent =
    "Merci ! Vous êtes inscrit à la newsletter 🚀";
});

loadArticles();
