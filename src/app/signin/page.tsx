
export default function SignIn() {
    return (
        <>
            <form className="sigin">
                <fieldset>
                    <legend>SignIn</legend>
                    <label>
                        <span>Usernaem</span>
                        <input type="text" className="username" name="username"></input>
                    </label><br />
                    <label>
                        <span>Password</span>
                        <input type="password" className="password" name="password"></input>
                    </label>
                </fieldset>

            </form>
        </>
    );
}