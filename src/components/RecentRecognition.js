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

const RecentRecognition = () => {
  const [historicData, setHistoricData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const result = await fetch(
          `https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/history/`,
          {
            method: `GET`,
          }
        );

        const body = await result.json();
        console.log("history", body);
        setHistoricData(body);
      } catch (err) {
        console.log(err);
        return null;
      }
    };
    fetchHistory();
  }, []);
  return (
    <StyledWrapper>
      <h2>Recent Recognition</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Submitted By</th>
            <th>Gift Level</th>
            <th>Text</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {historicData.map((history) => {
            return (
              <tr key={history.id}>
                <td>{history.name}</td>
                <td>{history.submittedBy}</td>
                <td>{history.level}</td>
                <td>{history.text}</td>
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

export default RecentRecognition;
