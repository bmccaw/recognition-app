import React, { useEffect, useState } from "react";
import styled from "styled-components";

import thumbsUp from "../assets/thumbs-up.png";

const StyledWrapper = styled.div`
  margin-top: 10px;
`;

const StyledImage = styled.img`
  width: 40px;
  padding: 10px;
`;

const SuperFans = () => {
  const [fansData, setFansData] = useState([]);

  useEffect(() => {
    const fetchSuperfans = async () => {
      try {
        const result = await fetch(
          `https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/superfans/`,
          {
            method: `GET`,
          }
        );

        const body = await result.json();
        console.log("superfans", body);
        setFansData(body);
      } catch (err) {
        console.log(err);
        return null;
      }
    };
    fetchSuperfans();
  }, []);
  return (
    <StyledWrapper>
      <h2>Superfans</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Gratitude</th>
            <th>Cheers for Peers</th>
            <th>Game Changer</th>
            <th>Raise The Roof!</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {fansData.map((fan) => {
            return (
              <tr key={fan.rank}>
                <td>{fan.rank}</td>
                <td>{fan.name}</td>
                <td>{fan.level5}</td>
                <td>{fan.level10}</td>
                <td>{fan.level20}</td>
                <td>{fan.level25}</td>
                <td>
                  <StyledImage src={thumbsUp} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledWrapper>
  );
};

export default SuperFans;
