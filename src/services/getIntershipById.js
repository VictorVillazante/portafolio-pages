import intershipsData from '../assets/data/enterprises.json';
export const getIntershipById=(id)=>{
    const interships=intershipsData["interships"];
    const intershipFound=interships.find((intership)=>intership.id===id);
    return intershipFound;
}