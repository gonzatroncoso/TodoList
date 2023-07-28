let formulario = document.getElementById("formulario")
let tarea = document.getElementById("tarea")
let btnAdd = document.getElementsByClassName("btn-add")
let btnBorrar = document.getElementsByClassName("btnBorrar")
const check = "fa-circle-check"
const uncheck = "fa-circle"
const lineaTachar = "line-through"

//CREADOR DE ID AUTOINCREMENTAL.
// Variable global para almacenar el último ID utilizado
let id = 0;

// Función para generar el próximo ID
function generateTaskId() {
  id++;
  return id;
}

let items = []

formulario.addEventListener("submit", validacion)

function validacion(e){
    e.preventDefault();
    if (tarea.value === "") {
        console.log(tarea.value);
        alert("Hay campos sin completar.")
        return
    }
    else{
        console.log("campos completos correctamente");
    }
  
    agregarTarea(false, false)
}

function agregarTarea(realizado, eliminado){
  limpiarLista()

  let tarea = document.getElementById("tarea").value;
  let nuevaTarea = {id, tarea, realizado:false, eliminado:false}
  items.push(nuevaTarea)
  generateTaskId()

    items.forEach( tarea => {
        if (eliminado) {
          return
        }

        let completo = realizado ? check : uncheck
        let linea = realizado ? lineaTachar : ""

        let listaTareas = document.createElement("li")
            listaTareas.innerHTML += `  
                                        <i class = "far ${completo}" data = "realizado"  id=${tarea.id}></i>
                                        <p class = "text ${linea}"> ${tarea.tarea}  </p> 
                                        <i class = "fas fa-trash de" data = "eliminado"  id=${tarea.id}></i>
                                      `
            listaOrden.appendChild(listaTareas)
            document.getElementById("tarea").value = "";
      })
    }

   


    listaOrden.addEventListener("click", function (e) {
      const elemento = e.target
      const elementoData = elemento.attributes.data.value
        if (elementoData == "realizado") {
          tareaRealizada(elemento)
        } else if (elementoData == "eliminado"){
          tareaEliminada(elemento)
        }
    })



function limpiarLista() {
  let divTarea = document.getElementById("listaOrden")
  while (divTarea.firstChild) {
    divTarea.removeChild(divTarea.firstChild)
  }
}

  function tareaRealizada(elemento) {
      elemento.classList.toggle(check)
      elemento.classList.toggle(uncheck)
      items[elemento.id].realizado = items[elemento.id].realizado ? false : true
    }

    function tareaEliminada(elemento) {
      elemento.parentNode.parentNode.removeChild(elemento.parentNode)
      let remove = elemento.id
      items.splice(remove, 1)
    }
