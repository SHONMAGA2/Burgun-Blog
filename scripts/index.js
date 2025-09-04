const container = document.getElementById("cont-sect");

console.log("script loaded container",container);

fetch("./post.json")
.then(response => response.json())
.then(posts => {
    posts.forEach(post =>{
    const article= document.createElement("article");

    article.innerHTML = `<h2>${post.title}</h2>
    <p><strong>By:</strong> ${post.posted_by} |          <strong>Date:</strong> ${post.date}</p>

    <p>${post.content}</p>
    `;

container.appendChild(article);
});

})
.catch(error => console.error("Error parsing Json",error));