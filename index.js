const pizzas = [
  {
    id: 1,
    nombre: "PIZZA MUZZARELLA",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "PIZZA DE CEBOLLA",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "PIZZA 4 QUESOS",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "PIZZA ESPECIAL",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "PIZZA DE ANANA",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const LS_DATOS = "LS_DATOS";
const contenedor = document.querySelector(".contenedor");
const inputNumber = document.querySelector("#input-number");
const contenedorError = document.querySelector(".contenedor-error");


const error = (msj) => {

  contenedor.innerHTML = "";

  inputNumber.classList.add("msj-error");

  contenedorError.innerHTML = "";
  
  const small = document.createElement("small");
  small.classList.add("msj-error");
  small.innerText = msj;

  contenedorError.appendChild(small);
}


const mostrarPizza = (pizza) => {   
  contenedor.innerHTML = "";

  const div = document.createElement("div");
      div.classList.add("contenedor-pizza");
        
      const h3 = document.createElement("h3");
      h3.classList.add("nombre-pizza");
      h3.innerText = pizza.nombre;
    
      const img = document.createElement("img");
      img.classList.add("imagen-pizza");
      img.src = pizza.imagen;
    
      const p = document.createElement("p");
      p.classList.add("precio-pizza");
      p.textContent = "$" + pizza.precio;

      const ingredientes = document.createElement("p");
      ingredientes.classList.add("ingredientes");
      ingredientes.innerText = `Ingredientes: ${pizza.ingredientes}.`;

      contenedor.appendChild(div);
      div.appendChild(h3);
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(ingredientes);

}

const buscarPizza = () => {

    let number = inputNumber.value;
    inputNumber.classList.remove("msj-error");
    contenedorError.innerHTML = "";

    if (number.trim() === ""){
      error("Ingresa un numero");
      return;
    }

    for (let i = 0; i < pizzas.length; i++) {
      const pizza = pizzas[i];
      if (pizza.id == number) {

        mostrarPizza(pizza);

            localStorage.setItem(LS_DATOS,JSON.stringify(pizza));
            return;
      }
    }
    
    error("Lo sentimos, no encontramos pizza con ese numero, por favor, intenta nuevamente ");

  
} 

init = () => {

  const pizzaString = localStorage.getItem(LS_DATOS);
  if(pizzaString !== null){
    const pizza = JSON.parse(pizzaString);
    mostrarPizza(pizza);
  }
  
}

init();
