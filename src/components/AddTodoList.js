import React , {useState  }from 'react'
import { useDispatch } from 'react-redux'
import { NewTodo } from './../Redux/action'

export default function AddTodoList() {

    const dispatch =  useDispatch();
    const [task , setTask ] = useState('');
    const [ error , setError ] = useState('');

    const Styles = {
        danger : {
            border:'1px solid red'
        },
        Normal :{
            border:'1px solid rgba(9, 9, 14, 0.589)'
        }
        
    }

    const inputKeyDown =(e)=>{
        if (task && e.key==='Enter'){ 
            dispatch(NewTodo({ value : task }))
                setTask('');
        }else if (!task ){
           setError('Enter Your Task Please!') 
        }
    }

    return (
        <div>
           <input type="text" placeholder="New Task" value={task} className="form-control"
           style={error? Styles.danger : Styles.Normal }
            onChange={(e)=>{setError(''); setTask(e.target.value)}}
            onKeyDown={inputKeyDown}
            />
           {error ? <p className="text-start text-danger p-2 mb-0">{error}</p> : null   }
        </div>
    )
}
