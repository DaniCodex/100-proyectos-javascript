let disminuir = document.querySelector(".disminuir");
let aumentar = document.querySelector(".aumentar");
let resetear = document.querySelector(".resetear");
let screen = document.getElementById("screen");

/*Primera Forma*/
/*let valor = 0;

aumentar.addEventListener("click", e => {
    funcionalidad('aumentar')
})


disminuir.addEventListener("click", e => {
    funcionalidad('disminuir')
})


resetear.addEventListener("click", e => {
    funcionalidad('resetear')
})

function funcionalidad(action) {
    switch (action) {
        case 'aumentar':
            valor += 1
            break;
        case 'disminuir':
            valor -= 1;
            break;
        case 'resetear':
            valor = 0;
            break;
        default:
            break;
    }
    
    if (valor > 0) {
        screen.style.color = 'green';
    } else if (valor < 0){
        screen.style.color = 'red';
    } else {
        screen.style.color = 'black'
    }
    screen.textContent = valor;
}*/

/*Segunda Forma*/

/*let btn = document.querySelectorAll(".btn");

btn.forEach((element) => {
  element.addEventListener("click", () => {
    funcionalidad(element.dataset.btn);
  });
});

let valor = 0;
function funcionalidad(accion) {
  switch (accion) {
    case "aumentar":
      valor += 1;
      break;
    case "disminuir":
      valor -= 1;
      break;
    case "resetear":
      valor = 0;
      break;
    default:
      break;
  }
   if (valor > 0) {
        screen.style.color = 'green';
    } else if (valor < 0){
        screen.style.color = 'red';
    } else {
        screen.style.color = 'black'
    }
    screen.textContent = valor;
}*/

/*Tercera Forma*/
let btn = document.querySelectorAll(".btn");
let valor = 0;

function actualizarPantalla() {
    screen.textContent = valor;
    if (valor > 0) screen.style.color = "green";
    else if (valor < 0) screen.style.color = "red";
    else screen.style.color = "black";
}

btn.forEach(element => {
    element.addEventListener("click", (e) => {
        let accion = e.currentTarget.dataset.btn;
        
        if (accion === "aumentar") valor++;
        if (accion === "disminuir") valor--;
        if (accion === "resetear") valor = 0;

        actualizarPantalla()
    })
});

