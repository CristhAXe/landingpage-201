# landingpage-201 Enter tech School Tarea - 01

## Introduccion
Esta landing page se realizo con la con la ayuda, de Copilot y Chatgpt solamente mejorando la visibilidad del codigo y integrar funciones como estilos dentro de la pagina.

## Boceto 1.2
- Cuenta actualmente con 6 perfumes, con su boton de comprar y precioque te manda a comprar por medio de un numero telefonico.
- Tiene modelo style.css responsive y basado en grid-template-areas: 
- Se incluyo pasarela de pagos simuladas 
- Se incluyo un home 
- Se incluyo Tailwind y Boostrap para estilos y grid
  - Se modifico todos los archivos usando ese contexto 
- Sea actualizo y se creo ramas de git como Boostrap y Tailwind

## IA
Se uso Chatgpt y copilot, para modificar contenido de .CSS, tambien la documentacion y fue una ayuda en el contenido de styles.css y index.html , sobretodo se uso para agregar contenido previamente analizado y comprendido.
## Tailwind
🚀 Uso en el proyecto

Se utilizó para:

Diseño del hero (imagen principal)

Layouts con flexbox y grid

Estilos rápidos sin escribir CSS personalizado

Creación de componentes como:

Testimonios

Navegación

Secciones informativas

🧱 Clases importantes usadas
Layout

flex → organiza elementos en fila o columna

items-center → centra verticalmente

justify-center → centra horizontalmente

grid → sistema de columnas

Espaciado

p-6 → padding

m-10 → margen

gap-6 → espacio entre elementos

Tamaños

w-20 h-20 → ancho y alto

max-w-3xl → ancho máximo

h-screen → alto de pantalla

🎨 Estilos visuales

bg-black / bg-white → colores de fondo

text-white → color de texto

rounded-lg → bordes redondeados

shadow-md → sombras

🖼️ Imágenes
bg-[url('img/perfum.png')] bg-cover bg-center

bg-cover → cubre todo el contenedor

bg-center → centra la imagen

🌫️ Overlay (degradado)
bg-gradient-to-r from-black/80 via-black/40 to-transparent

Usado para mejorar la visibilidad del texto sobre imágenes.

✨ Efectos avanzados

hover:shadow-xl → animación al pasar el mouse

transition → suaviza cambios

scale-105 → efecto zoom🚀 Uso en el proyecto

Se utilizó para:

Diseño del hero (imagen principal)

Layouts con flexbox y grid

Estilos rápidos sin escribir CSS personalizado

Creación de componentes como:

Testimonios

Navegación

Secciones informativas

🧱 Clases importantes usadas
Layout

flex → organiza elementos en fila o columna

items-center → centra verticalmente

justify-center → centra horizontalmente

grid → sistema de columnas

Espaciado

p-6 → padding

m-10 → margen

gap-6 → espacio entre elementos

Tamaños

w-20 h-20 → ancho y alto

max-w-3xl → ancho máximo

h-screen → alto de pantalla

🎨 Estilos visuales

bg-black / bg-white → colores de fondo

text-white → color de texto

rounded-lg → bordes redondeados

shadow-md → sombras

🖼️ Imágenes
bg-[url('img/perfum.png')] bg-cover bg-center

bg-cover → cubre todo el contenedor

bg-center → centra la imagen

🌫️ Overlay (degradado)
bg-gradient-to-r from-black/80 via-black/40 to-transparent

Usado para mejorar la visibilidad del texto sobre imágenes.

✨ Efectos avanzados

hover:shadow-xl → animación al pasar el mouse

transition → suaviza cambios

scale-105 → efecto zoom

## Bootstrap
🚀 Uso en el proyecto

Se utilizó principalmente para:

Formularios de compra

Botones de acción (comprar / WhatsApp)

Tarjetas (cards)

Organización del contenido

🧱 Sistema de Grid

Bootstrap trabaja con un sistema de 12 columnas:

<div class="container">
  <div class="row">
    <div class="col-md-6">Contenido</div>
    <div class="col-md-6">Contenido</div>
  </div>
</div>

container → centra el contenido

row → fila

col → columnas automáticas

col-md-6 → ocupa la mitad en pantallas medianas

👉 Se adapta automáticamente a diferentes tamaños de pantalla.

🧩 Componentes usados
🧾 Card
<div class="card shadow-sm">
  <div class="card-body">
    <h5 class="card-title">Datos de compra</h5>
  </div>
</div>

Estructura lista para contenido

Usada en formularios

🔘 Botones
<button class="btn btn-primary">Finalizar compra</button>

Tipos usados:

btn-primary → acción principal

btn-success → acción positiva (WhatsApp)

👉 Incluyen estilos, padding y hover automáticamente.

🧍 Formularios
<input class="form-control">
<select class="form-select">

Inputs estilizados automáticamente

Diseño consistente

Fácil de implementar

🎨 Clases utilitarias útiles
w-100 → ancho completo  
mt-3 → margen superior  
mb-3 → margen inferior  

Ejemplo:

<button class="btn btn-primary w-100 mt-3">


   
