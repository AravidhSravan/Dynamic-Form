import React, { useState } from "react";
import './App.css'
import validate from './validateform'
export default function App() {

    const [values, setvalues] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors,setError] = useState({})

    const handleChange = (event) => {
        setvalues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const handlesubmit = (event) => {
        event.preventDefault();
      setError(validate(values));
    }
    return (
        <div className="main">
            <div style="background-color: ghostwhite">
                <form onSubmit={handlesubmit}>
                    <input placeholder="Your Username" name="username" class="nameField" onChange={handleChange} />
                    {errors.username && <p style={{ marginTop: "15%",position:"absolute",marginLeft:"10%",color:"red" }} className="error">{errors.username}</p>}
                    <input type="text" name="email" placeholder="Your email" onChange={handleChange} className='mailField' style={{ marginTop: "20%" }} />
                    {errors.email && <p style={{ marginTop: "28%",position:"absolute",marginLeft:"10%",color:"red" }} className="error">{errors.email}</p>}
                    <input type="text" name="password" onChange={handleChange} className='pswdField' placeholder='password' style={{ marginTop: "33%" }}></input>
                    {errors.password && <p style={{ marginTop: "40%",position:"absolute",marginLeft:"10%",color:"red" }} className="error">{errors.password}</p>}
                    <button className="submitbtn"> Submit </button>
                </form>
            </div>
        </div>
    );
}
