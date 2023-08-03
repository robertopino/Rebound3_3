const actividadesSelect = document.querySelector("#actividades");
const photocard = document.querySelector("#photocard");
const infocard = document.querySelector("#infocard");

actividadesSelect.addEventListener("change", function (e) {
  if (e.target.value == "1") {
    photocard.querySelector("img").src = "/assets/img/aguas_de_ramon.jpg";
    photocard.querySelector(".card-title").textContent = "trekking";
    photocard.querySelector(".fw-light").textContent = "Parque Aguas de Ramón";
    infocard.querySelector(".info-text").textContent =
      "Este Parque Natural se caracteriza por una alta riqueza de especies endémicas de flora y fauna. Las rutas de Trekking se adentran por el valle a través de sus bosques, ofreciendo vistas maravillosas, puentes colgantes, saltos de agua y lugares que permiten la conexión con la naturaleza.";
  }

  if (e.target.value == "2") {
    photocard.querySelector("img").src = "/assets/img/lago_caburga.jpg.crdownload";
    photocard.querySelector(".card-title").textContent = "Natación";
    photocard.querySelector(".fw-light").textContent = "Lago Caburga";
    infocard.querySelector(".info-text").textContent =
      "El lago Caburgua es un lago chileno ubicado en las comunas de Pucón y Cunco, Región de la Araucanía, al noreste del Lago Villarrica. Al este del lago se encuentra el parque nacional Huerquehue.";
  }

  if (e.target.value == "3") {
    photocard.querySelector("img").src = "/assets/img/lago_pirihueico.jpg";
    photocard.querySelector(".card-title").textContent = "Ferry";
    photocard.querySelector(".fw-light").textContent = "Puerto Fuy";
    infocard.querySelector(".info-text").textContent =
      "Puerto Fuy es un caserio de 391 habitantes ubicado en la ribera poniente del lago Pirihueico, formando parte de la comuna de Panguipulli en la Región de Los Ríos, Chile.​Sirve como punto de conexión para navegar hasta Puerto Pirehueico, en la ribera oriental del lago, en donde está situado el Paso Hua Hum.";
  }
});

photocard.addEventListener("mouseover", function () {
  photocard.querySelector(".card-img-overlay").style.opacity = 1;
  photocard.querySelector(".card-img-overlay").style.transition =
    "opacity .3s ease";
});

photocard.addEventListener("mouseleave", function () {
  photocard.querySelector(".card-img-overlay").style.opacity = 0;
});