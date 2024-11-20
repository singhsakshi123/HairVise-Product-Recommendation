import React, { useState } from "react";
import "../Style/Login.css";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Services/user";

export const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  // const [cookies, setCookie] = useCookies(["user"]);
  const handleChange = async (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    if (loginData.email && loginData.password) {
      const response = await userLogin(loginData);
      if (response.success) {
        alert("User Login Success");
        navigate("/home");
      } else {
        alert("User Login Failed");
      }
      console.log(response);
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <>
      <div className="login-page">
        <h1>Login</h1>
        <div className="form">
          <form className="login-form">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>login</button>
            <p className="message">
              Not registered?{" "}
              <span
                style={{ color: "lightblue", cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                Create an account
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
