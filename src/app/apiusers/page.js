"use client"

import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../redux/slice"
import { useEffect } from "react";

export default function Page() {
    const dispatch = useDispatch();
    const apiuserDatadata = useSelector((data) => data.usersData.userAPIData);
    useEffect(() => {
        dispatch(fetchApiUsers())
    }, [])
    return (
        <>
            <h1>User List from API</h1>
            {
                apiuserDatadata?.map((item) => (
                    <h4>{item.name}</h4>
                ))
            }
        </>
    )
}