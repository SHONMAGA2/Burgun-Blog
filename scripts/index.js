const container = document.getElementById("cont-sect");

fetch("./post.json")
  .then(response => response.json())
  .then(posts => {
      posts.forEach(post => {
          const article = document.createElement("article");
          article.innerHTML = `
              <img src="${post.image}" alt="${post.title}" class="post-image">
              <h2>${post.title}</h2>
              <p><strong>By:</strong> ${post.posted_by} | <strong>Date:</strong> ${post.date}</p>
              <p>${post.content}</p>
          `;
          container.appendChild(article);
      });
  })
  .catch(error => console.error("Error parsing JSON:", error));