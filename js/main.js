// Preparación del canvas
import { Pilota } from "./Pilota.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// Crear las pelotas saltarinas
let pilota = new Pilota(50, 100, 4, 4, "blue", 10); // Cambiado el nombre de la variable

function loop() {
  // Pintar el rectángulo de negro 
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  // Array de Pilotes inicializado
  let arrayPilotes = [];
  for (let i = 0; i < 25; i++) {
    let mida = random(10, 20);
    let x = random(0 + mida, width - mida);
    let y = random(0 + mida, height - mida);
    let velX = random(-2, 2); // Agregué la generación de velocidades aleatorias
    let velY = random(-2, 2);
    let color = randomRGB();
    let pilota = new Pilota(x, y, velX, velY, color, mida);
    arrayPilotes.push(pilota);
  }

  // Recorriendo el array de Pilotes
  for (let i = 0; i < arrayPilotes.length; i++) {
    const pilota = arrayPilotes[i];
    pilota.dibuixa(ctx);
    pilota.mou(width, height);
  }

  requestAnimationFrame(loop);
}
loop();

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Función para generar un color aleatorio
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
