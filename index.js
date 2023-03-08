import validator from './validator.js';
//ELEMENTOS DOM
const btnValidar = document.getElementById('btnValidar')
const resultado = document.getElementById('resultado')
const mascaraOculta = document.getElementById('mascaraPantalla')
const input = document.getElementById('numerodetarjeta')
const btnReiniciar = document.getElementById('reiniciar')

//Funciones del input validar numero

function mostrarTarjeta() {
  const numeroTarjeta = document.getElementById('numerodetarjeta').value
  let validaInvalida
  if (validator.isValid(numeroTarjeta) === true) {
    validaInvalida = 'Válido'
  } else {
    validaInvalida = 'Inválido'
  }
  resultado.innerHTML = 'Número De Tarjeta ' + validaInvalida
}

//funcion mascara
function remplazar() {
  const mascara = document.getElementById('numerodetarjeta').value
  mascaraOculta.innerHTML = validator.maskify(mascara)
}
//reinicar fomrulario
function limpiar() {
  window.location.reload();
}

//Eventos
btnValidar.addEventListener('click', mostrarTarjeta)
btnValidar.addEventListener('click', remplazar)
btnReiniciar.addEventListener('click', limpiar)
btnValidar.addEventListener('click', () => {
  if (input.value.length === 0) {
    alert('Porfavor Ingrese Un Número De Tarjeta');
  }
})

