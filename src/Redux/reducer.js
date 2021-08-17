import {
    ADD_TODO,
    DELETE_TODO 
} from './type'

const initState = {
    Todo:[ ]
}

const  Reducer = (state=initState , action ) =>{
        switch (action.type) {
            case ADD_TODO:
                return { ...state , Todo:[...state.Todo , {value : action.payload.value , id : action.payload.id }  ]}
                break;

            case DELETE_TODO:{
                let todo = state.Todo.filter(item=> item.id !== action.id    )
                 return { ...state , Todo:todo }
                break;
            }
               

            default:
                return state 
                break;
        }
}

export default Reducer 