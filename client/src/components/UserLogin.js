import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
        error: null,
    });

    const changeHandler = (e) => {
        let { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/api/user/login`, user, {
                withCredentials: true,
            })
            .then((res) => navigate("/dashboard/user"))
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <header />
            <div className="register">
                <form className="register_form" onSubmit={submitHandler}>
                    <p>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={changeHandler}
                        />
                    </p>
                    <p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={changeHandler}
                        />
                    </p>
                    <button varriant="outlined" type="submit">
                        Login
                    </button>
                </form>
            </div>
            <footer />
        </>
    );
};
