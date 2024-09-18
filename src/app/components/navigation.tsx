import Link from "next/link";
export default function Navigation(){
    return(
        <>
            <div className="navigation">
                <nav>
                    <ul>
                        <Link href="/">Home</Link>
                        <Link href="about">About</Link>
                        <Link href="contact">Contact</Link>
                        <Link href="signin">SignIn</Link>
                        <Link href="validation/ReactHookFormValidation">SignUp</Link>
                    </ul>
                </nav>

            </div>
        
        </>
    );
}