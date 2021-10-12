const Tarea = require('./tarea');

class Tareas {
    /**
     * [{"id":"0fd","desc":"Tarea 1","completadoEn":null},{"id":"8ecc2","desc":"Tarea 2","completadoEn":null}]
     */
    _listado = {};

    constructor(){
        this._listado = {};
    }

    agregarTarea = ( descripcionNuevaTarea ) => {
        let nuevaTarea = new Tarea(descripcionNuevaTarea);
        this._listado[nuevaTarea.id] = nuevaTarea;
    }

    cargarTareas = ( jsonData = [] ) => {
        jsonData.forEach( item =>{
            this._listado[item.id] = item;
        })
    }

    /**
     * 
     * @param {*} estado 0 = pendientes, 1 = completadas, 2 = todas
     */
     tareasPorEstado = (estado = 'TODAS') => {
        const listado = [];
        console.log(this._listado);
        Object.keys(this._listado).forEach( key => {
            const {desc, completadoEn} = this._listado[key];
            const estadoCompletado = (completadoEn) 
                ? true 
                : false;
            switch (estado){
                case 'PENTIENTE':
                    if(!estadoCompletado){
                        listado.push(this._listado[key]);
                    }
                    break;
                case 'COMPLETADO':
                    if(estadoCompletado){
                        listado.push(this._listado[key]);
                    }
                    break;
                case 'TODAS':
                    console.log(this._listado[key]);
                    listado.push(this._listado[key]);
                    break;
            }
        })
        console.log(listado);
        return listado;
    }

    get listadoArreglo(){
        const listado = [];

        Object.keys(this._listado).forEach( key => {
            listado.push(this._listado[key]);
        })

        return listado;
    }
}

module.exports = Tareas;