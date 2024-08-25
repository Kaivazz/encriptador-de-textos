#Encriptador de Textos - Challenge 1 - Alura. 
------------------------------------------------------------------------

El presente proyecto está dirigido a poner en marcha un encriptador de textos que tengas las siguientes características:
  -Dos areas principales, una para ingreso de texto y otra para mostrar mensaje encriptado/desencriptado, dos botones para las funciones de encriptar y desencriptar a elección del usuario y el resultado debe mostrarte en pantalla.
Tambien se pide el extra de un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

------------------------------------------------------------------------
Lenguajes utilizados: 

HTML, CSS y JavaScript (Leer el easter egg al final del resumen de esta hoja). 

-----------------------------------------------------------------------
##Resumen del HTML

Este es un código HTML para una página web que parece ser una herramienta de encriptación y desencriptación de textos. A continuación, te presento un resumen de la estructura y contenido de la página:

Sección de cabecera

La página comienza con una declaración de tipo de documento HTML5 y especifica el idioma como español (Chile).
Se incluyen metadatos sobre la página, como el conjunto de caracteres, la compatibilidad con Internet Explorer y la configuración de la ventana de visualización.
Se enlazan archivos de estilo y fuentes externas, como Google Fonts y Font Awesome.
Se incluye un título para la página: "Encriptador de Textos".

Sección de cuerpo

La sección de cuerpo se divide en tres partes: <header>, <main> y <footer>.
<header>: contiene una imagen de logo de Alura.
<main>: contiene dos secciones: <section class="ingresa"> y <section class="textoRevelado">.
<section class="ingresa">: contiene un área de texto para ingresar el texto a encriptar o desencriptar, un párrafo con información sobre las reglas de encriptación y dos botones para encriptar y desencriptar.
<section class="textoRevelado">: contiene un área de texto para mostrar el texto encriptado o desencriptado, un párrafo con un mensaje de alerta y un botón para copiar el texto.
<footer>: contiene un título, dos enlaces a redes sociales (LinkedIn y GitHub) y un aviso de derechos de autor.

En resumen, esta página web ofrece ser una herramienta básica para encriptar y desencriptar textos con una interfaz de usuario simple.

-----------------------------------------------------------------------------------------
##Resumen de la hoja de estilos 

Importación de fuente y variables:

Se importa la fuente "Lexend Zetta" desde Google Fonts.
Se definen variables para los colores utilizados en la página.

Estilos generales:

Se establecen estilos generales para todos los elementos de la página, como margin, padding, box-sizing, font-family, font-weight y line-height.

Estilos para el cuerpo -body-de la página:

Se establecen estilos para el cuerpo de la página, como display grid, grid-template-columns, grid-auto-flow, background-color y max-height.

Estilos para header, main y secciones:

Se establecen estilos para header, main y secciones como padding, margin, display, flex-direction, gap, justify-content, etc.

Estilos para inputs y botones:

Se establecen estilos para inputs y botones como width, height, padding, text-transform, font-size, border, background-color, color, cursor, etc.

Estilos para "textoRevelado" y "mensaje":

Se establecen estilos para texto revelado y mensaje como display, flex-direction, justify-content, text-align, width, height, padding, border-radius, etc.

Estilos para footer:

Se establecen estilos para footer como display grid, grid-template-rows, width, font-size, margin-top, justify-content, etc.

Media queries:

Se establecen media queries para adaptar los estilos a diferentes tamaños de pantalla:
Para pantallas pequeñas (max-width: 480px).
Para pantallas medianas (min-width: 481px y max-width: 768px).

En resumen, este código CSS establece estilos generales para la página, y luego aplica estilos específicos para cada sección de la página, como header, main, secciones, inputs, botones, "textoRevelado", mensaje y footer. También se utilizan media queries para adaptar los estilos a diferentes tamaños de pantalla.

-----------------------------------------
##Resumen de JavaScript

La página de JavaScript, se encarga de la funcionalidad de encriptación, desencriptación y copiado de texto.
Variables y selección de elementos

Se definen variables para seleccionar elementos del DOM: textArea, mensaje, alerta e instrucciones.
Se define una matriz matrizCodigo que contiene las "llaves" de encriptación.

Funciones

encriptar(stringEncriptada): función que encripta un texto utilizando la matriz matrizCodigo. Convierte el texto a minúsculas y reemplaza cada letra con su correspondiente código de encriptación.
btnEncriptar(): función que se llama cuando se hace clic en el botón "Encriptar". Verifica si el área de texto no está vacía, encripta el texto y lo muestra en el área de mensaje.
desencriptar(stringDesencriptada): función que desencripta un texto utilizando la matriz matrizCodigo. Convierte el texto a minúsculas y reemplaza cada código de encriptación con su correspondiente letra.
btnDesencriptar(): función que se llama cuando se hace clic en el botón "Desencriptar". Verifica si el área de texto no está vacía, desencripta el texto y lo muestra en el área de mensaje.
copiarMensaje(): función que se llama cuando se hace clic en el botón "Copiar". Copia el texto del área de mensaje al portapapeles.
Easter Egg


En resumen, el codigo define funciones para encriptar y desencriptar textos utilizando una matriz de "llaves" de encriptación, y también incluye una función para copiar el texto encriptado o desencriptado al portapapeles. 

///Easter egg:
Se define un texto oculto en la consola que contiene un mensaje para descifrar, está empleado para que se imprima en la consola, aunque muy bien podría leerse en este documento, pero, ¿Donde esta la diversion de esto? 

-----------------------------------------------------

Soy estudiante del Curso G7 de Alura Latam junto a Oracle One y con este proyecto, he puesto en práctica muchos de los conocimientos que logré ver en los distintos videos del curso en cuestión, así como otros videos y material entregado por los instructores, apoyo con los compañeros de Discord del curso, documentación y videos varios de la comunidad disponibles de manera libre en internet para algunas preguntas en programación. 





