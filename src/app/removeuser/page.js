"use client"

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";
export default function Page() {
    const userData = useSelector((data) => data.usersData.users)
    const dispatch = useDispatch();

    return (
        <>
            <h1>Remove User Page</h1>
            {userData.map((item) => {
                return <div>
                    <span>{item.name}</span>
                    <button onClick={() => dispatch(removeUser(item.id))}>Remove User</button>
                </div>
            })}
        </>
    )
}