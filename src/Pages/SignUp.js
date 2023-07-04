import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
export default function SignUp() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", Geolocation: "" })

    const handleSubmit = async (e, res) => {
        e.preventDefault();
        console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.Geolocation }))
        const response = await fetch("http://localhost:5000/api/creatuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.Geolocation })

        });

        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter valid Credentials!")
        }

    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label htmlFor="name" className="form-label">Username</label>
                        <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">*We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" name="Geolocation" value={credentials.Geolocation} onChange={onChange} />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
                </form>
            </div>
        </>
    )
}
