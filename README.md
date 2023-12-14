[![Icon](https://img.shields.io/badge/Icon-V6.4.0-blue)](https://fontawesome.com/)
[![Voicy](https://img.shields.io/badge/Voice-V0.0.1-red)](https://www.voicy.network/es)

# El juego del ahorcado

## Grupo
> [!IMPORTANT]
> Carlos, Aaron, Omar, Xavi.
---


# Índice de documentos

- [index](index.html) --> Es la página principal, donde se estructuran los diferentes contenidos del juego.

- [style](css/style.css) --> Recoge todos los estilos del modo estándar del juego.

- [dark_mode](css/dark_mode.css) --> Recoge todos los estilos del modo oscuro del juego.

- [main](js/main.js) --> En este documento JavaScript recogemos las principales variables del juego, además de algunos elementos recuperados del index.html para trabajar con ellos desde JS.

- [functions](js/functions.js) --> En este archivo se encuentran todas las funcionalidades del juego.

- [config](js/config.js) --> En este documento se encuentran los parámetros configurables relacionados con la puntuación del juego.

- [Fuentes](assets/font/) --> En ella incluimos todos los recursos de fuentes utilizadas en el proyecto.

- [imagenes](assets/image/) --> En ella incluimos todos los recursos visuales.

- [JSON](assets/JSON/) --> En ella incluimos todo el amacenamiento de datos para el juego.

- [Music](assets/music/) --> En ella incluimos todos los recursos de música y efectos de sonido.

---
# Documentación

El proyecto trata de crear un programa basado en el clásico juego del ahorcado.

En primer lugar hemos creado 3 modos de dificultad; fácil, normal, difícil y un modo personalizado llamado "Modo Samu", en este último empleamos para el juego tanto palabras relacionadas con el sector tech, como palabras repetidas en clase. Para cada uno de los modos de dificultad hemos utilizado un archivo JSON que actúa como base de datos tanto para las palabras a utilizar como para las pistas de las propias palabras.

El juego se desarrolla en un solo documento HTML, en el que vamos habilitando y deshabilitando las diferentes pantallas necesarias.

A lo largo de todo el juego el usuario puede interactuar con un menu de navegación en el que aparecen tres botones. Uno para alternar entre el modo claro y oscuro (este modo tiene alguna sorpresas preparadas), silenciar los efectos de sonido del juego y la opción de resetear la partida y volver al menú de selección de modo.

Una vez el usuario decide un modo de juego, el programa le lleva a la página principal. En ella puede encontrar un contador de puntuación, mediante el cuál podrá obtener dos puntos por cada letra acertada y perder uno por cada fallo, además en la parte central puede observar un botón el cuál representa la opción a la que hemos apodado "oneshot", clicando en él podrá resolver la palabra completa en un solo intento. En el caso de lograrlo, el usuario obtendrá 50 puntos. También en la parte superior derecha de la pantalla existe un botón mediante el que el usuario podrá obtener hasta un máximo de dos pistas, dependiendo del modo de dificultad elegido con anterioridad.

En la parte inferior de la pantalla aparece un teclado funcional, el cuál facilita la selección de caracteres a adivinar en la palabra principal del juego, situada justo encima de este. Para la generación de este teclado en pantalla se ha realizado una función en JavaScript de la siguiente manera:

Para generar las letras accedemos a los codigos ASCII que recorren de la letra 'a' a la 'z', una vez que los adquirimos utilizamos la funncion String.fromCharCode() para recuperar esas letras que ya tenemos y utilizamos este parametro para llamar a todas las letras y guardarlas en un nuevo botón. Este la envia cuando la llamamos y la muestra en el boton como texto. ahora debemos de pensar que el ASCII es un codigo anglosajón que no contiene nuestra muy querida 'ñ' así  que la añadimos llamándola cuando el bucle llegue a la posición de la "n" y la añadimos a continuación.

Además, el usuario también puede introducir las letras de la palabra a adivinar con el teclado. Estas dos opciones sustituyen el input requerido en un principio, tras ser consultado con el tutor técnico y haber recibido su aprobación.

Para la palabra a adivinar, hemos utilizado también una función para generarla en pantalla sustituida por guiones bajos, los cuáles se ocultan al adivinar la palabra en cuestión. Esto también ha sido realizado con una funcionalidad de JavaScript recogida junto al resto en el documento "functions.js".

En la parte central de la pantalla principal encontramos al protagonista de nuestro juego al que hemos bautizado como Manolito.
Manolito, es el hangman utilizado en este programa, el cuál tendrá un fatídico final en el caso de que el usuario llegue a cometer 6 errores.

Tanto Manolito, como su horca se han hecho íntegramente con CSS, y se pueden encontrar en el documento "style.css" y gracias a una funcionalidad de JavaScript podemos ver como se van mostrando las partes de su cuerpo en pantalla a medida que el jugador va cometiendo fallos.

Una vez finalizado el juego, se pueden dar dos casos. 

En primer lugar, si el jugador adivina la partida cumpliendo con los requisitos del juego, se mostrará una pantalla en la que se indica que ha ganado en la que tiene la opción de volver a comenzar y la de continuar. En el caso de seleccionar la segunda, el jugador puede volver a elegir modo de dificultad y seguir jugando contando con los puntos obtenidos en la partida anterior.

Si se diese la otra situación posible, y el jugador no lograse adivinar la palabra, este verá aparecer una pantalla de derrota donde se le muestran los puntos totales obtenidos y a partir de la cuál puede volver a comenzar a jugar, con la puntuación a cero.

Como mencionabamos antes, y para conmemorar la fiesta de Halloween, hemos decidio incluir un modo oscuro, en el que existen variaciones de estilo de las principales partes del programa. Para ello, hemos creado otro documento css, el cuál se activa al pulsar el botón de modo nocturno situado en la parte superior derecha.
