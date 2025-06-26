const contenedorHabitaciones = document.getElementById(
  "contenedorHabitaciones"
);
const modal = document.getElementById("modal-comodidades");
const cerrarModal = document.getElementById("cerrar-modal");
const listaComodidades = document.getElementById("lista-comodidades");

let habitaciones = [];

// Cargar Habitaciones
async function cargarHabitaciones() {
  try {
    const response = await fetch("../rooms.json");

    if (!response.ok) {
      throw new Error(
        `Hubo un error al cargar las habitaciones. ${response.status}`
      );
    }

    habitaciones = await response.json();

    habitaciones.forEach((room, index) => {
      contenedorHabitaciones.innerHTML += `
        <article class="room">
          <img
            src="${room.ruta_img}"
            alt="Imagen de la habitación"
            class="room__img"
          />
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

// Cargar habitaciones al iniciar
cargarHabitaciones();
