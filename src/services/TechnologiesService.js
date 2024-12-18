import technologiesData from "assets/data/technologies.json";
import { Technology } from "models/Technology";
export const getTechnologies = ()=>{
    return technologiesData.map(Technology.fromJson);
}
export const finOneTechnologyById = (id)=>{
    const techonology = technologiesData.find((technology)=>technology.id==id);
    return techonology ? Technology.fromJson(techonology): new Technology();
}