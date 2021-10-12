require('colors');

const { inQuirerMenu, pausa,imprimirTareas, obtenerNuevaTarea, completarTareas } = require('./helpers/inquirer');
const { guardarDB, cargarBD } = require("./helpers/guardarArchivo");
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {
let opt = '';
let tareas = await cargarBD();
    do{
        opt = await inQuirerMenu();
        switch(opt){
            case '1':
                let nuevaTarea = await obtenerNuevaTarea(`Descripcion: `);
                tareas.agregarTarea(nuevaTarea);
                //await guardarDB(tareas.listadoArreglo);
                break;
            case '2':
                imprimirTareas(tareas.tareasPorEstado('PENDIENTE'));
                await pausa();
                break;
            case '3':
                imprimirTareas(tareas.tareasPorEstado('COMPLETADO'));
                await pausa();
                break;
            case '4':
                imprimirTareas(tareas.tareasPorEstado('TODAS'));
                await pausa();
                break;
            case '5':
                await completarTareas(tareas.tareasPorEstado('PENDIENTE'));
                await pausa();
                break;
            case '6':
                break;
            case '0':
                await pausa();
                break;
        }
    }while(opt !== '0' );

}

main();