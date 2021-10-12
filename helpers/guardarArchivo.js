const fs = require('fs');
const Tareas = require('../models/tareas');

const directorio = './db/';
const archivo = directorio+'data.json';

const crearDirectorio = () =>{
    if (!fs.existsSync(directorio)){
        fs.mkdirSync(directorio);
    }
}

const guardarDB = async( data) => {
    
    crearDirectorio();
    try {
        fs.writeFileSync(archivo, JSON.stringify(data));
    } catch (error) {
        console.log(`ERROR AL GUARDAR LA TAREA: ${error}`.error);
    }
}

const cargarBD  = async() => {
    let tareas = new Tareas();
    if (!fs.existsSync(archivo)){
        return tareas;
    }
    tareas.cargarTareas(JSON.parse(fs.readFileSync(archivo, {encoding: 'utf-8'})));
    return tareas;
}


module.exports = {guardarDB, cargarBD};