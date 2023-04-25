const baseURL = "https://jsonplaceholder.typicode.com/posts";

// CREATE (POST)
async function createPost(title, body) {
  const response = await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();
  console.log("Post créé:", data);
}

// READ (GET)
async function getPosts() {
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log("Tous les posts:", data);
}

async function getPostById(id) {
  const response = await fetch(`${baseURL}/${id}`);
  const data = await response.json();
  console.log(`Post avec l'ID ${id}:`, data);
}

// UPDATE (PUT)
async function updatePost(id, title, body) {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();
  console.log("Post mis à jour:", data);
}

// DELETE
async function deletePost(id) {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  });

  if (response.status === 200) {
    console.log(`Post avec l'ID ${id} supprimé.`);
  } else {
    console.error("Erreur lors de la suppression du post.");
  }
}

// Exemple d'utilisation:
(async () => {
  await createPost("Nouveau post", "Ceci est un nouveau post.");
  await getPosts();
  await getPostById(1);
  await updatePost(1, "Post mis à jour", "Ceci est un post mis à jour.");
  await deletePost(1);
})();
