// ===============================
// Tanto lab4 como proyecto será resolver los 20 ejercicios.
// No olviden subir su laboratorio 3
// Tienen cada pregunta son su interpretación para resolver con código

// 1.
// Se tiene un listado de edades de distintos usuarios.
// Se requiere identificar cuáles de ellos ya pueden considerarse mayores de edad.
const edades1 = [12, 18, 25, 14, 30];
if (edades1.some(edad => edad >= 18)) {
  console.log("Hay usuarios mayores de edad.");
}
// 2.
// En un sistema numérico simple, se necesita obtener únicamente los valores pares
// para aplicarles un procesamiento adicional.
const numeros2 = [1, 2, 3, 4, 5, 6];
const pares = numeros2.filter(numero => numero % 2 === 0);
console.log(pares);

// 3.
// Una aplicación necesita identificar qué nombres superan cierta longitud
// para aplicarles un formato especial en la interfaz.
const nombres3 = ["Ana", "Luis", "Carlos", "Eva"];
if (nombres3.some(nombre => nombre.length > 4)) {
  console.log("Hay nombres que superan la longitud  de 4 caracteres.");
}
// 4.
// Se requiere generar una nueva lista donde todos los valores sean duplicados,
// ya que representan cantidades que deben ajustarse automáticamente.
const numeros4 = [2, 4, 6, 8];
const duplicado =numeros4.map(numero => numero * 2);
console.log(duplicado);

// 5.
// Dentro de un catálogo, se necesita ubicar un producto específico llamado "Mouse"
// para validar si existe en el sistema.
const productos5 = [
  { nombre: "Laptop" },
  { nombre: "Mouse" },
  { nombre: "Teclado" }
];
if (productos5.some(producto => producto.nombre === "Mouse")) {
    console.log("El producto Mouse existe en el catálogo.");
}
// 6.
// Se tiene un conjunto de notas de alumnos y se necesita determinar
// cuáles cumplen con la condición mínima de aprobación (nota ≥ 13).
const notas6 = [10, 14, 12, 18, 13];
const aprobados = notas6.filter(nota => nota >= 13);
console.log(aprobados);

