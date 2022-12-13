import React, { useState } from "react";

import { Login } from "./components/Login.js";
import { Register } from "./components/Register.js";


function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (forName) => {
        setCurrentForm(forName);
    }

    return (
        <div className="App">
            {
                currentForm === "login" ?  <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/> 
            } 
        </div>
    );
}

export default App; 