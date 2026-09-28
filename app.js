'use strict';

const nombrePelu = 'Peladillos Eladio';
console.log(nombrePelu);

let clientesAtendidos = 0;
console.log('Clientes atendidos: ', clientesAtendidos);

const precioCorte = 8;
const precioBarba = 8.50;

console.log('Precio corte: ', typeof precioCorte);
console.log('Precio barba: ', typeof precioBarba);

const nombreCliente = 'Pepito Perez';
const servicio = 'Corte y barba';

console.log('Nombre cliente: ', nombreCliente);
console.log('Servicio: ', servicio);

const tieneCita = true;
const tieneDescuento = false;

console.log('Tiene cita: ', typeof tieneCita);
console.log('Tiene descuento: ', typeof tieneDescuento);

let horaCita;
console.log('Hora cita: ', horaCita);
console.log('Hora cita: ', typeof horaCita);

const telCliente = null;
console.log('Teléfono cliente: ', telCliente);
console.log('Teléfono cliente: ', typeof telCliente);

const serviciosDisponibles = ['Corte clásico', 'Corte y tinte', 'Barba', 'Barba y bigote'];
console.log('Servicios disponibles: ', serviciosDisponibles);
console.log('Servicios disponibles: ', typeof serviciosDisponibles);

console.log('Es un array: ', Array.isArray(serviciosDisponibles));

const cliente = {

    nombre: 'Ezequiel',
    edad: 30,
    tieneCita: true
};

console.log('Cliente: ', cliente);
console.log('Cliente: ', typeof cliente);
console.log('Cliente: ', cliente.nombre);

let dato = 25;
console.log('Dato: ', dato);
console.log('Tipo de dato: ', typeof dato); 

dato = 'Romualdo';
console.log('Dato: ', dato);
console.log('Tipo de dato: ', typeof dato);

dato = true;
console.log('Dato: ', dato);
console.log('Tipo de dato: ', typeof dato);

const precio1 = 20;
const precio2 = 30;
const precio3 = '4';

console.log ('Suma: ', precio1 + precio2);
console.log ('Suma2: ', precio1 + precio2 + precio3); 
console.log ('Suma3: ', precio3 + precio2 + precio1); 

console.log ('Multiplicación: ', precio1 * precio2);
console.log ('División: ', precio1 / precio2);
console.log ('Módulo: ', precio1 % precio2);
console.log ('Multiplicación: ', precio3 * precio2);
console.log ('Módulo: ', precio1 % precio3);

const edad = 20;

console.log (edad == 18);
console.log (edad < 18);
console.log (edad > 18);
console.log (edad <= 18);
console.log (edad >= 18);

console.log (edad === 18);
console.log (edad < 18);
console.log (edad > 18);