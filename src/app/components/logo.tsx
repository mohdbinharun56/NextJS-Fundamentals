import Image from "next/image";
export default function Logo(){
    return(
        <div className="logo">
            <Image src="/linkedIn.jpeg" alt="Logo" width="50" height="20"></Image>
        </div>
    );
}