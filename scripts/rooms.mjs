const contenedorHabitaciones = document.getElementById(
  "contenedorHabitaciones"
);

// Cargar Habitaciones

async function cargarHabitaciones() {
  try {
    const response = await fetch("../rooms.json");

    if (!response.ok) {
      throw new Error(
        `Hubo un error al cargar las habitaciones. ${response.status}`
      );
    }

    const habitaciones = await response.json();

    habitaciones.forEach((room, index) => {
      contenedorHabitaciones.innerHTML += `
    <article class="room">
            <img
                src="${room.ruta_img}"
                alt="Imagen de la habitación"
                class="room__img"
            />
            <section class="room__information">s
                <h2 class="room_title">${room.name}</h2>
                <p>
                    ${room.description}
                </p>
                <article class="room__buttons">
                <button class="neon-pulse">Reservar</button>
                <button type="button" class="room__button" value="${index}">
                    Comodidades
                </button>
                </article>
            </section>
        </article>
        `;

      const botones = document.querySelectorAll(".room__button");
      botones.forEach((boton) => {
        boton.addEventListener("click", () => {
          const valor = boton.value;
          contenidoModal.textContent = `Hello world ${valor}`;
        });
      });
    });
  } catch (error) {
    console.error("Algo ha fallado", error);
  }
}

cargarHabitaciones();
