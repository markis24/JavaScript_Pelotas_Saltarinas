// Preparació del canvas ----------------------
/* Obté una referència a <canvas>, després crida al mètode getContext()
  per definir un context al el que es pot començar a dibuisar
  (ctx) és un objecte que representa l'àrea de dibuix del 
  <canvas> y permet dibuixar elements 2D al damunt.

  width and height són dreceres a l'ample i alt del canvas  que coincideixen
  amb l'alt i ample del navegador (viewport)
*/

import { Pilota } from "./Pilota.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Crear las pelotas saltarinas
let pilota = []
let Pilota1 = new Pilota(50, 100, 4, 4, "blue", 10);
Pilota1.dibuixa(ctx);
Pilota.mou(width,height);
// Poner 
ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.width,canvas.height);
// funció per generar un número aleatori entre dues xifres
for (let index = 0; index < array.length; index++) {

  
}

requestAnimationFrame(loop);

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// funció per generar un color aleatori

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
