let segundos = 00;
let minutos = 00;
let horas = 00;
let interval;

const iniciar = () => {
  interval = setInterval(contador, 100);
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

  if (segundos == 60) {
    minutos++;
  }

  if (minutos == 60) {
    horas++;
  }

  segundos = validaNumero(segundos);
  minutos = validaNumero(minutos);
  horas = validaNumero(horas);

  document.getElementById(
    "cronometro"
  ).innerText = `${horas}:${minutos}:${segundos}`;
};

function validaNumero(valor) {
  if ((valor === 0 || valor == 60) && !Number.isNaN(valor)) {
    return "00";
  } else if (
    valor > 0 &&
    valor < 10 &&
    valor.toString().length === 1 &&
    !Number.isNaN(valor)
  ) {
    return "0" + valor;
  } else {
    return valor;
  }
}
