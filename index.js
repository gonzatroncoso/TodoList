let formulario = document.getElementById("formulario")
let tarea = document.getElementById("tarea")
let btnAdd = document.getElementsByClassName("btn-add")
let btnBorrar = document.getElementsByClassName("btnBorrar")
const check = "fa-check-circle"
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
  let nuevaTarea = {id, tarea}
  items.push(nuevaTarea)
  console.log(items);
  generateTaskId()

  let completo = realizado ? false : {realizado : uncheck}
  console.log(completo);




    items.forEach( tarea => {
      let listaTareas = document.createElement("li")
      listaTareas.innerHTML += `  <i class = "far fa-circle co" data = "realizado"></i>
                                  <p> Tarea: ${tarea.tarea}  </p> 
                                  <i class = "fas fa-trash de" data = "eliminado"></i>
                                `
        listaOrden.appendChild(listaTareas)

        //solo creo el boton de eliminar. sin funcionalidad todavia.
        // btnEliminar()
        //Vacio el formulario 
        document.getElementById("tarea").value = "";
      })
    }



function limpiarLista() {
  let divTarea = document.getElementById("listaOrden")
  while (divTarea.firstChild) {
    divTarea.removeChild(divTarea.firstChild)
  }
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
