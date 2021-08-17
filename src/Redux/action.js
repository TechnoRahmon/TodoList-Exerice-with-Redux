
import {
    ADD_TODO,
    DELETE_TODO 
} from './type'
import {GenerateID } from './../util/GenerateID'

// { value:'' , id :354253453 }
export const NewTodo =(todo)=>{
        // generate ID 
        const ID =  GenerateID()
        todo.id = ID ; 
        return (dispatch)=>{
            dispatch({ type : ADD_TODO , payload : todo    })
        }

}



export const DeleteTodo = (id)=>{
    return (dispatch)=>{

         dispatch({ type:DELETE_TODO , id })
    }
       
}