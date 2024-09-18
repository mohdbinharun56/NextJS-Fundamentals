
export default function Contact(){
    const contact = {name:"Mohammad Bin Harun",email:"binharun256@gmail.com",Phone:"01639788256"}
    const {name,email,Phone} = contact;
    return(
        <>
        <div className="contact">
            <h4>Name: {name}</h4>
            <h4>Name: {email}</h4>
            <h4>Name: {Phone}</h4>
        </div>
        </>
    )
}