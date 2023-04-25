async function getUpdatedPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (id) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      const postContainer = document.getElementById("updatedPost");
      postContainer.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
    } else {
      alert("ID de post manquant.");
    }
  }

  getUpdatedPost(); // Appel de la fonction pour afficher le post mis à jour lors du chargement de la page.