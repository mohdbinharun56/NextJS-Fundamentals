'use client'
// import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import TitleBar from "./components/titlebar";
import Logo from "./components/logo";
import Navigation from "./components/navigation";
import Link from "next/link";
import Users from "./loadData/page";
// import { useEffect } from "react";
// import { useState } from "react";
// import Image from 'next/image';
export default function Home() {
  // const [title,setTitle] = useState({});
  // const title = "Home";
  // const [users, setUser] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setUser(data);
  //     })
  // }, []);
  // function handleClick() { }
  return (
    <>
      <TitleBar title="Home" />
      <div className="navbar">
        <Logo></Logo>
        <Navigation></Navigation>
      </div>
      <Header></Header>

      <Users></Users>

      {/* <div className="textmessage">
        <span>Message:</span>
        <textarea name="text" placeholder="Enter Your Message"></textarea>
      </div> */}

      <div className="box">
        <div className="boxone">
          <Link href="about">About</Link>
        </div>
        <div className="boxtwo">
          <Link href="contact">Contact</Link>
        </div>
        <div className="boxthree">
          <Link href="signin">SignIn</Link>
        </div>
        <div className="boxfour">
          <Link href="validation/JavaScriptsFormValidation">Register</Link>
        </div>
      </div>
      <div>
        {/* <h1 style={{display:'flex',flexDirection:'row'}}>{users.map((user)=>user.name)}</h1>
        <button style={{ border: '1px solid black', padding: '5px', margin: '0px auto 30px auto', display: 'flex' }}>Submit</button> */}
      </div>
      <Footer></Footer>

      {/* 
      
      To fetching the data
      1. set the state to manage the data // const [user,setUser] = useState([]);
      2. use useEffect(cb,[]) to data side effect // useEffect(()=>{fetch('URL)
      .then(response=>response.json())
      .then(data=>setUser(data))
      },[]);
      3. set the data changes to update in setter function is state.
      
      */}

    </>
  )

}
