import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Todos = () => {
    const[TodoList,setTodoList]=useState(null)
    useEffect(() => {
        (async () => {
        const todos = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
        );
        setTodoList(todos.data);
        })();
        }, []);

        return TodoList ? 
           
     (<ul>{TodoList.map((todo,index)=>(<li key={index} data-testid='todo'>{todo.title}</li>))}</ul>):(<p>Loading...</p>)
           
}
export default Todos