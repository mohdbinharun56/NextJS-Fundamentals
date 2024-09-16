import Link from "next/link";
export default function Header(){
    return(
        <>
            <header className="header">
                <nav className="nav">
                    <ul className="ul">
                        <Link href={"/"}>Home</Link>
                        <Link href="about">About</Link>
                        <Link href="Contact">Contact</Link>
                        <Link href="SignIn">SignIn</Link>
                        <Link href="SignUp">SignUp</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}