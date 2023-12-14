# Leyenda GitHub

ADD | crear archivo
DELL | Borrar archivo
UPD | Actualizar archivo

## Brainstorming

### CONCEPTUALIZACIÓN:

- Modo oscuro (terror) -> Temática halloween. font nosifer.

- Modo claro -> Temática cuaderno escolar. Fondo libreta; font <h>nene Weno</h> <p>handwrited</p>

- Pantalla menú: niveles de dificultad -> fácil / normal / difícil / Samu

- Efectos de sonido: Sonido para acierto y fallo.

- Diseño monigote: Modo claro -> Tradicional / Modo oscuro-> Cabeza calabaza

- Game Over: Pantallas que indiquen cuando ganas y cuando pierdes.

- Crear favicon

---

### LÓGICA:

- Cómo máximo el usuario puede cometer 6 errores.

- La palabra en pantalla debe aparece sustituida por guiones bajos.

- Botón resetear juego.

- Puntuar de diferente manera las vocales y las consonantes (las vocales 2 puntos al haber menos, las consonantes 1)

- Lógica de modo oscuro y modo claro (activar y desactivar con un interruptor)

- Botón silenciar música.

- Modo fácil: Una sola palabra, longitud máxima de 6 caracteres, no penalización por pedir pistas (el máximo es dos pistas).

- Modo normal: Se puede utilizar una sola palabra o una palabra compuesta, longitud máxima 15 caracteres, dos pistas, pero por cada pista se acumula un fallo.

- Modo difícil: Es igual que el normal pero no se pueden solicitar pistas.

- Modo Samu: Palabras relacionadas con programación, cosas de clase, etc. La pista debe ser una pregunta relacionada con la palabra en cuestión.

- Penalización por pedir una pista -> perder una extremidad del monigote.

- Todo tiene que trabajar en mayúsculas (toUpperCase).

- Game over: Aparte de mostrar que has perdido debe aparecer la puntuación final y la resolución de la palabra en la que se ha perdido.

---

BASE DE DATOS:

- Las palabras y pistas se almacenarán en un JSON, en formato objeto, con la estructura palabra/pista1/pista2.

- Las puntuaciones se almacenan en un contador (variable)

---