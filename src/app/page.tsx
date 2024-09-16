// import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import TitleBar from "./components/titlebar";

// import Image from 'next/image';
export default function Home() {
  // const [title,setTitle] = useState({});
  // const title = "Home";
  return (
    <>
      <TitleBar title="Home"/>
      <Header></Header>
      <div className="banner">
        <h1 className="title-banner">Hello, This is Home!</h1>
        <span className="image-banner">Image</span>
        {/* <Image src="\public\assets\babar.jpeg" alt='Babar' width={200} height={200}/> */}
      </div>
      <Footer></Footer>
    </>
  )
}