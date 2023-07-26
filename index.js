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
  // e.preventDefault();
  limpiarLista()

  let tarea = document.getElementById("tarea").value;
  let nuevaTarea = {id, tarea, realizado:false, eliminado:false}
  items.push(nuevaTarea)
  console.log(items);
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
     console.log(elementoData);

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
  console.log(items[elemento.id].realizado);
  items[elemento.id].realizado = items[elemento.id].realizado ? false : true
  console.log(items[elemento.id].realizado);
}

function tareaEliminada(elemento) {
  // elemento ? id : ""

  elemento.parentNode.parentNode.removeChild(elemento.parentNode)
  // items[elemento.id].eliminado = true
  console.log(elemento.id);

  let remove = elemento.id
  items.splice(remove, 1)
  // console.log(elemento.id);

  console.log(items);
}




// CREO BOTON DE ELIMINAR CADA VEZ QUE SE AGREGA UN PRODUCTO
// function btnEliminar() {
//   let btnEliminar = document.createElement("button")
//       btnEliminar.classList.add("btnEliminar")
//       btnEliminar.innerHTML = "Eliminar"
//       listaOrden.appendChild(btnEliminar)
// }





//https://www.youtube.com/watch?v=9N7iuyYnqpg

//https://www.youtube.com/watch?v=DEbNCqe2e2U
