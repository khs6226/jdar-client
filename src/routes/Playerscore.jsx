import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  const [playerInfo, setPlayerInfo] = useState([]);
  const [partNum, setPartNum] = useState();
  // const [names, setNames] = useState();

  // const getNames = async () => {
  //   const names = await Axios.get("http://localhost:3001/getnames");
  //   setNames(names.data.result);
  // };

  const getScores = async () => {
    const data = await Axios.get("http://localhost:3001/getplayerscore", {
      params: {
        name: "김홍순",
      },
    });
    const player = data.data.result;
    console.log("result", data);
    // let wins;
    // scores.forEach((score) => {
    //   wins += score.winCount;
    // });
    // setPartNum(scores);
    setPlayerInfo([...playerInfo, player]);
  };

  // useEffect(() => {
  //   getNames();
  // }, []);

  useEffect(() => {
    getScores();
  }, []);

  return playerInfo.length === 0 ? (
    "page is loading"
  ) : (
    <div>
      {console.log("partnum", partNum)}
      {console.log("playerInfo", playerInfo)}
      <div className="navContainer">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/registration">회원가입</Link>
          <Link to="/login">로그인</Link>
          <Link to="/matchinput">스코어입력</Link>
          <Link to="/playerscore">개인점수</Link>
        </nav>
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>레벨</th>
              <th>총점</th>
              <th>승점</th>
              <th>참여점수</th>
              <th>주최점수</th>
            </tr>
          </thead>
          <tbody>
            {playerInfo.map((player) => {
              return (
                <tr>
                  <td>{player.name}</td>
                  <td>1</td>
                  <td>{player.total}</td>
                  <td>{player.winPoint}</td>
                  <td>{player.partPoint}</td>
                  <td>10</td>
                </tr>
              );
            })}
            {/* <tr>
              <td>김홍순</td>
              <td>1</td>
              <td>100</td>
              <td>60</td>
              <td>30</td>
              <td>10</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
