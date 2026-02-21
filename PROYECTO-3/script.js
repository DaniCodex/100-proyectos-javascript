let btnAgregar = document.getElementById('agregar-btn');
let containerList = document.querySelector('.container-list');
let formulario = document.querySelector(".screen")

btnAgregar.addEventListener("click", validacion);

let tareas = [];
document.addEventListener("DOMContentLoaded", () => {
    let recuperar  = localStorage.getItem("tareas") || null;
    if (recuperar) {
        tareas = JSON.parse(recuperar);
        mostrarElementos()
    }
})



function validacion(e) {
    e.preventDefault();
    let tarea = document.getElementById('to-do-input').value;
    if (tarea === "") alert("Agrega una tarea");
    else agregarElementos(tarea)
}

function agregarElementos(tarea) {
    formulario.reset()
    const nuevaTarea = {
        id: Date.now(),
        tarea
    }
    tareas.push(nuevaTarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarElementos();
}

function mostrarElementos() {
    limpiarItem();
    tareas.forEach(element => {
        let li = document.createElement('li')
        let btnEliminar = document.createElement('button');
        li.textContent = element.tarea;
        btnEliminar.textContent = "Eliminar";
        containerList.appendChild(li);
        li.appendChild(btnEliminar)
        btnEliminar.onclick = () => eliminarTarea(element.id);
    });
}

function limpiarItem() {
  containerList.replaceChildren();
}

function eliminarTarea(idRecibido) {
    tareas = tareas.filter(t => t.id != idRecibido);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarElementos()
}

