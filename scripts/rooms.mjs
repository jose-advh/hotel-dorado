const contenedorHabitaciones = document.getElementById(
  "contenedorHabitaciones"
);
const modal = document.getElementById("modal-comodidades");
const cerrarModal = document.getElementById("cerrar-modal");
const listaComodidades = document.getElementById("lista-comodidades");
const checkboxes = document.querySelectorAll(".filtro-habitacion");
const botonFiltro = document.querySelector(".filter__bottom");

let habitaciones = [];

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const esMovil = window.innerWidth <= 768;

  const limite = esMovil ? window.innerHeight * 1.8 : window.innerHeight * 1.6;

  if (scrollY > limite) {
    botonFiltro.classList.remove("display-none");
  } else {
    botonFiltro.classList.add("display-none");
  }
});

// Cargar Habitaciones
async function cargarHabitaciones(nombresSeleccionados = []) {
  try {
    const response = await fetch("../rooms.json");

    if (!response.ok) {
      throw new Error(`Error al cargar las habitaciones. ${response.status}`);
    }

    habitaciones = await response.json();
    contenedorHabitaciones.innerHTML = "";

    // Filtrado si hay nombres seleccionados
    const habitacionesFiltradas =
      nombresSeleccionados.length === 0
        ? habitaciones
        : habitaciones.filter((room) =>
            nombresSeleccionados.includes(room.name)
          );

    habitacionesFiltradas.forEach((room, index) => {
      contenedorHabitaciones.innerHTML += `
        <article class="room">
          <img src="${room.ruta_img}" alt="Imagen de la habitación" class="room__img" />
          <section class="room__information">
            <h2 class="room_title">${room.name}</h2>
            <p>${room.description}</p>
            <article class="room__buttons">
              <button class="neon-pulse">Reservar</button>
              <button type="button" class="room__button" data-index="${index}">
                Comodidades
              </button>
            </article>
          </section>
        </article>
      `;
    });
  } catch (error) {
    console.error("Algo ha fallado", error);
  }
}

contenedorHabitaciones.addEventListener("click", (e) => {
  if (e.target.classList.contains("room__button")) {
    const index = e.target.dataset.index;
    const comodidades = habitaciones[index].comodidades;

    listaComodidades.innerHTML = "";
    comodidades.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      listaComodidades.appendChild(li);
    });

    modal.style.display = "flex";
  }
});

cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Acá checkboxes y recargar habitaciones

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const seleccionados = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    cargarHabitaciones(seleccionados);
  });
});

// Cargar habitaciones al iniciar
cargarHabitaciones();
