import React, { useState, useEffect } from 'react'
import Addtodos from './Addtodos'
import Todos from './Todos';

export default function Context() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const addTodo = (firstname, lastname) => {
        console.log("i am adding to this", firstname, lastname);
        let sno;
        if (todos.length === 0) {
            sno = 1;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const mytodos = {
            sno: sno,
            firstname: firstname,
            lastname: lastname
        }
        setTodos([...todos, mytodos]);
        console.log(mytodos);
        // localStorage.setItem("todos", JSON.stringify(todos));


    }
    const onDelete = (todo) => {
        setTodos(todos.filter((e) => {
            return e !== todo;

        }))
    }

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
    return (
        <div>
            <Addtodos addTodo={addTodo} />
            <Todos todos={todos}  onDelete={onDelete} />
        </div>
    )
}
