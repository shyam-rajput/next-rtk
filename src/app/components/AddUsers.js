"use client"

import { useState } from "react"
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function AddUsers() {

    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const userDispatch = () => {
        dispatch(addUser(name))
    }
    return <div className="add-user">
        <h1>User List</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Add New User" />
        <button onClick={userDispatch}>Add User</button>
        <Link href='/removeuser'>Remove User</Link>
        <Link href='/todolist'>Go to todo page</Link>
        <Link href='/apiusers'>Go to API User Page</Link>
    </div>
}