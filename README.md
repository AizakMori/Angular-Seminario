Datos solicitados:
Nombre y Apellido: Isaac Careaga Anta
DNI: 42041713
Email: icareagaanta@alumnos.exa.unicen.edu.ar
Sede: Tandil

La tematica elegida para el proyecto es sobre un juego con el mismo nombre de la pagina donde uno tiene que seleccionar diferentes monstruos invocandolos
es un tower defense, la idea del proyecto es simplemente seleccionar los monstruos disponibles y colocarlos en la instancia de inicio que seria el "carrito" en este caso

------  ROUTING y COMPONENTES  ------
.donde tenemos 2 componentes monster-container y summoners-about:
    .monster-container: incluye subcomponente monster-list y monster-select donde este ultimo seria el "carrito"
    .summoners-about: simplemente para cumplir con el par de secciones pedidos

-------     INTERFACE       ---------
.como interface esta monster en su respectiva carpeta que define el tipo con nombre, id , quantity, etc

--------- CONTROL DE FLUJO Y COMUNICACION ENTRE COMPONENTES ------

.monster-list utiliza @for y un @if para la tabla dinamica
.monster-list tiene un subcomponente input-integer con el cual se comunica para seleccionar la cantidad de monstruos por @input y @output
.monster-list y monster-select utilizan un servicio monster-service que contiene el mock de monstruos base y tiene la logica para mover los elementos entre componentes

disculpen si es poco agradable a la vista no soy muy bueno con css