import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Matchinput = () => {
  const [date, setDate] = useState();
  const [ownerName, setOwnerName] = useState("");
  const [participants, setParticipants] = useState([]);
  const [location, setLocation] = useState("");
  const [participant, setParticipant] = useState("");
  const [wins, setWins] = useState();
  const [names, setNames] = useState();

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
      partName.value = '';
      partWins.value = '';
      partName.focus();
    }
  }

  const deleteItem = (idx) => {
    const newParticipants = [...participants];
    newParticipants.splice(idx, 1);
    setParticipants(newParticipants);
  }

  const getNames = async () => {
    const names = await Axios.get("http://localhost:3001/getnames");
    setNames(names.data.result);
  }

  const addParticipants = () => {
    let partDiv = document.getElementById("participant");
    let btn = document.getElementById("addPartBtn");
    let dateInput = document.getElementById("dateInput");
    let locationInput = document.getElementById("locationInput");
    let ownerInput = document.getElementById("ownerInput");

    if(!ownerName) {
      alert('주최자를 선택해주세요');
      ownerInput.focus();
    } else {
      partDiv.style.display = 'flex';
      btn.style.display = 'none';
      dateInput.setAttribute("disabled", "true");
      locationInput.setAttribute("disabled", "true");
      ownerInput.setAttribute("disabled", "true");
  
      Axios.post("http://localhost:3001/matchregister", {
        date: date,
        ownerName: ownerName,
        location: location,
      }).then((response) => {
        console.log('response', response)
      });
    }
  }

  const registerPlayer = () => {
    if(!participants) {
      alert('선수를 등록해주세요');
    } else {
      Axios.post("http://localhost:3001/registerplayer", {
        date: date,
        ownerName: ownerName,
        location: location,
        participants: participants,
      })
      window.location.reload(false);
    }
  }

  useEffect(() => {
    getNames();
  }, []);

  return !names ? (
    "Page is loading"
  ) : (
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
        <h1>경기결과입력</h1>
        <label>날짜</label>
        <input
          id="dateInput"
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label>장소</label>
        <input
          id="locationInput"
          type="text"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <label>주최자</label>
        <select
          id="ownerInput"
          type="text"
          onChange={(e) => {
            setOwnerName(e.target.value);
          }}
        >
          {<option hidden>선택</option>}
          {names.map((data) => {
            return (
              <option key={data.name} value={data.name}>{data.name}</option>
            )
          })}
        </select>
        <button id="addPartBtn" onClick={addParticipants}>참가자 입력</button>
        <div id="participant">
          <label>선수 이름</label>
          <select
            id="partName"
            className="partInfo"
            type="text"
            onChange={(e) => {
              setParticipant(e.target.value)
            }}
          >
            {<option hidden>선택</option>}
            {names.map((data) => {
              return (
                <option key={data.name} value={data.name}>{data.name}</option>
              )
            })}
          </select>
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
            {participants.map((part, idx) => {
              return (
                <div className="playerDiv" key={part.name + part.winCount} idx={idx}>
                  <p>{part.name} {part.winCount}승</p>
                  <button onClick={() => deleteItem(idx)}>삭제</button>
                </div>
              )
            })}
          </div>
          <button onClick={registerPlayer}>결과 입력</button>
        </div>
        {/* <button onClick={register}> Register </button> */}
      </div>
    </div>
  );
}

export default Matchinput;