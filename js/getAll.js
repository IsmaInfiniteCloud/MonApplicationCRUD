async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const postsContainer = document.getElementById("posts");

    data.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postsContainer.appendChild(postDiv);
    });
  }
  getPosts(); // Appel de la fonction pour afficher les posts lors du chargement de la page.