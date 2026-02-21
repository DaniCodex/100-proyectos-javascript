const containerProductos = document.querySelector(".container-productos");
const carritoBtn = document.getElementById("carrito-logo");
const productsToBuy = document.querySelector(".products-to-buy");

carritoBtn.addEventListener("click", () => {
  productsToBuy.classList.toggle("active");
})

const productos = [
  {
    id: 1,
    nombre: "Auriculares Gamer",
    precio: 150,
    imagen: "img/auriculares.webp",
  },
  {
    id: 2,
    nombre: "Teclado Mecánico",
    precio: 320,
    imagen: "img/teclado-mecanico.webp",
  },
  {
    id: 3,
    nombre: "Monitor 24 Pulgadas",
    precio: 800,
    imagen: "img/monitor.png",
  },
  {
    id: 4,
    nombre: "Mouse RGB",
    precio: 90,
    imagen: "img/mouse.jpg",
  },
];

let carrito = [];
pintarHTML(productos, containerProductos);
function pintarHTML(productos,container) {
  productos.forEach(card => {
    const cardContainer = document.createElement("div");
    const img = document.createElement("img");
    const descripcion = document.createElement("div");
    const h3 = document.createElement("h3");
    const precio = document.createElement("p");
    const button = document.createElement("button");
    
    cardContainer.classList.add("card");
    container.appendChild(cardContainer);
    img.src = card.imagen;
    cardContainer.appendChild(img)
    cardContainer.appendChild(descripcion);
    descripcion.classList.add("descripcion");
    descripcion.appendChild(h3);
    h3.textContent = card.nombre;
    precio.innerHTML = `Precio: ${card.precio}`
    descripcion.appendChild(precio);
    button.classList.add("btn-agregar");
    button.id = card.id;
    descripcion.appendChild(button);
    button.textContent = "Agregar al carrito";
  });
}

const btnAddCar = document.querySelectorAll(".btn-agregar");

agregarProducto()
function agregarProducto() {
  btnAddCar.forEach(card => {
    card.addEventListener("click", (e) => {
      const idProducto = parseInt(e.target.id);

      const productoOriginal = productos.find(item => item.id === idProducto);
      const existeEnCarrito = carrito.some(item => item.id === idProducto);
      if (existeEnCarrito) {
        carrito = carrito.map(item => {
          if (item.id === idProducto) {
            return {
              ...item,cantidad:item.cantidad + 1,subtotal: (item.cantidad + 1) * item.precio
            }
          }
          return item;
        })
      } else {
        const nuevoProducto = {...productoOriginal,cantidad:1,subtotal: productoOriginal.precio}
        carrito.push(nuevoProducto);
      }
      showProducts()
    });
  });
}

function showProducts() {
  productsToBuy.replaceChildren();
  
  carrito.forEach(card=> {
    const cardContainer = document.createElement("div");
    const img = document.createElement("img");
    const descripcion = document.createElement("div");
    const h3 = document.createElement("h3");
    const precio = document.createElement("p");
    const cantidad = document.createElement("p");

    cardContainer.classList.add("card");
    productsToBuy.appendChild(cardContainer);
    img.src = card.imagen;
    cardContainer.appendChild(img)
    cardContainer.appendChild(descripcion);
    descripcion.classList.add("descripcion");
    descripcion.appendChild(h3);
    h3.textContent = card.nombre;
    precio.innerHTML = `Precio: ${card.subtotal || card.precio}`
    descripcion.appendChild(precio);
    descripcion.appendChild(cantidad);
    card.cantidad = card.cantidad || 1;
    cantidad.innerHTML = `Cantidad: <span>${card.cantidad}</span>`;
    
  });
  const totalToPay = carrito.reduce((acc,item) => acc + item.subtotal, 0)
  const h3 = document.createElement("h3");
  h3.innerHTML =  `Total a pagar: <span>${totalToPay}</span>`;
  productsToBuy.appendChild(h3)
}





