import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');  
    
    const handleSubmit = () => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlfor="email"> Email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/> 
                <label htmlfor="password"> Password </label>
                <input value= {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/> 
                <button type="submit"> Login </button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here </button> 
        </div>
    )
}