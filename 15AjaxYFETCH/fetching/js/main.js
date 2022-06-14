programarMenuInicial();

const mainContainer = document.getElementById("appContainer");

function programarMenuInicial() {

   programarBotonAdmin();
   programarBotonPreview();

}

function programarBotonPreview() {
   const btn = document.getElementById("ver")
   btn.addEventListener("click", () => {

      cargarPosts();
   })
}

function cargarPosts() {
   fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => mostrarDatos(json))
      .catch(() => alert("intente de nuevo"))
}

function mostrarDatos(data) {
   const div = document.getElementById("appContainer");
   div.innerText = "";
   data.forEach(blogPost => {

      const { title, body, id } = blogPost

      const divPost = document.createElement("div");
      divPost.innerHTML = `<h2>${title}</h2>
                          <p>
                           ${body}
                          </p>
                          <hr />
      `
      const btn = document.createElement("button")
      btn.innerText = "Ver más..."
      btn.addEventListener("click", () =>

         cargarPost(id)

      );
      divPost.appendChild(btn);
      div.appendChild(divPost)

   })
}

function programarBotonAdmin() {

   const btn = document.getElementById("admin")
   btn.addEventListener("click", () => {

      agregarPost();
   })

}

function agregarPost() {
   let title = prompt("Ingrese el titulo")
   let contenido = prompt("Ingrese el contenido")

   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
         title: title,
         body: contenido,
         userId: 1,
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   })
      .then((response) => response.json())
      .then(() => alert("POST INSERTADO CORRECTAMENTE"));


}


async function cargarPost(id) {

   try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      let json = await response.json();
      mostrarPost(json)
   }
   catch{
      alert("OCURRIO UN ERROR");
   }

   /*
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => mostrarPost(json))
   */

}


function mostrarPost(post) {

   const { title, body } = post;

   const div = document.getElementById("appContainer");
   div.innerText = "";
   const divPost = document.createElement("div");
   divPost.innerHTML = `<h1>${title}</h1>
                      <p>${body}</p>`

   div.appendChild(divPost);
}