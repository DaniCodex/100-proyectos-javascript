/*MI SOLUCIÓN*/
/*const btnColor = document.getElementById("change-color");

const digitos = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let colorHexadecimal = ""

function generarColorHexadecimal() {
    for (let i = 0; i <= 5; i++) {
        let aleatorio = Math.floor(Math.random() * digitos.length);
        colorHexadecimal = colorHexadecimal + digitos[aleatorio]
    }
    console.log(colorHexadecimal);
}


btnColor.addEventListener("click", e => {
    generarColorHexadecimal()
    document.body.style.backgroundColor = `#${colorHexadecimal}`;
    colorHexadecimal = ""
});*/

/*CODIGO REFACTORIZADO*/
const btnColor = document.getElementById("change-color");

const digitos = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


function generarColorHexadecimal() {
    let colorHexadecimal = ""
    for (let i = 0; i <= 5; i++) {
        let aleatorio = Math.floor(Math.random() * digitos.length);
        colorHexadecimal = colorHexadecimal + digitos[aleatorio]
    }
    return colorHexadecimal
}


btnColor.addEventListener("click", e => {
    const nuevoColor = generarColorHexadecimal()
    document.body.style.backgroundColor = `#${nuevoColor}`;
});