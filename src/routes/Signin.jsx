import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        console.log("login message", response.data.message);
      } else {
        console.log("login message", response.data);
      }
    });
  };

  return (
    <div className="App">
      <div className="navContainer">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/registration">회원가입</Link>
          <Link to="/login">로그인</Link>
          <Link to="/matchinput">스코어입력</Link>
          <Link to="/playerscore">개인점수</Link>
        </nav>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="아이디 입력"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호 입력"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>
    </div>
  );
};

export default Signin;
