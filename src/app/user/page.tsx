

export default function User({user}:any){
    const {name,username,email} = user;
    return(
        <>
            <div className="specify-user">
                <h1>Name:{name}</h1>
                <h1>Username:{username}</h1>
                <h1>email:{email}</h1>
            </div>
        </>
    )
}