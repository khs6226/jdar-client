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
    let partName = document.getElementById("partName");
    let partWins = document.getElementById("partWins");
    if (!participant) {
      alert("선수 이름을 등록해주세요")
      partName.focus();
    } else if (!wins) {
      alert("승수를 입력해주세요")
      partWins.focus();
    } else if (participants.some(e => e.name === participant)) {
      alert("이미 등록된 선수입니다.");
      return;
    } else {
      setParticipants([...participants, { name: participant, winCount: wins }])
      // let cont = document.createElement("div");
      // cont.setAttribute("class", "playerDiv");
      // let p = document.createElement("p");
      // p.innerHTML = `${participant} ${wins}승`;

      // let btn = document.createElement("button");
      // btn.setAttribute("onClick", "deletePlayer(this)")
      // btn.innerHTML = "삭제";
      // cont.appendChild(btn);

      // cont.appendChild(p);
      // document.getElementById("playerList").appendChild(cont);

      partName.value = '';
      partWins.value = '';
      partName.focus();
    }
  }

  const deleteItem = () => {

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
  // }, [participants]);

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
            id="partName"
            className="partInfo"
            type="text"
            onChange={(e) => {
              setParticipant(e.target.value)
            }}
          />
          <label>승수</label>
          <input
            id="partWins"
            className="partInfo"
            type="number"
            onChange={(e) => {
              setWins(e.target.value)
            }}
          />
          <button onClick={addPerson}>선수 등록</button>
          <div id="playerList">
            {participants.map((part) => {
              return (
                <div className="playerDiv" key={part.name + part.winCount}>
                  <p>{part.name} {part.winCount}승</p>
                  <button onClick={deleteItem}>삭제</button>
                </div>
              )
            })}
          </div>
        </div>
        {/* <button onClick={register}> Register </button> */}
      </div>
    </div>
  );
}

export default Matchinput;