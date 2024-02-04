"use client"

import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";

export default function DisplayUsers() {
    const userData = useSelector((data) => data.usersData.users)
    const dispatch = useDispatch();

    return <div className="display-user">
        <h1>User List</h1>
        {userData.map((item) => {
            return <div>
                <span>{item.name}</span>
                <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
            </div>
        })}
    </div>
}