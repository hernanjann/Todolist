import React, {useState} from 'react';


const App = () => {
    const [state, setState] = useState({
        todo: '',
        todolist:[],
        type:''
    })
const {todo,type, todolist} = state;
const handleOnChange = (e) => {
    const{ name, value} = e.target

    setState({...state, [name]: value})
}

const createTodo = () => {
    const list = todolist
    list.push(todo)

    setState({todo: '', todolist: list})
}

const deleteTodo = (index) => {
    const list = todolist
    list.splice(index, 1)

    setState({todo: '', todolist: list})
}
//UPDATE





    
    return(
    <div className="todolist-main">
        <h1>TODOLIST</h1>
        <input 
         type="text"
         name="todo"
         placeholder= "Add to-do-list"
         value={todo}
         onChange={handleOnChange}
        
         />
        <button onClick={createTodo}>Submit</button>
        {
        
            state.todolist.length ?
            state.todolist.map((value, index) => {
               return(
                  <div key={index} className="table-main">
                    
                    <span>{value} </span>
                    <button>Edit</button>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                
                  </div>
                    )
                }): <span>No Records Found!</span>

            
        }
        
        
    </div>
    
    )

}
export default App;