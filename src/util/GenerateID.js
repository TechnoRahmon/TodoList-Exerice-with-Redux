import {v4 as uuidv4 } from 'uuid'


export const GenerateID = ()=>{
    const ID = uuidv4(); 
    return ID;
}