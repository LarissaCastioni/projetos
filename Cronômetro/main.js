let segundos = 00;
let minutos = 00;
let horas = 00;
let interval;

const iniciar = () => {
  interval = setInterval(contador, 1);
};

const parar = () => {
  clearInterval(interval);
};

const reiniciar = () => {
  clearInterval(interval);
  segundos = 00;
  minutos = 00;
  document.getElementById("cronometro").innerText = "00:00:00";
};

const contador = () => {
  segundos++;
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  if (segundos == 0) {
    segundos = "00";
  }

  if (segundos == 60) {
    segundos = "00";
    minutos++;

    if (minutos < 10) {
      minutos = "0" + minutos;
    }
  }

  if (minutos == 0) {
    minutos = "00";
  }

  if (minutos == 60) {
    minutos = "00";
    horas++;
    if (horas < 10) {
      horas = "0" + horas;
    }
  }

  if (horas == 0) {
    horas = "00";
  }

  document.getElementById(
    "cronometro"
  ).innerText = `${horas}:${minutos}:${segundos}`;
};
