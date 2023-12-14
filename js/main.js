"use strict";

// Declaraciones de variables y constantes
let active_mode = true;
let active_sound = true;
const body = document.body;
let errores = 0;
let arrayWord = [];
let wordSize;
let z = 0;
let fail = 0;
let ids;
// Botón de mutear
const muteButton = document.getElementById("mute");
let sonidoonoff = true;

// Botón de pistas
let palabraSeleccionada;
const pistasButton = document.getElementById("buttonPistas")
pistasButton.addEventListener("click", solicitarPistas)
let numeroClics = 0;
let oneshotexecute = 'true';

// Eventos click
muteButton.addEventListener("click", volume);


