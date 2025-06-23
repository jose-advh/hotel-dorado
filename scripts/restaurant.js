// Restaurante
const slides = document.querySelectorAll(".slider-section__slide");
const dots = document.querySelectorAll(".slider-section__dot");
const prev = document.querySelector(".slider-section__arrow--left");
const next = document.querySelector(".slider-section__arrow--right");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) =>
    slide.classList.remove("slider-section__slide--active")
  );
  dots.forEach((dot) => dot.classList.remove("slider-section__dot--active"));
  slides[index].classList.add("slider-section__slide--active");
  dots[index].classList.add("slider-section__dot--active");
}

next.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prev.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Menu
const menus = {
  restaurante1: {
    title: "FOOD WAVES",
    categories: [
      "Ceviches",
      "Pescados y Mariscos",
      "Pescados y Mariscos",
      "Arroces, Tostones, Sopas y Cremas",
      "Postres",
      "Bebidas con y sin licor",
      "Bebidas con y sin licor",
    ],
    pages: [
      [
        {
          title: "Ceviche Mixto Waves",
          desc: "Pesca blanca, camarones con cremoso nikkei, calamares fritos, maiz tostado, maiz criollo, plumas de cebolla roja, cilantro, chips de plátano.",
          price: "$46.900,-",
        },
        {
          title: "Ceviche apasionado",
          desc: "Pesca del día, reducción de maracuyá con especias y suero costeño, chalaca, aceite de cilantro, aguacate.",
          price: "$44.900,-",
        },
        {
          title: "Ceviche al rocoto",
          desc: "Pesca del día, mayonesa de rocoto, cebolla roja, cilantro, limón, chips de plátano (aji amarillo o tradicional a elecció).",
          price: "$46.900,-",
        },
        {
          title: "Coctel bomba camará",
          desc: "Camarones en salsa golf, criolla peruana.",
          price: "$39.900,-",
        },
        {
          title: "Ceviche encocado",
          desc: "Pesca del día, limón, leche de coco, cilantro, cebolla, maduritos y coco de alegria.",
          price: "$48.900,-",
        },
        {
          title: "Ceviche de pulpo al pesto",
          desc: "Láminas de pulpo, plumas de cebolla, limón, suero costeño y criolla peruana.",
          price: "$69.900,-",
        },
        {
          title: "Del pacífico al josper",
          desc: "Pesca del día al josper, arroz cremoso de aji amarillo, criollitas de cebollas.",
          price: "$79.900,-",
        },
      ],
      [
        {
          title: "Pesca y mariscos Waves",
          desc: "Pesca del día, mariscos parrillados, meuniere, albahaca, cremosos de coco.",
          price: "$84.900,-",
        },
        {
          title: "Duo Waves",
          desc: "Pesca del día en mantequilla  de ajos roti, filete de salmon con mantequilla de hierbas, puré de pap y mofongo.",
          price: "$76.900,-",
        },
        {
          title: "Tuna Steak",
          desc: "Encontrado con 3 pimientas, cremoso de coco, hilos de cebolla puerro, aceite de cilantro, reducción balsámica.",
          price: "$69.900,-",
        },
        {
          title: "Salmón Lmendrado",
          desc: "Salmón con mantequilla de almendras, vegetales encurtidos.",
          price: "$79.900,-",
        },
        {
          title: "Samón a la menier de albahaca",
          desc: "Filete de salmón grillado, meniere de albahaca, pure de papas.",
          price: "$$79.900,-",
        },
        {
          title: "Pesca entera al carbón",
          desc: "Pesca entera del día al josper, presto de albahaca y mango tatemado, ajos roti.",
          price: "$125.900,-",
        },
        {
          title: "Cazuela de mariscos",
          desc: "Al estilo Waves, aromatizada calamares fritos, patacones.",
          price: "$79.900,-",
        },
      ],
      [
        {
          title: "Mixtura de mariscos al carbón",
          desc: "Mariscos en salsa anticuchera, leche de coco y plátano.",
          price: "$84.900,-",
        },
        {
          title: "Brochetas de langostinos",
          desc: "Marinado al estilo cajún, servicios sobre arroz de ají amarillo.",
          price: "$69.900,-",
        },
        {
          title: "Gambas caribeñas (de temporada)",
          desc: "Langostinos enteros al josper, salsa de cazuela con curry, arroz de coco.",
          price: "$79.900,-",
        },
        {
          title: "Mariscos parrillados",
          desc: "Camarón, langostinos, pulpo, salmón, robalo, mejillon y calamar, Acompañado de arroz de aji amarillo y patacón.",
          price: "$109.900,-",
        },
        {
          title: "Langostinos Girasol",
          desc: "Rebosados con queso parmesano, mofongo, salsa teriyaki.",
          price: "$68.900,-",
        },
        {
          title: "Pastas con camarón",
          desc: "Pasta corta con salsa artesanal de tomates frescos, queso philadelphia, camarones, al gratín, pan de masa madre.",
          price: "$59.900,-",
        },
        {
          title: "Pasta alfredo con tocineta",
          desc: "Pasta corta con salsa alfredo con tocineta, camarones, mozzarella, parmesano y pan focaccia.",
          price: "$59.900,-",
        },
      ],
      [
        {
          title: "Cremoso de coco y camarón",
          desc: "Arroz de coco cremoso con puerro, camarones, leche de coco, vino blanco.",
          price: "$59.900,-",
        },
        {
          title: "Arroz de mariscos",
          desc: "Arroz de mariscos criollo, con bisque de langostino, cilantro y leche de coco.",
          price: "$68.900,-",
        },
        {
          title: "Arroz meloso de cerdo",
          desc: "Arroz meloso con vegetales, cochinillos desmechados en BBQ de tamarindo, chalaca, madurito y suero costeño.",
          price: "$68.900,-",
        },
        {
          title: "Tostones de jaiba y camarón",
          desc: "Tostón de plátano con jaiba cremosa, camarón, brotes.",
          price: "$44.900,-",
        },
        {
          title: "Tostones de ropa vieja",
          desc: "Tostón de plátano, queso costeño, madurito, ropa vieja mayonesa de aguacate y kimchy.",
          price: "$39.900,-",
        },
        {
          title: "Crema de  jaiba",
          desc: "Cremosa sopa de jaiba.",
          price: "$39.900,-",
        },
        {
          title: "Sopita del capitán",
          desc: "Clásica sopa de pescado levanta muertos.",
          price: "$29.900,-",
        },
      ],
      [
        {
          title: "Cocada Waves",
          desc: "Dulce artesanal de coco, azúcar y amor, hecho por palenqueras con tradición, sabor y alegria caribeña.",
          price: "$22.900,-",
        },
        {
          title: "Flan de queso",
          desc: "Flan de queso costeño.",
          price: "$24.900,-",
        },
        {
          title: "Tarta de queso y caramelo salado",
          desc: "Tarta de queso y caramelo salado.",
          price: "$22.900,-",
        },
        {
          title: "Flan cremoso de coco",
          desc: "Flan de coco, carmelo salado, crispetas de millo.",
          price: ",$22.900-",
        },
        { title: "Mokachino", desc: "Mokaccino", price: "$12.900,-" },
        { title: "Americano", desc: "Americano", price: "$7.900,-" },
        { title: "Afogatto", desc: "Afogatto", price: "$10.900,-" },
      ],
      [
        {
          title: "Limonada Natural",
          desc: "Limonada natural",
          price: "$12.500,-",
        },
        {
          title: "Limonada de Coco",
          desc: "Limonada de coco",
          price: "$17.000,-",
        },
        {
          title: "Limonada Cerezada",
          desc: "Limonada cerezada",
          price: "$13,000,-",
        },
        { title: "Jugo de Corozo", desc: "Jugo de corozo", price: "$12.000,-" },
        {
          title: "Gaseosa Botella",
          desc: "Gaseosa botella",
          price: "$9.000,-",
        },
        { title: "Agua Botella", desc: "Agua Botella", price: "$9.000,-" },
        { title: "Noche Habanera", desc: "Coctel", price: "$48.000,-" },
      ],
      [
        { title: "Bolero Founders", desc: "Coctel", price: "$48.000,-" },
        { title: "Carnaval Pink", desc: "Coctel", price: "$48.000,-" },
        { title: "Marmonda", desc: "Coctel", price: "$43.000,-" },
        {
          title: "Veuve Clicquot Brut",
          desc: "Champagne",
          price: "$810.000,-",
        },
        { title: "Luigi Bosca", desc: "Vino Tinto", price: "$280.000,-" },
        { title: "Gran Mascota", desc: "Vino Tinto", price: "$280.000,-" },
        {
          title: "Ramón Bilbao Verdejo",
          desc: "Vino de la Casa",
          price: "$40.000,-",
        },
      ],
    ],
  },
  restaurante2: {
    title: "CAPELLO DI ROMA",
    categories: [
      "Entradas",
      "Sopas y Ensaladas",
      "Pastas y Risottos",
      "Pastas y Risottos",
      "Pastas y Risottos",
      "Secondi",
      "Secondi",
      "Pizza",
      "Pizza y Panini",
      "Dolci",
      "Dolci y Gelatos",
    ],
    pages: [
      [
        {
          title: "Burata de la Casa",
          desc: "Burrata de búfala 125g, mermelada de tomate, tomates cherry, tomates secos, cebolla en vinagre, pesto genovese, rúgula, tostadas artesanales.",
          price: "$49.900,-",
        },
        {
          title: "Berenjenas a la Parmesana",
          desc: "Berenjenas horneadas en salsa pomodoro de la casa, gratinadas con mozzarella y parmigiano.",
          price: "$41.900,-",
        },
        {
          title: "Degustación de Reggiano",
          desc: "Crocantes de queso, cuñas, y arancinis de risotto rellenos de mozzarella, todos realzados con carpaccio de trufa y peras caramelizadas.",
          price: "$55.900,-",
        },
        {
          title: "Carpaccio de Salmón",
          desc: "Láminas de salmón en salsa de maracuyá, alcaparras fritas, tomates cherry, cebollas encurtidas, aceitunas y rúgula.",
          price: "$49.900,-",
        },
        {
          title: "Polpo Alla Griglia",
          desc: "Pulpo a la parrilla sobre puré de puerro, papas cocidas, tomates secos y aceitunas.",
          price: "$89.900,-",
        },
        {
          title: "Fritto Di Mare",
          desc: "Nuestra selección especial de frutos del mar con salsa tártara y marinara.",
          price: "$69.900,-",
        },
        {
          title: "Albóndigas Capello",
          desc: "Albóndigas de carne angus en salsa pomodoro de la casa y salsa cacio pepe con parmigiano y pecorino.",
          price: "$49.900,-",
        },
      ],
      [
        {
          title: "Crema de Tomate",
          desc: "Crema de tomates horneados servido con parmesano y crutones.",
          price: "$25.900,-",
        },
        {
          title: "Sopa Minestrone",
          desc: "Sopa de verduras servida con pesto de albahaca, crutones y parmigiano.",
          price: "$25.900,-",
        },
        {
          title: "De la Casa",
          desc: "Pollo a la parrilla, aguacate, tomates cherry, tocineta, champiñones, espárragos, queso boconccini, cebollas encurtidas y maíz dulce.",
          price: "$45.900,-",
        },
        {
          title: "Insalata Di Gardino",
          desc: "Ensalada de mix de lechugas, aceitunas negras, alcachofas, hongos, tomates secos, crutones, vinagreta oliva limón y reducción de balsámico.",
          price: "$35.900,-",
        },
        {
          title: "Kale Cesar",
          desc: " Mezcla de lechuga kale horneada, cogollo europeo, pollo a la parrilla, crutones de focaccia, parmigiano, miel de peperoncino y vinagreta césar. ",
          price: "$45.900,-",
        },
        {
          title: "Gamberi Alla Vodka",
          desc: "Spaghetti en salsa vodka con camarones, tomate cherry y parmigiano, terminada al horno con cubierta crocante de masa de pizza.",
          price: "$79.900,-",
        },
        {
          title: "Ravioli Di Salmone",
          desc: "Ravioles artesanales rellenos de salmón servido con salsa de vodka, aceitunas y tomates secos.",
          price: "$51.900,-",
        },
      ],
      [
        {
          title: "Di Mare",
          desc: "Capellini en salsa pomodoro de la casa, camarones, calamares, pescado blanco y un toque de vino blanco.",
          price: "$67.900,-",
        },
        {
          title: "Cacio e Pepe e Gamberi",
          desc: "Spaghetti en pecorino romano, camarones y pimienta negra.",
          price: "$53.900,-",
        },
        {
          title: "Aragosta",
          desc: "en salsa pomodoro, langosta a la parrilla y tomates cherry.",
          price: "$279.900,-",
        },
        {
          title: "Ragú de Ossobuco",
          desc: "Fettuccine en salsa de ossobuco estofado servido con crocante de parmigiano Reggiano DOP.",
          price: "$45.900,-",
        },
        {
          title: "Ravioli de Queso Brie",
          desc: "Raviolis rellenos de queso brie en salsa al burro, con peras caramelizadas y miel tartufada.",
          price: "$59.900,-",
        },
        {
          title: "Tartufo e Funghi",
          desc: "Fettuccine, hongos silvestres con salsa tartufada de trufa negra y parmigiano fundido.",
          price: "$67.900,-",
        },
        {
          title: "Al Funghi",
          desc: "Salsa de mix de champiñones con un toque de vino blanco y parmigiano.",
          price: "$41.900,-",
        },
      ],
      [
        {
          title: "Pesto e Pistacchio",
          desc: "Orecchiette (pasta corta) en salsa pesto genovese y pistachos, servida con cremosa stracciatella de burrata, guanciale crocante y parmigiano.",
          price: "$57.900,-",
        },
        {
          title: "Carbonara Tradizionale Romana",
          desc: "Receta original a base de yema de huevo con pecorino y guanciale.",
          price: "$53.900,-",
        },
        {
          title: "Amatriciana Originale",
          desc: "Receta tradicional a base de salsa pomodoro de la casa, guanciale y pecorino.",
          price: "$57.900,-",
        },
        {
          title: "Panna Pancetta",
          desc: "Salsa blanca con yema de huevo, tocineta, parmigiano y aceite de oliva extra virgen.",
          price: "$45.900,-",
        },
        {
          title: "Della Mamma",
          desc: "Pasta gratinada con mozzarella y parmigiano, en auténtico ragú a la bolognesa y jamón artesanal.",
          price: "$59.900,-",
        },
        {
          title: "Pasta Genovese",
          desc: "Pappardelle, ragú Genovese con salsa blanca, cebolla caramelizada y parmigiano.",
          price: "$39.900,-",
        },
        {
          title: "Ravioli de Carne",
          desc: "Ravioli rellenos de carne de res, en aSalsa de champiñones, jamón artesanal y salsa blanca. o Salsa pomodoro de la casa, tomates y parmigiano.",
          price: "$49.900,-",
        },
      ],
      [
        {
          title: "Lasagna Bolognese",
          desc: "Lasaña boloñesa de la casa gratinada con mozzarella y parmigiano.",
          price: "$49.900,-",
        },
        {
          title: "Al Teléfono",
          desc: "Pappardelle, salsa pomodoro, tomate cherry, salsa blanca, parmigiano  y straciatella de burrata, terminado con pesto de albahaca.",
          price: "$55.900,-",
        },
        {
          title: "Aragosta",
          desc: "Risotto en salsa pomodoro, langosta a la parrilla y tomates cherry.",
          price: "$279.900,-",
        },
        {
          title: "Capello",
          desc: "Arroz arbóreo con nuestra selección de frutos del mar y un toque de vino blanco. (Ligeramente picante)",
          price: "$83.900,-",
        },
        {
          title: "Riso Venere e Gamberi",
          desc: "Arroz negro italiano salteado con langostinos, tomate cherry y alioli.",
          price: "$89.900,-",
        },
        {
          title: "Risotto al Funghi",
          desc: "Arroz arbóreo, salsa de hongos y parmigiano.",
          price: "$49.900,-",
        },
        {
          title: "Salmone Alla Griglia",
          desc: "Salmón fresco encostrado a las finas hierbas, acompañado con puré de papa y vegetales salteados.",
          price: "$73.900,-",
        },
      ],
      [
        {
          title: "Atún Storia Capello",
          desc: "Atún encostrado en marañón, mix de lechugas, garbanzos, lentejas fritas, cebollas encurtidas, vinagreta de albahaca y nueces caramelizadas.",
          price: "$71.900,-",
        },
        {
          title: "Pesce al Forno",
          desc: "Filete de pesca blanca sobre sal marina, acompañado de vegetales salteados y salsa de la casa.",
          price: "$83.900,-",
        },
        {
          title: "Pesce Portofino",
          desc: "Pesca blanca del dia, salsa de la casa en vino blanco, aceitunas, alcaparras, tomates secos y acompañado con pure de papa.",
          price: "$87.900,-",
        },
        {
          title: "Aragosta Alla Griglia",
          desc: "Langosta entera a la parrilla (500 g) al ajillo. Acompañada de espárragos.",
          price: "$279.900,-",
        },
        {
          title: "Pollo de la Casa",
          desc: "Pechuga de pollo en salsa de vino dulce y hongos, rellena con mozzarella, servida con puré de papa y vegetales salteados.",
          price: "$59.900,-",
        },
        {
          title: "Pollo al Romero",
          desc: "Medio pollo rostizado al romero, acompañado con papas rústicas al romero, salsa pomodoro y chimichurri de la casa.",
          price: "$59.900,-",
        },
        {
          title: "Milanesa Gratinada",
          desc: "Milanesa italiana de pollo gratinada con mozzarella y bocconcini, salsa napolitana, acompañada con ensalada de la casa y papas rústicas.",
          price: "$50.900,-",
        },
      ],
      [
        {
          title: "Bondiola al Balsámico",
          desc: "Bondiola de cerdo en salsa al balsámico, servida con pasta al burro.",
          price: "$65.900,-",
        },
        {
          title: "Cotoletta alla Milanese",
          desc: "Milanesa de cerdo acompañada con papas al romero y salsa tártara.",
          price: "$59.900,-",
        },
        {
          title: "Ossobuco",
          desc: "Ossobuco de res estofado en salsa de vino blanco y limón, servido con risotto de azafrán.",
          price: "$89.900,-",
        },
        {
          title: "Lomo del Chef",
          desc: "200g de Lomo de res en salsa de hongos, acompañado de nuestra emblemática pasta al Parmigiano Reggiano.",
          price: "$73.900,-",
        },
        {
          title: "Asado de Tira alla Toscana",
          desc: "Costilla de res estofada en salsa pomodoro de la casa servida con pasta.",
          price: "$81.900,-",
        },
        {
          title: "Bife Angosto",
          desc: "300grs de corte de carne argentina premium a la parrilla.",
          price: "$105.900,-",
        },
        {
          title: "Filetto Storia",
          desc: "450gr de Lomo a la parrilla con salsa a elección, acompañado con papas rústicas.",
          price: "$145.900,-",
        },
      ],
      [
        {
          title: "Marcherita",
          desc: "Bocconcini, queso mozzarella, albahaca y pimienta.",
          price: "$37.900,-",
        },
        {
          title: "Burrata",
          desc: "Burrata fresca de búfala, parmesano y pimienta.",
          price: "$51.900,-",
        },
        {
          title: "Salsiccia e Tartufo",
          desc: "Salsiccia siciliana, queso mozzarella, boconccini, mascarpone, trufa y hongos.",
          price: "$51.900,-",
        },
        {
          title: "Pepperoni",
          desc: "Pepperoni Nostro y miel de Peperoncino (ligeramente picante).",
          price: "$49.900,-",
        },
        {
          title: "Pizza Lasagna",
          desc: "Pizza en forma ovalada con corteza crocante rellena de salsa boloñesa, con queso parmigiano y mozzarella.",
          price: "$57.900,-",
        },
        {
          title: "Pollo al Funghi",
          desc: "ollo en salsa champiñones, mozzarella y pimienta.",
          price: "$45.900,-",
        },
        {
          title: "Hawaiana",
          desc: "Tocineta crujiente, piña caramelizada, mozzarella y pimienta.",
          price: "$41.900,-",
        },
      ],
      [
        {
          title: "Italiana",
          desc: "Salsiccia siciliana, jamón artesanal, pepperoni, queso mozzarella y pimienta. Ligeramente picante.",
          price: "$57.900,-",
        },
        {
          title: "Proscuitto",
          desc: "Prosciutto DOP, Stracciatella de burrata, queso mozzarella y rúgula.",
          price: "$61.900,-",
        },
        {
          title: "Quatro Stagioni",
          desc: "Mozzarella, boconccini, alcachofa, champiñones, tomates secos, aceitunas, jamón artesanal y rugula.",
          price: "$55.900,-",
        },
        {
          title: "Caprese",
          desc: "Tomates horneados, mozzarella fresca, pesto de aceitunas y albahaca, acompañado con papas chips y salsa alioli.",
          price: "$33.900,-",
        },
        {
          title: "Milanesa de Pollo",
          desc: "Milanesa de pollo, tomates frescos, lechuga y mayonesa de la casa, acompañado con papas chips y salsa alioli.",
          price: "$39.900,-",
        },
        {
          title: "Jamón & Mozzarella",
          desc: "Jamón artesanal, tomate, lechuga, mozzarella y salsa alioli, acompañado con papas chips",
          price: "$41.900,-",
        },
        {
          title: "Proscuitto",
          desc: "Prosciutto italiano, tomates frescos, rúgula y queso mozzarella, acompañado con crocantes papas chips y salsa alioli.",
          price: "$47.900,-",
        },
      ],
      [
        {
          title: "Torta Dubai Chocolate",
          desc: "Inspirada en el famoso chocolate de Dubái, esta torta mezcla capas de bizcocho húmedo de chocolate, crema de pistacho y Knafeh crocante.",
          price: "$23.900,-",
        },
        {
          title: "Tiramisú Tradizitonale",
          desc: "Nuestro postre estrella de la casa. Clásico tiramisú italiano con queso mascarpone.",
          price: "$23.900,- $33.900,-",
        },
        {
          title: "Millefoglie Frutti di Bosco",
          desc: "Milhojas de frutos rojos, crema pastelera y chantillí.",
          price: "$22.900,-",
        },
        {
          title: "Torta Ternerina al Cioccolato",
          desc: "Torta de chocolate con centro líquido, servida con gelato. (Tiempo de servicio 20 min).",
          price: "$25.900,-",
        },
        {
          title: "Calzoncini di Nutella",
          desc: "Dos mini calzoni rellenos de nutella, acompañado con fresas y crema chantillí.",
          price: "$29.900,-",
        },
        {
          title: "Fragole",
          desc: "Fresas con crema chantilly y gelato de mascarpone.",
          price: "$29.900,-",
        },
        {
          title: "Sgroppino al Limone",
          desc: "Un clásico de Venecia. Sorbete de limón con Vodka y Prosecco. (Para dos).",
          price: "$23.900,-",
        },
      ],
      [
        {
          title: "Torta Chocolate Capello",
          desc: "Bizcocho de chocolate relleno con mousse de chocolate, ralladura de chocolate y chips de chocolate.",
          price: "$23.900,-",
        },
        {
          title: "Dolce Storia Capello",
          desc: "Fonduta de chocolate blanco con gelato de Maracuyá y frutas de temporada.",
          price: "$33.900,-",
        },
        {
          title: "Gelato al Pistacchio",
          desc: "Gelato de pistacho hecho a la minuta.",
          price: "$39.900,-",
        },
        {
          title: "Torta Dubai Chocolate",
          desc: "Inspirada en el famoso chocolate de Dubái, esta torta mezcla capas de bizcocho húmedo de chocolate, crema de pistacho y Knafeh crocante.",
          price: "$23.900,-",
        },
        {
          title: "Gelato Artigianale",
          desc: "Copa de una bolita, (Elige tu sabor favorito) : Ferrero, Amarenas, Mango en agua, Yogurt frutos rojos, Yogurt frutos amaril.",
          price: "$11.900,-",
        },
        { title: "Affogato", desc: "affogato", price: "$15.900,-" },
        { title: "Shakeratto", desc: "shakeratto", price: "$33.900,-" },
      ],
    ],
  },
  restaurante3: {
    title: "GRAPPLERS KING",
    categories: [
      "The Burguers",
      "Brasas",
      "Brasas y Lunch",
      "House Specials",
      "Típicos y Pastas",
      "Cocteles, Vinos y Sangrias",
      "Cervezas",
      "Tragos y Botellas",
      "Limonadas y Bebidas",
    ],
    pages: [
      [
        {
          title: "Sexy Cheese Burger",
          desc: "Carne Angun, crotón de mozzarella, queso mozzarella, miel trufada, lechuga y salsa de la casa.",
          price: "$42.900,-",
        },
        {
          title: "Real Bacon",
          desc: "Carne Angus, queso cheddar, tocineta ahumada y salsa de la casa.",
          price: "$38.900,-",
        },
        {
          title: "Pepper Burger",
          desc: "Carne Angus, queso mozzarella, confitura de cebolla, wonton crocante y salsa pimienta cremosa.",
          price: "$40.900,-",
        },
        {
          title: "Pulled Pork",
          desc: "Carne Angus, 100gr de pulled pork, queso mozzarella, anillos de cebolla y salsa de la casa.",
          price: "$42.900,-",
        },
        {
          title: "Brûlée Burger",
          desc: "Carne Angus, queso mozzarella, salsa de tomates confitados y tocino caramelizado.",
          price: "$38.900,-",
        },
        {
          title: "Double Cheese",
          desc: "Carne Angus, tocineta, queso mozzarella, queso cheddar y salsa de la casa.",
          price: "$42.900,-",
        },
        {
          title: "Quillera Burger",
          desc: "Carne Angus, mermelada de piña con tocineta ahumada, queso mozzarella, maiz tierno, papa ripio,lechugas y salsa de la casa.",
          price: "$39.900,-",
        },
      ],
      [
        {
          title: "Bife Chorizo",
          desc: "Jugoso corte maduro de la parte trasera del lomo ancho.",
          price: "$58.900,-",
        },
        {
          title: "Churrasco",
          desc: "Jugoso corte maduro de lomo ancho en corte mariposa.",
          price: "$58.900,-",
        },
        {
          title: "Churrasco de Cerdo",
          desc: "Punta de anca en corte mariposa.",
          price: "$38.900,-",
        },
        {
          title: "Medio Pollo Ahumado",
          desc: "1/2 pollo adobado llevado a cocción lenta, finalizado en horno al carbon.",
          price: "$44.900,-",
        },
        {
          title: "Pichna Americana",
          desc: "Angust beef, corte  del cuarto superiror trasero de la res, buen mormoleo x 350gr.",
          price: "$89.900,-",
        },
        {
          title: "Chicken Grill",
          desc: "300gr de clásica pechuga de pollo en horno al carbón.",
          price: "$36.900,-",
        },
        {
          title: "Baby Beef",
          desc: "250gr de tierno corte de lomo fino.",
          price: "$62.900,-",
        },
      ],
      [
        {
          title: "Cowboy de Cerdo",
          desc: "400gr de corte que proviene del lomo de cerdo y parte del costillar, jugoso y tierno.",
          price: "$48.900,-",
        },
        {
          title: "Bufsalo 4 Carnes",
          desc: "Jugosos cortes de carne(125gr), cerdo(125gr), pollo(125gr) y chorizo de ternera.",
          price: "$62.900,-",
        },
        {
          title: "Salmón al Carnón ",
          desc: "Filete de salmón terminado en horno al carbon, 2 acompañamientos a elección entre patacones, ensalada de aguacate y arroz de coco.",
          price: "$59.900,-",
        },
        {
          title: "Filete al Carbón",
          desc: "Filete de róbalo al carbón, 2 acompañamientos a elección entre patacones, ensalada de aguacate y arroz de coco.",
          price: "$48.900,-",
        },
        {
          title: "Pechuga al Gratín",
          desc: "Filete de pollo en salsa de queso gratinada terminada con tocineta crocante, acompañada de papa casco y ensalada de la casa.",
          price: "$31.900,-",
        },
        {
          title: "Pulled Pork Teriyaki",
          desc: "Costilla de cerdo desmechada en salsa teriyaki acompañado de arroz blanco y madurito con suero.",
          price: "$31.900,-",
        },
        {
          title: "Salteado de Cerdo",
          desc: "Churrasco de cerdo salteado con cebolla y tomate en salsa oriental acompañado de arroz blanco  y madurito con suero.",
          price: "$31.900,-",
        },
      ],
      [
        {
          title: "Milanesa Napolitana",
          desc: "300gr de pechuga apanada, bañada en salsa brulee, queso mozzarella y gratinada.",
          price: "$46.900,-",
        },
        {
          title: "Lomo Árabe",
          desc: "250gr de Lomo Fino sobre una salsa de ajo cremosa, terminada con cebollas caramelizadas.",
          price: "$64.900,-",
        },
        {
          title: "Chicken 3 Condados",
          desc: "300gr de pechuga de pollo en horno al carbón, bañada en salsa de quesos gratinados.",
          price: "$43.900,-",
        },
        {
          title: "Lomo 3 Condados",
          desc: "250gr Lomo fino, sobre una salsa de quesos, tocino crocante.",
          price: "$69.900,-",
        },
        {
          title: "Pepper Steak",
          desc: "250gr de lomo fino, bañado en salsa de pimienta de la casa.",
          price: "$67.900,-",
        },
        {
          title: "Rapplers Beef",
          desc: "Costilla de res, ahumada con nuestro rub de la casa, en cocción lenta y terminada en horno al carrbón.",
          price: "$69.900,-",
        },
        {
          title: "Bandejas",
          desc: "Deditos, empandas de lechon, alitas BBQ, chorizo argentino, chicharrones al carbón, bollo limpio, aji criollo, miel trufada y cascos de limón.",
          price: "$139.900,-",
        },
      ],
      [
        {
          title: "Bandeja Paisa",
          desc: "Plato típico paisa, compuesto de frijoles, arroz blanco, carne molida, madurito, aguacate, chorizo, arepa antioqueña, chicharrón y huevo.",
          price: "$41.900,-",
        },
        {
          title: "Arroz de Cerdo",
          desc: "Arroz con base de salsa criolla, costilla de cerdo desmechada, maiz, arveja, chicarrón de cerdo, acompañado con mojo de ajo y patacones. ",
          price: "$44.900,-",
        },
        {
          title: "Ajiaco",
          desc: "Sopa típica de la cocina santafereña, acompañada de alcaparras, crema de leche, aguacate y arroz blanco.",
          price: "$36.900,-",
        },
        {
          title: "Mondongo",
          desc: "Sopa típica de la cocina colombiana al estilo Grapplers king, acompañada de aarroz blanco y aguacate.",
          price: "$36.900,-",
        },
        {
          title: "Posta Cartagenera",
          desc: "Carne de res en salsa dulce y especiada, 2 acompañamientos a elección entre patacones, ensalada de aguacate y arroz blanco.",
          price: "$42.900,-",
        },
        {
          title: "Spaguetti Bolognesa",
          desc: "Pasta en salsa bolognesa cremosa, queso parmesano, terminadas en nuestro horno al carbón, acompañadas de tostadas de pan cíabatta.",
          price: "$38.900,-",
        },
        {
          title: "Penne Carbonara",
          desc: "Pasta corta en salsa carbonara con pechuga de pollo, tocineta crocante, queso parmesano, acompañadas de pan ciabatta.",
          price: "$36.900,-",
        },
      ],
      [
        { title: "Piña Colada", desc: "Sin lacteus", price: "$29.900,-" },
        { title: "Mojito", desc: "Mojito", price: "$28.900,-" },
        { title: "Old Fashion", desc: "Old fashion", price: "$29.900,-" },
        { title: "Gin Tonic", desc: "Gin tonic", price: "$38.900,-" },
        {
          title: "Sangria Tinto",
          desc: "Copa y Jarra",
          price: "$30.000,- $94.900,-",
        },
        {
          title: "Taraca Rose",
          desc: "Copa y Jarra",
          price: "$21.900,- $95.900,-",
        },
        {
          title: "Ramón Bilbao Blanco",
          desc: "Copa y Jarra",
          price: "$27.900,- $126.900,-",
        },
      ],
      [
        { title: "BBC", desc: "bbc", price: "$14.900,-" },
        { title: "Stella Artois", desc: "stella artois", price: "$14.900,-" },
        { title: "Corona", desc: "corona", price: "$14.900,-" },
        { title: "Budweiser", desc: "budweiser", price: "$10.900,-" },
        { title: "Michelob Ultra", desc: "michelob ultra", price: "$10.900,-" },
        { title: "Club Colombia", desc: "club colombia", price: "$11.900,-" },
        { title: "Aguila", desc: "aguila", price: "$11.900,-" },
      ],
      [
        {
          title: "BUCHANANS 12 Años",
          desc: "Trago, Media, Botella",
          price: "$29.900,- $185.900,- $320.000,-",
        },
        {
          title: "GLENLIVET Founder",
          desc: "Trago, Botella",
          price: "$29.900,- $390.000,-",
        },
        {
          title: "OLD PARR",
          desc: "Trago, Media, Botella",
          price: "$29.900,- $220.000,- $320.000,-",
        },
        {
          title: "SINGLETON 12 Años",
          desc: "Trago, Botella",
          price: "$29.900,- $380.000,-",
        },
        {
          title: "DON JULIO Blanco",
          desc: "Trago, Botella",
          price: "$29.900,- $380.000,-",
        },
        { title: "GIN HENDRUCKS", desc: "Botella", price: "$390.000,-" },
        { title: "RON LA HECHICERIRA", desc: "Botella", price: "$420.000,-" },
      ],
      [
        {
          title: "Jugos Naturales",
          desc: "Fresa, Mandarina, Mango, Maracuyá, Corozo",
          price: "$10.900,-",
        },
        { title: "Limonada Natural", desc: "limonada", price: "$9.900,-" },
        {
          title: "Limonada de Coco",
          desc: "limonada de coco",
          price: "$14.900,-",
        },
        {
          title: "Limonada Cerezada",
          desc: "limonada cerezada",
          price: "$11.900,-",
        },
        {
          title: "Gaseosa 400ML",
          desc: "Cocacola, Sprite, Quatro, Kola Román",
          price: "$9.900,-",
        },
        { title: "Soda/Ginger", desc: "soda", price: "$7.900,-" },
        { title: "Agua", desc: "Natural, Con gas", price: "$7.900,-" },
      ],
    ],
  },
};

