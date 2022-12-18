function tocaSom(idElementoSom) {
  document.querySelector(idElementoSom).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  let idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function () {
    tecla.classList.add("ativa");
  };
}
