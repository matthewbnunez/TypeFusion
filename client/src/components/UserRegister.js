import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/user', {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <p>
                <label>Email</label><br/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </p>
            <p>
                <label>Password</label><br/>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </p>
            <p>
                <label>Confirm Password</label><br/>
                <input type="text" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

