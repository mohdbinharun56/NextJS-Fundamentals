'use client'
import { useState } from "react";

document.getElementById("fullname")
export default function Register() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [error,setError] = useState('');
    
    const handleOnEmailChange = (e:any) =>{
        setEmail(e.target.value);
    }

    const handleOnPassworChange = (e:any) =>{
        setPassword(e.target.value);
    }
    const handleRegister = (e:any) => {
        e.preventDefault();
        
        if(!email){
            // setError('Email is required');
            alert('Email is required');
        }else if(!password){
            // setError('Password is Required');
            alert('Password is Required');
        }else{
            // console.log()
            setEmail('');
            setPassword('');
            alert('Login success');
            
        }
    }


    return (
        <>
            <form className="register" onSubmit={handleRegister}>
                <div>
                    <span>Email</span>
                    <input type="email" id="email" value={email} onChange={handleOnEmailChange} ></input>
                    
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" id="password" value={password} onChange={handleOnPassworChange} minLength={8}></input>
                </div>
                <div>
                    <input type="submit" id="btnregister" value="Register"></input>
                </div>
            </form>
        </>
    );
} 