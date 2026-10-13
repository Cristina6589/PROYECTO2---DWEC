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
        `;

        optionHtml += `
            <option value="${servicio.id}">
                ${servicio.name} - ${formatMoney(servicio.precio)}
            </option>
        `;

        serviceGrid.innerHTML = cardsHtml;
        serviceSelect.innerHTML = optionHtml;
}

}

function renderizarServiciosCreate(){


    for (const servicio of SERVICIOS){

        const article = document.createElement('article');
        article.classList.add('card');

        const title = document.createElement('h3');
        title.textContent = servicio.name;

        const duracion = document.createElement('p');
        duracion.textContent = `${servicio.duracion} min`;

        const precio = document.createElement('span');
        precio.classList.add('price');
        precio.textContent = formatMoney(servicio.precio);

        article.append(
            title, 
            duracion, 
            precio 
        );

        serviceGrid.append(article);
}

}

function leerFormulario(){

    const datos = new FormData(bookingForm);

    const nombre = String(datos.get('clientName') ?? '').trim();

    const edad = Number(datos.get('age'));

    const extras = datos 
    .getAll('extras')
    .map(String);

    const coupon = String(
        datos.get('coupon') ?? ''
    )
        .trim()
        .toUpperCase();

    const servicioId= String(
        datos.get('service') ?? ''
    );

    const dia= String(
            datos.get('day') ?? ''
    );

    const esMiembro = datos.get('member') === 'on';

    return {

        nombre,
        edad,
        servicioId,
        dia,
        extras,
        coupon,
        esMiembro

    };
    
}

function validarReserva(reserva){

    const errores = [];

    if (!reserva.nombre){
        errores.push('El nombre es obligatorio');
    }

    if (Number.isNan(reserva.edad)){
        errores.push('La edad debe ser un número');
    } else if (
        reserva.edad <TIENDA.edadMinima || reserva.edad > 120
    ) {
        errores.push(`La edad debe ser un número entre ${TIENDA.edadMinima} y 120`);
    }

    if (!comprobarServicio(reserva.servicio)){
        errores.push('El servicio seleccionado no es válido');
    }

    if (!reserva.dia){
        errores.push('Selecciona un día para la reserva');
    }   

    return errores;
}

function comprobarServicio(id){
   return SERVICIOS.find(
        servicio => servicio.id === id
   ); 
}

function calcularReserva(reserva){
    
    const servicio = buscarServicio(reserva.servicioId);

    let subtotal = servicio?.precio ?? 0;
}

    

