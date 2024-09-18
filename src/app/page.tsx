// import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import TitleBar from "./components/titlebar";
import Logo from "./components/logo";
import Navigation from "./components/navigation";
import Link from "next/link";
// import Image from 'next/image';
export default function Home() {
  // const [title,setTitle] = useState({});
  // const title = "Home";
  return (
    <>
      <TitleBar title="Home" />
      <div className="navbar">
        <Logo></Logo>
        <Navigation></Navigation>
      </div>
      <Header></Header>

      <div className="textmessage">
        <span>Message:</span>
        <textarea name="text" placeholder="Enter Your Message"></textarea>
      </div>

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
      <Footer></Footer>


      {/* <Users></Users> */}
      {/* <div className="banner"> */}
      {/* <h1 className="title-banner">Hello, This is Home!</h1> */}
      {/* <span className="image-banner">Image</span> */}
      {/* <Image src="\public\assets\babar.jpeg" alt='Babar' width={200} height={200}/> */}
      {/* </div> */}
      
    </>
  )
}