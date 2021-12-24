import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Registration = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");


  const [name, setName] = useState("");
  const [gender, setGender] = useState(1);

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
      name: name,
      gender: gender,
    }).then((response) => {
      if (response.data.message) {
        document.getElementById("username").focus();
        alert(response.data.message);
      } else {
        alert("계정이 생성되었습니다.");
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
        </nav>
      </div>
      <div className="registration">
        <h1>Registration</h1>
        <label>아이디</label>
        <input
          id="username"
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>비밀번호</label>
        <input
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <label>이름</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <label>성별</label>
        <select onChange={(e) => {
          setGender(parseInt(e.target.value));
        }}>
          <option value="1">남성</option>
          <option value="0">여성</option>
        </select>
        <button onClick={register}> Register </button>
      </div>
    </div>
  );
}

export default Registration;