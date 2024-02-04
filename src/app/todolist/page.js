"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos } from "../redux/todoSlice";

export default function Page() {
    const [todo, setTodo] = useState("");
    const todoData = useSelector((data) => data.todosData.todos);
    const dispatch = useDispatch();

    const userDispatch = () => {
        dispatch(addTodos(todo))
    }
    return (
        <>
            <h3>Add Todo</h3>
            <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder="Add new task" />
            <button onClick={userDispatch}>Add Todo</button>
            <h5>Todo List</h5>

        </>
    )
}