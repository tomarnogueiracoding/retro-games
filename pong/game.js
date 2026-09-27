/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const raquete1 = {
  largura: 10,
  altura: 50,
  x: 20,
  y: 175,
};

const raquete2 = {
  largura: 10,
  altura: 50,
  x: 770,
  y: 175,
};

ctx.fillRect(raquete1.x, raquete1.y, raquete1.largura, raquete1.altura);
ctx.fillRect(raquete2.x, raquete2.y, raquete2.largura, raquete2.altura);
