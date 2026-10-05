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

function formatMoney(importe){

const formatter = new Intl.NumberFormat(
    TIENDA.idioma,
    {
        style: 'currency',
        currency: TIENDA.divisa
    }
);
 
return formatter.format(importe);

}

function escapeHtml(value){
    return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')  
}

function buscarServicio(id){
    return SERVICIOS.find(
        (servicio) => servicio.id === id
    );
}

function renderizarServicios(){

    let cardsHtml = '';
    let optionHtml = '';

    for (const servicio of SERVICIOS){
     
        cardsHtml += `
            <article class="article">
            <h3>${servicio.name}</h3>
            <p>${servicio.duracion} min</p>
            <span class="price">
                ${formatMoney(servicio.precio)}
            </span>
            </article>
        `
}

}