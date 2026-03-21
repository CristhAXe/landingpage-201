# 🖥️ Landing Page - Enter Tech School Tarea 01

## 📌 Introducción

Esta landing page fue creada **con la ayuda de Copilot y ChatGPT**, optimizando la visibilidad del código e integrando funciones como estilos directamente en la página.

---

## ✏️ Boceto 1.2

* Contiene **6 perfumes**, cada uno con botón de compra y precio, que redirige a un número telefónico.
* Utiliza **style.css responsive** basado en `grid-template-areas`.
* Incluye **pasarela de pagos simulada**.
* Se añadió un **home** y se integraron **Tailwind y Bootstrap** para estilos y grid.
* Se modificaron todos los archivos usando ese contexto.
* Se actualizaron y crearon ramas de Git como `Bootstrap` y `Tailwind`.

---

## 🤖 Uso de IA

* Se utilizó **ChatGPT y Copilot** para modificar contenido en `.CSS` y documentación.
* Se ayudó especialmente con **styles.css** e **index.html**, integrando contenido previamente analizado y comprendido.

---

## 🎨 Tailwind CSS

**Se utilizó para:**

* Diseño del **hero** (imagen principal)
* Layouts con **flexbox y grid**
* Estilos rápidos sin escribir CSS personalizado
* Creación de componentes: testimonios, navegación, secciones informativas

**Clases importantes usadas:**

**Layout**

* `flex` → organiza elementos en fila o columna
* `items-center` → centra verticalmente
* `justify-center` → centra horizontalmente
* `grid` → sistema de columnas

**Espaciado**

* `p-6` → padding
* `m-10` → margen
* `gap-6` → espacio entre elementos

**Tamaños**

* `w-20 h-20` → ancho y alto
* `max-w-3xl` → ancho máximo
* `h-screen` → alto de pantalla

**Estilos visuales**

* `bg-black` / `bg-white` → colores de fondo
* `text-white` → color de texto
* `rounded-lg` → bordes redondeados
* `shadow-md` → sombras

**Imágenes**

```css
bg-[url('img/perfum.png')] bg-cover bg-center
```

* `bg-cover` → cubre todo el contenedor
* `bg-center` → centra la imagen

**Overlay (degradado)**

```css
bg-gradient-to-r from-black/80 via-black/40 to-transparent
```

* Mejora la visibilidad del texto sobre imágenes

**Efectos avanzados**

* `hover:shadow-xl` → animación al pasar el mouse
* `transition` → suaviza cambios
* `scale-105` → efecto zoom

---

## 🅱️ Bootstrap

**Se utilizó principalmente para:**

* Formularios de compra
* Botones de acción (comprar / WhatsApp)
* Tarjetas (**cards**)
* Organización del contenido

**Sistema de grid**

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Contenido</div>
    <div class="col-md-6">Contenido</div>
  </div>
</div>
```

* `container` → centra el contenido
* `row` → fila
* `col` → columnas automáticas
* `col-md-6` → ocupa la mitad en pantallas medianas

**Componentes usados**

* **Cards**

```html
<div class="card shadow-sm">
  <div class="card-body">
    <h5 class="card-title">Datos de compra</h5>
  </div>
</div>
```

* **Botones**

```html
<button class="btn btn-primary">Finalizar compra</button>
```

Tipos:

* `btn-primary` → acción principal

* `btn-success` → acción positiva (WhatsApp)

* **Formularios**

```html
<input class="form-control">
<select class="form-select">
```

* Inputs estilizados automáticamente
* Diseño consistente y fácil de implementar

**Clases utilitarias útiles**

* `w-100` → ancho completo
* `mt-3` → margen superior
* `mb-3` → margen inferior

Ejemplo:

```html
<button class="btn btn-primary w-100 mt-3">Comprar</button>
```
