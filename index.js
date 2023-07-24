let formulario = document.getElementById("formulario")
let tarea = document.getElementById("tarea")
// let fecha = document.getElementById("fecha")
// let precioUnitario = document.getElementById("precioUnitario")
let btnAdd = document.getElementsByClassName("btn-add")
let btnBorrar = document.getElementsByClassName("btnBorrar")

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
  
    agregarTarea()
}

function agregarTarea(){
  // e.preventDefault();
  limpiarLista()

  
  
  let tarea = document.getElementById("tarea").value;
  // let fecha = document.getElementById("fecha").value;
  // let precioUnitario = document.getElementById("precioUnitario").value;
  
  let nuevaTarea = {id, tarea }
  
  items.push(nuevaTarea)
  console.log(items);
  
  //Vacio el formulario 
  document.getElementById("tarea").value = "";
  // document.getElementById("fecha").value = "";
  // document.getElementById("precioUnitario").value = "";

  generateTaskId()

    items.forEach( e =>{
      let listaTareas = document.createElement("li")
      
      listaTareas.innerHTML += `Tarea: ${e.tarea}  `
        listaOrden.appendChild(listaTareas)

        //solo creo el boton de eliminar. sin funcionalidad todavia.
        btnEliminar()

        //-------------------------------------------------- EDICION DE REGALOS ---------------------------------------------------
       
        
                //Vacio el formulario 
                    document.getElementById("tarea").value = "";
                    // document.getElementById("fecha").value = "";
                    // document.getElementById("precioUnitario").value = "";
                    
                    

      })
      

    }

    // -------------------------------------------------------------------------





function limpiarLista() {
  let divTarea = document.getElementById("listaOrden")
  while (divTarea.firstChild) {
    divTarea.removeChild(divTarea.firstChild)
  }
}

// CREO BOTON DE ELIMINAR CADA VEZ QUE SE AGREGA UN PRODUCTO
function btnEliminar() {
  let btnEliminar = document.createElement("button")
      btnEliminar.classList.add("btnEliminar")
      btnEliminar.innerHTML = "Eliminar"
      listaOrden.appendChild(btnEliminar)
}





//https://www.youtube.com/watch?v=9N7iuyYnqpg

//https://www.youtube.com/watch?v=DEbNCqe2e2U
