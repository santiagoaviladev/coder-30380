
const btn = document.getElementById("enviar");

btn.addEventListener("click", () => {
    const inputName = document.getElementById("nombre");
    const valor = inputName.value;
    document.body.innerHTML=valor;
});