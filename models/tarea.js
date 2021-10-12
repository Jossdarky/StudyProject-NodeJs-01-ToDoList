const { v4: uuidv4 } = require('uuid');

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor( descripcion ){
        this.id = uuidv4();
        this.desc = descripcion;
        this.completadoEn = null;
    }

    set id(id){
        this.id = id;
    }
    
    set completadoEn(completadoEn){
        this.completadoEn = completadoEn;
    }
}

module.exports = Tarea;