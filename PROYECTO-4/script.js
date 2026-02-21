const resultados = document.querySelector(".results");
const input = document.querySelector(".ciudad");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ciudad = input.value;

  if (ciudad == "") {
    alert("Ingrese una ciudad");
    return;
  }
  callApi(ciudad);
});

async function callApi(ciudad) {
  const apiKey = 'TU_API_KEY_AQUI';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    if (data.cod === "404") {
      alert("Ciudad no encontrada")
    } else {
      mostrarClima(data)
    }
  } catch (error) {
    console.log(error);
    alert("Hubo un error de conexion");
  }
}

function mostrarClima(data) {
  resultados.innerHTML = ""
  const {name,main:{temp,humidity},weather} = data;
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>Clima en ${name}</h2>
    <p>Temperatura: ${temp}°C</p>
    <p>Humedad: ${humidity}%</p>
    <p>Cielo: ${weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="icono clima">
  `;
  resultados.appendChild(div);
}
