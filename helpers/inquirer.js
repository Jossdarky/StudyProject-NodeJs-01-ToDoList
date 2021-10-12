const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
require('colors');

const inQuirerMenu = async () => {
    console.clear();
    console.log('========================'.green);
    console.log('  Seeleccione una opcion'.green);
    console.log('========================\n'.green);

    const preguntas = [
        {
            type: 'list',
            name: 'opcion',
            message: 'Que desea hacer?',
            loop: false,
            choices: [{
                value: '1',
                name: `${'1.'.green} Crear tarea`
            }, {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            }, {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            }, {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            }, {
                value: '5',
                name: `${'5.'.green} Completar tareas(s)`
            }, {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            }, {
                value: '0',
                name: `${'0.'.green} Salir \n`
            },
            ]
        }
    ];

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const obtenerNuevaTarea = async (mensaje) => {
    const { entrada } = await inquirer.prompt([
        {
            type: 'input',
            name: 'entrada',
            message: mensaje,
            validate(value) {
                if (value.length == 0) {
                    return 'Por favor ingrese un valor.';
                } else {
                    return true;
                }
            }
        }
    ]);
    console.log(entrada);
    return entrada;
}

const completarTareas = async (tareasPendientes = []) => {
    /**
     * {
            value: '1',
            name: `${'1.'.green} Crear tarea`
        }
     */
    const options = tareasPendientes.map(({ id, desc }) => {
        return {
            value: id,
            name: desc
        };
    });
    const tareasSeleccionadas = [
        {
            type: 'checkbox',
            name: 'opcion',
            message: 'Que desea hacer?',
            loop: false,
            choices: options
        }
    ]
    const { opcion } = await inquirer.prompt(tareasSeleccionadas);
    return opcion;
}


const pausa = async () => {
    const { continuar } = await inquirer.prompt([
        {
            type: 'input',
            name: 'continuar',
            message: `Presione ${'ENTER'.green} para continuar.`
        }
    ]);
    return continuar;
}

const imprimirTareas = async(tareas =[])=>{
    console.log(tareas);
        tareas.forEach( key => {


            const {desc, completadoEn} = this._listado[key];
            const estadoCompletado = (completadoEn) 
                ? true 
                : false;
                switch (estado){
                    case '0':
                        if(!estadoCompletado){
                            console.log(`${(contador+'.').green} ${desc} `);
                            contador++;
                        }
                        break;
                    case '1':
                        if(estadoCompletado){
                            console.log(`${(contador+'.').green} ${desc} `);
                            contador++;
                        }
                        break;
                    case '2':
                        console.log(`${(contador+'.').green} ${desc} :: ${estadoCompletado? 'COMPLETADO'.green : 'PENDIENTE'.red}`);
                        contador++;
                        break;
                }
            
        })
        console.log();
}

module.exports = { inQuirerMenu, pausa,imprimirTareas,  obtenerNuevaTarea, completarTareas }