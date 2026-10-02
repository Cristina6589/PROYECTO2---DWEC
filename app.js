'use strict';

const TIENDA = {

    nombre: 'Peladillos Eladio',
    divisa: 'EUR',
    idioma: 'es-ES',
    edadMinima: 16
}

const SERVICIOS = [

    {
        id: 'clasico',
        name: 'Corte clásico',
        precio: 12,
        duracion: 25
    },

    {
        id: 'corte_tinte',
        name: 'Corte y tinte',
        precio: 20,
        duracion: 45
    },

    {
        id: 'barba',
        name: 'Barba',
        precio: 8.50,
        duracion: 15
    },  

];

const EXTRAS = {

    lavado : {
        name: 'Lavado y masaje capilar',
        precio: 10,
    },
    
    cejas : {
        name: 'Depilación de cejas',
        precio: 5,
    },
};

const DESCUENTO_MIEMBROs = 0.05;
const CODIGO_CUPON = 'ELADIO10';
const DESCUENTO_CUPON = 0.10;   

const serviceGrid = document.querySelector('#serviceGrid');  
const serviceSelect = document.querySelector('#serviceSelect');
const bookingForm = document.querySelector('#bookingForm');
const ticketContent = document.querySelector('#ticketContent');
const formMessage = document.querySelector('#formMessage');

function formatearPrecio(importe) {

    Intl.NumberFormat

}