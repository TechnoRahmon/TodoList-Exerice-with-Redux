import React from 'react'
import {useSelector , useDispatch  } from 'react-redux'

import { DeleteTodo } from './../Redux/action'

export default function DisplayTodoList() {

    const dispatch = useDispatch();
    // get the Todo array from redux
    const { Todo } = useSelector(state=>state )
    console.log(Todo);


    return (
        <div>

            <div className="list-group mt-4">

            
                {Todo.length?Todo.map(item=>
                    <div key={item.id}>
                        <a href="#" className="list-group-item list-group-item-action d-flex
                        justify-content-between"  >
                            <p className="text-start text-break  me-0 mb-0">{item.value}</p>  

                        <span className="float-end fs-5 text-danger ms-3" 
                        onClick={()=>{dispatch(DeleteTodo(item.id)) } }> x </span>
                        </a>
                       
                    </div>
                ) : <p className="bg-light text-danger text-start p-2 mt-3">Can't find any Todo </p>  }
           
           </div>
        </div>
    )
}
