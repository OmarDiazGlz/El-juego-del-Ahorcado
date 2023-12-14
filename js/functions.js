"use strict";

// Función Controladora de botón de modo noche / modo día
function lightDark() {
  active_mode = !active_mode;
  const light_dark = document.getElementById("lightDark");
  const darkCss = document.getElementById('darkCSS');

  body.classList.toggle("dark");
  if (active_mode) {
    console.log("Modo claro activado");
    darkCss.href = "./css/style.css"
    light_dark.innerHTML = '<i class="fa-solid fa-moon "></i>';
  } else {
    darkCss.href = "./css/dark_mode.css";
    console.log("Modo oscuro activado");
    light_dark.innerHTML = '<i class="fa-regular fa-sun"></i>';
  }
}

// Función controladora de botón de volumen
function volume() {
  active_sound = !active_sound;

  if (active_sound) {
    console.log("Modo claro activado");
    muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    sonidoonoff = true;
  } else {
    console.log("Modo oscuro activado");
    muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    sonidoonoff = false;
  }
}

// Función para cargar el json dependiendo de que hayas seleccionado
function loadJSON(modo) {
  let archivoJSON;

  switch (modo) {
    case "facil":
      archivoJSON = "./assets/JSON/modo_facil.json";
      break;
    case "normal":
      archivoJSON = "./assets/JSON/modo_normal.json";
      break;
    case "dificil":
      archivoJSON = "./assets/JSON/modo_dificil.json";
      break;
    case "samu":
      archivoJSON = "./assets/JSON/modo_samu.json";
      break;
    default:
      console.error("Modo no válido");
      return;
  }
  fetch(archivoJSON)
    .then((response) => response.json())
    .then((data) => {
      palabraSeleccionada = seleccionarPalabraAleatoria(data);
      console.log("Palabra: " + palabraSeleccionada.palabra);
      console.log("Pista: " + palabraSeleccionada.pista.pista1);
      if (modo === "facil" || modo === "normal") {
        console.log("Pista: " + palabraSeleccionada.pista.pista2);
      }
      //convertimos palabra seleccionada a un array de caracteres.
      arrayWord = Array.from(palabraSeleccionada.palabra);
      spaceGen();
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
}

// Función para generar un botón para seleccionar pistas
function solicitarPistas() {
  numeroClics++;
  if (sonidoonoff === true) {
    document.getElementById('question').play();
  }
  setTimeout(function () {
    if (palabraSeleccionada.pista.pista2 !== undefined) {
      if (numeroClics === 1) {
        alert(palabraSeleccionada.pista.pista1)
        console.log('Two second later');
      } else if (numeroClics === 2) {
        alert(palabraSeleccionada.pista.pista2)
        document.getElementById("buttonPistas").style.display = "none";
      }
    } else {
      alert(palabraSeleccionada.pista.pista1)
      document.getElementById("buttonPistas").style.display = "none";
    }
    accounting("false")
  }, 100);

}

// Función para seleccionar aleatoriamente una palabra y sus pistas
function seleccionarPalabraAleatoria(jsonData) {
  const palabras = Object.keys(jsonData);
  const palabraAleatoria =
    palabras[Math.floor(Math.random() * palabras.length)];
  let pistas = jsonData[palabraAleatoria];
  pistas = pistas[0];

  document.getElementById("main-menu").style.display = "none";
  document.getElementById("main-screen").style.display = "block";
  showKeyboard("a", "z");
  return {
    palabra: palabraAleatoria.toUpperCase(),
    pista: pistas,
  };
}

// Función mostrar teclado en pantalla y leer la tecla clickada
function showKeyboard(a, z) {
  let i = a.charCodeAt(0);
  let j = z.charCodeAt(0);
  let letras = "";

  document.addEventListener("keydown", function (event) {
    document.getElementById("main-screen").focus();
    keyPress(event);
  });

  for (i; i <= j; i++) {
    letras = String.fromCharCode(i).toUpperCase();
    document.getElementById("keyboard").innerHTML += "<button id = '" + letras + "' onclick= 'inputLetter(\"" + letras + "\")' value='" + letras + "'style=\"color: #345aa9; height: 3rem; width: 2.5rem; font-size: 20px; cursor: pointer;font-family: 'nene_weno'\">" + letras + "</button>";

    if (i === 110) {
      document.getElementById("keyboard").innerHTML +=
        "<button id='Ñ' onclick= inputLetter('Ñ') style=\"color: #345aa9; height: 3rem; width: 2.5rem; font-size: 18px; font-family:'nene_weno';\";> Ñ </button>";
    }
  }
}

// Función leer la tecla pulsada en el teclado
function keyPress(event) {
  const key = event.key.toUpperCase();
  inputLetter(key);
}

//conteo de marcador
function accounting(correct) {
  switch (correct) {
    case "true":
      totalScore = totalScore + sum_points;
      break;
    case "false":
      if (totalScore >= 1) {
        totalScore = totalScore - substract_points;
      } else {
        totalScore = 0;
      }
      break;
    case "reset":
      totalScore = 0;
      break;
    case "oneShot":
      totalScore = oneShot + totalScore;
      break;
    default:
      console.error("no has pasado true, false o reset");
      break;
  }
  return document.getElementById("contador").textContent = totalScore;
}

//Función crea los espacios en funcion al numero de letras de la palabra escogida
function spaceGen() {
  wordSize = arrayWord.length;
  for (let i = 0; i < wordSize; i++) {
    ids = arrayWord[i].toUpperCase();
    document.getElementById("palabraJuego").innerHTML +=
      "<span class=" + ids + ">_</span>";

  }

}

// Función leer pulsaciones de teclado en pantalla o en su caso de sugerencia de letras por teclado
function inputLetter(letras) {
  if (!document.getElementById(letras).disabled) {
    document.getElementById(letras).style.backgroundColor = '#c81d11';
    document.getElementById(letras).disabled = 'true'
    let j = 0;
    for (let i = 0; i < wordSize; i++) {
      if (letras === arrayWord[i]) {
        const classLetter = document.getElementsByClassName(letras)
        classLetter[j].innerHTML = `<p class="lettervisu">${letras}</p>`
        j++
        z++
        accounting('true')
        document.getElementById("buttononeshot").style.display = "none";
        if (sonidoonoff === true && accounting('true') && z < wordSize) {
          document.getElementById("lettersuccess").play();
        }
      }
    }



    if (z === wordSize) {
      if (sonidoonoff === true) {
        document.getElementById('winner').play();
      }
      document.getElementById("pantallaWin").style.display = "flex";
      document.getElementById("main-screen").style.display = "none";
    }

    const omar = arrayWord.filter(letra => { return letras === letra })
    if (omar.length === 0) {
      fail++
      if (fail !== 6) {
        if (sonidoonoff === true) {
          document.getElementById('letterfail').play();
        }
      }
      loose()
    }
  }
}

//funcion que controla el oneshot
function oneshotbutton() {
  if (sonidoonoff === true) {
    document.getElementById('oneshotaudio').play();
  }
  setTimeout(function () {
    if (oneshotexecute === 'true') {
      let oneshotprompt = prompt("¿Quieres adivinar la palabra?")
      if (oneshotprompt === null) {
      } else if (palabraSeleccionada.palabra === oneshotprompt.toUpperCase()) {
        accounting('oneShot')
        document.getElementById("pantallaWin").style.display = "flex";
        document.getElementById("main-screen").style.display = "none"
        document.getElementById("buttononeshot").style.display = "none";
        oneshotexecute = 'false'
      } else {
        accounting('false')
        document.getElementById("buttononeshot").style.display = "none";
      }
    }
  }, 100);
}

//Función Cuando pierdes
function loose() {
  switch (fail) {

    case 1:
      accounting('false')
      document.getElementById('headstick').style.display = "block";
      document.getElementById("buttononeshot").style.display = "none";
      break;

    case 2:
      accounting('false')
      document.getElementById('bodystick').style.display = "block";
      break;

    case 3:
      accounting('false')
      document.getElementById('rightarmstick').style.display = "block";
      break;

    case 4:
      accounting('false')
      document.getElementById('leftarmstick').style.display = "block";
      break;

    case 5:
      accounting('false')
      document.getElementById('rightlegstick').style.display = "block";
      break;
    case maxFails:
      accounting('false')
      document.getElementById('leftlegstick').style.display = "block";
      document.getElementById('loseScreen').style.display = "flex";
      document.getElementById("contadorloose").textContent = totalScore;
      document.getElementById("main-screen").style.display = "none";
      if (sonidoonoff === true) {
        document.getElementById('gameOver').play();
      }
      break;

    default:
      break;
  }
}

//funcion del botón reset
function reset(typereset) {
  let a = "a"
  let zz = "z"
  let i = a.charCodeAt(0);
  let j = zz.charCodeAt(0);
  let letras = "";
  numeroClics = 0;
  oneshotexecute = 'true';
  for (i; i <= j; i++) {
    letras = String.fromCharCode(i).toUpperCase();

    const keyboardReset = document.getElementById(letras);
    keyboardReset.remove();
    if (i === 110) {
      const keyboardReset = document.getElementById("Ñ");
      keyboardReset.remove();
    }
  }

  for (let i = 0; i < wordSize; i++) {
    ids = arrayWord[i].toUpperCase();
    const collection = document.getElementsByClassName(ids);
    collection[0].remove();
  }
  z = 0;
  if (typereset === 'true') {
    totalScore = 0;
  }
  fail = 0;
  displaydefault()
}

function displaydefault() {
  document.getElementById('gameOver').pause();
  document.getElementById('winner').pause();
  document.getElementById("main-menu").style.display = "flex";
  document.getElementById("main-screen").style.display = "none";
  document.getElementById("buttononeshot").style.display = "inline";
  document.getElementById("buttonPistas").style.display = "inline";
  document.getElementById("contador").textContent = totalScore;
  document.getElementById("pantallaWin").style.display = "none";
  document.getElementById("loseScreen").style.display = "none";
  document.getElementById('headstick').style.display = "none";
  document.getElementById('bodystick').style.display = "none";
  document.getElementById('rightarmstick').style.display = "none";
  document.getElementById('leftarmstick').style.display = "none";
  document.getElementById('rightlegstick').style.display = "none";
  document.getElementById('leftlegstick').style.display = "none";
}