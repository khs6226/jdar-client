import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Matchinput = () => {
  const [date, setDate] = useState();
  const [name, setName] = useState("");
  const [participants, setParticipants] = useState([]);
  const [location, setLocation] = useState("");
  const [participant, setParticipant] = useState("");
  const [wins, setWins] = useState()

  console.log("participants", participants)
  Axios.defaults.withCredentials = true;

  const addPerson = () => {
    if (participants.some(e => e.name === participant)) {
      alert("이미 등록된 선수입니다.");
      return;
    } else {
      setParticipants([...participants, { name: participant, winCount: wins }])
      let cont = document.createElement("div");
      cont.setAttribute("class", "playerDiv");
      let p = document.createElement("p");
      p.innerHTML = `${participant} ${wins}승`;
      // let btn = document.createElement("button");
      // btn.setAttribute("onClick", "deletePlayer(this)")
      // btn.innerHTML = "삭제";
      cont.appendChild(p);
      // cont.appendChild(btn);
      document.getElementById("playerList").appendChild(cont);
    }
  }



  // const register = () => {
  //   Axios.post("http://localhost:3001/register", {
  //     username: usernameReg,
  //     password: passwordReg,
  //     name: name,
  //     gender: gender,
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };



  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn === true) {
  //       setLoginStatus(response.data.user[0].username);
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <div className="navContainer">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/registration">회원가입</Link>
          <Link to="/matchinput">스코어입력</Link>
        </nav>
      </div>
      <div className="registration">
        <h1>경기결과입력</h1>
        <label>날짜</label>
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label>장소</label>
        <input
          type="text"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <label>주최자</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>참가자 입력</label>
        <div className="participant">
          <label>선수 이름</label>
          <input
            className="partInfo"
            type="text"
            onChange={(e) => {
              setParticipant(e.target.value)
            }}
          />
          <label>승수</label>
          <input
            className="partInfo"
            type="number"
            onChange={(e) => {
              setWins(e.target.value)
            }}
          />
          <button onClick={addPerson}>선수 등록</button>
          <div id="playerList">

          </div>
        </div>
        {/* <button onClick={register}> Register </button> */}
      </div>
    </div>
  );
}

export default Matchinput;