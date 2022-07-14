import {getTodos} from "../../services";
import TodoComponent from "./TodoComponent";

import {useEffect, useState} from "react";


function TodosComponent  ()  {

    const [todos, setTodos] = useState([]);

    useEffect(() =>{
        getTodos().then(value => setTodos([...value]))
    },[])

    return (
        <div>
            {todos.map(value => <TodoComponent item={value} key={value.id}/>)}

        </div>
    );
}

export default TodosComponent;