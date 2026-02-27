/* 
   Definición de variables que referencian elementos del HTML.
   Se obtienen mediante su identificador (id) para poder manipularlos dinámicamente.
*/

/* Variable que almacena el botón interruptor */
const boton = document.getElementById('interruptor');

/* Variable que referencia el cuerpo completo del documento */
const cuerpo = document.body;

/* Variable que almacena el ícono del sol */
const sol = document.getElementById('icono-sol');

/* Variable que almacena el ícono de la luna */
const luna = document.getElementById('icono-luna');

/* Variable que almacena el elemento donde se mostrará el mensaje */
const mensaje = document.getElementById('mensaje');


/* 
   Se define un evento de escucha (event listener) sobre el botón.
   Este evento se activa cuando el usuario hace clic.
*/
boton.addEventListener('click', () => {

    /* 
       Alterna (activa o desactiva) la clase 'modo-noche' en el body.
       Si no existe la clase, la agrega.
       Si ya existe, la elimina.
    */
    cuerpo.classList.toggle('modo-noche');

    /* 
       Verifica si el body contiene actualmente la clase 'modo-noche'.
       Esto determina si el sistema está en modo noche.
    */
    if (cuerpo.classList.contains('modo-noche')) {

        // Oculta el ícono del sol agregando la clase 'oculto'
        sol.classList.add('oculto');

        // Muestra el ícono de la luna eliminando la clase 'oculto'
        luna.classList.remove('oculto');
        
        // Cambia el texto del botón
        boton.innerText = "Hacer de Dia"; 

        // Cambia el mensaje mostrado en pantalla
        mensaje.innerText = "Te ha hablado Dross y te deseo Buenas Noches";

        // Muestra un mensaje en la consola del navegador
        console.log("Iniciando transición al anochecer..."); 

    } else {

        /* 
           Si no está en modo noche, entonces está en modo día.
           Se ejecutan las acciones inversas.
        */
        
        // Muestra el ícono del sol
        sol.classList.remove('oculto');

        // Oculta el ícono de la luna
        luna.classList.add('oculto');
        
        // Cambia el texto del botón
        boton.innerText = "Hacer de Noche";

        // Cambia el mensaje mostrado en pantalla
        mensaje.innerText = "¡Buenos dias estrellitas, la tierra les dice hola!";

        // Mensaje informativo en consola
        console.log("Iniciando transición al amanecer...");
    }
});
