import React from 'react';
import logo from '../assets/img/jdar-logo.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="navContainer">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/registration">회원가입</Link>
          <Link to="/login">로그인</Link>
          <Link to="/matchinput">스코어입력</Link>
          <Link to="/playerscore">개인점수</Link>
        </nav>
      </div>
      <div className="imgContainer">
        <img src={logo} alt="jdar logo" />
      </div>
    </div>
  )
}

export default Home;