const contenedorHabitaciones = document.getElementById(
  "contenedorHabitaciones"
);
const modalComodidades = document.getElementById("modal-comodidades");
const botonCerrarModal = document.getElementById("cerrar-modal");
const contenedorReservas = document.getElementById("contenedorReservas");
const botonCerrarReserva = document.getElementById("cerrarReseva");
const listaComodidades = document.getElementById("lista-comodidades");
const checkboxes = document.querySelectorAll(".filtro-habitacion");
const botonFiltro = document.querySelector(".filter__bottom");

let habitaciones = [];

// === Mostrar u ocultar botón de filtro según scroll ===
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const esMovil = window.innerWidth <= 768;
  const limite = window.innerHeight * (esMovil ? 1.8 : 1.6);

  botonFiltro.classList.toggle("display-none", scrollY <= limite);
});

// === Cargar habitaciones desde JSON ===
async function cargarHabitaciones(nombresSeleccionados = []) {
  try {
    const response = await fetch("../rooms.json");
    if (!response.ok) {
      throw new Error(
        `Error al cargar habitaciones. Código: ${response.status}`
      );
    }

    habitaciones = await response.json();
    renderizarHabitaciones(nombresSeleccionados);
  } catch (error) {
    console.error("Error al cargar habitaciones:", error);
  }
}

// === Renderizar habitaciones filtradas o completas ===
function renderizarHabitaciones(nombresSeleccionados = []) {
  contenedorHabitaciones.innerHTML = "";

  const habitacionesFiltradas = nombresSeleccionados.length
    ? habitaciones.filter((habitacion) =>
        nombresSeleccionados.includes(habitacion.name)
      )
    : habitaciones;

  habitacionesFiltradas.forEach((habitacion, index) => {
    const habitacionElemento = document.createElement("article");
    habitacionElemento.className = "room";

    habitacionElemento.innerHTML = `
      <img src="${habitacion.ruta_img}" alt="Imagen de la habitación" class="room__img" />
      <section class="room__information">
        <h2 class="room_title">${habitacion.name}</h2>
        <p>${habitacion.description}</p>
        <article class="room__buttons">
          <button class="neon-pulse">Reservar</button>
          <button type="button" class="room__button" data-index="${index}">
            Comodidades
          </button>
        </article>
      </section>
    `;

    contenedorHabitaciones.appendChild(habitacionElemento);
  });
}

// === Mostrar comodidades en el modal ===
function mostrarComodidades(index) {
  const comodidades = habitaciones[index]?.comodidades || [];
  listaComodidades.innerHTML = "";

  comodidades.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listaComodidades.appendChild(li);
  });

  modalComodidades.style.display = "flex";
}

// === Eventos sobre las habitaciones ===
contenedorHabitaciones.addEventListener("click", (e) => {
  if (e.target.classList.contains("room__button")) {
    const index = parseInt(e.target.dataset.index, 10);
    mostrarComodidades(index);
  }

  if (e.target.classList.contains("neon-pulse")) {
    contenedorReservas.classList.remove("display-none");
  }
});

// === Cerrar modal de comodidades ===
botonCerrarModal.addEventListener("click", () => {
  modalComodidades.style.display = "none";
});

// === Cerrar panel de reservas ===
botonCerrarReserva.addEventListener("click", () => {
  contenedorReservas.classList.add("display-none");
});

// === Evento para filtrar habitaciones por checkboxes ===
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const seleccionados = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    cargarHabitaciones(seleccionados);
  });
});

// === Inicializar carga al inicio ===
cargarHabitaciones();
