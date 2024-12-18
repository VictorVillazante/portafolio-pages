import proyectosData from "assets/data/proyectos.json";
import { Proyecto } from "models/Proyecto";
export const getProyectos = ()=>{
    return proyectosData.map(Proyecto.fromJson);
}