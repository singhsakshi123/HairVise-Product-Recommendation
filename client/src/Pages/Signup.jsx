import React, { useState } from "react";
import "../Style/Signup.css";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../Services/user";

export const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (userData.username && userData.password && userData.email) {
      const data = await userRegister(userData);
      console.log(data);
      if (data.success) {
        alert("User Registered Success");
        navigate("/");
      } else {
        alert("User Registration Failed");
      }
      console.log(data);
    } else {
      alert("Please fill all the fields");
    }
    navigate("/");
  };
  const handleChange = async (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="signup-page">
        <h1>Signup</h1>
        <div className="form">
          <form className="register-form">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Sign Up</button>
            <p className="message">
              Already registered?{" "}
              <span
                style={{ color: "lightblue", cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
