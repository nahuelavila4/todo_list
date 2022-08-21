const input = document.querySelector(".inp");
const add = document.getElementById("butt");
const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio");

add.addEventListener("click", (e) => {
  e.preventDefault();
  const tarea = input.value;

  if (tarea !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = tarea;
    li.appendChild(p);
    li.appendChild(borrar());
    ul.appendChild(li);
    input.value = "";
 
    vacio.style.display = "none";
  } 
});

function borrar() {
  const boton_borrar = document.createElement("button");
  boton_borrar.textContent = "X";

  boton_borrar.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");
    if(items.length === 0){
        vacio.style.display = "block";
    }
  });
  return boton_borrar;
}