// 7.
// En un sistema académico, se requiere agregar un estado a cada alumno,
// indicando si aprobó o desaprobó según su nota.
const alumnos7 = [
  { nombre: "Luis", nota: 15 },
  { nombre: "Ana", nota: 10 }
];
const alumnos_aprobados = alumnos7.map(alumno => {
    if (alumno.nota >= 13) {
        console.log(`${alumno.nombre} ha aprobado.`);
    }else
    {        console.log(`${alumno.nombre} ha desaprobado.`);
    }

console.log(alumnos_aprobados);


// 8.
// Se requiere obtener únicamente los productos cuyo precio sea accesible,
// definidos como aquellos menores a 100.
const productos8 = [
  { nombre: "Mouse", precio: 50 },
  { nombre: "Laptop", precio: 3000 }
];

const producto_accesible = productos8.filter(producto => producto.precio < 100);
console.log(producto_accesible);
// 9.
// De una lista de usuarios, se necesita mostrar únicamente aquellos que
// se encuentran activos dentro del sistema.
const usuarios9 = [
  { nombre: "Luis", activo: true },
  { nombre: "Ana", activo: false }
];
const existe = usuarios9.some(usuario => usuario.activo);
console.log(existe);

// 10.
// Se requiere calcular el total acumulado de una serie de valores numéricos,
// representando ingresos diarios.
// Restricción: usar reduce
const numeros10 = [10, 20, 30];
let numero_acumulado = 0
for (let i = 0; i < numeros10.length; i++) {
    numero_acumulado += numeros10[i];
}
console.log(numero_acumulado);

// 11.
// En un sistema de ventas, se necesita identificar los pedidos que cumplen
// dos condiciones: que hayan sido entregados y que superen un monto mínimo de 100.
// El objetivo es obtener los nombres de los clientes que cumplen ambas condiciones.
const pedidos11 = [
  { cliente: "Luis", total: 120, entregado: true },
  { cliente: "Ana", total: 80, entregado: true }
];
const nombre_pedido = pedidos11.filter(pedido => pedido.entregado && pedido.total > 100).map(pedido => pedido.cliente);
const existe_pedido = pedidos11.some(pedido => pedido.entregado && pedido.total > 100);
console.log("el usario ", nombre_pedido, " le fue  ", existe_pedido);
// 12.
// Cada usuario tiene un historial de compras.
// Se requiere calcular cuánto ha gastado cada uno en total.
const usuarios12 = [
  { nombre: "Luis", compras: [10, 20] },
  { nombre: "Ana", compras: [50, 50] }
];

const total_gastado = {};
for (const usario of usuarios12) {
    let total = 0;
    for (const compra of usario.compras) {
        total += compra;
    }
    total_gastado[usario.nombre] = total;
}
console.log(total_gastado);

// 13.
// Se necesita determinar cuál es el valor más alto dentro de un conjunto,
// ya que representa el mejor resultado obtenido.
const numeros13 = [5, 10, 2, 20];
let numero_mas_alto = numeros13[0];
for (let i = 1; i < numeros13.length; i++) {
    if (numeros13[i] > numero_mas_alto) {
        numero_mas_alto = numeros13[i];
    }
}
console.log(numero_mas_alto);


// 14.
// Un sistema presenta datos duplicados y se requiere limpiar la información,
// devolviendo un arreglo sin valores repetidos.
// Restricción: no usar Set
const numeros14 = [1, 2, 2, 3, 4, 4];
const numeros_unicos = [];
for (const numero of numeros14) {  
    if (!numeros_unicos.includes(numero)) {
        numeros_unicos.push(numero);
    }
}       
console.log(numeros_unicos);

// 15.
// Se requiere contar cuántos alumnos han aprobado,
// considerando como aprobados a quienes tienen nota ≥ 13.
// Restricción: no usar length directamente después de filter
const notas15 = [10, 14, 16, 8, 13];
const aprobados = alumnos.reduce((contador, alumno) => {
  return alumno.nota >= 13 ? contador + 1 : contador;
}, 0);

console.log(aprobados);

// 16.
// En una plataforma, se necesita obtener los nombres de los usuarios
// que son mayores de edad y además mostrarlos en mayúsculas
// para destacarlos visualmente.
const usuarios16 = [
  { nombre: "Luis", edad: 17 },
  { nombre: "Ana", edad: 20 }
];

const nombres_mayores_de_edad = usuarios16
  .filter(usuario => usuario.edad >= 18)
  .map(usuario => usuario.nombre.toUpperCase());    
    console.log(nombres_mayores_de_edad);

// 17.
// Se tiene un catálogo de productos y se necesita identificar
// cuál de ellos tiene el precio más alto para destacarlo como producto premium.
const productos17 = [
  { nombre: "Mouse", precio: 50 },
  { nombre: "Laptop", precio: 3000 },
  { nombre: "Monitor", precio: 800 }
];
let producto_premium = productos17[0];
for (let i = 1; i < productos17.length; i++) {
    if (productos17[i].precio > producto_premium.precio) {
        producto_premium = productos17[i];
    }
}
console.log(producto_premium);


// 18.
// Dado un conjunto de números, se requiere organizarlos en dos grupos:
// pares e impares, para analizarlos por separado.
const numeros18 = [1, 2, 3, 4, 5, 6];
const pares18 = numeros18.filter(numero => numero % 2 === 0);
const impares18 = numeros18.filter(numero => numero % 2 !== 0);
console.log("Pares:", pares18);
console.log("Impares:", impares18);

// 19.
// En un sistema de acceso, solo pueden ingresar usuarios que cumplan
// dos condiciones: ser mayores de edad y contar con una suscripción activa.
// Se requiere identificar quiénes cumplen con ambas reglas.
const usuarios19 = [
  { nombre: "Luis", edad: 20, suscripcion: true },
  { nombre: "Ana", edad: 16, suscripcion: true }
];
const usuarios_validos = usuarios19.filter(usuario => usuario.edad >= 18 && usuario.suscripcion);
console.log(usuarios_validos);

// 20.
// Se tiene un sistema de usuarios con historial de compras.
// Se requiere identificar únicamente a aquellos usuarios activos cuyo total
// de compras supere los 100.
// El resultado debe devolver un nuevo arreglo con objetos que incluyan
// el nombre del usuario y el total gastado.
// Restricción: usar filter + map + reduce
const usuarios20 = [
  { nombre: "Luis", activo: true, compras: [50, 60] },
  { nombre: "Ana", activo: true, compras: [20, 30] },
  { nombre: "Carlos", activo: false, compras: [100] }
];
const usuarios_filtrados = usuarios20.filter(usuario => usuario.activo && usuario.compras.reduce((total, compra) => total + compra, 0) > 100);
const resultado20 = usuarios_filtrados.map(usuario => {
  const total_gastado = usuario.compras.reduce((total, compra) => total + compra, 0);
  return { nombre: usuario.nombre, total_gastado };
});
console.log(resultado20);
