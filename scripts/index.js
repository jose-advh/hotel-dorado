// Variables:
const lugares = document.getElementById("lugares");
const listaLugares = document.getElementById("listaLugares");
const iconMenuMobile = document.getElementById("iconMenuMobile");
const menuOverlay = document.getElementById("menuOverlay");
const iframe360 = document.getElementById("iframe360");
const buttonClose360 = document.getElementById("buttonClose360");
const abrirIframe360 = document.getElementById("abrirIframe360");
const listaDesplegable = document.querySelectorAll(".list__down");

// Funcionalidades
function mostrarLista() {
  if (listaLugares) listaLugares.classList.remove("display-none");
}

function ocultarListaSiNoHayHover() {
  setTimeout(() => {
    if (
      lugares &&
      listaLugares &&
      !lugares.matches(":hover") &&
      !listaLugares.matches(":hover")
    ) {
      listaLugares.classList.add("display-none");
    }
  }, 100);
}

if (lugares && listaLugares) {
  lugares.addEventListener("mouseenter", mostrarLista);
  lugares.addEventListener("mouseleave", ocultarListaSiNoHayHover);
  listaLugares.addEventListener("mouseleave", ocultarListaSiNoHayHover);
}

if (abrirIframe360 && iframe360 && buttonClose360) {
  abrirIframe360.addEventListener("click", () => {
    iframe360.classList.remove("display-none");
    buttonClose360.classList.remove("display-none");
  });

  buttonClose360.addEventListener("click", () => {
    iframe360.classList.add("display-none");
    buttonClose360.classList.add("display-none");
  });
}

if (iconMenuMobile && menuOverlay && listaDesplegable.length > 0) {
  iconMenuMobile.addEventListener("click", () => {
    menuOverlay.classList.toggle("active");
    listaDesplegable.forEach((lista) => {
      setTimeout(() => {
        lista.classList.toggle("display-none");
      }, 500);
    });
  });
}
