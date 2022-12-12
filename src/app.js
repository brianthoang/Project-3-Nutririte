import React, { useState } from "react";

import { Login } from "./login";
import { Register } from "./register";

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