let currentMenu = null;
let currentPage = 0;

function openMenuModal(menuName) {
  currentMenu = menus[menuName];
  currentPage = 0;
  updateMenuPage();
  document.getElementById("menuModal").style.display = "flex";
  document.body.classList.add("menu-open");
}

function closeMenuModal() {
  document.getElementById("menuModal").style.display = "none";
  document.body.classList.remove("menu-open");
}

function updateMenuPage() {
  const flipper = document.getElementById("menuFlipper");
  flipper.innerHTML = "";
  const pageData = currentMenu.pages[currentPage];
  const categoryTitle = currentMenu.categories?.[currentPage] || "";

  const page = document.createElement("div");
  page.className = "menu-page menu-page--active";
  let html = `<h3><img src="../media/restaurant/menu1.png" style="width: 60px; vertical-align: middle; margin-right: 20px;">${currentMenu.title}</h3>`;

  if (categoryTitle) {
    html += `<div class="category-title">${categoryTitle}</div>`;
  }

  pageData.forEach((item) => {
    html += `
          <div class="menu-item">
            <div>
              <div class="menu-item__title">${item.title}</div>
              <div class="menu-item__desc">${item.desc}</div>
            </div>
            <div class="menu-item__price">${item.price}</div>
          </div>
        `;
  });

  page.innerHTML = html;
  flipper.appendChild(page);
}

function nextMenuPage() {
  if (currentPage < currentMenu.pages.length - 1) {
    animateFlip("right");
  }
}

function prevMenuPage() {
  if (currentPage > 0) {
    animateFlip("left");
  }
}

function animateFlip(direction) {
  const flipper = document.getElementById("menuFlipper");
  flipper.style.transition = "transform 0.4s ease";
  flipper.style.transform =
    direction === "right" ? "rotateY(-30deg)" : "rotateY(30deg)";
  setTimeout(() => {
    flipper.style.transition = "none";
    flipper.style.transform = "rotateY(0deg)";
    if (direction === "right") currentPage++;
    else currentPage--;
    updateMenuPage();
  }, 300);
}
