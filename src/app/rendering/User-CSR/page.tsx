"use client"
import TitleBar from "@/app/components/titlebar";
import { useEffect, useState } from "react";

export default function Users(){
    const [users,setUsers] = useState([]);
    const [loding,setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
            setUsers(data);
            setLoading(false);
            console.log(data)
        });
    },[])
    if(loding){
        return <p>Loading....</p>
    }

    return(
        <>  
            <TitleBar title="User List"></TitleBar>
            <div>
                <h1>user List</h1>
                <ul>
                    {users.map((user,index=0)=>(
                        <li key={user.id}> {index+1}. {user.name} </li>
                    ))}
                </ul>
            </div>
        </>
    )
}