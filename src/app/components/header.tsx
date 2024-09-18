// import Link from "next/link";
import Image from "next/image";
export default function Header() {
    const information = { name: "Mohammad Bin Harun", age: 25 }
    const { name } = information;
    return (
        <>
            <header className="header">


                <div className="bannersection">
                    <div>
                        <h2>This is {name}</h2>
                        <p className="para">I'M {name}. I have graduated from Computer Science and Engineering at 
                            <span>American International University Bangladesh</span>
                        </p>
                    </div>
                    <Image src="/MD.jpg" alt="" width="150" height="20"></Image>
                </div>
            </header>
        </>
    )
}