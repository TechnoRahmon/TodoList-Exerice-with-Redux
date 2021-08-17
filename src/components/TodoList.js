import React from 'react'
import AddTodoList from './AddTodoList'
import DisplayTodoList from './DisplayTodoList'


export default function TodoList() {
    return (
        <div className="row mt-5">
            <div className="col-4 offset-7 mt-5">
                <h2 className="display-4 bg-warning py-2 text-dark mb-2">Todo List App</h2>
                <AddTodoList/>
                <DisplayTodoList/> 
            </div>
                  
        </div>
    )
}
