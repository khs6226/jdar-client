import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

let destination;
if (process.env.IS_HEROKU) {
  destination = process.env.destination;
} else {
  destination = process.env.destination;
}

const Registration = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [name, setName] = useState("");
  const [gender, setGender] = useState(1);

  Axios.defaults.withCredentials = true;

  const register = () => {
    if (!usernameReg) {
      alert("아이디를 입력해주세요.");
      document.getElementById("username").focus();
    } else if (!passwordReg) {
      alert("비밀번호를 입력해주세요.");
      document.getElementById("password").focus();
    } else if (!name) {
      alert("이름을 입력해주세요");
      document.getElementById("name").focus();
    } else {
      Axios.post(`${destination}/register`, {
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
    }
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
      <div className="registration">
        <h1>Registration</h1>
        <input
          id="username"
          type="text"
          placeholder="아이디"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <input
          id="name"
          type="text"
          placeholder="이름"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setGender(parseInt(e.target.value));
          }}
        >
          <option value="1">남성</option>
          <option value="0">여성</option>
        </select>
        <button onClick={register}> Register </button>
      </div>
    </div>
  );
};

export default Registration;
