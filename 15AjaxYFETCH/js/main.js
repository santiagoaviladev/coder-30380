programarMenuInicial();

const mainContainer = document.getElementById("appContainer");

function programarMenuInicial(){

   // programarBotonAdmin();
   programarBotonPreview();

}

function programarBotonPreview()
{
   const btn = document.getElementById("ver")
   btn.addEventListener("click", ()=>{
      cargarPosts();
   })
}

function cargarPosts()
{
   fetch("https://jsonplaceholder.typicode.com/posts/")
   .then((response)=>response.json())
   .then((json)=>mostrarDatos(json))
   .catch(()=>alert("intente de nuevo"))
}

function mostrarDatos(data)
{
   const div = document.getElementById("appContainer");
   data.forEach(blogPost=>{

      const {title, body} = blogPost

      const divPost = document.createElement("div");
      divPost.innerHTML=`<h2>${title}</h2>
                          <p>
                           ${body}
                          </p>
                          <hr />
      `
      div.appendChild(divPost)

   })
}