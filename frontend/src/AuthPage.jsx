import axios from "axios";
import { useState } from "react";

const AuthPage = (props) => {
    const [username,setUsername] = useState('')
    const [secret,setSecret] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/authenticate", { username: username , secret : secret})
            .then((response) => props.onAuth({ ...response.data, secret: secret }))
            .catch((err) => console.log("Auth Error", err.message));
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Ready to Chat ? </div>

                <div className="form-subtitle">Set a username and password to get started</div>

                <div className="auth">
                    <input className="auth-input" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <input className="auth-input" type="password" name="password" placeholder="Password" onChange={(e) => setSecret(e.target.value)} />
                    <button className="auth-button" type="submit">
                        CREATE
                    </button>
                </div>
            </form>
        </div>
    );

}

export default AuthPage