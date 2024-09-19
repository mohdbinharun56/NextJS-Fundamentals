import { useEffect, useState } from "react";
import User from "../user/page";



export default function Users() {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    return (
        <>
            <div>
                {
                    users.map(user=><User user={user}></User>)
                }
            </div>
        </>
    );
}
/**
 * define state to store data
 * fetch data from the json placeholder using useEffect()
 * set the all user data in setter function
 * 
 */